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
   - `devices` / `features` (optional): interactive desktop + phone mock-ups and a
     screen-by-screen feature tour on the project page (see the GEN-ZYNC entry).
   - `coverPosition` (optional): which part of the cover to show, e.g. 'center top'
     for tall posters.
   - `film` (optional): makes the project a video. It opens in the reel archive
     (film.html?id=<id>) instead of project.html. Fields:
       src        → the short PREVIEW clip played on the page (H.264 MP4, ~1–1:30 min)
       driveUrl   → 🔗 Google Drive link to the FULL video. Paste it between the quotes;
                    while empty, the page says "Full video link coming soon".
       runtime    → length of the full video ('m:ss')
       poster, format, premiere (what it was made for), brief (editor's note),
       chapters [{ t: seconds in the full video, label, thumb }] — scenes after the
                    preview ends are marked "Full video" and open the Drive link,
       pipeline [{ title, text, tool }], credits [{ role, name }], related (project id).
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
            kicker: 'Merch • Pubmats • Posters • Decks • Videos',
            desc: 'Merchandise, publication materials, posters, presentation decks and videos that give ideas a recognisable look.',
            categories: [
                { key: 'merch', label: 'Merchandise Design', short: 'Merch' },
                { key: 'publication', label: 'Publication Materials', short: 'Pubmats' },
                { key: 'poster', label: 'Posters', short: 'Posters' },
                { key: 'presentation', label: 'PowerPoint Presentations', short: 'Decks' },
                { key: 'video', label: 'Video Productions', short: 'Videos' }
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
            id: 'genzync',
            group: 'tech',
            title: 'GEN-ZYNC',
            tagline: 'A Smart Web-Based Collaboration and Program Development System for the Bataan Youth Development Office (BYDO) with AI and SMS Notification.',
            role: 'Team Leader & UI/UX Designer',
            year: '2026',
            duration: '',
            team: 'Thesis team',
            status: 'Best Paper – IT Category',
            summary: 'A web portal that streamlines collaboration between youth offices, enhances program development, and bridges the gap among youth stakeholders in Bataan — with automatic SMS alerts and an AI chatbot for youth participants.',
            overview: 'GEN-ZYNC modernizes how the Bataan Youth Development Office and municipal youth offices collaborate and develop programs. Staff can draft program proposals, plan activities with cost estimation, and establish partnerships. Published activities appear on a calendar where youth can register, and SMS notifications are sent automatically to all youth participants whenever a new activity is published. The head and staff monitor registered participants and programs, communicate through discussion boards and direct messaging, and post announcements, while an AI chatbot answers youth participants’ inquiries.',
            challenge: 'Collaboration and program development among youth offices relied on an older, slower way of working — making it harder to coordinate proposals and partnerships, reach youth participants on time, and answer their questions.',
            approach: [
                { title: 'Plan with Agile', text: 'Agile Methodology served as the development framework, keeping the system in sync with its requirements as they evolved.' },
                { title: 'Design the experience', text: 'Designed the admin panel, end-user interface and landing page in Figma, then developed the front end.' },
                { title: 'Build the core modules', text: 'Program proposals with cost estimation, partnerships, an activity calendar with registration, announcements, discussion boards and direct messaging.' },
                { title: 'Add smart features', text: 'Automatic SMS notifications for newly published activities and an AI chatbot for youth inquiries.' },
                { title: 'Evaluate with ISO 25010', text: 'Assessed functional suitability, performance efficiency, compatibility, usability, reliability, security, maintainability and portability with 100 participants.' }
            ],
            outcomes: [
                { value: '4.61', label: 'Overall rating — “Highly Acceptable”' },
                { value: '100', label: 'Evaluation participants' },
                { value: '8', label: 'ISO 25010 quality characteristics evaluated' }
            ],
            highlights: [
                'Program proposals with activity planning and cost estimation',
                'Partnership and in-kind assistance requests between youth offices',
                'Activity calendar where youth register for published activities',
                'Automatic SMS alerts whenever a new activity is published',
                'Discussion boards, direct messaging and announcements',
                'AI chatbot that answers youth participants’ inquiries',
                'Won Best Paper – IT Category at the 16th CCST Student In-House Review and Research Exhibit'
            ],
            tools: ['Figma', 'UI/UX Design', 'Front-End Development', 'SMS Gateway', 'AI Chatbot', 'Agile', 'ISO 25010'],
            links: { live: '', repo: '', caseStudy: '' },
            cover: 'assets/genzync-system/landing-page.png',
            coverPosition: 'left top',

            /* Interactive device mock-ups (project.html "In action" section) */
            devices: {
                desktop: [
                    {
                        label: 'Landing page',
                        src: 'assets/genzync-system/landing-page.png',
                        alt: 'GEN-ZYNC landing page',
                        hotspots: [
                            { x: 41, y: 30, title: 'Unified Action for Every Young Bataeño', text: 'The hero introduces GEN-ZYNC as a hub for collaboration, program development and information sharing among youth offices.' },
                            { x: 32.5, y: 59, title: 'Get Started', text: 'One clear call to action leads new visitors into the platform.' },
                            { x: 61, y: 10, title: 'Public navigation', text: 'Home, About Us, FAQs and Contact Us for anyone visiting the portal.' },
                            { x: 96.5, y: 10, title: 'Login', text: 'Youth participants and youth-office staff sign in to their own side of the system.' },
                            { x: 50, y: 92, title: 'Two audiences', text: 'Features are presented separately for Youth Offices and Youth Participants.' }
                        ]
                    },
                    {
                        label: 'Admin dashboard',
                        src: 'assets/genzync-system/admin side.png',
                        alt: 'GEN-ZYNC BYDO head executive dashboard',
                        hotspots: [
                            { x: 15.5, y: 58, title: 'Role-based sidebar', text: 'Proposals, accounts, activities, announcements, discussion board, messages, SMS gateway, final reports and chatbot setup.' },
                            { x: 86, y: 29.5, title: 'Review queue', text: 'The head jumps straight to proposals waiting for executive action.' },
                            { x: 57, y: 42.5, title: 'At-a-glance counts', text: 'Accounts, active personnel, proposals for review, approved and returned proposals.' },
                            { x: 63, y: 66.5, title: 'Proposals awaiting review', text: 'Each card shows the office, category and budget, with a one-click Review Proposal action.' },
                            { x: 96.5, y: 66.5, title: 'Executive dispatch', text: 'Shortcuts to review proposals, create staff accounts and manage staff.' }
                        ]
                    }
                ],
                phones: [
                    { label: 'Phone view', kind: 'video', src: 'assets/genzync-system/Phone-view.mov', type: 'video/mp4', caption: 'GEN-ZYNC on a phone' },
                    { label: 'SMS alert', kind: 'video', src: 'assets/genzync-system/SMS.mp4', type: 'video/mp4', caption: 'Automatic SMS notification' },
                    { label: 'AI chatbot', kind: 'image', src: 'assets/genzync-system/chatbot.PNG', caption: 'GenZync AI answering “How to Register”' }
                ]
            },

            /* Feature tour (project.html "Feature tour" section) */
            features: [
                { title: 'Executive dashboard', path: '/head', src: 'assets/genzync-system/admin side.png', text: 'The BYDO head sees accounts, proposals awaiting review, approvals and returns at a glance, with shortcuts to every executive action.' },
                { title: 'Program proposals', path: '/head/program-proposals', src: 'assets/genzync-system/Screenshot 2026-10-09 025155.png', text: 'Every proposal with its schedule, activities and budget, partner offices and status — pending, approved, returned or past start date.' },
                { title: 'Proposal review', path: '/head/program-proposals/review', src: 'assets/genzync-system/Screenshot 2026-10-09 025229.png', text: 'Budget, schedule, scope and proponent in one view, with Approve or Return for Revision — and a warning when the start date has passed.' },
                { title: 'Partnerships', path: '/head/program-proposals/partnerships', src: 'assets/genzync-system/Screenshot 2026-10-10 194743.png', text: 'Youth offices request partnership and in-kind assistance — logistics, speakers, materials — with endorsement letters attached.' },
                { title: 'Calendar of activities', path: '/head/activities', src: 'assets/genzync-system/Screenshot 2026-10-09 150319.png', text: 'Published activities on a month, week or agenda calendar, filtered by status and office, with a daily agenda panel.' },
                { title: 'Activity records', path: '/head/activities/records', src: 'assets/genzync-system/redacted/activity-records.png', text: 'A registration masterlist and attendance logs with registered, attended, no-show and turnout-rate counts.' },
                { title: 'Announcements', path: '/head/announcements', src: 'assets/genzync-system/Screenshot 2026-10-09 042224.png', text: 'Offices post announcements by category, with search, date filters and trending hashtags.' },
                { title: 'Discussion board', path: '/head/discussion-board', src: 'assets/genzync-system/Screenshot 2026-10-09 154126.png', text: 'Internal, external and office-to-office threads with acknowledgements, comments and a member directory.' },
                { title: 'SMS dispatch audit', path: '/head/sms/logs', src: 'assets/genzync-system/redacted/sms-dispatch-log.png', text: 'Delivery proof for every automated announcement, event and proposal SMS — 50 dispatched, 48 delivered.' },
                { title: 'Custom SMS broadcast', path: '/head/sms/broadcast', src: 'assets/genzync-system/Screenshot 2026-10-09 172500.png', text: 'Quick templates and dynamic tags like {first_name} and {activity_name} for urgent advisories to youth segments.' },
                { title: 'Youth accounts', path: '/head/accounts?tab=youth', src: 'assets/genzync-system/redacted/youth-accounts.png', text: 'Youth registrations by municipality with document checks and verified, pending or rejected status.' }
            ],
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

        /* ---------------- VIDEO PRODUCTIONS (open in film.html) ---------------- */
        {
            id: 'video-region-3-promo',
            group: 'design',
            category: 'video',
            title: 'Region 3 Scholars Promotional Video',
            tagline: 'A province-by-province reel introducing the scholars of every Region 3 province for the National Patriot Scholars Congress.',
            role: 'Video Editor',
            year: '2026',
            team: 'DOST-SENTRO',
            status: 'Released',
            summary: 'A promotional video showcasing the scholars from each province of Region 3 (Central Luzon), edited for the National Patriot Scholars Congress.',
            tools: ['Video Editing', 'Storyboarding & Sequencing', 'Audio-Visual Sync'],
            cover: 'assets/videos/posters/region-3-promo.jpg',
            film: {
                src: 'assets/videos/previews/region-3-promo.mp4',
                driveUrl: '', // 🔗 paste the Google Drive link of the full video here
                poster: 'assets/videos/posters/region-3-promo.jpg',
                runtime: '1:58',
                format: '1080p • 16:9',
                premiere: 'National Patriot Scholars Congress',
                brief: 'I was tasked to edit a video showcasing all the scholars from each province of Region 3. The footage came from seven provinces, so the edit had to give every province its own moment while still feeling like one region.',
                chapters: [
                    { t: 0, label: 'Opening', thumb: 'assets/videos/thumbs/region-3-promo-00.jpg' },
                    { t: 41, label: 'Zambales', thumb: 'assets/videos/thumbs/region-3-promo-01.jpg' },
                    { t: 47, label: 'Bataan', thumb: 'assets/videos/thumbs/region-3-promo-02.jpg' },
                    { t: 53, label: 'Nueva Ecija', thumb: 'assets/videos/thumbs/region-3-promo-03.jpg' },
                    { t: 65, label: 'Tarlac', thumb: 'assets/videos/thumbs/region-3-promo-04.jpg' },
                    { t: 74, label: 'Pampanga', thumb: 'assets/videos/thumbs/region-3-promo-05.jpg' },
                    { t: 85, label: 'Aurora', thumb: 'assets/videos/thumbs/region-3-promo-06.jpg' },
                    { t: 92, label: 'Bulacan', thumb: 'assets/videos/thumbs/region-3-promo-07.jpg' },
                    { t: 99, label: 'Finale', thumb: 'assets/videos/thumbs/region-3-promo-08.jpg' }
                ],
                pipeline: [
                    { title: 'Gather', text: 'Collected event footage and photos from the scholars of all seven provinces.' },
                    { title: 'Sequence', text: 'Ordered the clips province by province, each opened with its own name card.' },
                    { title: 'Cut to the beat', text: 'Timed the cuts and transitions to the music to keep the energy up.' },
                    { title: 'Release', text: 'Delivered the final 1080p cut for the National Patriot Scholars Congress.' }
                ],
                credits: [
                    { role: 'Video Editor', name: 'Aira Bianca Ordaniel' },
                    { role: 'Featuring', name: 'The scholars of Aurora, Bataan, Bulacan, Nueva Ecija, Pampanga, Tarlac & Zambales' },
                    { role: 'For', name: 'National Patriot Scholars Congress' },
                    { role: 'Organization', name: 'DOST-SENTRO' }
                ]
            }
        },
        {
            id: 'video-genzync-presentation',
            group: 'design',
            category: 'video',
            title: 'GEN-ZYNC Video Presentation',
            tagline: 'An AI-assisted film that tells the GEN-ZYNC story — from scattered youth offices to one connected system — for the 16th In-House Review and Research Exhibit.',
            role: 'Creator & Video Editor',
            year: '2026',
            team: 'Thesis team',
            status: 'Presented',
            summary: 'A video presentation of our thesis system GEN-ZYNC, made with Claude Pro, Google Flow and CapCut and presented at the 16th In-House Review and Research Exhibit of BPSU – College of Computer Studies.',
            tools: ['Claude Pro', 'Google Flow', 'CapCut'],
            cover: 'assets/videos/posters/genzync-presentation.jpg',
            film: {
                src: 'assets/videos/previews/genzync-presentation.mp4',
                driveUrl: '', // 🔗 paste the Google Drive link of the full video here
                poster: 'assets/videos/posters/genzync-presentation.jpg',
                runtime: '4:23',
                format: '1080p • 16:9',
                premiere: '16th In-House Review and Research Exhibit, BPSU – CCS',
                related: 'genzync',
                brief: 'I made this video to present GEN-ZYNC at the 16th In-House Review and Research Exhibit. It opens on the everyday problem at the Bataan Youth Development Office, asks “what if every youth office could work as one?”, then walks through the system feature by feature. I built it with Claude Pro and Google Flow, and edited everything together in CapCut.',
                chapters: [
                    { t: 0, label: 'The problem', thumb: 'assets/videos/thumbs/genzync-presentation-00.jpg' },
                    { t: 66, label: 'What if…?', thumb: 'assets/videos/thumbs/genzync-presentation-01.jpg' },
                    { t: 78, label: 'Introducing GEN-ZYNC', thumb: 'assets/videos/thumbs/genzync-presentation-02.jpg' },
                    { t: 96, label: 'Landing & sign-up', thumb: 'assets/videos/thumbs/genzync-presentation-03.jpg' },
                    { t: 114, label: 'Dashboard & planning', thumb: 'assets/videos/thumbs/genzync-presentation-04.jpg' },
                    { t: 138, label: 'Collaboration requests', thumb: 'assets/videos/thumbs/genzync-presentation-05.jpg' },
                    { t: 168, label: 'Messages & files', thumb: 'assets/videos/thumbs/genzync-presentation-06.jpg' },
                    { t: 186, label: 'Announcements & SMS', thumb: 'assets/videos/thumbs/genzync-presentation-07.jpg' },
                    { t: 210, label: 'AI chatbot', thumb: 'assets/videos/thumbs/genzync-presentation-08.jpg' },
                    { t: 222, label: 'Attendance & monitoring', thumb: 'assets/videos/thumbs/genzync-presentation-09.jpg' },
                    { t: 246, label: 'Closing', thumb: 'assets/videos/thumbs/genzync-presentation-10.jpg' }
                ],
                pipeline: [
                    { title: 'Story', text: 'Framed the video as problem → “what if” → walkthrough, so the panel feels the need before seeing the system.', tool: 'Claude Pro' },
                    { title: 'Generate', text: 'Created the cinematic scenes of a day at the youth office with AI video generation.', tool: 'Google Flow' },
                    { title: 'Edit', text: 'Cut the scenes and system walkthrough together with captions, music and pacing.', tool: 'CapCut' },
                    { title: 'Present', text: 'Shown at the 16th In-House Review and Research Exhibit, where GEN-ZYNC won Best in Thesis Paper (IT).' }
                ],
                credits: [
                    { role: 'Created & edited by', name: 'Aira Bianca Ordaniel' },
                    { role: 'System', name: 'GEN-ZYNC — Thesis team' },
                    { role: 'Made with', name: 'Claude Pro • Google Flow • CapCut' },
                    { role: 'Presented at', name: '16th In-House Review and Research Exhibit, BPSU – College of Computer Studies' }
                ]
            }
        },

        {
            id: 'video-jlss-highlights-2025',
            group: 'design',
            category: 'video',
            title: 'JLSS 2025 Video Highlights',
            tagline: 'Highlights of the Junior Level Science Scholarship (JLSS) 2025 across the seven provinces of Region 3, edited for DOST-SENTRO.',
            role: 'Video Editor',
            year: '2025',
            team: 'DOST-SENTRO',
            status: 'Released',
            summary: 'A highlights video I edited for the Junior Level Science Scholarship (JLSS) 2025, moving province by province through Region 3.',
            tools: ['Video Editing', 'Motion Graphics', 'Audio-Visual Sync'],
            cover: 'assets/videos/posters/jlss-highlights.jpg',
            film: {
                src: 'assets/videos/previews/jlss-highlights.mp4',
                driveUrl: '', // 🔗 paste the Google Drive link of the full video here
                poster: 'assets/videos/posters/jlss-highlights.jpg',
                runtime: '2:20',
                format: '1080p • 16:9',
                premiere: 'Junior Level Science Scholarship (JLSS) 2025',
                brief: 'I edited the highlights of the Junior Level Science Scholarship (JLSS) 2025 for DOST-SENTRO. The video travels province by province through Region 3, with photo-collage transitions tying the moments from each venue into one story.',
                chapters: [
                    { t: 0, label: 'Opening', thumb: 'assets/videos/thumbs/jlss-highlights-00.jpg' },
                    { t: 38, label: 'Zambales', thumb: 'assets/videos/thumbs/jlss-highlights-01.jpg' },
                    { t: 47, label: 'Bataan', thumb: 'assets/videos/thumbs/jlss-highlights-02.jpg' },
                    { t: 62, label: 'Bulacan', thumb: 'assets/videos/thumbs/jlss-highlights-03.jpg' },
                    { t: 77, label: 'Pampanga', thumb: 'assets/videos/thumbs/jlss-highlights-04.jpg' },
                    { t: 89, label: 'Nueva Ecija', thumb: 'assets/videos/thumbs/jlss-highlights-05.jpg' },
                    { t: 104, label: 'Aurora', thumb: 'assets/videos/thumbs/jlss-highlights-06.jpg' },
                    { t: 113, label: 'Tarlac', thumb: 'assets/videos/thumbs/jlss-highlights-07.jpg' },
                    { t: 125, label: 'Finale', thumb: 'assets/videos/thumbs/jlss-highlights-08.jpg' }
                ],
                pipeline: [
                    { title: 'Collect', text: 'Gathered clips and photos from the JLSS venues across the seven provinces.' },
                    { title: 'Sequence', text: 'Arranged the footage province by province, each opened with its own name card.' },
                    { title: 'Collage', text: 'Built photo-collage transitions so still photos and video flow together.' },
                    { title: 'Release', text: 'Delivered the final 1080p highlights video for DOST-SENTRO.' }
                ],
                credits: [
                    { role: 'Video Editor', name: 'Aira Bianca Ordaniel' },
                    { role: 'Event', name: 'Junior Level Science Scholarship (JLSS) 2025' },
                    { role: 'Featuring', name: 'Aurora, Bataan, Bulacan, Nueva Ecija, Pampanga, Tarlac & Zambales' },
                    { role: 'Organization', name: 'DOST-SENTRO' }
                ]
            }
        },
        {
            id: 'video-dos-term-2024-2025',
            group: 'design',
            category: 'video',
            title: 'BPSU-DOS Term 2024–2025 Promotional Video',
            tagline: 'A promotional recap of the BPSU-DOST Organization of Scholars’ Term 2024–2025 — from the general assembly to the student leadership camp.',
            role: 'Video Editor',
            year: '2025',
            team: 'BPSU-DOST Organization of Scholars',
            status: 'Released',
            summary: 'The promotional video of the BPSU-DOST Organization of Scholars for Term 2024–2025, recapping every major program of the year.',
            tools: ['Video Editing', 'Motion Graphics', 'Storyboarding & Sequencing'],
            cover: 'assets/videos/posters/dos-term-2024-2025.jpg',
            film: {
                src: 'assets/videos/previews/dos-term-2024-2025.mp4',
                driveUrl: '', // 🔗 paste the Google Drive link of the full video here
                poster: 'assets/videos/posters/dos-term-2024-2025.jpg',
                runtime: '5:33',
                format: '1080p • 16:9',
                premiere: 'BPSU-DOST Organization of Scholars, Term 2024–2025',
                brief: 'This is the promotional video of the BPSU-DOST Organization of Scholars for Term 2024–2025. It walks through the whole term — the general assembly, merch selling, Iskonnovation, Project Lapis, ASCEND, the Student Leadership Camp and more — each opened with its own title card.',
                chapters: [
                    { t: 0, label: 'Opening', thumb: 'assets/videos/thumbs/dos-term-2024-2025-00.jpg' },
                    { t: 71, label: 'Para! sa Bayan — General Assembly', thumb: 'assets/videos/thumbs/dos-term-2024-2025-01.jpg' },
                    { t: 113, label: 'DOS Finds & Picks', thumb: 'assets/videos/thumbs/dos-term-2024-2025-02.jpg' },
                    { t: 125, label: 'Isko-Knows', thumb: 'assets/videos/thumbs/dos-term-2024-2025-03.jpg' },
                    { t: 149, label: 'Iskonnovation 2024', thumb: 'assets/videos/thumbs/dos-term-2024-2025-04.jpg' },
                    { t: 179, label: 'Innoveat', thumb: 'assets/videos/thumbs/dos-term-2024-2025-05.jpg' },
                    { t: 191, label: 'CTRL: Wellness & Wealth', thumb: 'assets/videos/thumbs/dos-term-2024-2025-06.jpg' },
                    { t: 215, label: 'Project Lapis', thumb: 'assets/videos/thumbs/dos-term-2024-2025-07.jpg' },
                    { t: 233, label: 'Project Reach', thumb: 'assets/videos/thumbs/dos-term-2024-2025-08.jpg' },
                    { t: 239, label: 'ASCEND', thumb: 'assets/videos/thumbs/dos-term-2024-2025-09.jpg' },
                    { t: 275, label: 'SLC 2025 — Student Leadership Camp', thumb: 'assets/videos/thumbs/dos-term-2024-2025-10.jpg' },
                    { t: 310, label: 'Closing', thumb: 'assets/videos/thumbs/dos-term-2024-2025-11.jpg' }
                ],
                pipeline: [
                    { title: 'Collect', text: 'Gathered photos and footage from every program of the 2024–2025 term.' },
                    { title: 'Structure', text: 'Ordered the programs through the year, each introduced with a title card and date.' },
                    { title: 'Edit', text: 'Cut the footage with captions, collage transitions and music to keep a steady pace.' },
                    { title: 'Release', text: 'Delivered the final promotional video for the organization.' }
                ],
                credits: [
                    { role: 'Video Editor', name: 'Aira Bianca Ordaniel' },
                    { role: 'Organization', name: 'BPSU-DOST Organization of Scholars' },
                    { role: 'Term', name: '2024–2025' }
                ]
            }
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
