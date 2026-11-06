/* ==========================================================================
   AIRCHIVE — Shared Project Data
   Used by index.html (Projects folder + Project Showcase page) and
   project.html (one page per project, opened as project.html?id=<id>).

   ✏️ HOW TO EDIT
   - Every entry marked `sample: true` is a PLACEHOLDER. Replace the text with
     your real project and delete the `sample` line.
   - `id` must be unique and URL-friendly (lowercase, dashes): it becomes
     project.html?id=your-id
   - `group` must be one of: 'tech', 'design', 'events'
   - `cover` (optional): image path such as 'assets/projects/my-app.png'.
     Without it, a styled gradient cover is drawn.
   - `gallery` (optional): [{ src: 'assets/projects/shot-1.png', caption: '...' }]
   - `links` (optional): live / repo / caseStudy URLs; empty ones are hidden.
   - `category` (design projects only): 'merch' | 'publication' | 'poster' | 'presentation'
     — sorts them into the Design sub-filters on the Project Showcase.
   - `coverPosition` (optional): which part of the cover to show, e.g. 'center top'
     for tall posters.
   ========================================================================== */
window.AIRCHIVE_PROJECTS = {
    groups: [
        {
            key: 'tech',
            label: 'Tech Systems',
            kicker: 'Build • Ship • Iterate',
            desc: 'Information systems, web apps and prototypes — taken from ERD and wireframe to a working interface.',
            icon: '<path d="M8 9L4 12L8 15M16 9L20 12L16 15M13.5 6.5L10.5 17.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
        },
        {
            key: 'design',
            label: 'Designs',
            kicker: 'Merch • Pubmats • Posters • Decks',
            desc: 'Merchandise, publication materials, posters and presentation decks that give ideas a recognisable look.',
            categories: [
                { key: 'merch', label: 'Merchandise Design', short: 'Merch' },
                { key: 'publication', label: 'Publication Materials', short: 'Pubmats' },
                { key: 'poster', label: 'Posters', short: 'Posters' },
                { key: 'presentation', label: 'PowerPoint Presentations', short: 'Decks' }
            ],
            icon: '<path d="M12 3C7 3 3 6.8 3 11.5C3 15.6 6.2 18 9 18C10.3 18 10.8 17.2 10.8 16.4C10.8 15.3 10 15 10 14C10 13.1 10.7 12.5 11.6 12.5H14C17.9 12.5 21 10.9 21 8C21 5 17 3 12 3Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="7.5" cy="10.5" r="1.3" fill="currentColor"/><circle cx="11" cy="7" r="1.3" fill="currentColor"/><circle cx="15.5" cy="7.5" r="1.3" fill="currentColor"/>'
        },
        {
            key: 'events',
            label: 'Events Lead',
            kicker: 'Plan • Lead • Deliver',
            desc: 'Events, programs and organisational initiatives I led — from first plan to final turnout.',
            icon: '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5" stroke="currentColor" stroke-width="2"/><path d="M3.5 10H20.5M8 3V7M16 3V7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M12 12.6L12.9 14.4L14.9 14.7L13.45 16.1L13.8 18.1L12 17.15L10.2 18.1L10.55 16.1L9.1 14.7L11.1 14.4L12 12.6Z" fill="currentColor"/>'
        }
    ],

    projects: [
        /* ---------------- TECH SYSTEMS ---------------- */
        {
            id: 'tech-system-01',
            group: 'tech',
            sample: true,
            title: 'Tech System Project 01',
            tagline: 'Placeholder tagline — one line on what this system does.',
            role: 'Front-End Developer',
            year: '2025',
            duration: '3 months',
            team: 'Team of 4',
            status: 'Completed',
            summary: 'Placeholder — describe the system, who uses it, and the problem it solves.',
            overview: 'Placeholder overview. Explain the context: who asked for this system, what was happening before it existed, and what it needed to do.',
            challenge: 'Placeholder challenge. What made this hard? Think about users, data, time, or technical limits.',
            approach: [
                { title: 'Research & Requirements', text: 'Placeholder — how you gathered requirements and wrote user stories.' },
                { title: 'Data & System Design', text: 'Placeholder — the ERD, data flow, or architecture decisions.' },
                { title: 'Build & Test', text: 'Placeholder — how you built the interface and validated it with users.' }
            ],
            outcomes: [
                { value: '00%', label: 'Placeholder metric' },
                { value: '00+', label: 'Placeholder users' },
                { value: '0×', label: 'Placeholder improvement' }
            ],
            highlights: ['Placeholder highlight one', 'Placeholder highlight two', 'Placeholder highlight three'],
            tools: ['HTML/CSS', 'JavaScript', 'MySQL'],
            links: { live: '', repo: '', caseStudy: '' },
            cover: '',
            gallery: []
        },
        {
            id: 'tech-system-02',
            group: 'tech',
            sample: true,
            title: 'Tech System Project 02',
            tagline: 'Placeholder tagline — one line on what this prototype does.',
            role: 'UI/UX Designer',
            year: '2025',
            duration: '6 weeks',
            team: 'Solo',
            status: 'Prototype',
            summary: 'Placeholder — describe the prototype and the user flows you designed.',
            overview: 'Placeholder overview of the product and its users.',
            challenge: 'Placeholder challenge the design had to solve.',
            approach: [
                { title: 'User Flows', text: 'Placeholder — mapping the key journeys.' },
                { title: 'Wireframes', text: 'Placeholder — low-fidelity layouts and testing.' },
                { title: 'High-Fidelity Prototype', text: 'Placeholder — final UI and interactions.' }
            ],
            outcomes: [
                { value: '00', label: 'Placeholder screens' },
                { value: '00%', label: 'Placeholder task success' }
            ],
            highlights: ['Placeholder highlight one', 'Placeholder highlight two'],
            tools: ['Figma', 'Lucidchart'],
            links: { live: '', repo: '', caseStudy: '' },
            cover: '',
            gallery: []
        },
        {
            id: 'tech-system-03',
            group: 'tech',
            sample: true,
            title: 'Tech System Project 03',
            tagline: 'Placeholder tagline.',
            role: 'Systems Analyst',
            year: '2024',
            duration: '2 months',
            team: 'Team of 3',
            status: 'Completed',
            summary: 'Placeholder — describe the database design and how it shaped the build.',
            overview: 'Placeholder overview.',
            challenge: 'Placeholder challenge.',
            approach: [
                { title: 'Analysis', text: 'Placeholder step.' },
                { title: 'ERD & Schema', text: 'Placeholder step.' },
                { title: 'Handoff', text: 'Placeholder step.' }
            ],
            outcomes: [{ value: '00', label: 'Placeholder tables' }],
            highlights: ['Placeholder highlight'],
            tools: ['ERD', 'MySQL'],
            links: { live: '', repo: '', caseStudy: '' },
            cover: '',
            gallery: []
        },
        {
            id: 'tech-system-04',
            group: 'tech',
            sample: true,
            title: 'Tech System Project 04',
            tagline: 'Placeholder tagline.',
            role: 'AI Workflow Builder',
            year: '2024',
            duration: '1 month',
            team: 'Solo',
            status: 'Live',
            summary: 'Placeholder — describe the automation and the time it saved.',
            overview: 'Placeholder overview.',
            challenge: 'Placeholder challenge.',
            approach: [
                { title: 'Map the Manual Process', text: 'Placeholder step.' },
                { title: 'Automate', text: 'Placeholder step.' }
            ],
            outcomes: [{ value: '00 hrs', label: 'Placeholder time saved' }],
            highlights: ['Placeholder highlight'],
            tools: ['AI Tools', 'Automation'],
            links: { live: '', repo: '', caseStudy: '' },
            cover: '',
            gallery: []
        },

        /* ---------------- DESIGNS ---------------- */
        {
            id: 'design-dos-membership-card-2026',
            group: 'design',
            category: 'merch',
            title: 'BPSU-DOS Membership Card 2026',
            tagline: 'A liquid-chrome 3D "DS" emblem that turns a membership card into a keepsake.',
            role: 'Graphic Designer',
            year: '2026',
            duration: '',
            team: 'BPSU-DOST Organization of Scholars',
            status: '',
            summary: 'Membership card design for the Bataan Peninsula State University – DOST Organization of Scholars (BPSU-DOS), built around a glossy, liquid-chrome 3D "DS" cube monogram on a flowing blue backdrop.',
            overview: 'The 2026 membership card gives every BPSU-DOS scholar a tangible piece of the organization’s identity. The front centers a three-dimensional "DS" cube rendered in a glassy, chrome finish, with the BPSU and DOS wordmarks curving around it and a clear MEMBER designation in the corner.',
            challenge: '',
            approach: [],
            outcomes: [],
            highlights: [
                '3D liquid-chrome "DS" cube monogram as the hero element',
                'Curved BPSU and DOS wordmarks orbiting the emblem',
                'Blue light-streak backdrop matching the organization’s colors',
                'Clean typographic header and MEMBER tag for instant recognition'
            ],
            tools: ['Merchandise Design', 'Branding', '3D Typography'],
            links: { live: '', repo: '', caseStudy: '' },
            cover: 'assets/DOS-Membership-Card-2026.png',
            gallery: [{ src: 'assets/DOS-Membership-Card-2026.png', caption: 'Membership card — front design' }]
        },
        {
            id: 'design-sentro-r3-world-cafe-poster',
            group: 'design',
            category: 'poster',
            title: 'SENTRO for Brilliance — Region III World Café Poster',
            tagline: 'An infographic poster telling DOST-SENTRO’s story, from its 2022 beginnings to its 2025 milestones.',
            role: 'Graphic Designer',
            year: '2025',
            duration: '',
            team: 'DOST-SENTRO (Region III)',
            status: '',
            summary: 'A large-format infographic poster for the DOST Scholars Empowered Nationalistic and Tactical Regional Organization (SENTRO), made for the Region III World Café. It maps the organization’s backbone programs across member chapters, its yearly milestones, and the problems and solutions it proposes for scholars in Central Luzon.',
            overview: 'The poster introduces DOST-SENTRO as the official regional organization of DOST-SEI scholars in Central Luzon, then walks viewers through its "Backbones" (flagship programs of each member chapter), a 2022–2025 milestone timeline, its core values, and a Problems & Solutions panel, closing with a QR code and contact links.',
            challenge: '',
            approach: [],
            outcomes: [],
            highlights: [
                'Halftone scholar portrait as the centerpiece, framed by chapter badges',
                'Milestone fan for 2022 → 2025: Prime Flame, Bounded Orbit, Rising Pillars, New Horizon',
                '"Backbones" section featuring programs from each member chapter',
                'Problems & Solutions panels, core-value steps, and a QR code for follow-up'
            ],
            tools: ['Poster Design', 'Infographics', 'Layout'],
            links: { live: '', repo: '', caseStudy: '' },
            cover: 'assets/R3_Poster_WorldCafe.png',
            coverPosition: 'center top',
            gallery: [{ src: 'assets/R3_Poster_WorldCafe.png', caption: 'Full poster — SENTRO for Brilliance' }]
        },
        {
            id: 'design-publication-01',
            group: 'design',
            category: 'publication',
            sample: true,
            title: 'Publication Materials Project',
            tagline: 'Placeholder tagline.',
            role: 'Pubmat Designer',
            year: '2025',
            duration: '',
            team: 'Creatives Team',
            status: 'Published',
            summary: 'Placeholder — describe the campaign and its publication materials.',
            overview: 'Placeholder overview.',
            challenge: '',
            approach: [],
            outcomes: [],
            highlights: ['Placeholder highlight'],
            tools: ['Publication Design', 'Layout'],
            links: { live: '', repo: '', caseStudy: '' },
            cover: '',
            gallery: []
        },
        {
            id: 'design-presentation-01',
            group: 'design',
            category: 'presentation',
            sample: true,
            title: 'PowerPoint Presentation Project',
            tagline: 'Placeholder tagline.',
            role: 'Presentation Designer',
            year: '2025',
            duration: '',
            team: 'Solo',
            status: 'Presented',
            summary: 'Placeholder — describe the deck, its audience and the story it tells.',
            overview: 'Placeholder overview.',
            challenge: '',
            approach: [],
            outcomes: [],
            highlights: ['Placeholder highlight'],
            tools: ['PowerPoint', 'Slide Design'],
            links: { live: '', repo: '', caseStudy: '' },
            cover: '',
            gallery: []
        },

        /* ---------------- EVENTS LEAD ---------------- */
        {
            id: 'event-01',
            group: 'events',
            sample: true,
            title: 'Event Project 01',
            tagline: 'Placeholder tagline — what the event set out to do.',
            role: 'Event Lead',
            year: '2025',
            duration: '2 months of planning',
            team: 'Committee of 00',
            status: 'Held',
            summary: 'Placeholder — describe the event, its scale, and what you were responsible for.',
            overview: 'Placeholder overview of the event and its audience.',
            challenge: 'Placeholder challenge — budget, timeline, people, or logistics.',
            approach: [
                { title: 'Planning', text: 'Placeholder step.' },
                { title: 'Team & Logistics', text: 'Placeholder step.' },
                { title: 'Event Day', text: 'Placeholder step.' }
            ],
            outcomes: [
                { value: '000', label: 'Placeholder attendees' },
                { value: '00', label: 'Placeholder volunteers' }
            ],
            highlights: ['Placeholder highlight'],
            tools: ['Planning', 'Leadership'],
            links: { live: '', repo: '', caseStudy: '' },
            cover: '',
            gallery: []
        },
        {
            id: 'event-02',
            group: 'events',
            sample: true,
            title: 'Event Project 02',
            tagline: 'Placeholder tagline.',
            role: 'Program Head',
            year: '2024',
            duration: '1 month',
            team: 'Team of 00',
            status: 'Held',
            summary: 'Placeholder — describe the program and its outcome.',
            overview: 'Placeholder overview.',
            challenge: 'Placeholder challenge.',
            approach: [
                { title: 'Program Design', text: 'Placeholder step.' },
                { title: 'Execution', text: 'Placeholder step.' }
            ],
            outcomes: [{ value: '000', label: 'Placeholder participants' }],
            highlights: ['Placeholder highlight'],
            tools: ['Operations', 'Logistics'],
            links: { live: '', repo: '', caseStudy: '' },
            cover: '',
            gallery: []
        },
        {
            id: 'event-03',
            group: 'events',
            sample: true,
            title: 'Event Project 03',
            tagline: 'Placeholder tagline.',
            role: 'Creative Director',
            year: '2024',
            duration: '6 weeks',
            team: 'Cast & Crew of 00',
            status: 'Staged',
            summary: 'Placeholder — describe the production you directed.',
            overview: 'Placeholder overview.',
            challenge: 'Placeholder challenge.',
            approach: [
                { title: 'Script & Casting', text: 'Placeholder step.' },
                { title: 'Rehearsals', text: 'Placeholder step.' },
                { title: 'Show', text: 'Placeholder step.' }
            ],
            outcomes: [{ value: '000', label: 'Placeholder audience' }],
            highlights: ['Placeholder highlight'],
            tools: ['Directing', 'Production'],
            links: { live: '', repo: '', caseStudy: '' },
            cover: '',
            gallery: []
        }
    ]
};
