/* ==========================================================================
   AIRCHIVE — Reel Archive (film.html?id=<project-id>)
   Every project with a `film` field in projects-data.js opens here.
   The page plays a short PREVIEW clip; the full video is linked on Google Drive
   (`film.driveUrl`). Edit the videos in projects-data.js, not here.
   ========================================================================== */
(() => {
    const data = window.AIRCHIVE_PROJECTS || { groups: [], projects: [] };
    const main = document.getElementById('ppMain');
    const sectionNav = document.getElementById('ppSectionNav');
    const curtain = document.getElementById('ppCurtain');
    const curtainTitle = document.getElementById('ppCurtainTitle');
    const toast = document.getElementById('faToast');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const esc = (v = '') =>
        String(v).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
    const pad2 = (n) => String(n).padStart(2, '0');
    const fmt = (sec) => {
        if (!isFinite(sec) || sec < 0) sec = 0;
        return `${Math.floor(sec / 60)}:${pad2(Math.floor(sec % 60))}`;
    };
    const src = (p) => encodeURI(p || '');
    const ICON = {
        play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5V18.5L18.5 12L8 5.5Z" fill="currentColor"/></svg>',
        pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6.5" y="5.5" width="4" height="13" rx="1.2" fill="currentColor"/><rect x="13.5" y="5.5" width="4" height="13" rx="1.2" fill="currentColor"/></svg>',
        replay: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4.5 12A7.5 7.5 0 1 0 7 6.4M4.5 4V8.5H9" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        vol: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 9.5H7.5L12 5.5V18.5L7.5 14.5H4V9.5Z" fill="currentColor"/><path d="M15.5 9C16.4 9.8 16.9 10.9 16.9 12C16.9 13.1 16.4 14.2 15.5 15M18 6.5C19.5 7.9 20.4 9.9 20.4 12C20.4 14.1 19.5 16.1 18 17.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
        mute: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 9.5H7.5L12 5.5V18.5L7.5 14.5H4V9.5Z" fill="currentColor"/><path d="M16 9.5L21 14.5M21 9.5L16 14.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
        full: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 9V4H9M15 4H20V9M20 15V20H15M9 20H4V15" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        drive: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8.2 3.5H15.8L22 14.2L18.2 20.5H5.8L2 14.2L8.2 3.5Z" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/><path d="M8.2 3.5L14.4 14.2H22M15.8 3.5L9.6 14.2L5.8 20.5M2 14.2H14.4L18.2 20.5" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/></svg>',
        lock: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="5" y="10.5" width="14" height="10" rx="2.5" stroke="currentColor" stroke-width="2"/><path d="M8.5 10.5V7.5A3.5 3.5 0 0 1 15.5 7.5V10.5" stroke="currentColor" stroke-width="2"/></svg>',
        arrow: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        ext: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 4H20V10M20 4L11 13M18 14.5V19A1 1 0 0 1 17 20H5A1 1 0 0 1 4 19V7A1 1 0 0 1 5 6H9.5" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        flip: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 9H17.5L14 5.5M20 15H6.5L10 18.5" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    };

    const params = new URLSearchParams(window.location.search);
    const films = data.projects.filter((p) => p.film);
    const project = films.find((p) => p.id === params.get('id'));

    /* ---------- Theme toggle (shares the saved preference with index.html) ---------- */
    const themeBtn = document.getElementById('themeToggleBtn');
    const themeLabel = document.getElementById('themeToggleLabel');
    const favicon = document.getElementById('siteFavicon');
    const applyTheme = (theme) => {
        const dark = theme === 'dark';
        if (dark) document.documentElement.setAttribute('data-theme', 'dark');
        else document.documentElement.removeAttribute('data-theme');
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
        const t = document.startViewTransition(() => applyTheme(next));
        t.ready
            .then(() =>
                document.documentElement.animate(
                    { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
                    { duration: 650, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', pseudoElement: '::view-transition-new(root)' }
                )
            )
            .catch(() => { });
    });

    /* ---------- Scroll progress ---------- */
    const bar = document.getElementById('headerScrollBar');
    const updateProgress = () => {
        const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
        bar.style.width = `${Math.min(100, (scrollY / max) * 100)}%`;
    };
    addEventListener('scroll', updateProgress, { passive: true });

    /* ---------- Entrance curtain ---------- */
    const liftCurtain = () => {
        if (reduceMotion) {
            curtain.remove();
            return;
        }
        setTimeout(() => curtain.classList.add('is-lifting'), 380);
        curtain.addEventListener('transitionend', () => curtain.remove(), { once: true });
        setTimeout(() => curtain.remove(), 2200);
    };

    let toastTimer = null;
    const notify = (msg) => {
        toast.textContent = msg;
        toast.classList.add('is-showing');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('is-showing'), 3200);
    };

    /* ---------- Not found ---------- */
    if (!project) {
        document.title = 'Reel not found — AIRCHIVE';
        curtain.remove();
        main.innerHTML = `
            <section class="pp-notfound">
                <span class="pp-eyebrow">404 • Reel not found</span>
                <h1 class="pp-title">This reel isn't in the archive.</h1>
                <p class="pp-lead">The link may be outdated, or the video's id was changed in <code>projects-data.js</code>.</p>
                <a class="pp-btn pp-btn--solid" href="index.html#page-projects">Browse all projects ${ICON.arrow}</a>
            </section>`;
        sectionNav.remove();
        return;
    }

    const film = project.film;
    const reelNo = films.indexOf(project) + 1;
    const driveUrl = (film.driveUrl || '').trim();
    const chapters = (film.chapters || []).slice().sort((a, b) => a.t - b.t);
    let previewLen = film.previewLength || 90; // corrected from the clip's real duration once it loads
    const inPreview = (c) => c.t < previewLen - 2;
    const related = film.related && data.projects.find((p) => p.id === film.related);
    const others = films.filter((p) => p.id !== project.id);

    document.title = `${project.title} — Reel Archive | AIRCHIVE`;
    curtainTitle.textContent = project.title;
    if (film.poster) curtain.style.setProperty('--poster', `url("${src(film.poster)}")`);

    const facts = [
        ['Role', project.role],
        ['Year', project.year],
        ['Full runtime', film.runtime],
        ['Made for', film.premiere || project.team]
    ].filter(([, v]) => v);

    const catalogue = [
        ['Accession no.', `AIR-V-${project.year || '0000'}-${pad2(reelNo)}`],
        ['Title', project.title],
        ['Editor', project.role],
        ['Format', film.format],
        ['Runtime', `${film.runtime || '—'} (preview ${fmt(previewLen)})`],
        ['Year', project.year],
        ['Collection', film.premiere || project.team]
    ].filter(([, v]) => v);

    const driveSlipBtn = driveUrl
        ? `<a class="fa-drive-btn" href="${esc(driveUrl)}" target="_blank" rel="noopener noreferrer">${ICON.drive}<span>Watch the full video</span>${ICON.ext}</a>`
        : `<button type="button" class="fa-drive-btn is-pending" data-drive-pending>${ICON.drive}<span>Full video link coming soon</span></button>`;

    const TABS = [
        { id: 'preview', label: 'Preview reel', short: 'Preview' },
        chapters.length && { id: 'scenes', label: 'Scene log', short: 'Scenes' },
        { id: 'record', label: 'Record card', short: 'Record' },
        (film.credits || []).length && { id: 'credits', label: 'Credits', short: 'Credits' }
    ].filter(Boolean);

    /* ---------- Markup ---------- */
    main.innerHTML = `
        <!-- HERO: archive record header -->
        <section class="fa-hero" id="top">
            <div class="fa-hero-bg" aria-hidden="true"><span></span><span></span><span></span></div>
            <div class="fa-hero-inner">
                <nav class="fa-crumbs" aria-label="Breadcrumb">
                    <a href="index.html#page-projects">Projects</a><span>/</span>
                    <a href="index.html#page-projects">Designs</a><span>/</span>
                    <b>Video Productions</b>
                </nav>
                <div class="fa-hero-grid">
                    <div class="fa-hero-text" data-reveal>
                        <span class="fa-reel-no"><i></i>Reel ${pad2(reelNo)} of ${pad2(films.length)} • Video production</span>
                        <h1 class="fa-title">${esc(project.title)}</h1>
                        <p class="fa-tagline">${esc(project.tagline || project.summary)}</p>
                        <dl class="fa-facts">
                            ${facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}
                        </dl>
                    </div>

                    <aside class="fa-slip" data-reveal style="--i:1" aria-label="Full video">
                        <span class="fa-slip-punch" aria-hidden="true"></span>
                        <span class="fa-slip-kicker">Full video request slip</span>
                        <div class="fa-slip-row">
                            <div><span>Preview here</span><strong id="faSlipPreview">${fmt(previewLen)}</strong></div>
                            <div><span>Full video</span><strong>${esc(film.runtime || '—')}</strong></div>
                        </div>
                        <p class="fa-slip-note">This page plays a short preview so it loads fast. The complete video is stored on Google Drive.</p>
                        ${driveSlipBtn}
                        <span class="fa-slip-stamp" aria-hidden="true">${driveUrl ? 'Available' : 'Uploading'}</span>
                    </aside>
                </div>
            </div>
        </section>

        <!-- ARCHIVE FOLDER with tabs -->
        <section class="fa-folder-section" id="reel">
            <div class="fa-folder" id="faFolder" style="--tabs:${TABS.length}">
                <div class="fa-tabs" role="tablist" aria-label="Reel folder">
                    ${TABS.map(
        (t, i) => `<button type="button" class="fa-tab${i === 0 ? ' is-active' : ''}" role="tab" id="tab-${t.id}" aria-controls="panel-${t.id}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-tab="${t.id}" style="--t:${i}"><b>${pad2(i + 1)}</b>${esc(t.label)}</button>`
    ).join('')}
                </div>

                <div class="fa-folder-body">
                    <span class="fa-folder-label" aria-hidden="true">AIRCHIVE • ${esc(project.title)}</span>

                    <!-- PANEL: PREVIEW -->
                    <div class="fa-panel is-active" role="tabpanel" id="panel-preview" aria-labelledby="tab-preview">
                        <div class="fa-sheet">
                            <span class="fa-clip" aria-hidden="true"></span>
                            <div class="fa-screen" id="faScreen">
                                <video id="faVideo" preload="metadata" playsinline poster="${esc(src(film.poster))}">
                                    <source src="${esc(src(film.src))}" type="${esc(film.type || 'video/mp4')}" />
                                </video>
                                <span class="fa-stamp" aria-hidden="true">Preview • <span id="faStampLen">${fmt(previewLen)}</span></span>
                                <button type="button" class="fa-bigplay" id="faBigPlay" aria-label="Play the preview">
                                    <span class="fa-bigplay-ring">${ICON.play}</span>
                                    <span class="fa-bigplay-text">Play preview</span>
                                    <span class="fa-bigplay-meta"><span id="faBigLen">${fmt(previewLen)}</span> of ${esc(film.runtime || '')}</span>
                                </button>
                                <div class="fa-scene-tag" id="faSceneTag" aria-live="polite"></div>
                                <div class="fa-end" id="faEnd" hidden>
                                    <span class="fa-end-kicker">End of preview</span>
                                    <strong>Want to see the rest?</strong>
                                    <p>The full ${esc(film.runtime || '')} video continues on Google Drive.</p>
                                    <div class="fa-end-actions">
                                        ${driveUrl
            ? `<a class="fa-end-btn fa-end-btn--solid" href="${esc(driveUrl)}" target="_blank" rel="noopener noreferrer">${ICON.drive} Watch the full video</a>`
            : `<button type="button" class="fa-end-btn fa-end-btn--solid is-pending" data-drive-pending>${ICON.drive} Full video link coming soon</button>`}
                                        <button type="button" class="fa-end-btn" id="faReplay">${ICON.replay} Replay preview</button>
                                    </div>
                                </div>
                                <div class="fa-fallback" id="faFallback" hidden>
                                    <strong>This browser can't play the preview.</strong>
                                    ${driveUrl ? `<a class="fa-end-btn fa-end-btn--solid" href="${esc(driveUrl)}" target="_blank" rel="noopener noreferrer">${ICON.drive} Watch it on Google Drive</a>` : '<span>The full video will be linked on Google Drive soon.</span>'}
                                </div>
                            </div>

                            <div class="fa-controls" id="faControls">
                                <button type="button" class="fa-ctl fa-ctl--play" id="faPlay" aria-label="Play">${ICON.play}</button>
                                <span class="fa-time"><b id="faNow">0:00</b><span>/</span><span id="faDur">${fmt(previewLen)}</span></span>
                                <div class="fa-scrub" id="faScrub" role="slider" tabindex="0" aria-label="Seek within the preview" aria-valuemin="0" aria-valuemax="${Math.round(previewLen)}" aria-valuenow="0">
                                    <span class="fa-scrub-fill" id="faFill"></span>
                                    <span class="fa-scrub-ticks" id="faTicks"></span>
                                    <span class="fa-scrub-knob" id="faKnob"></span>
                                    <span class="fa-scrub-tip" id="faTip"><b id="faTipLabel"></b><em id="faTipTime">0:00</em></span>
                                </div>
                                <span class="fa-now-scene" id="faNowScene"></span>
                                <button type="button" class="fa-ctl" id="faMute" aria-label="Mute">${ICON.vol}</button>
                                <button type="button" class="fa-ctl" id="faFull" aria-label="Full screen">${ICON.full}</button>
                            </div>
                            <p class="fa-sheet-foot">
                                <span>Space play/pause • ← → skip 5s • M mute • F full screen</span>
                                <span>Preview covers ${fmt(previewLen)} of the ${esc(film.runtime || '')} cut</span>
                            </p>
                        </div>
                    </div>

                    ${chapters.length ? `
                    <!-- PANEL: SCENE LOG (contact sheet) -->
                    <div class="fa-panel" role="tabpanel" id="panel-scenes" aria-labelledby="tab-scenes" hidden>
                        <div class="fa-panel-head">
                            <div>
                                <span class="pp-eyebrow">Scene log • ${chapters.length} scenes</span>
                                <h2 class="fa-h2">Contact sheet</h2>
                            </div>
                            <p class="fa-legend"><span class="fa-dot fa-dot--live"></span>Plays in the preview <span class="fa-dot"></span>In the full video</p>
                        </div>
                        <div class="fa-contact" id="faContact">
                            ${chapters.map((c, i) => `
                            <button type="button" class="fa-frame" data-scene="${i}" style="--i:${i}">
                                <span class="fa-frame-img">
                                    ${c.thumb ? `<img src="${esc(src(c.thumb))}" alt="" loading="lazy" />` : ''}
                                    <span class="fa-frame-go">${ICON.play}</span>
                                    <span class="fa-frame-lock">${ICON.lock}Full video</span>
                                </span>
                                <span class="fa-frame-meta"><b>${pad2(i + 1)}</b><em>${fmt(c.t)}</em></span>
                                <strong>${esc(c.label)}</strong>
                            </button>`).join('')}
                        </div>
                    </div>` : ''}

                    <!-- PANEL: RECORD CARD -->
                    <div class="fa-panel" role="tabpanel" id="panel-record" aria-labelledby="tab-record" hidden>
                        <div class="fa-record">
                            <div class="fa-card-wrap">
                                <button type="button" class="fa-card" id="faCard" aria-pressed="false" aria-label="Flip the catalogue card">
                                    <span class="fa-card-face fa-card-front">
                                        <span class="fa-card-top"><b>AIRCHIVE</b><span>Catalogue card</span></span>
                                        <span class="fa-card-lines">
                                            ${catalogue.map(([k, v]) => `<span class="fa-card-line"><em>${esc(k)}</em><span>${esc(v)}</span></span>`).join('')}
                                        </span>
                                        <span class="fa-card-hole" aria-hidden="true"></span>
                                        <span class="fa-card-hint">${ICON.flip} Flip for the editor's note</span>
                                    </span>
                                    <span class="fa-card-face fa-card-back">
                                        <span class="fa-card-top"><b>Editor's note</b><span>${esc(project.year || '')}</span></span>
                                        <span class="fa-card-note">${esc(film.brief || project.summary)}</span>
                                        <span class="fa-card-sign">— Aira Bianca Ordaniel</span>
                                        <span class="fa-card-hint">${ICON.flip} Flip back</span>
                                    </span>
                                </button>
                            </div>
                            <div class="fa-process">
                                <span class="pp-eyebrow">How it was made</span>
                                <h2 class="fa-h2">From footage to final cut</h2>
                                <ol class="fa-steps">
                                    ${(film.pipeline || []).map((s, i) => `
                                    <li style="--i:${i}">
                                        <span class="fa-step-no">${pad2(i + 1)}</span>
                                        <div><strong>${esc(s.title)}${s.tool ? ` <em>${esc(s.tool)}</em>` : ''}</strong><p>${esc(s.text)}</p></div>
                                    </li>`).join('')}
                                </ol>
                                ${(project.tools || []).length ? `<div class="fa-tags">${project.tools.map((t) => `<span>${esc(t)}</span>`).join('')}</div>` : ''}
                                ${related ? `<a class="pp-btn pp-btn--solid fa-related" href="project.html?id=${encodeURIComponent(related.id)}">Explore the ${esc(related.title)} system ${ICON.arrow}</a>` : ''}
                            </div>
                        </div>
                    </div>

                    ${(film.credits || []).length ? `
                    <!-- PANEL: CREDITS -->
                    <div class="fa-panel" role="tabpanel" id="panel-credits" aria-labelledby="tab-credits" hidden>
                        <div class="fa-slate">
                            <span class="fa-slate-title">${esc(project.title)}</span>
                            ${film.credits.map((c, i) => `<div class="fa-credit" style="--i:${i}"><span>${esc(c.role)}</span><strong>${esc(c.name)}</strong></div>`).join('')}
                            <span class="fa-slate-end" style="--i:${film.credits.length}">Thanks for watching</span>
                        </div>
                    </div>` : ''}
                </div>
            </div>
        </section>

        <!-- MORE REELS -->
        <section class="pp-section fa-more" id="more">
            <div class="pp-section-head" data-reveal>
                <span class="pp-eyebrow">The reel archive</span>
                <h2 class="pp-h2">More reels</h2>
            </div>
            <div class="fa-shelf">
                ${others.map((p, i) => `
                <a class="fa-reel" href="film.html?id=${encodeURIComponent(p.id)}" data-reveal style="--i:${i}">
                    <span class="fa-reel-tab">Reel ${pad2(films.indexOf(p) + 1)}</span>
                    <span class="fa-reel-cover">${p.film.poster ? `<img src="${esc(src(p.film.poster))}" alt="" loading="lazy" />` : ''}<span class="fa-reel-play">${ICON.play}</span><em>${esc(p.film.runtime || '')}</em></span>
                    <span class="fa-reel-body"><span class="pp-eyebrow">${esc(p.year || '')} • ${esc(p.role || '')}</span><strong>${esc(p.title)}</strong></span>
                </a>`).join('')}
                ${related ? `
                <a class="fa-reel fa-reel--system" href="project.html?id=${encodeURIComponent(related.id)}" data-reveal style="--i:${others.length}">
                    <span class="fa-reel-tab">System</span>
                    <span class="fa-reel-cover">${related.cover ? `<img src="${esc(src(related.cover))}" alt="" loading="lazy" style="object-position:${esc(related.coverPosition || 'center')}" />` : ''}</span>
                    <span class="fa-reel-body"><span class="pp-eyebrow">The system behind it</span><strong>${esc(related.title)}</strong></span>
                </a>` : ''}
            </div>
        </section>`;

    /* ---------- Scroll reveal ---------- */
    const revealObserver = new IntersectionObserver(
        (entries) =>
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            }),
        { threshold: 0.15 }
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => revealObserver.observe(el));

    /* ---------- Preview player elements (used by the tabs too) ---------- */
    const screen = document.getElementById('faScreen');
    const video = document.getElementById('faVideo');

    /* ---------- Folder tabs ---------- */
    const folder = document.getElementById('faFolder');
    const tabs = [...folder.querySelectorAll('.fa-tab')];
    const panels = [...folder.querySelectorAll('.fa-panel')];
    let activeTab = 'preview';
    let navLinks = [];

    const showTab = (id, focus = false) => {
        if (!TABS.some((t) => t.id === id)) return;
        const prev = TABS.findIndex((t) => t.id === activeTab);
        const next = TABS.findIndex((t) => t.id === id);
        activeTab = id;
        tabs.forEach((t) => {
            const on = t.dataset.tab === id;
            t.classList.toggle('is-active', on);
            t.setAttribute('aria-selected', on ? 'true' : 'false');
            t.tabIndex = on ? 0 : -1;
            if (on && focus) t.focus();
        });
        panels.forEach((p) => {
            const on = p.id === `panel-${id}`;
            p.hidden = !on;
            p.classList.toggle('is-active', on);
            if (on) {
                p.style.setProperty('--dir', next >= prev ? 1 : -1);
                p.classList.remove('is-entering');
                void p.offsetWidth;
                p.classList.add('is-entering');
            }
        });
        folder.dataset.active = id;
        navLinks.forEach((l) => l.classList.toggle('active', l.dataset.tab === id));
        if (id !== 'preview' && !video.paused) video.pause();
    };
    tabs.forEach((t) => t.addEventListener('click', () => showTab(t.dataset.tab)));
    folder.querySelector('.fa-tabs').addEventListener('keydown', (e) => {
        const i = TABS.findIndex((t) => t.id === activeTab);
        if (e.key === 'ArrowRight') { e.preventDefault(); showTab(TABS[(i + 1) % TABS.length].id, true); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); showTab(TABS[(i - 1 + TABS.length) % TABS.length].id, true); }
    });

    /* Header nav doubles as folder-tab shortcuts */
    sectionNav.innerHTML =
        TABS.map((t) => `<a href="#${t.id}" class="header-nav-link${t.id === 'preview' ? ' active' : ''}" data-tab="${t.id}">${esc(t.short)}</a>`).join('') +
        `<a href="#more" class="header-nav-link" data-tab="more">More reels</a>`;
    navLinks = [...sectionNav.querySelectorAll('a')];
    const openFromHash = (smooth) => {
        const id = location.hash.slice(1);
        if (!id) return;
        if (id === 'more') {
            document.getElementById('more').scrollIntoView({ behavior: smooth && !reduceMotion ? 'smooth' : 'auto' });
            return;
        }
        if (TABS.some((t) => t.id === id)) {
            showTab(id);
            folder.scrollIntoView({ behavior: smooth && !reduceMotion ? 'smooth' : 'auto', block: 'start' });
        }
    };
    navLinks.forEach((l) =>
        l.addEventListener('click', (e) => {
            e.preventDefault();
            history.replaceState(null, '', `#${l.dataset.tab}`);
            openFromHash(true);
        })
    );
    addEventListener('hashchange', () => openFromHash(true));

    /* ---------- Drive link not added yet ---------- */
    document.querySelectorAll('[data-drive-pending]').forEach((b) =>
        b.addEventListener('click', () => notify('The full video is being uploaded to Google Drive — the link will appear here soon.'))
    );

    /* ---------- Preview player ---------- */
    const bigPlay = document.getElementById('faBigPlay');
    const playBtn = document.getElementById('faPlay');
    const muteBtn = document.getElementById('faMute');
    const fullBtn = document.getElementById('faFull');
    const scrub = document.getElementById('faScrub');
    const fill = document.getElementById('faFill');
    const knob = document.getElementById('faKnob');
    const ticks = document.getElementById('faTicks');
    const tip = document.getElementById('faTip');
    const tipLabel = document.getElementById('faTipLabel');
    const tipTime = document.getElementById('faTipTime');
    const nowEl = document.getElementById('faNow');
    const durEl = document.getElementById('faDur');
    const nowScene = document.getElementById('faNowScene');
    const sceneTag = document.getElementById('faSceneTag');
    const endCard = document.getElementById('faEnd');
    const fallback = document.getElementById('faFallback');
    const frames = [...document.querySelectorAll('[data-scene]')];
    let current = -1;

    const chapterAt = (t) => {
        let idx = 0;
        chapters.forEach((c, i) => {
            if (t >= c.t) idx = i;
        });
        return idx;
    };
    const length = () => (isFinite(video.duration) && video.duration > 0 ? video.duration : previewLen);

    const paintPreviewBounds = () => {
        ticks.innerHTML = chapters
            .filter((c, i) => i > 0 && inPreview(c))
            .map((c) => `<i style="left:${(c.t / length()) * 100}%"></i>`)
            .join('');
        frames.forEach((f) => f.classList.toggle('is-locked', !inPreview(chapters[Number(f.dataset.scene)])));
        ['faSlipPreview', 'faStampLen', 'faBigLen'].forEach((id) => {
            const el = document.getElementById(id);
            if (el) el.textContent = fmt(previewLen);
        });
        durEl.textContent = fmt(previewLen);
        scrub.setAttribute('aria-valuemax', String(Math.round(previewLen)));
    };
    paintPreviewBounds();

    const showFallback = () => {
        fallback.hidden = false;
        screen.classList.add('is-broken', 'is-started');
    };
    video.addEventListener('error', showFallback);
    video.querySelector('source').addEventListener('error', showFallback);
    video.addEventListener('loadeddata', () => {
        if (!video.videoWidth) showFallback();
    });

    const play = () => {
        screen.classList.add('is-started');
        endCard.hidden = true;
        const p = video.play();
        if (p) p.catch((err) => err && err.name === 'NotSupportedError' && showFallback());
    };
    const toggle = () => (video.paused ? play() : video.pause());

    const flashScene = (i) => {
        if (!chapters[i]) return;
        sceneTag.innerHTML = `<span>Scene ${pad2(i + 1)}</span><strong>${esc(chapters[i].label)}</strong>`;
        sceneTag.classList.remove('is-showing');
        void sceneTag.offsetWidth;
        sceneTag.classList.add('is-showing');
    };

    const sync = () => {
        const pct = (video.currentTime / length()) * 100;
        fill.style.width = `${pct}%`;
        knob.style.left = `${pct}%`;
        nowEl.textContent = fmt(video.currentTime);
        scrub.setAttribute('aria-valuenow', String(Math.round(video.currentTime)));
        scrub.setAttribute('aria-valuetext', `${fmt(video.currentTime)} of ${fmt(length())}`);
        if (!chapters.length) return;
        const i = chapterAt(video.currentTime);
        if (i !== current) {
            if (current !== -1 && !video.paused) flashScene(i);
            current = i;
            nowScene.textContent = `${pad2(i + 1)} • ${chapters[i].label}`;
            frames.forEach((f, k) => f.classList.toggle('is-current', k === i));
        }
    };
    video.addEventListener('timeupdate', sync);
    video.addEventListener('loadedmetadata', () => {
        if (isFinite(video.duration) && video.duration > 0) previewLen = video.duration;
        paintPreviewBounds();
        sync();
    });

    const syncPlay = () => {
        const playing = !video.paused && !video.ended;
        screen.classList.toggle('is-playing', playing);
        playBtn.innerHTML = playing ? ICON.pause : ICON.play;
        playBtn.setAttribute('aria-label', playing ? 'Pause' : 'Play');
    };
    video.addEventListener('play', syncPlay);
    video.addEventListener('pause', syncPlay);
    video.addEventListener('ended', () => {
        syncPlay();
        endCard.hidden = false;
        if (document.fullscreenElement) document.exitFullscreen().catch(() => { });
    });

    const seekTo = (t, autoplay = false) => {
        video.currentTime = Math.max(0, Math.min(length() - 0.05, t));
        sync();
        if (autoplay) play();
    };

    // Bring the whole folder (tabs → controls) into view when the preview starts
    const frameFolder = () => {
        const top = folder.getBoundingClientRect().top;
        const controlsBottom = document.getElementById('faControls').getBoundingClientRect().bottom;
        if (top < 70 || controlsBottom > innerHeight - 8) folder.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    };
    bigPlay.addEventListener('click', () => {
        frameFolder();
        play();
    });
    playBtn.addEventListener('click', toggle);
    video.addEventListener('click', toggle);
    document.getElementById('faReplay').addEventListener('click', () => seekTo(0, true));

    const syncVolume = () => {
        muteBtn.innerHTML = video.muted ? ICON.mute : ICON.vol;
        muteBtn.setAttribute('aria-label', video.muted ? 'Unmute' : 'Mute');
    };
    muteBtn.addEventListener('click', () => (video.muted = !video.muted));
    video.addEventListener('volumechange', syncVolume);

    const toggleFull = () => {
        if (document.fullscreenElement) document.exitFullscreen().catch(() => { });
        else if (screen.requestFullscreen) screen.requestFullscreen().catch(() => { });
    };
    fullBtn.addEventListener('click', toggleFull);
    video.addEventListener('dblclick', toggleFull);

    /* Scrub: drag to seek, hover for the scene name */
    const ratioAt = (x) => {
        const r = scrub.getBoundingClientRect();
        return Math.min(1, Math.max(0, (x - r.left) / r.width));
    };
    let dragging = false;
    scrub.addEventListener('pointerdown', (e) => {
        dragging = true;
        scrub.setPointerCapture(e.pointerId);
        screen.classList.add('is-started');
        endCard.hidden = true;
        seekTo(ratioAt(e.clientX) * length());
    });
    scrub.addEventListener('pointermove', (e) => {
        const r = ratioAt(e.clientX);
        const t = r * length();
        tip.style.left = `${r * 100}%`;
        tipTime.textContent = fmt(t);
        tipLabel.textContent = chapters.length ? chapters[chapterAt(t)].label : '';
        scrub.classList.add('is-hover');
        if (dragging) seekTo(t);
    });
    scrub.addEventListener('pointerup', () => (dragging = false));
    scrub.addEventListener('pointerleave', () => !dragging && scrub.classList.remove('is-hover'));
    scrub.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') { e.preventDefault(); e.stopPropagation(); seekTo(video.currentTime + 5); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); e.stopPropagation(); seekTo(video.currentTime - 5); }
        if (e.key === 'Home') { e.preventDefault(); seekTo(0); }
        if (e.key === 'End') { e.preventDefault(); seekTo(length()); }
    });

    /* Contact sheet: preview scenes play, later scenes point to the full video */
    frames.forEach((f) =>
        f.addEventListener('click', () => {
            const c = chapters[Number(f.dataset.scene)];
            if (!inPreview(c)) {
                if (driveUrl) window.open(driveUrl, '_blank', 'noopener');
                else notify(`“${c.label}” is in the full video — the Google Drive link will be added soon.`);
                return;
            }
            showTab('preview');
            folder.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
            seekTo(c.t, true);
            flashScene(Number(f.dataset.scene));
        })
    );

    /* Keyboard (only while the preview tab is open) */
    document.addEventListener('keydown', (e) => {
        if (activeTab !== 'preview' || e.metaKey || e.ctrlKey || e.altKey) return;
        const el = e.target instanceof Element ? e.target : document.body;
        if (el.closest('input, textarea, select, [role="tab"]')) return;
        const k = e.key.toLowerCase();
        if ((k === ' ' && !el.closest('button, a')) || k === 'k') { e.preventDefault(); toggle(); }
        else if (k === 'arrowright' && !el.closest('.fa-scrub')) { e.preventDefault(); seekTo(video.currentTime + 5); }
        else if (k === 'arrowleft' && !el.closest('.fa-scrub')) { e.preventDefault(); seekTo(video.currentTime - 5); }
        else if (k === 'm') video.muted = !video.muted;
        else if (k === 'f') toggleFull();
    });

    // Pause when the folder scrolls away
    new IntersectionObserver(
        (entries) => entries.forEach((en) => !en.isIntersecting && !video.paused && !document.fullscreenElement && video.pause()),
        { threshold: 0.25 }
    ).observe(screen);

    /* ---------- Catalogue card flip ---------- */
    const card = document.getElementById('faCard');
    card.addEventListener('click', () => {
        const flipped = card.classList.toggle('is-flipped');
        card.setAttribute('aria-pressed', flipped ? 'true' : 'false');
    });

    /* ---------- Leaving: fade out before following internal links ---------- */
    document.querySelectorAll('a[href^="project.html"], a[href^="film.html"], a[href^="index.html"]').forEach((a) =>
        a.addEventListener('click', (e) => {
            if (reduceMotion || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
            e.preventDefault();
            video.pause();
            document.body.classList.add('is-leaving');
            setTimeout(() => (window.location.href = a.href), 380);
        })
    );
    window.addEventListener('pageshow', (e) => {
        if (e.persisted) document.body.classList.remove('is-leaving');
    });

    updateProgress();
    liftCurtain();
    if (location.hash) setTimeout(() => openFromHash(false), 50);
})();
