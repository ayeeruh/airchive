/* ==========================================================================
   AIRCHIVE — Experience Dossier Page (experience.html?id=<entry-id>)
   Renders detailed responsibilities, metrics, tools, and background for
   individual experiences. Uses experiences-data.js.
   ========================================================================== */
(() => {
    const experiences = window.EXPERIENCES_DATA || [];
    const main = document.getElementById('expMain');
    const curtain = document.getElementById('ppCurtain');
    const curtainTitle = document.getElementById('ppCurtainTitle');
    const backBtn = document.getElementById('ppBackBtn');
    const sectionNav = document.getElementById('ppSectionNav');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const esc = (v = '') =>
        String(v).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));

    const arrow =
        '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const checkIcon =
        '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 13L9 17L19 7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    const id = new URLSearchParams(window.location.search).get('id') || (experiences[0] && experiences[0].id);
    const entry = experiences.find((e) => e.id === id);

    /* ---------- Theme toggle (shares state with index.html) ---------- */
    const themeBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeToggleIcon');
    const themeLabel = document.getElementById('themeToggleLabel');
    const favicon = document.getElementById('siteFavicon');
    const SUN = '<circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="2"/><path d="M12 2V4.5M12 19.5V22M4.93 4.93L6.7 6.7M17.3 17.3L19.07 19.07M2 12H4.5M19.5 12H22M4.93 19.07L6.7 17.3M17.3 6.7L19.07 4.93" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>';
    const MOON = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';

    const applyTheme = (theme) => {
        const dark = theme === 'dark';
        if (dark) document.documentElement.setAttribute('data-theme', 'dark');
        else document.documentElement.removeAttribute('data-theme');
        if (themeIcon) themeIcon.innerHTML = dark ? SUN : MOON;
        if (themeLabel) themeLabel.textContent = dark ? 'Light' : 'Dark';
        if (themeBtn) themeBtn.setAttribute('aria-checked', dark ? 'true' : 'false');
        if (favicon) favicon.href = dark ? 'assets/logo-dark.png' : 'assets/logo-light.png';
        try {
            localStorage.setItem('airchive-theme', theme);
        } catch (_) { }
    };
    applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

    if (themeBtn) {
        themeBtn.addEventListener('click', (e) => {
            const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            if (!document.startViewTransition || reduceMotion) {
                applyTheme(next);
                return;
            }
            const x = e.clientX || innerWidth - 60;
            const y = e.clientY || 40;
            const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
            document.documentElement.classList.add('is-theme-switching');
            const t = document.startViewTransition(() => applyTheme(next));
            t.ready
                .then(() =>
                    document.documentElement.animate(
                        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
                        { duration: 650, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', pseudoElement: '::view-transition-new(root)' }
                    )
                )
                .catch(() => { });
            t.finished.finally(() => document.documentElement.classList.remove('is-theme-switching'));
        });
    }

    /* ---------- Scroll progress bar ---------- */
    const bar = document.getElementById('headerScrollBar');
    const updateProgress = () => {
        if (!bar) return;
        const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
        bar.style.width = `${Math.min(100, (scrollY / max) * 100)}%`;
    };
    window.addEventListener('scroll', updateProgress, { passive: true });

    /* ---------- Not found check ---------- */
    if (!entry) {
        document.title = 'Experience not found — AIRCHIVE';
        if (curtain) curtain.remove();
        if (main) {
            main.innerHTML = `
            <section class="pp-notfound">
                <span class="pp-eyebrow">404 • Dossier not found</span>
                <h1 class="pp-title">This experience entry could not be found.</h1>
                <p class="pp-lead">The requested experience is not indexed in <code>experiences-data.js</code>.</p>
                <a class="pp-btn pp-btn--solid" href="index.html#experiences">Return to Experience Log ${arrow}</a>
            </section>`;
        }
        if (sectionNav) sectionNav.remove();
        return;
    }

    document.title = `${entry.role} — ${entry.org} | AIRCHIVE`;
    if (curtainTitle) curtainTitle.textContent = entry.role;

    // Track theme palette
    const trackColors = {
        working: {
            accent: '#1D71B9',
            gradient: 'linear-gradient(135deg, #07223D 0%, #1D71B9 60%, #3AA7E2 100%)'
        },
        volunteering: {
            accent: '#C8691E',
            gradient: 'linear-gradient(135deg, #3A1054 0%, #8E44AD 60%, #B768E5 100%)'
        },
        freelancing: {
            accent: '#0E7C8C',
            gradient: 'linear-gradient(135deg, #09374B 0%, #0E7C8C 60%, #3CC3C9 100%)'
        }
    };
    const currentTrackColor = trackColors[entry.track] || trackColors.working;
    document.body.style.setProperty('--accent', currentTrackColor.accent);
    document.body.style.setProperty('--cover', currentTrackColor.gradient);

    // Navigation index
    const idx = experiences.indexOf(entry);
    const prev = experiences[(idx - 1 + experiences.length) % experiences.length];
    const next = experiences[(idx + 1) % experiences.length];

    // Lift curtain
    setTimeout(() => {
        if (curtain) curtain.classList.add('is-lifted');
    }, 120);

    /* ---------- Render Content ---------- */
    main.innerHTML = `
        <article class="exp-dossier">
            <!-- Hero Header -->
            <header class="exp-hero" id="exp-overview">
                <div class="exp-hero-topline">
                    <span class="exp-track-pill">
                        <span class="exp-track-dot" aria-hidden="true"></span>
                        ${esc(entry.trackLabel)}
                    </span>
                    <span class="exp-status-pill ${entry.isCurrent ? 'is-active' : 'is-completed'}">
                        <span class="exp-status-dot" aria-hidden="true"></span>
                        ${esc(entry.status)}
                    </span>
                    <span class="exp-type-pill">${esc(entry.workType || 'Role')}</span>
                </div>

                <div class="exp-hero-identity">
                    <div class="exp-logo-frame">
                        <img src="${esc(entry.logo)}" alt="${esc(entry.logoAlt || entry.org)}" class="exp-hero-logo"
                            onerror="this.onerror=null; this.src='assets/logo-light.png';" />
                    </div>
                    <div class="exp-hero-headings">
                        <h1 class="exp-hero-role">${esc(entry.role)}</h1>
                        <h2 class="exp-hero-org">${esc(entry.org)}</h2>
                        <div class="exp-hero-meta">
                            <span class="exp-meta-item">
                                <svg viewBox="0 0 24 24" fill="none" width="16" height="16" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                                ${esc(entry.period)}
                            </span>
                            <span class="exp-meta-item">
                                <svg viewBox="0 0 24 24" fill="none" width="16" height="16" stroke="currentColor" stroke-width="2"><path d="M12 21s-8-7.5-8-12a8 8 0 1 1 16 0c0 4.5-8 12-8 12z"/><circle cx="12" cy="9" r="2.5"/></svg>
                                ${esc(entry.location)}
                            </span>
                        </div>
                    </div>
                </div>

                ${entry.headline ? `
                <div class="exp-headline-callout">
                    <p class="exp-headline-text">"${esc(entry.headline)}"</p>
                </div>` : ''}

                <!-- Quick Impact Metric Cards -->
                ${(entry.keyMetrics && entry.keyMetrics.length) ? `
                <div class="exp-metrics-grid" id="exp-highlights">
                    ${entry.keyMetrics.map(m => `
                    <div class="exp-metric-card">
                        <span class="exp-metric-label">${esc(m.label)}</span>
                        <strong class="exp-metric-val">${esc(m.value)}</strong>
                    </div>`).join('')}
                </div>` : ''}
            </header>

            <!-- Detailed Overview Section -->
            <section class="exp-section">
                <div class="exp-section-header">
                    <span class="exp-section-num">01</span>
                    <h3 class="exp-section-title">Context &amp; Strategic Role</h3>
                </div>
                <div class="exp-body-card">
                    <p class="exp-lead-paragraph">${esc(entry.description || entry.summary)}</p>
                    ${entry.summary && entry.description !== entry.summary ? `<p class="exp-sub-paragraph">${esc(entry.summary)}</p>` : ''}
                </div>
            </section>

            <!-- Responsibilities Section -->
            <section class="exp-section" id="exp-responsibilities">
                <div class="exp-section-header">
                    <span class="exp-section-num">02</span>
                    <h3 class="exp-section-title">Core Responsibilities &amp; Deliverables</h3>
                </div>
                <div class="exp-duties-grid">
                    ${(entry.responsibilities || []).map((duty, dIdx) => `
                    <div class="exp-duty-item" style="--d:${dIdx}">
                        <span class="exp-duty-check" aria-hidden="true">${checkIcon}</span>
                        <div class="exp-duty-text">
                            <p>${esc(duty)}</p>
                        </div>
                    </div>`).join('')}
                </div>
            </section>

            <!-- Skills & Tech Section -->
            <section class="exp-section" id="exp-technologies">
                <div class="exp-section-header">
                    <span class="exp-section-num">03</span>
                    <h3 class="exp-section-title">Skills, Tools &amp; Methodologies</h3>
                </div>
                <div class="exp-tags-container">
                    ${(entry.tags || []).map(t => `<span class="exp-skill-chip">${esc(t)}</span>`).join('')}
                    ${(entry.technologies || []).filter(t => !(entry.tags || []).includes(t)).map(t => `
                        <span class="exp-skill-chip exp-skill-chip--alt">${esc(t)}</span>
                    `).join('')}
                </div>
            </section>

            <!-- Related Artifacts / Cross-links -->
            ${(entry.relatedLinks && entry.relatedLinks.length) ? `
            <section class="exp-section exp-section--links">
                <div class="exp-section-header">
                    <span class="exp-section-num">04</span>
                    <h3 class="exp-section-title">Related Projects &amp; Evidences</h3>
                </div>
                <div class="exp-links-grid">
                    ${entry.relatedLinks.map(lnk => `
                    <a href="${esc(lnk.url)}" class="exp-link-card">
                        <span class="exp-link-type">${esc(lnk.type.toUpperCase())}</span>
                        <strong class="exp-link-title">${esc(lnk.label)}</strong>
                        <span class="exp-link-arrow">${arrow}</span>
                    </a>`).join('')}
                </div>
            </section>` : ''}

            <!-- Bottom Navigation: Prev / Next -->
            <nav class="exp-bottom-nav" aria-label="More experiences">
                <a href="experience.html?id=${encodeURIComponent(prev.id)}" class="exp-nav-card exp-nav-card--prev">
                    <span class="exp-nav-dir">← Previous Experience</span>
                    <strong class="exp-nav-title">${esc(prev.role)}</strong>
                    <span class="exp-nav-org">${esc(prev.org)}</span>
                </a>
                <a href="experience.html?id=${encodeURIComponent(next.id)}" class="exp-nav-card exp-nav-card--next">
                    <span class="exp-nav-dir">Next Experience →</span>
                    <strong class="exp-nav-title">${esc(next.role)}</strong>
                    <span class="exp-nav-org">${esc(next.org)}</span>
                </a>
            </nav>
        </article>
    `;

    /* ---------- Section Spy for Header Nav ---------- */
    const navLinks = [...document.querySelectorAll('.pp-section-nav .pp-sec-link')];
    const sections = navLinks.map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);

    const onScrollSpy = () => {
        const top = window.scrollY + 140;
        let activeIdx = 0;
        sections.forEach((s, i) => {
            if (s.offsetTop <= top) activeIdx = i;
        });
        navLinks.forEach((l, i) => {
            l.classList.toggle('is-active', i === activeIdx);
        });
    };
    window.addEventListener('scroll', onScrollSpy, { passive: true });
})();
