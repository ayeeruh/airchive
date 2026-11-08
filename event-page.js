/* ==========================================================================
   AIRCHIVE — Event pages (Events Lead projects with an `event` block)
   Adds to project.html:
   - an event pass in the hero (ticket with date, venue, audience)
   - Run of show: session tabs + the minute-by-minute program
   - Paper trail: the documents I prepared, as sheets in a folder
   - From the call: a meeting-style photo stage
   Data lives in projects-data.js → project.event. Loaded before project.js.
   ========================================================================== */
window.AIRCHIVE_EVENT = (() => {
    const esc = (v = '') =>
        String(v).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
    const src = (p) => esc(encodeURI(p || ''));
    const pad2 = (n) => String(n).padStart(2, '0');

    const ICONS = {
        linkedin: '<path d="M6.5 9.5V18M6.5 6.2V6.3M10.5 18V13.2C10.5 11.3 11.7 9.8 13.6 9.8C15.4 9.8 16.5 11 16.5 13.1V18M10.5 9.6V18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" stroke-width="1.8"/>',
        github: '<path d="M9 19C5 20.3 5 17 3.5 16.5M14.5 21V17.6C14.6 16.7 14.3 15.8 13.7 15.2C16.5 14.9 19.5 13.8 19.5 8.9C19.5 7.6 19 6.4 18.2 5.5C18.6 4.4 18.5 3.2 18.1 2.2C18.1 2.2 17 1.9 14.5 3.6C12.4 3 10.1 3 8 3.6C5.5 1.9 4.4 2.2 4.4 2.2C4 3.2 4 4.4 4.3 5.5C3.5 6.4 3 7.6 3 8.9C3 13.8 6 14.9 8.8 15.2C8.2 15.8 7.9 16.7 8 17.6V21" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
        mic: '<rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" stroke-width="1.8"/><path d="M5.5 11.5C5.5 15.1 8.4 18 12 18C15.6 18 18.5 15.1 18.5 11.5M12 18V21" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
        calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5" stroke="currentColor" stroke-width="1.8"/><path d="M3.5 10H20.5M8 3V7M16 3V7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
        pin: '<path d="M12 21C12 21 19 14.6 19 9.5C19 5.4 15.9 2.5 12 2.5C8.1 2.5 5 5.4 5 9.5C5 14.6 12 21 12 21Z" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="9.5" r="2.5" stroke="currentColor" stroke-width="1.8"/>',
        people: '<circle cx="9" cy="8" r="3.2" stroke="currentColor" stroke-width="1.8"/><path d="M3 19C3 15.7 5.7 13.5 9 13.5C12.3 13.5 15 15.7 15 19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M16 5.2C17.6 5.6 18.7 7 18.7 8.6C18.7 10.2 17.6 11.6 16 12M18 14C19.9 14.6 21 16.4 21 19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
        paper: '<path d="M6 3H14.5L19 7.5V21H6V3Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M14 3V8H19M9 12H16M9 15.5H16M9 19H13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
        star: '<path d="M12 1L14.2 9.8L23 12L14.2 14.2L12 23L9.8 14.2L1 12L9.8 9.8L12 1Z" fill="currentColor"/>',
        chevL: '<path d="M15 5L8 12L15 19" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
        chevR: '<path d="M9 5L16 12L9 19" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>'
    };
    const icon = (k) => `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">${ICONS[k] || ICONS.star}</svg>`;

    /* ---------- Hero: event pass ---------- */
    const pass = (p) => {
        const ev = p.event;
        const rows = [
            ['calendar', 'Date', `${ev.date}${ev.day ? ` • ${ev.day}` : ''}`],
            ['pin', 'Venue', ev.venue],
            ['people', 'For', ev.audience]
        ].filter(([, , v]) => v);
        const code = (ev.code || p.id).toUpperCase();
        return `
            <div class="ev-pass" id="ppCover" data-reveal>
                <div class="ev-pass-photo">
                    <img src="${src(p.cover)}" alt="${esc(p.title)}"${p.coverPosition ? ` style="object-position:${esc(p.coverPosition)}"` : ''} />
                    <span class="ev-pass-host">${icon('star')}${esc(ev.host || '')}</span>
                </div>
                <div class="ev-pass-body">
                    <span class="ev-pass-kicker">Event pass • ${esc(ev.format || 'Event')}</span>
                    <strong class="ev-pass-title">${esc(p.title)}</strong>
                    <dl class="ev-pass-rows">
                        ${rows.map(([ic, k, v]) => `<div>${icon(ic)}<dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}
                    </dl>
                </div>
                <div class="ev-pass-stub" aria-hidden="true">
                    <span class="ev-pass-code">${esc(code)}</span>
                    <span class="ev-pass-barcode"></span>
                    <span class="ev-pass-admit">Admit • ${esc(ev.admit || 'All')}</span>
                </div>
            </div>`;
    };

    /* ---------- Run of show ---------- */
    const program = (p) => {
        const sessions = p.event.sessions || [];
        if (!sessions.length) return '';
        return `
        <section class="pp-section ev-section" id="program">
            <div class="pp-section-head" data-reveal>
                <span class="pp-eyebrow" data-num>Run of show</span>
                <h2 class="pp-h2">The day, minute by minute</h2>
            </div>
            <div class="ev-show" data-reveal>
                <div class="ev-tabs" role="tablist" aria-label="Sessions">
                    ${sessions
                .map(
                    (s, i) => `
                    <button type="button" role="tab" class="ev-tab ev-tab--${esc(s.key)}${i === 0 ? ' is-active' : ''}" aria-selected="${i === 0}" data-ev-tab="${i}">
                        <span class="ev-tab-icon">${icon(s.icon || s.key)}</span>
                        <span class="ev-tab-text">
                            <small>${esc(s.part)} • ${esc(s.time)}</small>
                            <b>${esc(s.label)}</b>
                        </span>
                    </button>`
                )
                .join('')}
                </div>
                ${sessions
                .map(
                    (s, i) => `
                <div class="ev-session${i === 0 ? ' is-active' : ''}" role="tabpanel" data-ev-panel="${i}"${i === 0 ? '' : ' hidden'}>
                    <article class="ev-talk ev-talk--${esc(s.key)}">
                        <span class="ev-talk-icon">${icon(s.icon || s.key)}</span>
                        <div>
                            <span class="ev-talk-kicker">Featured talk • ${esc(s.label)}</span>
                            <h3>${esc(s.talk)}</h3>
                            <p>${esc(s.focus)}</p>
                            <span class="ev-talk-speaker">${icon('mic')}${esc(s.speaker)}</span>
                        </div>
                    </article>
                    <ol class="ev-slots">
                        ${(s.slots || [])
                        .map(
                            (sl, k) => `
                        <li class="ev-slot${sl.type ? ` ev-slot--${esc(sl.type)}` : ''}" style="--k:${k}">
                            <time>${esc(sl.time)}</time>
                            <span class="ev-slot-dot" aria-hidden="true"></span>
                            <div class="ev-slot-body">
                                <strong>${esc(sl.title)}</strong>
                                ${sl.who ? `<span>${esc(sl.who)}</span>` : ''}
                            </div>
                            ${sl.type === 'me' ? '<em class="ev-me">That’s me</em>' : sl.type === 'talk' ? '<em class="ev-tag">Talk</em>' : ''}
                        </li>`
                        )
                        .join('')}
                    </ol>
                </div>`
                )
                .join('')}
            </div>
        </section>`;
    };

    /* ---------- Paper trail ---------- */
    const papers = (p) => {
        const list = p.event.papers || [];
        const roles = p.event.roles || [];
        if (!list.length) return '';
        return `
        <section class="pp-section pp-section--tint ev-section" id="paper-trail">
            <div class="pp-section-head" data-reveal>
                <span class="pp-eyebrow" data-num>Paper trail</span>
                <h2 class="pp-h2">Behind the scenes</h2>
            </div>
            <div class="ev-trail">
                <div class="ev-roles" data-reveal>
                    <h3>What I spearheaded</h3>
                    <ul>
                        ${roles
                .map(
                    (r, i) => `
                        <li style="--i:${i}">
                            <span class="ev-role-num">${pad2(i + 1)}</span>
                            <div><strong>${esc(r.title)}</strong><span>${esc(r.text)}</span></div>
                        </li>`
                )
                .join('')}
                    </ul>
                </div>
                <div class="ev-folder" data-reveal>
                    <div class="ev-folder-tabs" role="tablist" aria-label="Documents">
                        ${list
                .map(
                    (d, i) => `<button type="button" role="tab" class="ev-folder-tab${i === 0 ? ' is-active' : ''}" aria-selected="${i === 0}" data-ev-paper="${i}">${esc(d.short || d.title)}</button>`
                )
                .join('')}
                    </div>
                    <div class="ev-sheets" style="--n:${list.length}">
                        ${list
                .map(
                    (d, i) => `
                        <article class="ev-sheet${i === 0 ? ' is-front' : ''}" data-ev-sheet="${i}" style="--d:${i}">
                            <header class="ev-sheet-head">
                                <span>${icon('paper')}${esc(p.event.host || '')}</span>
                                <small>${pad2(i + 1)} / ${pad2(list.length)}</small>
                            </header>
                            <h4>${esc(d.title)}</h4>
                            <p>${esc(d.text)}</p>
                            ${(d.items || []).length ? `<ul>${d.items.map((it) => `<li>${esc(it)}</li>`).join('')}</ul>` : ''}
                            ${d.sign ? `<footer class="ev-sheet-sign"><span>${esc(d.sign)}</span></footer>` : ''}
                        </article>`
                )
                .join('')}
                    </div>
                </div>
            </div>
        </section>`;
    };

    /* ---------- From the call (photo stage) ---------- */
    const moments = (p) => {
        const shots = p.event.photos || [];
        if (!shots.length) return '';
        return `
        <section class="pp-section ev-section" id="moments">
            <div class="pp-section-head" data-reveal>
                <span class="pp-eyebrow" data-num>${esc(p.event.photosKicker || 'From the call')}</span>
                <h2 class="pp-h2">${esc(p.event.photosHeading || 'Moments from the webinar')}</h2>
            </div>
            <div class="ev-stage${p.event.stageShape === 'square' ? ' ev-stage--square' : ''}" data-reveal>
                <div class="ev-stage-window">
                    <div class="ev-stage-bar">
                        <span class="ev-rec${p.event.stageBadge ? ' ev-rec--alt' : ''}"><i></i>${esc(p.event.stageBadge || 'REC')}</span>
                        <span class="ev-stage-title">${esc(p.title)} • ${esc(p.event.venue || '')}</span>
                        <span class="ev-stage-count" id="evStageCount">01 / ${pad2(shots.length)}</span>
                    </div>
                    <button type="button" class="ev-stage-frame" id="evStageFrame" data-lightbox data-src="${src(shots[0].src)}" data-caption="${esc(shots[0].caption)}" aria-label="Enlarge photo">
                        ${shots.map((s, i) => `<img src="${src(s.src)}" alt="${esc(s.caption)}" class="${i === 0 ? 'is-active' : ''}" data-ev-img="${i}" ${i ? 'loading="lazy"' : ''} />`).join('')}
                    </button>
                    <div class="ev-stage-foot">
                        <button type="button" class="ev-stage-nav" data-ev-step="-1" aria-label="Previous photo">${icon('chevL')}</button>
                        <p class="ev-stage-caption" id="evStageCaption" aria-live="polite">${esc(shots[0].caption)}</p>
                        <button type="button" class="ev-stage-nav" data-ev-step="1" aria-label="Next photo">${icon('chevR')}</button>
                    </div>
                </div>
                <div class="ev-thumbs" role="tablist" aria-label="Photos">
                    ${shots
                .map(
                    (s, i) => `<button type="button" role="tab" class="ev-thumb${i === 0 ? ' is-active' : ''}" aria-selected="${i === 0}" data-ev-thumb="${i}" aria-label="${esc(s.caption)}"><img src="${src(s.src)}" alt="" loading="lazy" /><span>${pad2(i + 1)}</span></button>`
                )
                .join('')}
                </div>
            </div>
        </section>`;
    };

    const build = (p) => ({
        pass: pass(p),
        sections: program(p) + papers(p) + moments(p),
        nav: [
            (p.event.sessions || []).length && { id: 'program', label: 'Run of show' },
            (p.event.papers || []).length && { id: 'paper-trail', label: 'Paper trail' },
            (p.event.photos || []).length && { id: 'moments', label: p.event.photosNav || 'Moments' }
        ].filter(Boolean)
    });

    /* ---------- Behaviour ---------- */
    const init = (p, reduceMotion) => {
        // Session tabs
        const tabs = [...document.querySelectorAll('[data-ev-tab]')];
        const panels = [...document.querySelectorAll('[data-ev-panel]')];
        const showSession = (i) => {
            tabs.forEach((t, k) => {
                t.classList.toggle('is-active', k === i);
                t.setAttribute('aria-selected', k === i ? 'true' : 'false');
            });
            panels.forEach((pn, k) => {
                pn.hidden = k !== i;
                pn.classList.toggle('is-active', k === i);
            });
        };
        tabs.forEach((t, i) => {
            t.addEventListener('click', () => showSession(i));
            t.addEventListener('keydown', (e) => {
                if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
                const n = (i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
                showSession(n);
                tabs[n].focus();
            });
        });

        // Paper trail: bring a sheet to the front
        const ptabs = [...document.querySelectorAll('[data-ev-paper]')];
        const sheets = [...document.querySelectorAll('[data-ev-sheet]')];
        const showPaper = (i) => {
            ptabs.forEach((t, k) => {
                t.classList.toggle('is-active', k === i);
                t.setAttribute('aria-selected', k === i ? 'true' : 'false');
            });
            // stack order: chosen sheet on top, the rest fan behind it in order
            sheets.forEach((s, k) => {
                const depth = (k - i + sheets.length) % sheets.length;
                s.style.setProperty('--d', depth);
                s.classList.toggle('is-front', depth === 0);
            });
        };
        ptabs.forEach((t, i) => t.addEventListener('click', () => showPaper(i)));
        sheets.forEach((s, i) => s.addEventListener('click', () => !s.classList.contains('is-front') && showPaper(i)));
        showPaper(0);

        // Photo stage
        const shots = p.event.photos || [];
        const frame = document.getElementById('evStageFrame');
        if (!frame || !shots.length) return;
        const imgs = [...frame.querySelectorAll('[data-ev-img]')];
        const thumbs = [...document.querySelectorAll('[data-ev-thumb]')];
        const caption = document.getElementById('evStageCaption');
        const count = document.getElementById('evStageCount');
        let cur = 0;
        let timer = null;
        const go = (i) => {
            cur = (i + shots.length) % shots.length;
            imgs.forEach((im, k) => im.classList.toggle('is-active', k === cur));
            thumbs.forEach((t, k) => {
                t.classList.toggle('is-active', k === cur);
                t.setAttribute('aria-selected', k === cur ? 'true' : 'false');
            });
            caption.textContent = shots[cur].caption;
            count.textContent = `${pad2(cur + 1)} / ${pad2(shots.length)}`;
            frame.dataset.src = encodeURI(shots[cur].src);
            frame.dataset.caption = shots[cur].caption;
        };
        const stop = () => {
            clearInterval(timer);
            timer = null;
        };
        const start = () => {
            if (reduceMotion || timer) return;
            timer = setInterval(() => go(cur + 1), 4500);
        };
        thumbs.forEach((t, i) => t.addEventListener('click', () => (stop(), go(i))));
        document.querySelectorAll('[data-ev-step]').forEach((b) =>
            b.addEventListener('click', () => (stop(), go(cur + Number(b.dataset.evStep))))
        );
        const stage = frame.closest('.ev-stage');
        stage.addEventListener('pointerenter', stop);
        new IntersectionObserver((entries) => (entries[0].isIntersecting ? start() : stop()), { threshold: 0.4 }).observe(stage);
    };

    return { build, init };
})();
