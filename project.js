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

    // Video projects live in the screening room
    if (project && project.film) {
        window.location.replace(`film.html?id=${encodeURIComponent(project.id)}`);
        return;
    }

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
    const category = (group.categories || []).find((c) => c.key === project.category);
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
            ? `<img src="${esc(encodeURI(p.cover))}" alt="${esc(p.title)} cover"${p.coverPosition ? ` style="object-position:${esc(p.coverPosition)}"` : ''} />`
            : `<span class="pp-cover-num">${pad2(data.projects.filter((x) => x.group === p.group).indexOf(p) + 1)}</span>
               <svg class="pp-cover-icon${big ? ' pp-cover-icon--big' : ''}" viewBox="0 0 24 24" fill="none" aria-hidden="true">${(groupByKey[p.group] || {}).icon || ''}</svg>`;

    const links = project.links || {};
    const linkBtns = [
        links.live && `<a class="pp-btn pp-btn--solid" href="${esc(links.live)}" target="_blank" rel="noopener noreferrer">View live ${arrow}</a>`,
        links.repo && `<a class="pp-btn" href="${esc(links.repo)}" target="_blank" rel="noopener noreferrer">Source code ${arrow}</a>`,
        links.caseStudy && `<a class="pp-btn" href="${esc(links.caseStudy)}" target="_blank" rel="noopener noreferrer">Full case study ${arrow}</a>`,
        ...data.projects
            .filter((p) => p.film && p.film.related === project.id)
            .map((p) => `<a class="pp-btn pp-btn--film" href="film.html?id=${encodeURIComponent(p.id)}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5V18.5L18.5 12L8 5.5Z" fill="currentColor"/></svg> Watch the video presentation</a>`)
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

    const showGallery = (project.gallery || []).length > 0 || !(project.features || []).length;
    const sections = [
        { id: 'overview', label: 'Overview' },
        (project.devices && ((project.devices.desktop || []).length || (project.devices.phones || []).length)) && { id: 'in-action', label: 'In action' },
        project.challenge && { id: 'challenge', label: 'Challenge' },
        (project.approach || []).length && { id: 'process', label: 'Process' },
        (project.outcomes || []).length && { id: 'outcomes', label: 'Outcomes' },
        (project.features || []).length && { id: 'tour', label: 'Feature tour' },
        showGallery && { id: 'gallery', label: 'Gallery' },
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


    /* ==========================================================================
       Optional: interactive device mock-ups + feature tour (project.devices / project.features)
       ========================================================================== */
    const src = (p) => esc(encodeURI(p || ''));
    const devices = project.devices || {};
    const desktops = devices.desktop || [];
    const phones = devices.phones || [];
    const features = project.features || [];
    const hasDevices = desktops.length > 0 || phones.length > 0;

    const desktopHtml = desktops.length
        ? `
            <div class="dv-desktop-block" data-reveal>
                <div class="dv-desktop" id="dvDesktop">
                    <div class="dv-monitor">
                        <div class="dv-screen" id="dvScreen">
                            ${desktops
            .map(
                (d, i) => `
                            <figure class="dv-shot${i === 0 ? ' is-active' : ''}${d.kind === 'video' ? ' dv-shot--video' : ''}" data-dv-shot="${i}" aria-hidden="${i === 0 ? 'false' : 'true'}">
                                ${d.kind === 'video'
                    ? `<video src="${src(d.src)}" ${d.poster ? `poster="${src(d.poster)}"` : ''} muted loop playsinline preload="${i === 0 ? 'metadata' : 'none'}" aria-label="${esc(d.alt || d.label)}"></video>
                                <span class="dv-live-tag" aria-hidden="true"><i></i>${esc(d.tag || 'Live walkthrough')}</span>`
                    : `<img src="${src(d.src)}" alt="${esc(d.alt || d.label)}" ${i ? 'loading="lazy"' : ''} />`}
                                ${(d.hotspots || [])
                        .map(
                            (h, k) => `
                                <button type="button" class="dv-hotspot${h.x > 60 ? ' is-left' : ''}${h.y > 70 ? ' is-up' : ''}" style="left:${h.x}%;top:${h.y}%;--k:${k}" data-hs="${k}" aria-label="${esc(h.title)}">
                                    <span class="dv-hotspot-dot" aria-hidden="true"></span>
                                    <span class="dv-hotspot-card" role="tooltip"><strong>${esc(h.title)}</strong>${esc(h.text)}</span>
                                </button>`
                        )
                        .join('')}
                            </figure>`
            )
            .join('')}
                            <span class="dv-screen-glare" aria-hidden="true"></span>
                        </div>
                        <div class="dv-chin"><span></span></div>
                    </div>
                    <div class="dv-neck" aria-hidden="true"></div>
                    <div class="dv-base" aria-hidden="true"></div>
                </div>
                <div class="dv-controls">
                    ${desktops.length > 1
            ? `<div class="dv-switch" role="tablist" aria-label="Desktop screens">
                        ${desktops.map((d, i) => `<button type="button" role="tab" class="dv-switch-btn${i === 0 ? ' is-active' : ''}" aria-selected="${i === 0}" data-dv-switch="${i}">${esc(d.label)}</button>`).join('')}
                       </div>`
            : ''}
                    <button type="button" class="pp-btn dv-tour-btn" id="dvTourBtn" aria-pressed="false">
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 5.5V18.5L18.5 12L8 5.5Z" fill="currentColor"/></svg>
                        <span>Guided tour</span>
                    </button>
                    <span class="dv-hint">Hover or tap the glowing dots</span>
                </div>
            </div>`
        : '';

    const phoneScreen = (p, i) =>
        p.kind === 'video'
            ? `<video class="dv-phone-media" muted loop playsinline preload="${i === 0 ? 'metadata' : 'none'}" data-type="${esc(p.type || '')}">
                    <source src="${src(p.src)}" type='${esc(p.type || 'video/mp4')}' />
               </video>
               <div class="dv-phone-fallback" hidden>
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" stroke-width="1.8"/><path d="M10 9.5V14.5L14.5 12L10 9.5Z" fill="currentColor"/></svg>
                    <strong>${esc(p.label)}</strong>
                    <span>This browser can't play this clip's video format.</span>
                    <a href="${src(p.src)}" target="_blank" rel="noopener">Open the video file</a>
               </div>`
            : `<img class="dv-phone-media dv-phone-media--scroll" src="${src(p.src)}" alt="${esc(p.caption || p.label)}" loading="lazy" />`;

    const phonesHtml = phones.length
        ? `
            <div class="dv-mobile-block">
                <div class="dv-mobile-text" data-reveal>
                    <span class="pp-eyebrow">On the go</span>
                    <h3 class="dv-mobile-title">Built for youth on their phones</h3>
                    <p class="dv-mobile-caption" id="dvPhoneCaption">${esc(phones[0].caption || phones[0].label)}</p>
                    <div class="dv-phone-tabs" role="tablist" aria-label="Phone screens">
                        ${phones.map((p, i) => `<button type="button" role="tab" class="dv-phone-tab${i === 0 ? ' is-active' : ''}" aria-selected="${i === 0}" data-phone="${i}"><b>${pad2(i + 1)}</b>${esc(p.label)}</button>`).join('')}
                    </div>
                    <div class="dv-player" id="dvPlayer">
                        <button type="button" class="dv-player-btn" id="dvPlayBtn" aria-label="Pause">
                            <svg class="dv-ic-pause" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="6.5" y="5" width="3.6" height="14" rx="1.2" fill="currentColor"/><rect x="13.9" y="5" width="3.6" height="14" rx="1.2" fill="currentColor"/></svg>
                            <svg class="dv-ic-play" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 5.5V18.5L18.5 12L8 5.5Z" fill="currentColor"/></svg>
                        </button>
                        <span class="dv-player-track"><span id="dvPlayerFill"></span></span>
                        <button type="button" class="dv-player-btn" id="dvMuteBtn" aria-label="Unmute">
                            <svg class="dv-ic-muted" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 9.5H7.5L12 5.5V18.5L7.5 14.5H4V9.5Z" fill="currentColor"/><path d="M16 9.5L20.5 14M20.5 9.5L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                            <svg class="dv-ic-sound" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 9.5H7.5L12 5.5V18.5L7.5 14.5H4V9.5Z" fill="currentColor"/><path d="M15.5 9C16.4 9.8 16.9 10.9 16.9 12C16.9 13.1 16.4 14.2 15.5 15M18 6.8C19.6 8.2 20.5 10 20.5 12C20.5 14 19.6 15.8 18 17.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                        </button>
                    </div>
                </div>
                <div class="dv-phones" id="dvPhones" style="--n:${phones.length}" data-reveal>
                    ${phones
            .map(
                (p, i) => `
                    <button type="button" class="dv-phone" data-phone-card="${i}" aria-label="Show ${esc(p.label)}" tabindex="-1">
                        <span class="dv-phone-frame">
                            <span class="dv-phone-island" aria-hidden="true"></span>
                            <span class="dv-phone-screen">${phoneScreen(p, i)}</span>
                        </span>
                        <span class="dv-phone-label">${esc(p.label)}</span>
                    </button>`
            )
            .join('')}
                </div>
            </div>`
        : '';

    const tourHtml = features.length
        ? `
            <div class="ft-tour" id="ftTour">
                <ol class="ft-list" role="tablist" aria-label="GEN-ZYNC features">
                    ${features
            .map(
                (f, i) => `
                    <li>
                        <button type="button" role="tab" class="ft-item${i === 0 ? ' is-active' : ''}" aria-selected="${i === 0}" data-ft="${i}">
                            <span class="ft-num">${pad2(i + 1)}</span>
                            <span class="ft-name">${esc(f.title)}</span>
                            <span class="ft-progress" aria-hidden="true"></span>
                        </button>
                    </li>`
            )
            .join('')}
                </ol>
                <div class="ft-view">
                    <div class="ft-browser">
                        <div class="ft-browser-bar">
                            <span class="ft-dots" aria-hidden="true"><i></i><i></i><i></i></span>
                            <span class="ft-url"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="5" y="10.5" width="14" height="9.5" rx="2" stroke="currentColor" stroke-width="2"/><path d="M8.5 10.5V8A3.5 3.5 0 0 1 15.5 8V10.5" stroke="currentColor" stroke-width="2"/></svg><b>${esc(project.domain || 'genzync.org')}</b><span id="ftPath">${esc(features[0].path || '')}</span></span>
                        </div>
                        <div class="ft-stage" id="ftStage">
                            ${features
            .map(
                (f, i) => `
                            <button type="button" class="ft-shot${i === 0 ? ' is-active' : ''}" data-ft-shot="${i}" data-src="${src(f.src)}" data-caption="${esc(f.title)}" aria-label="Enlarge ${esc(f.title)}" tabindex="${i === 0 ? 0 : -1}">
                                <img src="${src(f.src)}" alt="${esc(f.title)} screen" loading="lazy" />
                            </button>`
            )
            .join('')}
                        </div>
                    </div>
                    <div class="ft-caption" aria-live="polite">
                        <strong id="ftTitle">${esc(features[0].title)}</strong>
                        <p id="ftText">${esc(features[0].text)}</p>
                    </div>
                </div>
            </div>`
        : '';

    const miniCard = (p, label) => `
        <a class="pp-next-card proj-card--${p.group}" href="${p.film ? 'film' : 'project'}.html?id=${encodeURIComponent(p.id)}" data-reveal>
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
                        ${category ? `<span>${esc(category.label)}</span>
                        <span aria-hidden="true">/</span>` : ''}
                        <span aria-current="page">${pad2(indexInGroup + 1)}</span>
                    </nav>
                    <span class="pp-group-chip">
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">${group.icon}</svg>
                        ${esc(group.label)}${category ? ` • ${esc(category.label)}` : ''} ${sampleChip(project)}
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
                <span class="pp-eyebrow" data-num>Overview</span>
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

        ${hasDevices ? `
        <!-- IN ACTION: device mock-ups -->
        <section class="pp-section pp-section--devices" id="in-action">
            <div class="pp-section-head" data-reveal>
                <span class="pp-eyebrow" data-num>In action</span>
                <h2 class="pp-h2">See it running</h2>
            </div>
            ${desktopHtml}
            ${phonesHtml}
        </section>` : ''}

        ${project.challenge ? `
        <!-- CHALLENGE -->
        <section class="pp-section pp-section--tint" id="challenge">
            <div class="pp-section-head" data-reveal>
                <span class="pp-eyebrow" data-num>Challenge</span>
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
                <span class="pp-eyebrow" data-num>Process</span>
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
                <span class="pp-eyebrow" data-num>Outcomes</span>
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

        ${features.length ? `
        <!-- FEATURE TOUR -->
        <section class="pp-section" id="tour">
            <div class="pp-section-head" data-reveal>
                <span class="pp-eyebrow" data-num>Feature tour</span>
                <h2 class="pp-h2">Inside the system</h2>
            </div>
            ${tourHtml}
        </section>` : ''}

        <!-- GALLERY -->
        <section class="pp-section" id="gallery"${showGallery ? '' : ' hidden'}>
            <div class="pp-section-head" data-reveal>
                <span class="pp-eyebrow" data-num>Gallery</span>
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

    [...document.querySelectorAll('.pp-eyebrow[data-num]')].filter((el) => !el.closest('[hidden]')).forEach((el, i) => {
        el.textContent = `${pad2(i + 1)} • ${el.textContent}`;
    });

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
    document.querySelectorAll('.pp-shot[data-src], .ft-shot[data-src]').forEach((shot) =>
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
    document.querySelectorAll('a[href^="project.html"], a[href^="film.html"], a[href^="index.html"]').forEach((a) =>
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


    /* ---------- Desktop mock-up: screen switch, hotspots, guided tour, tilt ---------- */
    const dvDesktop = document.getElementById('dvDesktop');
    if (dvDesktop) {
        const shots = [...dvDesktop.querySelectorAll('[data-dv-shot]')];
        const switches = [...document.querySelectorAll('[data-dv-switch]')];
        const tourBtn = document.getElementById('dvTourBtn');
        let screen = 0;
        let tourTimer = null;
        let tourStep = -1;

        const clearHotspots = () => dvDesktop.querySelectorAll('.dv-hotspot.is-open').forEach((h) => h.classList.remove('is-open'));
        // Screens can be a looping video walkthrough: only the visible, on-screen one plays.
        let inView = false;
        const syncVideos = () =>
            shots.forEach((s, k) => {
                const v = s.querySelector('video');
                if (!v) return;
                if (k === screen && inView && !reduceMotion) v.play().catch(() => {});
                else v.pause();
            });
        if (reduceMotion) dvDesktop.querySelectorAll('.dv-shot video').forEach((v) => v.setAttribute('controls', ''));
        if (shots.some((s) => s.querySelector('video'))) {
            new IntersectionObserver((entries) => {
                inView = entries[0].isIntersecting;
                syncVideos();
            }, { threshold: 0.35 }).observe(dvDesktop);
        }
        const showScreen = (i) => {
            screen = i;
            shots.forEach((s, k) => {
                s.classList.toggle('is-active', k === i);
                s.setAttribute('aria-hidden', k === i ? 'false' : 'true');
            });
            syncVideos();
            switches.forEach((b, k) => {
                b.classList.toggle('is-active', k === i);
                b.setAttribute('aria-selected', k === i ? 'true' : 'false');
            });
            clearHotspots();
        };
        const stopTour = () => {
            clearInterval(tourTimer);
            tourTimer = null;
            tourStep = -1;
            tourBtn.classList.remove('is-playing');
            tourBtn.setAttribute('aria-pressed', 'false');
            tourBtn.querySelector('span').textContent = 'Guided tour';
            clearHotspots();
        };
        const stepTour = () => {
            const spots = [...shots[screen].querySelectorAll('.dv-hotspot')];
            tourStep += 1;
            if (tourStep >= spots.length) {
                if (screen < shots.length - 1) {
                    showScreen(screen + 1);
                    tourStep = -1;
                    return;
                }
                stopTour();
                return;
            }
            clearHotspots();
            spots[tourStep].classList.add('is-open');
        };

        switches.forEach((b) =>
            b.addEventListener('click', () => {
                stopTour();
                showScreen(Number(b.dataset.dvSwitch));
            })
        );
        dvDesktop.querySelectorAll('.dv-hotspot').forEach((h) => {
            h.addEventListener('click', (e) => {
                e.stopPropagation();
                const open = h.classList.contains('is-open');
                stopTour();
                if (!open) h.classList.add('is-open');
            });
        });
        tourBtn.addEventListener('click', () => {
            if (tourTimer) {
                stopTour();
                return;
            }
            showScreen(0);
            tourBtn.classList.add('is-playing');
            tourBtn.setAttribute('aria-pressed', 'true');
            tourBtn.querySelector('span').textContent = 'Stop tour';
            stepTour();
            tourTimer = setInterval(stepTour, 2800);
        });
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.dv-hotspot') && !e.target.closest('#dvTourBtn') && !tourTimer) clearHotspots();
        });

        if (!reduceMotion) {
            const block = dvDesktop.closest('.dv-desktop-block');
            block.addEventListener('pointermove', (e) => {
                const r = block.getBoundingClientRect();
                const px = (e.clientX - r.left) / r.width - 0.5;
                const py = (e.clientY - r.top) / r.height - 0.5;
                dvDesktop.style.setProperty('--ry', `${px * 8}deg`);
                dvDesktop.style.setProperty('--rx', `${-py * 6}deg`);
                dvDesktop.style.setProperty('--gx', `${(px + 0.5) * 100}%`);
            });
            block.addEventListener('pointerleave', () => {
                dvDesktop.style.setProperty('--ry', '0deg');
                dvDesktop.style.setProperty('--rx', '0deg');
            });
        }
    }

    /* ---------- Phone mock-ups: fanned carousel + video player ---------- */
    const dvPhones = document.getElementById('dvPhones');
    if (dvPhones) {
        const cards = [...dvPhones.querySelectorAll('[data-phone-card]')];
        const tabs = [...document.querySelectorAll('[data-phone]')];
        const caption = document.getElementById('dvPhoneCaption');
        const player = document.getElementById('dvPlayer');
        const playBtn = document.getElementById('dvPlayBtn');
        const muteBtn = document.getElementById('dvMuteBtn');
        const fill = document.getElementById('dvPlayerFill');
        let active = 0;
        let inView = false;
        let userPaused = false;
        let muted = true;

        const mediaOf = (i) => cards[i].querySelector('video');
        const showFallback = (v) => {
            if (!v) return;
            v.hidden = true;
            const fb = v.parentElement.querySelector('.dv-phone-fallback');
            if (fb) fb.hidden = false;
        };
        cards.forEach((c) => {
            const v = c.querySelector('video');
            if (!v) return;
            v.addEventListener('error', () => showFallback(v), true);
            v.querySelector('source')?.addEventListener('error', () => showFallback(v));
            // A clip that loads but has no decodable picture (e.g. HEVC without support)
            v.addEventListener('loadeddata', () => {
                if (!v.videoWidth) showFallback(v);
            });
        });

        const syncPlayer = () => {
            const v = mediaOf(active);
            const usable = v && !v.hidden;
            player.classList.toggle('is-disabled', !usable);
            const playing = usable && !v.paused;
            player.classList.toggle('is-playing', Boolean(playing));
            playBtn.setAttribute('aria-label', playing ? 'Pause' : 'Play');
            muteBtn.setAttribute('aria-label', muted ? 'Unmute' : 'Mute');
            player.classList.toggle('is-muted', muted);
        };

        const playActive = () => {
            cards.forEach((c, i) => {
                const v = c.querySelector('video');
                if (!v) return;
                if (i === active && inView && !userPaused && !v.hidden) {
                    v.muted = muted;
                    if (v.preload === 'none') v.preload = 'auto';
                    const p = v.play();
                    if (p) p.catch(() => syncPlayer());
                } else {
                    v.pause();
                }
            });
            syncPlayer();
        };

        const setPhone = (i) => {
            active = (i + cards.length) % cards.length;
            const half = Math.floor(cards.length / 2);
            cards.forEach((c, k) => {
                const off = ((k - active + cards.length + half) % cards.length) - half;
                c.style.setProperty('--off', off);
                c.style.setProperty('--abs', Math.abs(off));
                c.style.zIndex = String(10 - Math.abs(off));
                c.classList.toggle('is-active', off === 0);
                c.setAttribute('aria-current', off === 0 ? 'true' : 'false');
            });
            tabs.forEach((t, k) => {
                t.classList.toggle('is-active', k === active);
                t.setAttribute('aria-selected', k === active ? 'true' : 'false');
            });
            const p = phones[active];
            caption.textContent = p.caption || p.label;
            caption.classList.remove('is-swapping');
            void caption.offsetWidth;
            caption.classList.add('is-swapping');
            fill.style.width = '0%';
            userPaused = false;
            playActive();
        };

        cards.forEach((c, i) => c.addEventListener('click', () => (i === active ? null : setPhone(i))));
        tabs.forEach((t, i) => t.addEventListener('click', () => setPhone(i)));
        dvPhones.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') setPhone(active + 1);
            if (e.key === 'ArrowLeft') setPhone(active - 1);
        });
        playBtn.addEventListener('click', () => {
            const v = mediaOf(active);
            if (!v || v.hidden) return;
            if (v.paused) {
                userPaused = false;
                playActive();
            } else {
                userPaused = true;
                v.pause();
                syncPlayer();
            }
        });
        muteBtn.addEventListener('click', () => {
            muted = !muted;
            const v = mediaOf(active);
            if (v) v.muted = muted;
            syncPlayer();
        });
        cards.forEach((c, i) => {
            const v = c.querySelector('video');
            if (!v) return;
            v.addEventListener('timeupdate', () => {
                if (i === active && v.duration) fill.style.width = `${(v.currentTime / v.duration) * 100}%`;
            });
            v.addEventListener('play', syncPlayer);
            v.addEventListener('pause', syncPlayer);
        });

        // Only play while the phones are on screen
        new IntersectionObserver(
            (items) =>
                items.forEach((it) => {
                    inView = it.isIntersecting;
                    playActive();
                }),
            { threshold: 0.35 }
        ).observe(dvPhones);

        setPhone(0);
    }

    /* ---------- Feature tour: list + browser frame, auto-advances ---------- */
    const ftTour = document.getElementById('ftTour');
    if (ftTour) {
        const items = [...ftTour.querySelectorAll('[data-ft]')];
        const shots = [...ftTour.querySelectorAll('[data-ft-shot]')];
        const ftPath = document.getElementById('ftPath');
        const ftTitle = document.getElementById('ftTitle');
        const ftText = document.getElementById('ftText');
        const DURATION = 5200;
        let current = 0;
        let timer = null;
        let hovering = false;
        let visible = false;

        const show = (i, user = false) => {
            current = (i + items.length) % items.length;
            items.forEach((b, k) => {
                b.classList.toggle('is-active', k === current);
                b.setAttribute('aria-selected', k === current ? 'true' : 'false');
                b.classList.remove('is-timing');
            });
            shots.forEach((s, k) => {
                s.classList.toggle('is-active', k === current);
                s.tabIndex = k === current ? 0 : -1;
            });
            const f = features[current];
            ftPath.textContent = f.path || '';
            ftTitle.textContent = f.title;
            ftText.textContent = f.text;
            ftTour.querySelector('.ft-caption').classList.remove('is-swapping');
            void ftTour.offsetWidth;
            ftTour.querySelector('.ft-caption').classList.add('is-swapping');
            if (user) items[current].scrollIntoView({ block: 'nearest', inline: 'nearest' });
            restart();
        };
        const restart = () => {
            clearTimeout(timer);
            items.forEach((b) => b.classList.remove('is-timing'));
            if (reduceMotion || hovering || !visible) return;
            void items[current].offsetWidth;
            items[current].style.setProperty('--ft-dur', `${DURATION}ms`);
            items[current].classList.add('is-timing');
            timer = setTimeout(() => show(current + 1), DURATION);
        };

        items.forEach((b, i) => b.addEventListener('click', () => show(i, true)));
        ftTour.addEventListener('keydown', (e) => {
            if (!e.target.closest('.ft-list')) return;
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                e.preventDefault();
                show(current + 1, true);
                items[current].focus();
            }
            if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                e.preventDefault();
                show(current - 1, true);
                items[current].focus();
            }
        });
        const view = ftTour.querySelector('.ft-view');
        view.addEventListener('pointerenter', () => {
            hovering = true;
            restart();
        });
        view.addEventListener('pointerleave', () => {
            hovering = false;
            restart();
        });
        new IntersectionObserver(
            (entries) =>
                entries.forEach((en) => {
                    visible = en.isIntersecting;
                    restart();
                }),
            { threshold: 0.3 }
        ).observe(ftTour);
    }

    /* ---------- Image covers keep their real shape (no cropped screenshots) ---------- */
    const coverBox = document.getElementById('ppCover');
    const coverImg = coverBox && coverBox.querySelector('img');
    if (coverImg) {
        coverBox.classList.add('has-image');
        coverBox.closest('.pp-hero-visual').classList.add('has-image-cover');
        const fitCover = () => {
            const r = coverImg.naturalWidth / coverImg.naturalHeight;
            if (r) coverBox.style.aspectRatio = String(Math.min(2.2, Math.max(0.85, r)));
        };
        if (coverImg.complete) fitCover();
        else coverImg.addEventListener('load', fitCover);
    }

    updateProgress();
    updateProcess();
    liftCurtain();
})();
