/* ==========================================================================
   AIRCHIVE — Experiences & Milestone Roadmaps Page (experience.js)
   Renders Working Experience, Organization Roadmaps, and Freelancing Works.
   Supports interactive track switching, sorting, filtering, and roadmap inspection.
   ========================================================================== */
(() => {
    const allTracks = window.EXPERIENCE_TRACKS || [];
    const allExperiences = window.EXPERIENCES_DATA || [];
    const main = document.getElementById('expMain');
    const curtain = document.getElementById('ppCurtain');
    const curtainTitle = document.getElementById('ppCurtainTitle');
    const backBtn = document.getElementById('ppBackBtn');
    const sectionNav = document.getElementById('ppSectionNav');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const esc = (v = '') =>
        String(v).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));

    const arrow =
        '<svg viewBox="0 0 24 24" fill="none" width="13" height="13" style="width:13px;height:13px;min-width:13px;max-width:13px;display:inline-block;vertical-align:middle;flex-shrink:0;" class="exp-link-arrow" aria-hidden="true"><path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const checkIcon =
        '<svg viewBox="0 0 24 24" fill="none" width="13" height="13" aria-hidden="true"><path d="M5 13L9 17L19 7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    const getLinkIcon = (type = '', url = '') => {
        if (url.endsWith('.pdf') || type === 'document') {
            return '<svg viewBox="0 0 24 24" fill="none" width="13" height="13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>';
        }
        if (type === 'volunteer') {
            return '<svg viewBox="0 0 24 24" fill="none" width="13" height="13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
        }
        if (type === 'event') {
            return '<svg viewBox="0 0 24 24" fill="none" width="13" height="13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>';
        }
        if (type === 'project') {
            return '<svg viewBox="0 0 24 24" fill="none" width="13" height="13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>';
        }
        return '<svg viewBox="0 0 24 24" fill="none" width="13" height="13" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>';
    };

    // Parse URL params
    const urlParams = new URLSearchParams(window.location.search);
    const requestedId = urlParams.get('id');
    const requestedTrack = urlParams.get('track');

    let currentTrack = 'all';
    if (requestedTrack && ['working', 'organization', 'freelancing', 'all'].includes(requestedTrack)) {
        currentTrack = requestedTrack;
    } else if (requestedId) {
        const match = allExperiences.find(e => e.id === requestedId);
        if (match) currentTrack = match.track;
    } else {
        currentTrack = 'working'; // default start
    }

    let currentSort = 'newest';
    let searchQuery = '';

    /* ---------- Theme toggle ---------- */
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
        bar.style.width = `${Math.min(100, (window.scrollY / max) * 100)}%`;
    };
    window.addEventListener('scroll', updateProgress, { passive: true });

    /* ---------- Entrance curtain ---------- */
    const liftCurtain = () => {
        if (!curtain) return;
        if (curtainTitle) {
            const trackNames = {
                working: 'Working Experience',
                organization: 'Organization Roadmaps',
                freelancing: 'Freelancing Experience',
                all: 'Experiences & Milestone Roadmaps'
            };
            curtainTitle.textContent = trackNames[currentTrack] || 'Experiences & Milestone Roadmaps';
        }
        if (reduceMotion) {
            curtain.remove();
            return;
        }
        setTimeout(() => curtain.classList.add('is-lifting'), 350);
        curtain.addEventListener('transitionend', () => curtain.remove(), { once: true });
        setTimeout(() => {
            if (curtain && curtain.parentNode) curtain.remove();
        }, 2000);
    };

    /* ---------- Render Container Structure ---------- */
    function renderPage() {
        if (!main) return;

        // Sync header nav capsule
        if (sectionNav) {
            sectionNav.innerHTML = `
                <button type="button" class="pp-sec-link${currentTrack === 'working' ? ' is-active' : ''}" data-nav-track="working">Working</button>
                <button type="button" class="pp-sec-link${currentTrack === 'organization' ? ' is-active' : ''}" data-nav-track="organization">Organization</button>
                <button type="button" class="pp-sec-link${currentTrack === 'freelancing' ? ' is-active' : ''}" data-nav-track="freelancing">Freelance</button>
                <button type="button" class="pp-sec-link${currentTrack === 'all' ? ' is-active' : ''}" data-nav-track="all">All Tracks</button>
            `;
            sectionNav.querySelectorAll('[data-nav-track]').forEach(btn => {
                btn.addEventListener('click', () => {
                    const tr = btn.dataset.navTrack;
                    if (currentTrack === tr) return;
                    currentTrack = tr;
                    renderPage();
                });
            });
        }

        main.innerHTML = `
            <div class="exp-explorer">
                <!-- Explorer Hero & Interactive Controls -->
                <header class="exp-explorer-hero">
                    <div class="exp-explorer-badge">
                        <svg viewBox="0 0 24 24" fill="none" width="14" height="14" stroke="currentColor" stroke-width="2.2"><path d="M12 2L15 9H22L16.5 13.5L18.5 20.5L12 16L5.5 20.5L7.5 13.5L2 9H9L12 2Z"/></svg>
                        <span>EXPERIENCE ARCHIVE</span>
                    </div>
                    <h1 class="exp-explorer-title">Experiences &amp; Milestone Roadmaps</h1>
                    <p class="exp-explorer-lead">Explore professional industry engagements, unified organizational leadership roadmaps, and creative design services.</p>

                    <!-- Interactive Track Switcher -->
                    <div class="exp-track-switcher" role="tablist" aria-label="Select Experience Track">
                        <button type="button" class="exp-switcher-btn${currentTrack === 'working' ? ' is-active' : ''}" data-track="working" role="tab" aria-selected="${currentTrack === 'working'}">
                            <span class="exp-switcher-ic"><svg viewBox="0 0 24 24" fill="none" width="16" height="16" stroke="currentColor" stroke-width="2"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/></svg></span>
                            <span class="exp-switcher-text">Working Experience</span>
                            <span class="exp-switcher-count">2</span>
                        </button>
                        <button type="button" class="exp-switcher-btn${currentTrack === 'organization' ? ' is-active' : ''}" data-track="organization" role="tab" aria-selected="${currentTrack === 'organization'}">
                            <span class="exp-switcher-ic"><svg viewBox="0 0 24 24" fill="none" width="16" height="16" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
                            <span class="exp-switcher-text">Organization Experience</span>
                            <span class="exp-switcher-count">4 Roadmaps</span>
                        </button>
                        <button type="button" class="exp-switcher-btn${currentTrack === 'freelancing' ? ' is-active' : ''}" data-track="freelancing" role="tab" aria-selected="${currentTrack === 'freelancing'}">
                            <span class="exp-switcher-ic"><svg viewBox="0 0 24 24" fill="none" width="16" height="16" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg></span>
                            <span class="exp-switcher-text">Freelancing</span>
                            <span class="exp-switcher-count">1</span>
                        </button>
                        <button type="button" class="exp-switcher-btn${currentTrack === 'all' ? ' is-active' : ''}" data-track="all" role="tab" aria-selected="${currentTrack === 'all'}">
                            <span class="exp-switcher-text">All Tracks</span>
                            <span class="exp-switcher-count">7</span>
                        </button>
                    </div>

                    <!-- Toolbar: Search + Sort -->
                    <div class="exp-toolbar">
                        <div class="exp-search-box">
                            <svg viewBox="0 0 24 24" fill="none" width="16" height="16" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                            <input type="search" id="expSearchInput" placeholder="Filter by organization, role, or skill (e.g. LODI, Careline, START)..." value="${esc(searchQuery)}" aria-label="Search experiences" />
                            ${searchQuery ? `<button type="button" class="exp-search-clear" id="expSearchClear" aria-label="Clear search">&times;</button>` : ''}
                        </div>
                        <div class="exp-sort-box">
                            <label for="expSortSelect">Sort:</label>
                            <select id="expSortSelect" class="exp-sort-select">
                                <option value="newest"${currentSort === 'newest' ? ' selected' : ''}>Newest First</option>
                                <option value="oldest"${currentSort === 'oldest' ? ' selected' : ''}>Oldest First</option>
                                <option value="title"${currentSort === 'title' ? ' selected' : ''}>Alphabetical</option>
                            </select>
                        </div>
                    </div>
                </header>

                <!-- Cards & Roadmaps Stage -->
                <div class="exp-items-stage" id="expItemsStage"></div>
            </div>
        `;

        // Bind interactive switchers
        main.querySelectorAll('.exp-switcher-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tr = btn.dataset.track;
                if (currentTrack === tr) return;
                currentTrack = tr;
                renderPage();
            });
        });

        // Search listener
        const searchInput = document.getElementById('expSearchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchQuery = e.target.value.trim().toLowerCase();
                renderItems();
            });
        }
        const searchClear = document.getElementById('expSearchClear');
        if (searchClear) {
            searchClear.addEventListener('click', () => {
                searchQuery = '';
                renderPage();
            });
        }

        // Sort listener
        const sortSelect = document.getElementById('expSortSelect');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                currentSort = e.target.value;
                renderItems();
            });
        }

        renderItems();
    }

    /* ---------- Render Items according to Track & Filter ---------- */
    function renderItems() {
        const stage = document.getElementById('expItemsStage');
        if (!stage) return;

        let filtered = currentTrack === 'all'
            ? [...allExperiences]
            : allExperiences.filter(e => e.track === currentTrack);

        // Apply Search
        if (searchQuery) {
            filtered = filtered.filter(e => {
                const haystack = `${e.role} ${e.org} ${e.summary} ${e.description || ''} ${(e.tags || []).join(' ')} ${(e.roadmap || []).map(r => `${r.role} ${r.initiative} ${r.summary}`).join(' ')}`.toLowerCase();
                return haystack.includes(searchQuery);
            });
        }

        // Apply Sort
        if (currentSort === 'newest') {
            // Keep default array order or reverse if needed
        } else if (currentSort === 'oldest') {
            filtered.reverse();
        } else if (currentSort === 'title') {
            filtered.sort((a, b) => a.org.localeCompare(b.org));
        }

        if (filtered.length === 0) {
            stage.innerHTML = `
                <div class="exp-empty-state">
                    <svg viewBox="0 0 24 24" fill="none" width="48" height="48" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                    <h3>No matching experiences found</h3>
                    <p>Try clearing your search term or selecting another track.</p>
                    <button type="button" class="pp-btn pp-btn--solid" id="expResetBtn">Show All Experiences</button>
                </div>
            `;
            const rBtn = document.getElementById('expResetBtn');
            if (rBtn) rBtn.addEventListener('click', () => {
                searchQuery = '';
                currentTrack = 'all';
                renderPage();
            });
            return;
        }

        stage.innerHTML = filtered.map(item => {
            if (item.track === 'organization') {
                return renderOrganizationCard(item);
            } else {
                return renderStandardCard(item);
            }
        }).join('');

        // Attach milestone click toggles for roadmaps
        stage.querySelectorAll('.exp-roadmap-node').forEach(node => {
            node.addEventListener('click', () => {
                const card = node.closest('.exp-org-dossier');
                if (!card) return;
                card.querySelectorAll('.exp-roadmap-node').forEach(n => n.classList.remove('is-active'));
                node.classList.add('is-active');
            });
        });

        // Scroll to requested ID if specified
        if (requestedId) {
            setTimeout(() => {
                const targetEl = document.getElementById(`card-${requestedId}`);
                if (targetEl) {
                    if (typeof targetEl.scrollIntoView === 'function') {
                        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                    if (targetEl.classList) {
                        targetEl.classList.add('is-highlighted');
                    }
                }
            }, 250);
        }
    }

    /* ---------- Organization Card with Interactive Roadmap ---------- */
    function renderOrganizationCard(e) {
        const roadmap = e.roadmap || [];
        return `
        <article class="exp-org-dossier" id="card-${esc(e.id)}" data-track="organization">
            <!-- Org Card Header -->
            <header class="exp-org-head">
                <div class="exp-org-identity">
                    <div class="exp-org-logo-frame">
                        <img src="${esc(e.logo)}" alt="${esc(e.org)}" class="exp-org-logo" onerror="this.onerror=null; this.src='assets/logo-light.png';" />
                    </div>
                    <div class="exp-org-titles">
                        <div class="exp-org-topline">
                            <span class="exp-track-pill">Organization Experience</span>
                            <span class="exp-status-pill is-active">
                                <span class="exp-status-dot" aria-hidden="true"></span>
                                Active Leadership
                            </span>
                        </div>
                        <h2 class="exp-org-title">${esc(e.org)}</h2>
                        <span class="exp-org-role">${esc(e.role)}</span>
                        <div class="exp-org-meta">
                            <span><svg viewBox="0 0 24 24" fill="none" width="14" height="14" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg> ${esc(e.period)}</span>
                            <span><svg viewBox="0 0 24 24" fill="none" width="14" height="14" stroke="currentColor" stroke-width="2"><path d="M12 21s-8-7.5-8-12a8 8 0 1 1 16 0c0 4.5-8 12-8 12z"/><circle cx="12" cy="9" r="2.5"/></svg> ${esc(e.location)}</span>
                        </div>
                    </div>
                </div>

                <div class="exp-org-summary-box">
                    <p class="exp-org-summary">${esc(e.summary)}</p>
                    <div class="exp-org-tags">
                        ${(e.tags || []).map(t => `<span class="exp-skill-chip">${esc(t)}</span>`).join('')}
                    </div>
                </div>
            </header>

            <!-- Roadmap Section -->
            <section class="exp-roadmap-section">
                <div class="exp-roadmap-header">
                    <span class="exp-roadmap-icon">
                        <svg viewBox="0 0 24 24" fill="none" width="18" height="18" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    </span>
                    <h3 class="exp-roadmap-title">Milestone Roadmap &amp; Deliverables</h3>
                    <span class="exp-roadmap-count">${roadmap.length} Milestones</span>
                </div>

                <div class="exp-roadmap-timeline">
                    ${roadmap.map((m, mIdx) => `
                    <div class="exp-roadmap-node${mIdx === roadmap.length - 1 ? ' is-active' : ''}" style="--node-idx:${mIdx}" tabindex="0" role="button" aria-label="Milestone ${esc(m.step)}: ${esc(m.role)}">
                        <div class="exp-node-indicator">
                            <span class="exp-node-num">${esc(m.step)}</span>
                            <span class="exp-node-line" aria-hidden="true"></span>
                        </div>
                        <div class="exp-node-card">
                            <div class="exp-node-head">
                                <div class="exp-node-title-group">
                                    <strong class="exp-node-role">${esc(m.role)}</strong>
                                    <span class="exp-node-initiative">${esc(m.initiative || m.event)}</span>
                                </div>
                                <div class="exp-node-badges">
                                    <span class="exp-node-period">${esc(m.period)}</span>
                                    <span class="exp-node-status ${m.status === 'Active' ? 'is-active' : 'is-completed'}">${esc(m.status)}</span>
                                </div>
                            </div>
                            <p class="exp-node-desc">${esc(m.summary)}</p>

                            <!-- Deliverables Chips -->
                            ${(m.deliverables && m.deliverables.length) ? `
                            <div class="exp-node-deliverables">
                                <span class="exp-deliverables-label">Key Deliverables:</span>
                                <div class="exp-deliverables-chips">
                                    ${m.deliverables.map(d => `<span class="exp-deliv-chip">${checkIcon} ${esc(d)}</span>`).join('')}
                                </div>
                            </div>` : ''}

                            <!-- Connected Artifact / Project Link -->
                            ${m.relatedLink ? `
                            <div class="exp-node-link-wrap">
                                <a href="${esc(m.relatedLink.url)}" class="exp-node-link" ${m.relatedLink.url.endsWith('.png') || m.relatedLink.url.endsWith('.jpg') ? 'target="_blank" rel="noopener"' : ''}>
                                    <span>${esc(m.relatedLink.label)}</span>
                                    ${arrow}
                                </a>
                            </div>` : ''}
                        </div>
                    </div>`).join('')}
                </div>
            </section>

            <!-- Connected Portfolio Showcases -->
            ${(e.relatedLinks && e.relatedLinks.length) ? `
            <footer class="exp-org-foot">
                <div class="exp-foot-header">
                    <span class="exp-foot-label">Connected Deliverables &amp; Artifacts</span>
                    <span class="exp-foot-count">${e.relatedLinks.length} Links</span>
                </div>
                <div class="exp-foot-links">
                    ${e.relatedLinks.map(l => {
                        const isExternal = l.url.endsWith('.png') || l.url.endsWith('.jpg') || l.url.endsWith('.pdf');
                        return `
                        <a href="${esc(l.url)}" class="exp-foot-pill exp-foot-pill--${esc(l.type || 'link')}" ${isExternal ? 'target="_blank" rel="noopener"' : ''}>
                            <span class="exp-foot-pill-ic" aria-hidden="true">${getLinkIcon(l.type, l.url)}</span>
                            <span class="exp-foot-pill-text">${esc(l.label)}</span>
                            <span class="exp-foot-pill-arrow" aria-hidden="true">${arrow}</span>
                        </a>`;
                    }).join('')}
                </div>
            </footer>` : ''}
        </article>`;
    }

    /* ---------- Standard Working / Freelance Card ---------- */
    function renderStandardCard(e) {
        return `
        <article class="exp-standard-dossier" id="card-${esc(e.id)}" data-track="${esc(e.track)}">
            <header class="exp-std-head">
                <div class="exp-std-identity">
                    <div class="exp-org-logo-frame">
                        <img src="${esc(e.logo)}" alt="${esc(e.org)}" class="exp-org-logo" onerror="this.onerror=null; this.src='assets/logo-light.png';" />
                    </div>
                    <div class="exp-std-titles">
                        <div class="exp-org-topline">
                            <span class="exp-track-pill">${esc(e.trackLabel)}</span>
                            <span class="exp-status-pill ${e.isCurrent ? 'is-active' : 'is-completed'}">
                                <span class="exp-status-dot" aria-hidden="true"></span>
                                ${esc(e.status)}
                            </span>
                        </div>
                        <h2 class="exp-std-role">${esc(e.role)}</h2>
                        <span class="exp-std-org">${esc(e.org)}</span>
                        <div class="exp-org-meta">
                            <span><svg viewBox="0 0 24 24" fill="none" width="14" height="14" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg> ${esc(e.period)}</span>
                            <span><svg viewBox="0 0 24 24" fill="none" width="14" height="14" stroke="currentColor" stroke-width="2"><path d="M12 21s-8-7.5-8-12a8 8 0 1 1 16 0c0 4.5-8 12-8 12z"/><circle cx="12" cy="9" r="2.5"/></svg> ${esc(e.location)}</span>
                        </div>
                    </div>
                </div>

                ${(e.keyMetrics && e.keyMetrics.length) ? `
                <div class="exp-metrics-grid">
                    ${e.keyMetrics.map(m => `
                    <div class="exp-metric-card">
                        <span class="exp-metric-label">${esc(m.label)}</span>
                        <strong class="exp-metric-val">${esc(m.value)}</strong>
                    </div>`).join('')}
                </div>` : ''}
            </header>

            <div class="exp-std-body">
                <div class="exp-body-card">
                    <p class="exp-lead-paragraph">${esc(e.description || e.summary)}</p>
                </div>

                ${(e.responsibilities && e.responsibilities.length) ? `
                <div class="exp-responsibilities-block">
                    <h3 class="exp-block-title">Key Responsibilities &amp; Core Output</h3>
                    <div class="exp-duties-grid">
                        ${e.responsibilities.map(r => `
                        <div class="exp-duty-item">
                            <span class="exp-duty-check">${checkIcon}</span>
                            <div class="exp-duty-text"><p>${esc(r)}</p></div>
                        </div>`).join('')}
                    </div>
                </div>` : ''}

                <div class="exp-skills-block">
                    <h3 class="exp-block-title">Skills &amp; Methodologies</h3>
                    <div class="exp-tags-container">
                        ${(e.tags || []).map(t => `<span class="exp-skill-chip">${esc(t)}</span>`).join('')}
                        ${(e.technologies || []).filter(t => !(e.tags || []).includes(t)).map(t => `<span class="exp-skill-chip exp-skill-chip--alt">${esc(t)}</span>`).join('')}
                    </div>
                </div>

                <!-- Milestone Roadmap (if present, e.g. for Freelancing / Upskilling) -->
                ${(e.roadmap && e.roadmap.length) ? `
                <div class="exp-roadmap-section" style="margin-top:28px;">
                    <h3 class="exp-block-title">Client Engagements &amp; Milestone Roadmap</h3>
                    <div class="exp-roadmap-timeline">
                        ${e.roadmap.map(m => `
                        <div class="exp-roadmap-node">
                            <span class="exp-node-pin">${esc(m.step)}</span>
                            <div class="exp-node-card">
                                <div class="exp-node-head">
                                    <div class="exp-node-title-group">
                                        <strong class="exp-node-role">${esc(m.role)}</strong>
                                        <span class="exp-node-initiative">${esc(m.initiative || m.event)}</span>
                                    </div>
                                    <div class="exp-node-badges">
                                        <span class="exp-node-period">${esc(m.period)}</span>
                                        <span class="exp-node-status ${m.status === 'Active' ? 'is-active' : 'is-completed'}">${esc(m.status)}</span>
                                    </div>
                                </div>
                                <p class="exp-node-desc">${esc(m.summary)}</p>
                                ${(m.deliverables && m.deliverables.length) ? `
                                <div class="exp-node-deliverables">
                                    <span class="exp-deliverables-label">Key Deliverables:</span>
                                    <div class="exp-deliverables-chips">
                                        ${m.deliverables.map(d => `<span class="exp-deliv-chip">${checkIcon} ${esc(d)}</span>`).join('')}
                                    </div>
                                </div>` : ''}
                                ${m.relatedLink ? `
                                <div class="exp-node-link-wrap">
                                    <a href="${esc(m.relatedLink.url)}" class="exp-node-link" ${m.relatedLink.url.endsWith('.png') || m.relatedLink.url.endsWith('.jpg') ? 'target="_blank" rel="noopener"' : ''}>
                                        <span>${esc(m.relatedLink.label)}</span>
                                        ${arrow}
                                    </a>
                                </div>` : ''}
                            </div>
                        </div>`).join('')}
                    </div>
                </div>` : ''}
            </div>

            <!-- Connected Portfolio Showcases -->
            ${(e.relatedLinks && e.relatedLinks.length) ? `
            <footer class="exp-org-foot" style="margin-top:24px;">
                <div class="exp-foot-header">
                    <span class="exp-foot-label">Connected Deliverables &amp; Artifacts</span>
                    <span class="exp-foot-count">${e.relatedLinks.length} Links</span>
                </div>
                <div class="exp-foot-links">
                    ${e.relatedLinks.map(l => {
                        const isExternal = l.url.endsWith('.png') || l.url.endsWith('.jpg') || l.url.endsWith('.pdf');
                        return `
                        <a href="${esc(l.url)}" class="exp-foot-pill exp-foot-pill--${esc(l.type || 'link')}" ${isExternal ? 'target="_blank" rel="noopener"' : ''}>
                            <span class="exp-foot-pill-ic" aria-hidden="true">${getLinkIcon(l.type, l.url)}</span>
                            <span class="exp-foot-pill-text">${esc(l.label)}</span>
                            <span class="exp-foot-pill-arrow" aria-hidden="true">${arrow}</span>
                        </a>`;
                    }).join('')}
                </div>
            </footer>` : ''}
        </article>`;
    }

    renderPage();
    liftCurtain();
})();
