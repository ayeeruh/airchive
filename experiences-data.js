/* ==========================================================================
   AIRCHIVE — Experiences & Organizational Roadmaps Data
   Shared between the 3-card folder preview (index.html) and the dedicated
   experience roadmap explorer page (experience.html).
   ========================================================================== */

window.EXPERIENCE_TRACKS = [
    {
        key: 'working',
        id: 'working',
        label: 'Working Experience',
        tagline: 'AI Product Design & Technical Docs',
        desc: 'Professional engagements in generative AI workflows, executive upskilling, and government software documentation.',
        countLabel: '3 Positions & Certifications',
        badge: 'Industry & Upskilling',
        accent: '#1D71B9',
        gradient: 'linear-gradient(135deg, #07223D 0%, #1D71B9 60%, #3AA7E2 100%)',
        icon: '<rect x="3" y="7" width="18" height="13" rx="2.5" stroke="currentColor" stroke-width="2"/><path d="M8.5 7V5.5A1.5 1.5 0 0 1 10 4H14A1.5 1.5 0 0 1 15.5 5.5V7M3 12.5H21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
        logos: [
            { src: 'assets/logos/flyrank_logo.jpeg', alt: 'FlyRank AI Logo' },
            { src: 'assets/dost-central-office-logo.png', alt: 'DOST Central Office Logo' }
        ],
        previewItems: [
            { title: 'FlyRank AI', sub: 'AI Design Intern' },
            { title: 'DOST Central Office', sub: 'Technical Writer' },
            { title: '7Trained Inc. (7TI)', sub: 'AI Executive Assistant' }
        ],
        tags: ['AI UI/UX Design', 'Project LODI', '7TI AI Assistant'],
        ctaLabel: 'Explore Working Roles'
    },
    {
        key: 'organization',
        id: 'organization',
        label: 'Organization Experience',
        tagline: 'Executive Governance & Roadmaps',
        desc: 'Executive governance, marketing officer roles, and creative leadership across scholar and student organizations.',
        countLabel: '4 Organizations · Roadmaps',
        badge: 'Leadership & Roadmaps',
        accent: '#C8691E',
        gradient: 'linear-gradient(135deg, #3A1054 0%, #8E44AD 60%, #B768E5 100%)',
        icon: '<path d="M12 20.5S3.5 15.6 3.5 9.6A4.6 4.6 0 0 1 12 7.2A4.6 4.6 0 0 1 20.5 9.6C20.5 15.6 12 20.5 12 20.5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
        logos: [
            { src: 'assets/start-dost-logo.png', alt: 'START - DOST Logo' },
            { src: 'assets/bpsu-ssite-logo.png', alt: 'BPSU-SSITE Logo' },
            { src: 'assets/BPSU DOS - Logo.png', alt: 'BPSU DOS Logo' },
            { src: 'assets/logo-sentro.png', alt: 'DOST - SENTRO Logo' }
        ],
        previewItems: [
            { title: 'START - DOST', sub: 'Marketing Officer' },
            { title: 'BPSU-SSITE', sub: 'President' },
            { title: 'BPSU DOS', sub: 'VP Internal Affairs' }
        ],
        tags: ['Executive Leadership', 'Marketing', 'Roadmaps'],
        ctaLabel: 'Explore Roadmaps'
    },
    {
        key: 'freelancing',
        id: 'freelancing',
        label: 'Freelancing Experience',
        tagline: 'Client UI/UX & Creative Solutions',
        desc: 'Independent client collaborations delivering interactive web prototypes, design systems, and digital publication suites.',
        countLabel: 'Independent Practice',
        badge: 'Client Collaborations',
        accent: '#0E7C8C',
        gradient: 'linear-gradient(135deg, #09374B 0%, #0E7C8C 60%, #3CC3C9 100%)',
        icon: '<rect x="3" y="4.5" width="18" height="12" rx="2" stroke="currentColor" stroke-width="2"/><path d="M8 20H16M12 16.5V20M9.5 9L7.5 10.75L9.5 12.5M14.5 9L16.5 10.75L14.5 12.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
        logos: [
            { src: 'assets/logo-light.png', alt: 'Aira Bianca Monogram' }
        ],
        previewItems: [
            { title: 'Freelance UI/UX', sub: 'Web Design Systems' },
            { title: 'Nursing Exhibit', sub: 'Scientific Poster' },
            { title: 'STS Biodiversity', sub: 'Informatics Deck' }
        ],
        tags: ['UI/UX Design', 'Scientific Posters', 'Slide Decks'],
        ctaLabel: 'Explore Client Works'
    }
];

window.EXPERIENCES_DATA = [
    /* ========================================================================
       TRACK 1: WORKING EXPERIENCE
       ======================================================================== */
    {
        id: 'flyrank-ai',
        track: 'working',
        trackLabel: 'Working Experience',
        role: 'AI Design Intern',
        org: 'FlyRank AI',
        affiliation: 'FlyRank AI · Internship · Remote',
        period: 'Aug 2026 – Present',
        status: 'Active',
        isCurrent: true,
        logo: 'assets/logos/flyrank_logo.jpeg',
        logoAlt: 'FlyRank AI Logo',
        location: 'Remote',
        workType: 'Internship',
        headline: 'AI-assisted UI/UX prototyping and product workflows for community healthcare',
        summary: 'Applying AI tools across the full project workflow of Careline, a barangay health center queueing app — from user research and planning to high-fidelity prototypes.',
        description: 'Serving as an AI Design Intern at FlyRank AI, spearheading generative AI workflows for "Careline," an innovative community healthcare queueing and patient flow application. Bridging user research synthesis, rapid wireframing, high-fidelity Figma components, and cross-functional sprint planning to transform health center operations into intuitive digital experiences.',
        tags: ['Project Management', 'User Interface Design', 'AI Workflows', 'Figma Prototyping', 'User Research'],
        responsibilities: [
            'Applied cutting-edge generative AI design tools across user research, journey mapping, and wireframing for the Careline community health application',
            'Designed responsive, accessible high-fidelity UI prototypes and interaction states in Figma',
            'Collaborated in rapid sprint reviews, presenting design specifications and component libraries to cross-functional teams',
            'Iterated on feedback from community healthcare volunteers and clinic administrators to optimize patient intake flows'
        ],
        keyMetrics: [
            { label: 'Role Focus', value: 'AI + UI/UX' },
            { label: 'Key Product', value: 'Careline Health' },
            { label: 'Work Mode', value: 'Remote Sprint' }
        ],
        technologies: ['Figma', 'Generative AI Tools', 'User Journey Mapping', 'Design Systems', 'Agile Sprints'],
        relatedLinks: []
    },
    {
        id: 'dost-tech-writer',
        track: 'working',
        trackLabel: 'Working Experience',
        role: 'Technical Writer (Project LODI)',
        org: 'DOST – Central Office',
        affiliation: 'Department of Science and Technology – Central Office · Project LODI · Taguig (Hybrid / Remote)',
        period: 'Jun 2026 – Aug 2026',
        status: 'Completed',
        isCurrent: false,
        logo: 'assets/dost-central-office-logo.png',
        logoAlt: 'DOST Central Office Logo',
        location: 'Taguig, Metro Manila (Hybrid / Remote)',
        workType: 'Internship (Project LODI)',
        headline: 'Authoring Product Backlog Items and backend specifications under Project LODI',
        summary: 'Authored detailed Product Backlog Items (PBIs) and backend user stories for software engineering teams under Project LODI at DOST Central Office, translating complex API contracts and database requirements into structured specifications.',
        description: 'Completed a specialized technical writing internship at the Department of Science and Technology (DOST) Central Office for Project LODI. Collaborated closely with system architects, engineers, and project leads to author structured Product Backlog Items (PBIs), acceptance criteria, API documentation, and database contracts for enterprise government software systems.',
        tags: ['Project LODI', 'Agile Methodologies', 'User Story Mapping', 'Technical Documentation', 'API Contracts'],
        responsibilities: [
            'Authored detailed Product Backlog Items (PBIs), acceptance criteria, and user stories under DOST Central Office Project LODI',
            'Translated complex API contracts, schema structures, and backend database requirements into structured, actionable specifications',
            'Participated in agile ceremonies, backlog grooming sessions, and developer handoffs to ensure high requirement fidelity',
            'Established clean, standardized documentation guidelines for technical and non-technical stakeholders'
        ],
        keyMetrics: [
            { label: 'Project', value: 'Project LODI' },
            { label: 'Department', value: 'DOST Central' },
            { label: 'Deliverables', value: 'PBIs & API Specs' }
        ],
        technologies: ['Project LODI', 'Agile / Scrum', 'User Story Mapping', 'API Contracts', 'Database Specifications'],
        relatedLinks: []
    },
    {
        id: 'upskilling-7ti-ea',
        track: 'working',
        trackLabel: 'Professional Upskilling',
        role: 'AI-Trained Executive Assistant (In Training)',
        org: '7Trained Inc. (7TI)',
        affiliation: '7Trained Inc. (7TI) · Professional Upskilling Certification · Remote',
        period: '2026 – Present',
        status: 'In Progress',
        isCurrent: true,
        logo: 'assets/logo-light.png',
        logoAlt: '7TI AI-Trained Executive Assistant Certification',
        location: 'Remote / Global Certification',
        workType: 'Professional Upskilling & Certification',
        headline: 'Mastering AI-driven executive assistance, autonomous workflows, and smart operational systems',
        summary: 'Actively upskilling and taking 7TI\'s AI-Trained Executive Assistant Certification, mastering generative AI tools, prompt engineering, calendar & executive comms management, and autonomous productivity workflows.',
        description: 'Undertaking advanced professional upskilling through 7Trained Inc. (7TI) under the AI-Trained Executive Assistant Certification program. Developing mastery in deploying state-of-the-art AI workflows, executive-level communication pipelines, AI task orchestration, strategic calendar/inbox optimization, and modern administrative intelligence for fast-paced tech executives and leaders.',
        tags: ['AI Executive Assistance', 'Prompt Engineering', 'Workflow Automation', 'Executive Communications', 'Productivity Systems'],
        responsibilities: [
            'Mastering generative AI frameworks and autonomous agent workflows for executive delegation and task automation',
            'Designing structured prompt pipelines for executive briefing documents, board reports, and stakeholder communications',
            'Implementing AI-augmented calendar scheduling, triage management, and high-priority inbox workflows',
            'Applying digital workspace tools (Notion, Google Workspace, Slack, AI copilots) to optimize executive productivity'
        ],
        keyMetrics: [
            { label: 'Program', value: '7TI Certified' },
            { label: 'Status', value: 'Actively In Progress' },
            { label: 'Focus', value: 'AI + Operations' }
        ],
        technologies: ['Generative AI', 'Executive Assistance', 'Workflow Automation', 'Prompt Engineering', 'Notion', 'Google Workspace'],
        relatedLinks: []
    },

    /* ========================================================================
       TRACK 2: ORGANIZATION EXPERIENCE (UNIFIED WITH ROADMAPS)
       ======================================================================== */
    {
        id: 'start-dost',
        track: 'organization',
        trackLabel: 'Organization Experience',
        role: 'Marketing Officer',
        org: 'START - DOST',
        affiliation: 'START DOST – Scholars Transforming Advancement and Research for Technology · Remote',
        period: 'Nov 2025 – Present',
        status: 'Active',
        isCurrent: true,
        logo: 'assets/start-dost-logo.png',
        logoAlt: 'START DOST Logo',
        location: 'Nationwide (Remote)',
        workType: 'Leadership & Marketing',
        headline: 'Unified marketing leadership: from START A TON! hackathon branding to national viral campaigns',
        summary: 'Serving as Marketing Officer at START-DOST, unifying creative marketing campaigns, hackathon visual identity, and social media amplification with a sustained 50%+ viral share rate.',
        description: 'Unified leadership tenure at START DOST spanning flagship event co-leadership and nationwide digital marketing. Spearheaded complete brand identity and operations for the "START A TON!" hackathon as Project Co-Lead, transitioning into Marketing Officer directing viral publication materials, content strategy, and community engagement for DOST scholars nationwide.',
        tags: ['Marketing Officer', 'Brand Strategy', 'Canva', 'Event Co-Lead', 'Viral Engagement'],
        keyMetrics: [
            { label: 'Virality Rate', value: '50%+ Share/React' },
            { label: 'Flagship Event', value: 'START A TON!' },
            { label: 'Audience Reach', value: 'Nationwide DOST' }
        ],
        technologies: ['Canva', 'Brand Strategy', 'Photoshop', 'Event Operations', 'Social Media Analytics'],
        roadmap: [
            {
                step: '01',
                role: 'Graphic Designer & Project Co-Lead',
                period: 'Nov 2025 – Jun 2026',
                status: 'Completed',
                initiative: 'START A TON! Hackathon Visual Identity & Operations',
                summary: 'Spearheaded the complete visual branding system and marketing operations as Project Co-Lead for the premiere "START A TON!" hackathon. Directed asset turnaround from initial moodboards to full stage graphics, participant kits, certificates, and sponsor presentations.',
                deliverables: ['Event Brand Identity', 'Certificate Suite', 'Sponsor Pitch Collateral', 'Social Media Announcements'],
                relatedLink: { type: 'event', label: 'View Start-to-Link Event', url: 'project.html?id=event-start-to-link' }
            },
            {
                step: '02',
                role: 'Marketing Officer & Assistant',
                period: 'Jun 2026 – Present',
                status: 'Active',
                initiative: 'National Social Media Publication & Viral Campaigns',
                summary: 'Directing creative branding, digital publication materials, and campaign messaging for nationwide scholar programs. Averaging a 50%+ share-to-reaction viral engagement rate across social communication channels and coordinating with regional chapters.',
                deliverables: ['National Publication Kits', 'Viral Engagement Strategy', 'Content Calendars', 'Chapter Amplification'],
                relatedLink: { type: 'event', label: 'View Start-to-Link Proposal', url: 'project.html?id=event-start-to-link' }
            }
        ],
        relatedLinks: [
            { type: 'event', label: 'View Start-to-Link Event & Proposal', url: 'project.html?id=event-start-to-link' }
        ]
    },
    {
        id: 'bpsu-ssite',
        track: 'organization',
        trackLabel: 'Organization Experience',
        role: 'President & Project Lead',
        org: 'BPSU-SSITE',
        affiliation: 'Student Society on Information Technology Education (BPSU-SSITE) · BPSU Main Campus',
        period: '2024 – Present',
        status: 'Active',
        isCurrent: true,
        logo: 'assets/bpsu-ssite-logo.png',
        logoAlt: 'BPSU-SSITE Logo',
        location: 'City of Balanga, Bataan',
        workType: 'Executive Student Governance',
        headline: 'Guiding IT student governance, initiating Start-to-Link, and designing official merchandise',
        summary: 'Directing student governance for Information Technology majors as President, conceptualizing and leading the Start-to-Link career initiative, and designing official SSITE merchandise.',
        description: 'Comprehensive leadership journey with the Student Society on Information Technology Education (BPSU-SSITE). Serving as President overseeing academic support, student activities, and department representation, authoring the flagship "Start-to-Link" career readiness workshop proposal, and crafting the chapter’s official brand merchandise.',
        tags: ['President', 'Start-to-Link', 'Merchandise Design', 'IT Governance', 'Academic Mentorship'],
        keyMetrics: [
            { label: 'Role', value: 'President' },
            { label: 'Constituency', value: 'IT Major Students' },
            { label: 'Flagship Event', value: 'Start-to-Link' }
        ],
        technologies: ['Executive Governance', 'Project Proposal Drafting', 'Merchandise Design', 'Event Directing'],
        roadmap: [
            {
                step: '01',
                role: 'President / Executive Leadership',
                period: '2024 – 2025',
                status: 'Completed',
                initiative: 'SSITE Chapter Governance, Executive Operations & Member Development',
                summary: 'Served as President of BPSU-SSITE for Academic Year 2024–2025, directing executive committee operations, student activities, and collegiate IT representation, culminating in being invited as Guest Speaker for the 2026 General Assembly.',
                deliverables: ['Executive Governance', 'Academic Support Framework', 'Department Representation', 'Guest Speaker Address'],
                relatedLink: { type: 'volunteer', label: 'View General Assembly Speaker Showcase', url: 'volunteer.html?id=ssite-general-assembly' }
            },
            {
                step: '02',
                role: 'Brand & Merchandise Designer',
                period: '2025',
                status: 'Completed',
                initiative: 'Official BPSU-SSITE Minimalist Tote Bag Merchandise',
                summary: 'Designed the official departmental tote bag merchandise featuring a minimalist white canvas with a glossy, beveled "ssite." wordmark in signature aqua and teal gradients for students and faculty.',
                deliverables: ['SSITE Minimalist Tote Bag', 'Vector Proofs', 'Promotional Social Teasers'],
                relatedLink: { type: 'project', label: 'View SSITE Tote Bag Design', url: 'project.html?id=design-ssite-tote-bag-2025' }
            },
            {
                step: '03',
                role: 'Project Lead & Event Initiator',
                period: '2025 – 2026',
                status: 'Completed',
                initiative: 'Start-to-Link: Equipping Aspiring Professionals with Career Essentials',
                summary: 'Authored the official project proposal paper and led operations as Lead Organizer for "Start-to-Link", connecting graduating senior students with seasoned IT industry practitioners and career mentors.',
                deliverables: ['Project Proposal Paper', 'Event Production Schedule', 'Speaker Coordination', 'Participant Certs'],
                relatedLink: { type: 'event', label: 'View Start-to-Link Event Showcase', url: 'project.html?id=event-start-to-link' }
            }
        ],
        relatedLinks: [
            { type: 'event', label: 'View Start-to-Link Event & Proposal', url: 'project.html?id=event-start-to-link' },
            { type: 'project', label: 'View SSITE Tote Bag Design', url: 'project.html?id=design-ssite-tote-bag-2025' },
            { type: 'volunteer', label: 'View SSITE General Assembly Speaker Showcase', url: 'volunteer.html?id=ssite-general-assembly' }
        ]
    },
    {
        id: 'bpsu-dos',
        track: 'organization',
        trackLabel: 'Organization Experience',
        role: 'Vice President for Internal Affairs',
        org: 'BPSU DOS',
        affiliation: 'BPSU-DOST Organization of Scholars (DOS) · Balanga City (Hybrid)',
        period: 'Sep 2023 – Present',
        status: 'Active',
        isCurrent: true,
        logo: 'assets/BPSU DOS - Logo.png',
        logoAlt: 'BPSU DOS Logo',
        location: 'Balanga City, Bataan',
        workType: 'Executive Scholar Leadership',
        headline: 'From Creatives Committee Head to Vice President for Internal Affairs',
        summary: 'Directing internal chapter governance and scholar operations after a 2-year leadership tenure heading creative identity, merchandise production, and membership card systems.',
        description: 'Multi-year leadership journey with the BPSU-DOST Organization of Scholars (DOS). Advanced from Creatives Committee Head—directing official branding, membership card systems, and merchandise—to Vice President for Internal Affairs, steering chapter governance, compliance, assemblies, and member welfare.',
        tags: ['VP Internal Affairs', 'Creatives Head', 'Membership Cards', 'Operations Management', 'DOST Scholars'],
        keyMetrics: [
            { label: 'Executive Role', value: 'VP Internal' },
            { label: 'Past Leadership', value: 'Creatives Head (2 Yrs)' },
            { label: 'Key Deliverables', value: 'Membership Cards & Merch' }
        ],
        technologies: ['Canva', 'Photoshop', 'Operations Governance', 'Membership Systems', 'Video Production'],
        roadmap: [
            {
                step: '01',
                role: 'Creatives Committee Head',
                period: 'Sep 2023 – Jun 2025',
                status: 'Completed',
                initiative: 'Visual Branding, Official Merchandise & Membership Systems',
                summary: 'Headed the Creatives Committee for 2 academic years, conceptualizing official merchandise, branding kits, and the official DOS Membership Cards and custom tote bags for university scholars.',
                deliverables: ['DOS Membership Card System', 'DOS Tote Bag Collection', 'General Assembly Branding', 'Publicity Kits'],
                relatedLink: { type: 'project', label: 'View DOS Membership Card System', url: 'project.html?id=design-dos-membership-card-2026' }
            },
            {
                step: '02',
                role: 'Executive Videographer & Storyteller',
                period: '2024 – 2025',
                status: 'Completed',
                initiative: 'Cinematic Year-End DOS Term Highlights Video',
                summary: 'Produced and edited the official cinematic year-end video retrospective chronicling organizational milestones, community service projects, and scholar achievements across BPSU.',
                deliverables: ['DOS Term 2024-2025 Video', 'Video Highlights Montage'],
                relatedLink: { type: 'video', label: 'View DOS Term Video', url: 'film.html?id=video-dos-term-2024-2025' }
            },
            {
                step: '03',
                role: 'Vice President for Internal Affairs',
                period: 'Jul 2025 – Present',
                status: 'Active',
                initiative: 'FOCUS 2025 General Assembly & Internal Governance',
                summary: 'Co-spearheaded the flagship FOCUS 2025 General Assembly hosting 153 scholars, delivered the keynote opening remarks on Patriot Scholar core values, co-authored the official project proposal and narrative report, and directed internal chapter governance.',
                deliverables: ['FOCUS 2025 General Assembly', 'Project Proposal & Narrative Report', 'Palette Party Merchandise Workshop'],
                relatedLink: { type: 'event', label: 'View FOCUS 2025 General Assembly', url: 'project.html?id=event-focus-dos-ga-2025' }
            }
        ],
        relatedLinks: [
            { type: 'event', label: 'View FOCUS 2025 General Assembly', url: 'project.html?id=event-focus-dos-ga-2025' },
            { type: 'volunteer', label: 'View FOCUS DOST Volunteer Showcase', url: 'volunteer.html?id=focus-dos-general-assembly-2025' },
            { type: 'project', label: 'View DOS Membership Card System', url: 'project.html?id=design-dos-membership-card-2026' },
            { type: 'project', label: 'View DOS Tote Bag Design', url: 'project.html?id=design-dos-tote-bag-2025' },
            { type: 'video', label: 'View DOS Term Video', url: 'film.html?id=video-dos-term-2024-2025' }
        ]
    },
    {
        id: 'dost-sentro',
        track: 'organization',
        trackLabel: 'Organization Experience',
        role: 'Regional Creative Contributor & Media Producer',
        org: 'DOST - SENTRO',
        affiliation: 'DOST - SENTRO (Region III) · Central Luzon DOST Scholars',
        period: '2024 – Present',
        status: 'Active',
        isCurrent: true,
        logo: 'assets/logo-sentro.png',
        logoAlt: 'DOST - SENTRO Logo',
        location: 'Region III, Central Luzon',
        workType: 'Regional Scholar Media',
        headline: 'Authoring large-format regional infographics, consortium posters, and video highlights',
        summary: 'Producing high-impact visual communications for DOST-SENTRO Region III, including the flagship World Café history poster, national science consortium poster, and JLSS video highlights.',
        description: 'Serving as Regional Creative Contributor for DOST-SENTRO (Scholars Empowered Nationalistic and Tactical Regional Organization). Producing multimedia storytelling assets that celebrate science scholars across Region III, from large-format infographics recounting SENTRO’s founding history to nationwide consortium poster presentations.',
        tags: ['Regional Contributor', 'World Café Poster', 'JLSS Highlights Video', 'NPSC Poster', 'Video Production'],
        keyMetrics: [
            { label: 'Scope', value: 'Region III (Central Luzon)' },
            { label: 'Key Output', value: 'Infographics & Videos' },
            { label: 'Consortium', value: 'NPSC National Delegate' }
        ],
        technologies: ['Canva', 'Filmora / Premiere', 'Infographic Design', 'Video Editing', 'Poster Production'],
        roadmap: [
            {
                step: '01',
                role: 'Video Editor & Media Producer',
                period: '2024 – 2025',
                status: 'Completed',
                initiative: 'SENTRO Region 3 & JLSS 2025 Highlights Video',
                summary: 'Created official promotional videos and edited the comprehensive Junior Level Science Scholarship (JLSS) 2025 Highlights Video celebrating newly awarded scholars across Region III.',
                deliverables: ['Region 3 Promo Video', 'JLSS 2025 Video Highlights', 'Social Reels'],
                relatedLink: { type: 'video', label: 'View JLSS Highlights Video', url: 'film.html?id=video-jlss-highlights-2025' }
            },
            {
                step: '02',
                role: 'Lead Infographic Designer',
                period: '2025',
                status: 'Completed',
                initiative: 'SENTRO for Brilliance — Region III World Café Poster',
                summary: 'Designed a large-format infographic poster recounting DOST-SENTRO’s founding story from 2022 to present, highlighting scholar leadership, community initiatives, and regional impact.',
                deliverables: ['Large-Format Exhibition Poster', 'Vector Timeline Assets', 'Print Production'],
                relatedLink: { type: 'project', label: 'View SENTRO World Café Poster', url: 'project.html?id=design-sentro-r3-world-cafe-poster' }
            },
            {
                step: '03',
                role: 'NPSC Creative Lead',
                period: '2026',
                status: 'Completed',
                initiative: 'National Philippine Science Consortium (NPSC) Poster',
                summary: 'Created the official poster for SENTRO Region 3 delegates showcased at the National Philippine Science Consortium, encapsulating scholar innovations and public service.',
                deliverables: ['NPSC Presentation Poster', 'Sculpted SENTRO Emblem Artwork'],
                relatedLink: { type: 'project', label: 'View NPSC Poster Design', url: 'project.html?id=design-npsc-poster-2026' }
            }
        ],
        relatedLinks: [
            { type: 'project', label: 'View SENTRO World Café Poster', url: 'project.html?id=design-sentro-r3-world-cafe-poster' },
            { type: 'project', label: 'View NPSC Poster Design', url: 'project.html?id=design-npsc-poster-2026' },
            { type: 'video', label: 'View JLSS Highlights Video', url: 'film.html?id=video-jlss-highlights-2025' }
        ]
    },

    /* ========================================================================
       TRACK 3: FREELANCING EXPERIENCE
       ======================================================================== */
    {
        id: 'freelance-design',
        track: 'freelancing',
        trackLabel: 'Freelancing Experience',
        role: 'Freelance UI/UX & Digital Designer',
        org: 'Independent / Diverse Client Engagements',
        affiliation: 'Independent / Diverse Client Engagements · Remote',
        period: '2024 – Present',
        status: 'Active',
        isCurrent: true,
        logo: 'assets/logo-light.png',
        logoAlt: 'Aira Bianca Monogram Logo',
        location: 'Remote',
        workType: 'Freelance & Contract',
        headline: 'Crafting bespoke web prototypes, brand systems, and multimedia assets for clients and initiatives',
        summary: 'Delivering tailored UI/UX wireframes, clickable prototypes, branding suites, and digital marketing graphics for clients and organizations.',
        description: 'Providing freelance creative and design services across web user interface design, graphic design, and brand identity development. Collaborating with founders, organizations, and teams to turn ideas into structured, high-conversion visual realities.',
        tags: ['UI/UX Design', 'Figma', 'Brand Identity', 'Frontend Prototyping', 'Client Collaboration'],
        responsibilities: [
            'Consulted with clients to formulate creative briefs, design objectives, and target audience profiles',
            'Engineered interactive wireframes, component design systems, and responsive Figma mockups',
            'Produced publication-ready branding assets, presentations, and vector illustrations with rapid turnaround',
            'Maintained clear communication channels and structured milestone delivery across all projects'
        ],
        keyMetrics: [
            { label: 'Service Mode', value: 'Freelance / Contract' },
            { label: 'Specialization', value: 'UI/UX & Branding' },
            { label: 'Availability', value: 'Select Collaborations' }
        ],
        technologies: ['Figma', 'Canva', 'Adobe Photoshop', 'Brand Guidelines', 'Wireframing'],
        roadmap: [
            {
                step: '01',
                role: 'Client Graphic & Exhibit Designer',
                period: '2025',
                status: 'Completed',
                initiative: 'Nursing Research Congress Scientific Poster Exhibit',
                summary: 'Designed an impactful, high-resolution scientific and clinical research exhibit poster for client nursing scholars, translating medical methodology and clinical findings into clear visual data.',
                deliverables: ['Scientific Research Poster', 'High-Res Print Prepress', 'Visual Infographics'],
                relatedLink: { type: 'project', label: 'View Nursing Poster Exhibit', url: 'project.html?id=design-nursing-poster-exhibit' }
            },
            {
                step: '02',
                role: 'Science & Society Slide Designer',
                period: '2025',
                status: 'Completed',
                initiative: 'STS Informative Slide: Biodiversity Services in the Philippines',
                summary: 'Authored and designed an academic presentation deck and informative visual slide on Philippine biodiversity, ecosystem services, and national conservation policies.',
                deliverables: ['Informative Slide Deck', 'Ecosystem Flowcharts', 'Academic Visual Synthesis'],
                relatedLink: { type: 'project', label: 'View Biodiversity Informative Slide', url: 'project.html?id=design-sts-biodiversity-slide' }
            }
        ],
        relatedLinks: [
            { type: 'project', label: 'View Nursing Poster Exhibit', url: 'project.html?id=design-nursing-poster-exhibit' },
            { type: 'project', label: 'View Biodiversity Informative Slide', url: 'project.html?id=design-sts-biodiversity-slide' },
            { type: 'document', label: 'Nursing Poster Prepress Asset (PNG)', url: 'assets/Nursing-Poster-Exhibit-Freelancing.png' },
            { type: 'document', label: 'STS Biodiversity Slide Deck Asset (PNG)', url: 'assets/STS_Informative Slide_Biodiversity Services in the Philippines_Final.png' }
        ]
    }
];

/* Helper lookups */
window.getExperienceById = function (id) {
    return (window.EXPERIENCES_DATA || []).find(e => e.id === id);
};

window.getExperiencesByTrack = function (track) {
    if (!track || track === 'all') return window.EXPERIENCES_DATA || [];
    return (window.EXPERIENCES_DATA || []).filter(e => e.track === track);
};
