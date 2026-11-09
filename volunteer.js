/* ==========================================================================
   AIRCHIVE — Single Volunteering Page (volunteer.html?id=<entry-id>)
   Shows every proof of one volunteer activity: role, certificate, photos and
   other evidence. Builds itself from volunteers-data.js — edit entries there.
   ========================================================================== */
(() => {
    const data = window.AIRCHIVE_VOLUNTEERING || { sections: [] };
    const main = document.getElementById('ppMain');
    const sectionNav = document.getElementById('ppSectionNav');
    const curtain = document.getElementById('ppCurtain');
    const curtainTitle = document.getElementById('ppCurtainTitle');
    const backBtn = document.getElementById('ppBackBtn');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const esc = (v = '') =>
        String(v).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
    const pad2 = (n) => String(n).padStart(2, '0');
    const arrow =
        '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const sampleChip = (p) => (p.sample ? '<span class="sample-chip">Sample</span>' : '');
    const icons = {
        check: '<path d="M6 12.5L10 16.5L18 8" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>',
        role: '<circle cx="12" cy="8" r="3.5" stroke="currentColor" stroke-width="2"/><path d="M5 20C5 16.1 8.1 13.5 12 13.5C15.9 13.5 19 16.1 19 20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
        cert: '<circle cx="12" cy="9.5" r="6" stroke="currentColor" stroke-width="1.8"/><path d="M8.5 14.5L7 21L12 18.5L17 21L15.5 14.5" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
        photo: '<rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" stroke-width="1.8"/><circle cx="9" cy="10.5" r="1.8" stroke="currentColor" stroke-width="1.6"/><path d="M4 17L9.5 12.5L13 15.5L16 13L20 16.5" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
        link: '<path d="M10 14L14 10M8.5 11.5L6.8 13.2A3.5 3.5 0 0 0 11.8 18.2L13.5 16.5M15.5 12.5L17.2 10.8A3.5 3.5 0 0 0 12.2 5.8L10.5 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
        document: '<path d="M14 3H7C5.9 3 5 3.9 5 5V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V8L14 3Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M14 3V8H19M9 13H15M9 16.5H13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
        post: '<rect x="3.5" y="3.5" width="17" height="17" rx="4" stroke="currentColor" stroke-width="1.8"/><path d="M8 9H16M8 12.5H16M8 16H12.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
        letter: '<rect x="3" y="5.5" width="18" height="13" rx="2.5" stroke="currentColor" stroke-width="1.8"/><path d="M4 7L12 13L20 7" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>'
    };
    const svg = (name, cls = '') => `<svg ${cls ? `class="${cls}" ` : ''}viewBox="0 0 24 24" fill="none" aria-hidden="true">${icons[name] || icons.link}</svg>`;

    // Flatten sections -> entries (each entry knows its section)
    const entries = data.sections.flatMap((sec) => sec.items.map((it, i) => ({ ...it, sec, no: i + 1 })));
    const id = new URLSearchParams(window.location.search).get('id');
    const entry = entries.find((e) => e.id === id);

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
        themeBtn.setAttribute('aria-checked', dark ? 'true' : 'false');
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

    /* ---------- Not found ---------- */
    if (!entry) {
        document.title = 'Volunteering not found — AIRCHIVE';
        curtain.remove();
        main.innerHTML = `
            <section class="pp-notfound">
                <span class="pp-eyebrow">404 • Entry not found</span>
                <h1 class="pp-title">This volunteer entry isn't in the passport.</h1>
                <p class="pp-lead">The link may be outdated, or the entry id was changed in <code>volunteers-data.js</code>.</p>
                <a class="pp-btn pp-btn--solid" href="index.html#volunteerings">Open the Volunteer Passport ${arrow}</a>
            </section>`;
        sectionNav.remove();
        return;
    }

    const sec = entry.sec;
    const photos = entry.photos || [];
    const proofs = entry.proofs || [];
    const duties = entry.responsibilities || [];
    const idx = entries.indexOf(entry);
    const prev = entries[(idx - 1 + entries.length) % entries.length];
    const next = entries[(idx + 1) % entries.length];
    const passportLink = `index.html#volunteerings-${encodeURIComponent(sec.key)}`;

    document.title = `${entry.role} — ${entry.org} | AIRCHIVE`;
    document.body.style.setProperty('--cover', sec.cover);
    document.body.style.setProperty('--accent', sec.accent);
    curtain.style.setProperty('--cover', sec.cover);
    curtainTitle.textContent = entry.role;
    backBtn.href = passportLink;

    // What evidence is on file — drives the "Proof kit" checklist
    const kit = [
        { key: 'role', label: 'Role & responsibilities', ok: Boolean(entry.role && (duties.length || entry.story)), target: '#story' },
        { key: 'cert', label: 'Certificate', ok: Boolean(entry.certificate), target: '#certificate' },
        { key: 'photo', label: `Photos${photos.length ? ` (${photos.length})` : ''}`, ok: photos.length > 0, target: '#photos' },
        { key: 'document', label: `Other proofs${proofs.length ? ` (${proofs.length})` : ''}`, ok: proofs.length > 0, target: '#proofs' }
    ];
    const kitDone = kit.filter((k) => k.ok).length;

    const meta = [
        ['Role', entry.role],
        ['Organization', entry.org],
        ['Date', entry.date || `${entry.month} ${entry.year}`],
        ['Venue', entry.place],
        ['Hours', entry.hours]
    ].filter(([, v]) => v);

    const sections = [
        { id: 'story', label: 'Story' },
        { id: 'certificate', label: 'Certificate' },
        { id: 'photos', label: 'Photos' },
        { id: 'proofs', label: 'Proofs' },
        { id: 'more', label: 'More' }
    ];

    const ticketHtml = (e, big = false) => {
        let loc = e.location || e.place || '';
        if (loc.includes('Balanga')) loc = 'Balanga City';
        else if (loc.includes('Cebu')) loc = 'Lapu-Lapu City, Cebu';
        else if (loc.includes('Tarlac')) loc = 'Tarlac City';
        else if (loc.includes(',')) loc = loc.split(',').slice(-2).join(', ').trim();

        let timeStr = '';
        if (e.month && e.year) {
            const mFull = e.month === 'AUG' ? 'August' : e.month === 'SEP' ? 'September' : e.month === 'OCT' ? 'October' : e.month === 'NOV' ? 'November' : e.month === 'DEC' ? 'December' : e.month === 'JAN' ? 'January' : e.month === 'FEB' ? 'February' : e.month === 'MAR' ? 'March' : e.month === 'APR' ? 'April' : e.month === 'MAY' ? 'May' : e.month === 'JUN' ? 'June' : e.month === 'JUL' ? 'July' : e.month;
            timeStr = `${mFull} ${e.year}`;
        } else if (e.date) {
            timeStr = e.date;
        } else if (e.year) {
            timeStr = e.year;
        }
        const locTime = [loc, timeStr].filter(Boolean).join(', ');
        const projectTitle = e.event || e.title || e.role || '';
        const photoCount = (e.photos && e.photos.length) || 0;
        const proofCount = (e.proofs && e.proofs.length) || 0;
        const hasCert = Boolean(e.certificate);

        return `
        <div class="vp-ticket${big ? ' vp-ticket--big' : ''}" style="--cover:${e.sec.cover}">
            <span class="vp-ticket-stub">
                <span class="vp-ticket-month">${esc(e.month)}</span>
                <span class="vp-ticket-year">${esc(e.year)}</span>
                <span class="vp-ticket-barcode" aria-hidden="true"></span>
            </span>
            <span class="vp-ticket-main">
                <span class="vp-ticket-no">${esc(e.sec.short)} • Entry ${pad2(e.no)}</span>
                <strong class="vp-ticket-role">${esc(projectTitle)}</strong>
                <span class="vp-ticket-org">${esc(e.org)}</span>
                ${locTime ? `<span class="vp-ticket-loctime" style="font-size:0.75rem;opacity:0.85;display:block;margin-top:2px;">${esc(locTime)}</span>` : ''}
                ${(hasCert || photoCount || proofCount) ? `
                <span class="vp-ticket-badges" style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px;">
                    ${hasCert ? `<span class="vp-ticket-badge" style="font-size:0.65rem;padding:2px 8px;border-radius:999px;background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.3);font-weight:700;">Certificate</span>` : ''}
                    ${photoCount ? `<span class="vp-ticket-badge" style="font-size:0.65rem;padding:2px 8px;border-radius:999px;background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.3);font-weight:700;">${photoCount} Photos</span>` : ''}
                    ${proofCount ? `<span class="vp-ticket-badge" style="font-size:0.65rem;padding:2px 8px;border-radius:999px;background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.3);font-weight:700;">Letters</span>` : ''}
                </span>` : ''}
                ${big ? `<span class="vp-ticket-stamp">${esc(e.sec.stamp)}<small>Volunteer</small></span>` : ''}
            </span>
        </div>`;
    };

    const emptyCard = (icon, title, hint, i = 0) => `
        <div class="pp-shot pp-shot--empty vp-empty" data-reveal style="--i:${i}">
            ${svg(icon)}
            <span>${esc(title)}</span>
            <small>${hint}</small>
        </div>`;

    const photosHtml = photos.length
        ? photos
            .map(
                (g, i) => `
                <button type="button" class="pp-shot vp-photo" data-reveal style="--i:${i}" data-src="${esc(g.src)}" data-caption="${esc(g.caption || '')}">
                    <img src="${esc(g.src)}" alt="${esc(g.caption || entry.role)}" loading="lazy" />
                    ${g.caption ? `<span class="pp-shot-caption">${esc(g.caption)}</span>` : ''}
                </button>`
            )
            .join('')
        : ['Event photo', 'In action', 'With the team']
            .map((t, i) => emptyCard('photo', t, 'Add images to <code>photos</code> in volunteers-data.js', i))
            .join('');

    const proofsHtml = proofs.length
        ? proofs
            .map((p, i) => {
                const isImg = /\.(jpe?g|png|webp|gif|svg)$/i.test(p.url || '');
                return `
                <a class="vp-proof${isImg ? ' vp-proof--previewable' : ''}" data-reveal style="--i:${i}" href="${esc(p.url || '#')}"
                    ${isImg ? `data-src="${esc(p.url)}" data-caption="${esc(p.label)}" role="button"` : (p.url ? 'target="_blank" rel="noopener noreferrer"' : '')}>
                    <span class="vp-proof-icon">${svg(p.type in icons ? p.type : 'link')}</span>
                    <span class="vp-proof-text">
                        <small>${esc(p.type || 'link')}</small>
                        <strong>${esc(p.label)}</strong>
                    </span>
                    <span class="vp-proof-go">${isImg ? '<span class="vp-proof-tag">View scan</span>' : ''}${arrow}</span>
                </a>`;
            })
            .join('')
        : [
            ['post', 'Event post', 'Facebook / LinkedIn post'],
            ['letter', 'Invitation or thank-you letter', 'Scanned letter or email'],
            ['document', 'Attendance record', 'Sign-in sheet or program']
        ]
            .map(([t, title, hint], i) => emptyCard(t, title, `${hint} — add to <code>proofs</code>`, i))
            .join('');

    const miniCard = (e, label) => `
        <a class="pp-next-card" href="volunteer.html?id=${encodeURIComponent(e.id)}" data-reveal style="--cover:${e.sec.cover}">
            <span class="pp-next-cover"><svg class="pp-cover-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">${e.sec.icon}</svg></span>
            <span class="pp-next-body">
                <span class="pp-eyebrow">${esc(label)} • ${esc(e.sec.short)}</span>
                <strong>${esc(e.role)}</strong>
                <span class="pp-next-role">${esc(e.org)} • ${esc(e.year)}</span>
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
                        <a href="${passportLink}">Volunteerings</a>
                        <span aria-hidden="true">/</span>
                        <span>${esc(sec.short)}</span>
                        <span aria-hidden="true">/</span>
                        <span aria-current="page">${pad2(entry.no)}</span>
                    </nav>
                    <span class="pp-group-chip">
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">${sec.icon}</svg>
                        ${esc(sec.label)} ${sampleChip(entry)}
                    </span>
                    <h1 class="pp-title">${esc(entry.role)}</h1>
                    <p class="pp-lead">${esc(entry.org)}${entry.summary ? ` — ${esc(entry.summary)}` : ''}</p>
                    <dl class="pp-meta">
                        ${meta.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}
                    </dl>
                    <div class="vp-kit-meter" aria-label="${kitDone} of ${kit.length} proofs on file">
                        <span class="vp-kit-meter-bar"><span style="--pct:${(kitDone / kit.length) * 100}%"></span></span>
                        <span><b>${kitDone}/${kit.length}</b> proofs on file</span>
                    </div>
                </div>

                <div class="pp-hero-visual vp-hero-visual" id="vpHeroVisual">
                    ${entry.certificate
            ? `<div class="vp-hero-cert"><img src="${esc(entry.certificate)}" alt="" /></div>`
            : '<div class="vp-hero-cert vp-hero-cert--ghost" aria-hidden="true"><span>Certificate</span></div>'}
                    ${ticketHtml(entry, true)}
                </div>
            </div>

            <a class="pp-scroll-cue" href="#story" aria-label="Scroll to the story">
                <span></span>
            </a>
        </section>

        <!-- STORY + ROLE -->
        <section class="pp-section" id="story">
            <div class="pp-section-head" data-reveal>
                <span class="pp-eyebrow">01 • The story</span>
                <h2 class="pp-h2">What I did</h2>
            </div>
            <div class="pp-overview">
                <div class="pp-prose" data-reveal>
                    <p>${esc(entry.story || entry.summary || 'Story coming soon.')}</p>
                    ${duties.length
            ? `<ul class="vp-duties">${duties.map((d) => `<li>${esc(d)}</li>`).join('')}</ul>`
            : '<p class="pp-summary">Add your tasks to <code>responsibilities</code> in volunteers-data.js and they will be listed here.</p>'}
                </div>
                <aside class="pp-glance vp-kit" data-reveal>
                    <h3>Proof kit</h3>
                    <ul class="vp-kit-list">
                        ${kit.map((k) => `
                        <li class="${k.ok ? 'is-ok' : ''}">
                            <a href="${k.target}">
                                <span class="vp-kit-icon">${svg(k.ok ? 'check' : k.key)}</span>
                                <span>${esc(k.label)}</span>
                                <em>${k.ok ? 'On file' : 'Pending'}</em>
                            </a>
                        </li>`).join('')}
                    </ul>
                </aside>
            </div>
        </section>

        <!-- CERTIFICATE -->
        <section class="pp-section pp-section--tint" id="certificate">
            <div class="pp-section-head" data-reveal>
                <span class="pp-eyebrow">02 • Certificate</span>
                <h2 class="pp-h2">Official recognition</h2>
            </div>
            ${entry.certificate
            ? `<div class="vp-cert" data-reveal>
                    <button type="button" class="vp-cert-frame" data-src="${esc(entry.certificate)}" data-caption="${esc(`${entry.role} — ${entry.org}`)}" aria-label="Enlarge certificate">
                        <img src="${esc(entry.certificate)}" alt="Certificate for ${esc(entry.role)}, ${esc(entry.org)}" />
                        <span class="vp-cert-zoom">Click to enlarge</span>
                    </button>
                </div>`
            : `<div class="vp-cert vp-cert--empty" data-reveal>
                    ${svg('cert')}
                    <strong>No certificate on file yet</strong>
                    <small>Add the scan's path to <code>certificate</code> in volunteers-data.js.</small>
                </div>`}
        </section>

        <!-- PHOTOS -->
        <section class="pp-section" id="photos">
            <div class="pp-section-head" data-reveal>
                <span class="pp-eyebrow">03 • Photos</span>
                <h2 class="pp-h2">Moments from the day</h2>
            </div>
            <div class="pp-gallery vp-gallery">${photosHtml}</div>
        </section>

        <!-- OTHER PROOFS -->
        <section class="pp-section pp-section--tint" id="proofs">
            <div class="pp-section-head" data-reveal>
                <span class="pp-eyebrow">04 • Other proofs</span>
                <h2 class="pp-h2">Posts, letters & records</h2>
            </div>
            <div class="vp-proofs">${proofsHtml}</div>
        </section>

        <!-- MORE -->
        <section class="pp-section" id="more">
            <div class="pp-section-head" data-reveal>
                <span class="pp-eyebrow">Keep exploring</span>
                <h2 class="pp-h2">More from the passport</h2>
            </div>
            <div class="pp-next-grid">
                ${entries.length > 1 ? miniCard(prev, 'Previous') + miniCard(next, 'Next') : ''}
            </div>
            <div class="pp-more-actions" data-reveal>
                <a class="pp-btn pp-btn--solid" href="${passportLink}">Back to the Volunteer Passport ${arrow}</a>
                <a class="pp-btn" href="#top">Back to top</a>
            </div>
        </section>

        <footer class="pp-footer">
            <span>AIRCHIVE — Archives of Aira</span>
            <span>© ${new Date().getFullYear()} Aira Bianca F. Ordaniel</span>
        </footer>`;

    /* ---------- Section nav + active highlighting ---------- */
    sectionNav.innerHTML = sections
        .map((s) => `<a href="#${s.id}" class="header-nav-link" data-section="${s.id}">${esc(s.label)}</a>`)
        .join('');
    const navLinks = [...sectionNav.querySelectorAll('a')];
    const sectionObserver = new IntersectionObserver(
        (items) =>
            items.forEach((it) => {
                if (it.isIntersecting) navLinks.forEach((l) => l.classList.toggle('active', l.dataset.section === it.target.id));
            }),
        { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => sectionObserver.observe(document.getElementById(s.id)));

    /* ---------- Scroll reveal ---------- */
    const revealObserver = new IntersectionObserver(
        (items) =>
            items.forEach((it) => {
                if (it.isIntersecting) {
                    it.target.classList.add('is-visible');
                    revealObserver.unobserve(it.target);
                }
            }),
        { threshold: 0.15 }
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => revealObserver.observe(el));

    /* ---------- Hero: cursor spotlight + parallax + ticket/cert tilt ---------- */
    const hero = document.querySelector('.pp-hero');
    const heroBg = document.getElementById('ppHeroBg');
    const heroBlobs = document.getElementById('ppHeroBlobs');
    const visual = document.getElementById('vpHeroVisual');
    if (!reduceMotion && hero) {
        hero.addEventListener('pointermove', (e) => {
            const r = hero.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width;
            const py = (e.clientY - r.top) / r.height;
            heroBg.style.setProperty('--spot-x', `${px * 100}%`);
            heroBg.style.setProperty('--spot-y', `${py * 100}%`);
            heroBg.classList.add('is-spot-active');
            heroBlobs.style.transform = `translate3d(${(px - 0.5) * -40}px, ${(py - 0.5) * -30}px, 0)`;
            visual.style.setProperty('--ry', `${(px - 0.5) * 14}deg`);
            visual.style.setProperty('--rx', `${(0.5 - py) * 10}deg`);
        });
        hero.addEventListener('pointerleave', () => {
            heroBg.classList.remove('is-spot-active');
            heroBlobs.style.transform = '';
            visual.style.setProperty('--rx', '0deg');
            visual.style.setProperty('--ry', '0deg');
        });
    }

    /* ---------- Lightbox for certificate + photos ---------- */
    const lightbox = document.getElementById('ppLightbox');
    const lbImg = document.getElementById('ppLightboxImg');
    const lbCap = document.getElementById('ppLightboxCaption');
    const closeLb = () => {
        lightbox.classList.remove('is-open');
        lightbox.setAttribute('aria-hidden', 'true');
    };
    document.querySelectorAll('[data-src]').forEach((el) =>
        el.addEventListener('click', (e) => {
            e.preventDefault();
            lbImg.src = el.dataset.src;
            lbImg.alt = el.dataset.caption || entry.role;
            lbCap.textContent = el.dataset.caption || '';
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

    /* ---------- Leaving: fade out before following internal links ---------- */
    document.querySelectorAll('a[href^="volunteer.html"], a[href^="index.html"]').forEach((a) =>
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

    /* ---------- Curtain lift ---------- */
    if (reduceMotion) {
        curtain.remove();
    } else {
        setTimeout(() => curtain.classList.add('is-lifting'), 350);
        curtain.addEventListener('transitionend', () => curtain.remove(), { once: true });
        setTimeout(() => curtain.remove(), 2000);
    }
    updateProgress();
})();
