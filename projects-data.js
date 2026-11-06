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
            kicker: 'Brand • Pubmats • Motion',
            desc: 'Brand identities, publication materials and visual campaigns that give ideas a recognisable look.',
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
            id: 'design-01',
            group: 'design',
            sample: true,
            title: 'Design Project 01',
            tagline: 'Placeholder tagline — the idea behind the brand.',
            role: 'Brand Designer',
            year: '2025',
            duration: '4 weeks',
            team: 'Solo',
            status: 'Delivered',
            summary: 'Placeholder — describe the brand identity and the concept behind it.',
            overview: 'Placeholder overview of the client or organisation and the brief.',
            challenge: 'Placeholder challenge.',
            approach: [
                { title: 'Moodboard & Concept', text: 'Placeholder step.' },
                { title: 'Logo & System', text: 'Placeholder step.' },
                { title: 'Applications', text: 'Placeholder step.' }
            ],
            outcomes: [{ value: '00', label: 'Placeholder assets' }],
            highlights: ['Placeholder highlight'],
            tools: ['Canva', 'Branding'],
            links: { live: '', repo: '', caseStudy: '' },
            cover: '',
            gallery: []
        },
        {
            id: 'design-02',
            group: 'design',
            sample: true,
            title: 'Design Project 02',
            tagline: 'Placeholder tagline.',
            role: 'Pubmat Designer',
            year: '2025',
            duration: 'Ongoing',
            team: 'Creatives Team',
            status: 'Published',
            summary: 'Placeholder — describe the campaign and its publication materials.',
            overview: 'Placeholder overview.',
            challenge: 'Placeholder challenge.',
            approach: [
                { title: 'Campaign Direction', text: 'Placeholder step.' },
                { title: 'Layouts', text: 'Placeholder step.' }
            ],
            outcomes: [{ value: '00K', label: 'Placeholder reach' }],
            highlights: ['Placeholder highlight'],
            tools: ['Canva', 'Layout'],
            links: { live: '', repo: '', caseStudy: '' },
            cover: '',
            gallery: []
        },
        {
            id: 'design-03',
            group: 'design',
            sample: true,
            title: 'Design Project 03',
            tagline: 'Placeholder tagline.',
            role: 'Video Editor',
            year: '2024',
            duration: '2 weeks',
            team: 'Film Team',
            status: 'Released',
            summary: 'Placeholder — describe the reel or film and your role in it.',
            overview: 'Placeholder overview.',
            challenge: 'Placeholder challenge.',
            approach: [
                { title: 'Storyboard', text: 'Placeholder step.' },
                { title: 'Edit & Grade', text: 'Placeholder step.' }
            ],
            outcomes: [{ value: '00K', label: 'Placeholder views' }],
            highlights: ['Placeholder highlight'],
            tools: ['Video Editing', 'Storyboard'],
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
