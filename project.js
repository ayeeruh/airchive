/* ==========================================================================
   AIRCHIVE — Single Project Page (project.html?id=<project-id>)
   Builds the whole page from projects-data.js. Edit projects there, not here.
   ========================================================================== */
(() => {
    const data = window.AIRCHIVE_PROJECTS || { groups: [], projects: [] };
    const main = document.getElementById('ppMain');
    const sectionNav = document.getElementById('ppSectionNav');
    const curtain = document.getElementById('ppCurtain');
    const curtainTitle = document.getElementById('ppCurtainTitle');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const esc = (v = '') =>
        String(v).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
    const pad2 = (n) => String(n).padStart(2, '0');
    const arrow =
        '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const sampleChip = (p) => (p.sample ? '<span class="sample-chip">Sample</span>' : '');

    const groupByKey = Object.fromEntries(data.groups.map((g) => [g.key, g]));
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const project = data.projects.find((p) => p.id === id);

    /* ---------- Theme toggle (shares the saved preference with index.html) ---------- */
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
        themeIcon.innerHTML = dark ? SUN : MOON;
        themeLabel.textContent = dark ? 'Light' : 'Dark';
        if (favicon) favicon.href = dark ? 'assets/logo-dark.png' : 'assets/logo-light.png';
        try {
            localStorage.setItem('airchive-theme', theme);
        } catch (_) { }
    };
    applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

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

    /* ---------- Scroll progress ---------- */
    const bar = document.getElementById('headerScrollBar');
    const updateProgress = () => {
        const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
        bar.style.width = `${Math.min(100, (scrollY / max) * 100)}%`;
    };
    addEventListener('scroll', updateProgress, { passive: true });

    /* ---------- Curtain (entrance transition) ---------- */
    const liftCurtain = () => {
        if (reduceMotion) {
            curtain.remove();
            return;
        }
        setTimeout(() => curtain.classList.add('is-lifting'), 350);
        curtain.addEventListener('transitionend', () => curtain.remove(), { once: true });
        setTimeout(() => curtain.remove(), 2000);
    };

    /* ---------- Not found ---------- */
    if (!project) {
        document.title = 'Project not found — AIRCHIVE';
        curtain.remove();
        main.innerHTML = `
            <section class="pp-notfound">
                <span class="pp-eyebrow">404 • Project not found</span>
                <h1 class="pp-title">This project isn't in the archive.</h1>
                <p class="pp-lead">The link may be outdated, or the project id was changed in <code>projects-data.js</code>.</p>
                <a class="pp-btn pp-btn--solid" href="index.html#page-projects">Browse all projects ${arrow}</a>
            </section>`;
        sectionNav.remove();
        return;
    }

    const group = groupByKey[project.group] || { label: 'Project', icon: '' };
    const siblings = data.projects.filter((p) => p.group === project.group);
    const indexInGroup = siblings.indexOf(project);
    const globalIdx = data.projects.indexOf(project);
    const prev = data.projects[(globalIdx - 1 + data.projects.length) % data.projects.length];
    const next = data.projects[(globalIdx + 1) % data.projects.length];

    document.title = `${project.title} — AIRCHIVE | Aira Bianca Ordaniel`;
    document.body.classList.add(`proj-card--${project.group}`);
    curtain.classList.add(`proj-card--${project.group}`);
    curtainTitle.textContent = project.title;

    const coverHtml = (p, big = false) =>
        p.cover
            ? `<img src="${esc(p.cover)}" alt="${esc(p.title)} cover" />`
            : `<span class="pp-cover-num">${pad2(data.projects.filter((x) => x.group === p.group).indexOf(p) + 1)}</span>
               <svg class="pp-cover-icon${big ? ' pp-cover-icon--big' : ''}" viewBox="0 0 24 24" fill="none" aria-hidden="true">${(groupByKey[p.group] || {}).icon || ''}</svg>`;

    const links = project.links || {};
    const linkBtns = [
        links.live && `<a class="pp-btn pp-btn--solid" href="${esc(links.live)}" target="_blank" rel="noopener noreferrer">View live ${arrow}</a>`,
        links.repo && `<a class="pp-btn" href="${esc(links.repo)}" target="_blank" rel="noopener noreferrer">Source code ${arrow}</a>`,
        links.caseStudy && `<a class="pp-btn" href="${esc(links.caseStudy)}" target="_blank" rel="noopener noreferrer">Full case study ${arrow}</a>`
    ]
        .filter(Boolean)
        .join('');

    const meta = [
        ['Role', project.role],
        ['Year', project.year],
        ['Timeline', project.duration],
        ['Team', project.team],
        ['Status', project.status]
    ].filter(([, v]) => v);

    const sections = [
        { id: 'overview', label: 'Overview' },
        project.challenge && { id: 'challenge', label: 'Challenge' },
        (project.approach || []).length && { id: 'process', label: 'Process' },
        (project.outcomes || []).length && { id: 'outcomes', label: 'Outcomes' },
        { id: 'gallery', label: 'Gallery' },
        { id: 'more', label: 'More' }
    ].filter(Boolean);

    const gallery = project.gallery || [];
    const galleryHtml = gallery.length
        ? gallery
            .map(
                (g, i) => `
                <button type="button" class="pp-shot" data-reveal style="--i:${i}" data-src="${esc(g.src)}" data-caption="${esc(g.caption || '')}">
                    <img src="${esc(g.src)}" alt="${esc(g.caption || project.title)}" loading="lazy" />
                    ${g.caption ? `<span class="pp-shot-caption">${esc(g.caption)}</span>` : ''}
                </button>`
            )
            .join('')
        : [0, 1, 2]
            .map(
                (i) => `
                <div class="pp-shot pp-shot--empty" data-reveal style="--i:${i}">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4.5" width="18" height="15" rx="2.5" stroke="currentColor" stroke-width="1.8"/><circle cx="9" cy="10" r="1.8" stroke="currentColor" stroke-width="1.6"/><path d="M4 17L9.5 12.5L13 15.5L16 13L20 16.5" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>
                    <span>Screenshot ${i + 1}</span>
                    <small>Add images to <code>gallery</code> in projects-data.js</small>
                </div>`
            )
            .join('');

    const miniCard = (p, label) => `
        <a class="pp-next-card proj-card--${p.group}" href="project.html?id=${encodeURIComponent(p.id)}" data-reveal>
            <span class="pp-next-cover">${coverHtml(p)}</span>
            <span class="pp-next-body">
                <span class="pp-eyebrow">${esc(label)} • ${esc((groupByKey[p.group] || {}).label || '')}</span>
                <strong>${esc(p.title)}</strong>
                <span class="pp-next-role">${esc(p.role)} • ${esc(p.year)}</span>
            </span>
            <span class="pp-next-go">${arrow}</span>
        </a>`;

    main.innerHTML = `
        <!-- HERO -->
        <section class="pp-hero" id="top">
            <div class="hero-gradient-bg pp-hero-bg" id="ppHeroBg" aria-hidden="true">
                <div class="hero-gradient-blobs" id="ppHeroBlobs">
                    <span class="hero-blob hero-blob--1"></span>
                    <span class="hero-blob hero-blob--2"></span>
                    <span class="hero-blob hero-blob--3"></span>
                    <span class="hero-blob hero-blob--4"></span>
                </div>
                <div class="hero-spotlight"></div>
                <div class="hero-grain"></div>
            </div>

            <div class="pp-hero-inner">
                <div class="pp-hero-text">
                    <nav class="pp-breadcrumb" aria-label="Breadcrumb">
                        <a href="index.html#page-projects">Projects</a>
                        <span aria-hidden="true">/</span>
                        <span>${esc(group.label)}</span>
                        <span aria-hidden="true">/</span>
                        <span aria-current="page">${pad2(indexInGroup + 1)}</span>
                    </nav>
                    <span class="pp-group-chip">
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">${group.icon}</svg>
                        ${esc(group.label)} ${sampleChip(project)}
                    </span>
                    <h1 class="pp-title">${esc(project.title)}</h1>
                    <p class="pp-lead">${esc(project.tagline || project.summary)}</p>
                    <dl class="pp-meta">
                        ${meta.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}
                    </dl>
                    ${linkBtns ? `<div class="pp-actions">${linkBtns}</div>` : ''}
                </div>

                <div class="pp-hero-visual">
                    <div class="pp-cover proj-card--${project.group}" id="ppCover">
                        ${coverHtml(project, true)}
                        <span class="pp-cover-glare"></span>
                    </div>
                    <div class="pp-tools-float">
                        ${(project.tools || []).map((t, i) => `<span style="--i:${i}">${esc(t)}</span>`).join('')}
                    </div>
                </div>
            </div>

            <a class="pp-scroll-cue" href="#overview" aria-label="Scroll to overview">
                <span></span>
            </a>
        </section>

        <!-- OVERVIEW -->
        <section class="pp-section" id="overview">
            <div class="pp-section-head" data-reveal>
                <span class="pp-eyebrow">01 • Overview</span>
                <h2 class="pp-h2">What this project is about</h2>
            </div>
            <div class="pp-overview">
                <div class="pp-prose" data-reveal>
                    <p>${esc(project.overview || project.summary)}</p>
                    <p class="pp-summary">${esc(project.summary)}</p>
                </div>
                <aside class="pp-glance" data-reveal>
                    <h3>At a glance</h3>
                    ${(project.highlights || []).length
            ? `<ul class="pp-highlights">${project.highlights.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>`
            : ''}
                    <div class="pp-tool-list">
                        ${(project.tools || []).map((t) => `<span>${esc(t)}</span>`).join('')}
                    </div>
                </aside>
            </div>
        </section>

        ${project.challenge ? `
        <!-- CHALLENGE -->
        <section class="pp-section pp-section--tint" id="challenge">
            <div class="pp-section-head" data-reveal>
                <span class="pp-eyebrow">02 • Challenge</span>
                <h2 class="pp-h2">The problem to solve</h2>
            </div>
            <blockquote class="pp-challenge" data-reveal>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M10 7H6.5C5.7 7 5 7.7 5 8.5V12H9V17H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 7H16.5C15.7 7 15 7.7 15 8.5V12H19V17H14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <p>${esc(project.challenge)}</p>
            </blockquote>
        </section>` : ''}

        ${(project.approach || []).length ? `
        <!-- PROCESS -->
        <section class="pp-section" id="process">
            <div class="pp-section-head" data-reveal>
                <span class="pp-eyebrow">03 • Process</span>
                <h2 class="pp-h2">How it came together</h2>
            </div>
            <ol class="pp-process" id="ppProcess" style="--steps:${project.approach.length}">
                <span class="pp-process-line" aria-hidden="true"><span id="ppProcessFill"></span></span>
                ${project.approach.map((s, i) => `
                <li class="pp-step" data-reveal style="--i:${i}">
                    <span class="pp-step-num">${pad2(i + 1)}</span>
                    <h3>${esc(s.title)}</h3>
                    <p>${esc(s.text)}</p>
                </li>`).join('')}
            </ol>
        </section>` : ''}

        ${(project.outcomes || []).length ? `
        <!-- OUTCOMES -->
        <section class="pp-section pp-section--tint" id="outcomes">
            <div class="pp-section-head" data-reveal>
                <span class="pp-eyebrow">04 • Outcomes</span>
                <h2 class="pp-h2">What it achieved</h2>
            </div>
            <div class="pp-stats">
                ${project.outcomes.map((o, i) => `
                <div class="pp-stat" data-reveal style="--i:${i}">
                    <strong class="pp-stat-value" data-count="${esc(o.value)}">${esc(o.value)}</strong>
                    <span>${esc(o.label)}</span>
                </div>`).join('')}
            </div>
        </section>` : ''}

        <!-- GALLERY -->
        <section class="pp-section" id="gallery">
            <div class="pp-section-head" data-reveal>
                <span class="pp-eyebrow">05 • Gallery</span>
                <h2 class="pp-h2">A closer look</h2>
            </div>
            <div class="pp-gallery">${galleryHtml}</div>
        </section>

        <!-- MORE PROJECTS -->
        <section class="pp-section pp-section--tint" id="more">
            <div class="pp-section-head" data-reveal>
                <span class="pp-eyebrow">Keep exploring</span>
                <h2 class="pp-h2">More from the archive</h2>
            </div>
            <div class="pp-next-grid">
                ${data.projects.length > 1 ? miniCard(prev, 'Previous') + miniCard(next, 'Next') : ''}
            </div>
            <div class="pp-more-actions" data-reveal>
                <a class="pp-btn pp-btn--solid" href="index.html#page-projects">Back to all projects ${arrow}</a>
                <a class="pp-btn" href="#top">Back to top</a>
            </div>
        </section>

        <footer class="pp-footer">
            <span>AIRCHIVE — Archives of Aira</span>
            <span>© ${new Date().getFullYear()} Aira Bianca F. Ordaniel</span>
        </footer>`;

    /* ---------- Section nav + active highlighting ---------- */
    sectionNav.innerHTML = sections
        .filter((s) => document.getElementById(s.id))
        .map((s) => `<a href="#${s.id}" class="header-nav-link" data-section="${s.id}">${esc(s.label)}</a>`)
        .join('');
    const navLinks = [...sectionNav.querySelectorAll('a')];
    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    navLinks.forEach((l) => l.classList.toggle('active', l.dataset.section === entry.target.id));
                }
            });
        },
        { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (el) sectionObserver.observe(el);
    });

    /* ---------- Scroll reveal ---------- */
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => revealObserver.observe(el));

    /* ---------- Process line draws as you scroll through the steps ---------- */
    const processEl = document.getElementById('ppProcess');
    const processFill = document.getElementById('ppProcessFill');
    const updateProcess = () => {
        if (!processEl || !processFill) return;
        const r = processEl.getBoundingClientRect();
        const pct = Math.min(1, Math.max(0, (innerHeight * 0.75 - r.top) / r.height));
        processFill.style.transform = `scaleX(${pct})`;
    };
    addEventListener('scroll', updateProcess, { passive: true });

    /* ---------- Count-up numbers in outcomes ---------- */
    const countObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                countObserver.unobserve(entry.target);
                const raw = entry.target.dataset.count;
                const match = raw.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
                if (!match || reduceMotion) return;
                const [, pre, num, post] = match;
                const target = parseFloat(num);
                const decimals = (num.split('.')[1] || '').length;
                const start = performance.now();
                const tick = (now) => {
                    const t = Math.min(1, (now - start) / 1200);
                    const eased = 1 - Math.pow(1 - t, 3);
                    entry.target.textContent = `${pre}${(target * eased).toFixed(decimals).padStart(num.length, '0')}${post}`;
                    if (t < 1) requestAnimationFrame(tick);
                };
                requestAnimationFrame(tick);
            });
        },
        { threshold: 0.6 }
    );
    document.querySelectorAll('.pp-stat-value').forEach((el) => countObserver.observe(el));

    /* ---------- Hero: cursor spotlight + blob parallax + cover tilt ---------- */
    const hero = document.querySelector('.pp-hero');
    const heroBg = document.getElementById('ppHeroBg');
    const heroBlobs = document.getElementById('ppHeroBlobs');
    const cover = document.getElementById('ppCover');
    if (!reduceMotion) {
        hero.addEventListener('pointermove', (e) => {
            const r = hero.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width;
            const py = (e.clientY - r.top) / r.height;
            heroBg.style.setProperty('--spot-x', `${px * 100}%`);
            heroBg.style.setProperty('--spot-y', `${py * 100}%`);
            heroBg.classList.add('is-spot-active');
            heroBlobs.style.transform = `translate3d(${(px - 0.5) * -40}px, ${(py - 0.5) * -30}px, 0)`;
            cover.style.setProperty('--ry', `${(px - 0.5) * 14}deg`);
            cover.style.setProperty('--rx', `${(0.5 - py) * 10}deg`);
            cover.style.setProperty('--mx', `${px * 100}%`);
            cover.style.setProperty('--my', `${py * 100}%`);
        });
        hero.addEventListener('pointerleave', () => {
            heroBg.classList.remove('is-spot-active');
            heroBlobs.style.transform = '';
            cover.style.setProperty('--rx', '0deg');
            cover.style.setProperty('--ry', '0deg');
        });
    }

    /* ---------- Gallery lightbox ---------- */
    const lightbox = document.getElementById('ppLightbox');
    const lbImg = document.getElementById('ppLightboxImg');
    const lbCap = document.getElementById('ppLightboxCaption');
    const closeLb = () => {
        lightbox.classList.remove('is-open');
        lightbox.setAttribute('aria-hidden', 'true');
    };
    document.querySelectorAll('.pp-shot[data-src]').forEach((shot) =>
        shot.addEventListener('click', () => {
            lbImg.src = shot.dataset.src;
            lbImg.alt = shot.dataset.caption || project.title;
            lbCap.textContent = shot.dataset.caption || '';
            lightbox.classList.add('is-open');
            lightbox.setAttribute('aria-hidden', 'false');
        })
    );
    document.getElementById('ppLightboxClose').addEventListener('click', closeLb);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLb();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLb();
    });

    /* ---------- Leaving the page: fade out before following internal links ---------- */
    document.querySelectorAll('a[href^="project.html"], a[href^="index.html"]').forEach((a) =>
        a.addEventListener('click', (e) => {
            if (reduceMotion || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
            e.preventDefault();
            document.body.classList.add('is-leaving');
            setTimeout(() => (window.location.href = a.href), 380);
        })
    );
    window.addEventListener('pageshow', (e) => {
        if (e.persisted) document.body.classList.remove('is-leaving');
    });

    updateProgress();
    updateProcess();
    liftCurtain();
})();
