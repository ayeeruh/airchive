/* ==========================================================================
   AIRCHIVE — Volunteering data
   Used by the Volunteerings folder (index.html) AND each volunteer page
   (volunteer.html?id=<entry-id>). Edit your volunteer work here only.

   ✏️ How to fill in an entry:
   - Delete `sample: true` once it's real.
   - id            unique, URL-safe (letters, numbers, dashes). Used in the page link.
   - month / year  shown on the ticket stub (3-letter month, e.g. 'DEC').
   - date          full date shown on the page, e.g. 'December 11, 2025'.
   - certificate   image path, e.g. 'assets/volunteer/my-cert.jpg' ('' = none yet).
   - photos        [{ src: 'assets/volunteer/pic-1.jpg', caption: 'Registration desk' }]
   - proofs        other evidence: [{ type: 'link' | 'document' | 'post' | 'letter',
                                      label: 'Facebook post', url: 'https://…' }]
   - Leave anything blank ('' or []) and the page shows a friendly empty state.
   ========================================================================== */
window.volunteerData = {
    campus: {
        id: 'campus',
        key: 'campus',
        stampNo: 'NO. 01',
        title: 'Campus',
        label: 'Campus-Based Volunteering',
        short: 'Campus',
        stamp: 'Campus',
        desc: 'University events, student organizations and on-campus service.',
        accent: '#1D71B9',
        cover: 'linear-gradient(135deg, #0B3861 0%, #1D71B9 60%, #3AA7E2 100%)',
        icon: '<path d="M3 9.5L12 5L21 9.5L12 14L3 9.5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M7 11.6V16C7 16 9 18.5 12 18.5C15 18.5 17 16 17 16V11.6M21 9.5V14.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
        items: [
            {
                id: 'in-house-2025',
                role: 'Technical Volunteer',
                tag: 'Technical Volunteer',
                org: 'College of Computer Studies (CCST) × BPSU-SSITE',
                event: 'In-House Research Congress (IHR) 2025',
                institution: 'Bataan Peninsula State University – College of Computer Studies',
                month: 'FEB',
                year: '2025',
                date: 'February 2025',
                place: 'BPSU Main Campus, City of Balanga, Bataan',
                location: 'BPSU Main Campus, City of Balanga, Bataan',
                hours: 'Technical Volunteer & Exhibit Support',
                summary: 'Served as Technical Volunteer for the In-House Research Congress 2025 celebrating remarkable research achievements of BSIT, BSCS, and BSEMC wizard researchers and exhibitors.',
                desc: 'Served as Technical Volunteer for the In-House Research Congress 2025 celebrating remarkable research achievements of BSIT, BSCS, and BSEMC wizard researchers and exhibitors.',
                description: 'Served as a dedicated Technical Volunteer for the In-House Research Congress (IHR) 2025, celebrating the innovation and research achievements of BSIT, BSCS, and BSEMC students across the College of Computer Studies (CCST). Supported technical logistics, exhibit coordination, and event operations alongside CCST faculty, research advisers, and the student council.',
                story: 'In support of the conduct of the In-House Research Congress (IHR) 2025 celebrating the remarkable talents and research achievements of fellow students from BSIT, BSCS, and BSEMC, served as a Technical Volunteer assisting event organizers, CCST faculty and council, and research advisers. Supported 4th-year student researchers, especially members of the SSITE community, in showcasing innovative computing research projects developed through months of hard work—uplifting both the spirit of technology and collaborative learning across the university.',
                responsibilities: [
                    'Assisted in technical logistics and exhibition booth setup for BSIT, BSCS, and BSEMC research displays',
                    'Coordinated presentation schedules, audiovisual equipment, and live demonstration technicalities for student researchers',
                    'Supported faculty evaluators and research advisers during the research exhibits and judging deliberations',
                    'Represented SSITE in championing technological innovation, collaboration, and student development within CCST'
                ],
                certificate: '',
                photos: [
                    {
                        src: 'assets/In-House-2025/In-House-2025.jpg',
                        caption: 'In-House Research Congress 2025 banner and student research showcases'
                    },
                    {
                        src: 'assets/In-House-2025/In-House-2025 (1).jpg',
                        caption: 'Student research exhibits and project presentations in the College of Computer Studies'
                    },
                    {
                        src: 'assets/In-House-2025/In-House-2025 (2).jpg',
                        caption: 'Demonstrations and technical project evaluations with faculty and peers'
                    },
                    {
                        src: 'assets/In-House-2025/In-House-2025 (3).jpg',
                        caption: 'Interactive project walkthroughs and peer research discussions'
                    },
                    {
                        src: 'assets/In-House-2025/In-House-2025 (4).jpg',
                        caption: 'Student delegates, exhibitors, and organizing team during the research congress'
                    }
                ],
                proofs: [
                    {
                        type: 'post',
                        label: 'In-House Research Congress (IHR) 2025 Official Exhibit Showcase',
                        url: 'assets/In-House-2025/In-House-2025.jpg'
                    },
                    {
                        type: 'document',
                        label: 'College of Computer Studies (CCST) Research Exhibit Proceedings',
                        url: 'assets/In-House-2025/In-House-2025 (1).jpg'
                    }
                ]
            },
            {
                id: 'debugging-reality-2025',
                role: 'Technical Lead',
                tag: 'Technical Lead',
                org: 'Student Society on Information Technology Education (BPSU-SSITE)',
                event: 'Debugging Reality: Navigating AI and Disinformation in the Digital Age',
                institution: 'Bataan Peninsula State University – Student Society on Information Technology Education',
                month: 'OCT',
                year: '2025',
                date: 'October 29, 2025',
                place: 'Room 201, 2nd Floor, Medina Lacson Building, BPSU Main Campus',
                location: 'BPSU Main Campus, City of Balanga, Bataan',
                hours: '8:00 AM – 12:00 PM (Technical Directing & Seminar Operations)',
                summary: 'Spearheaded technical operations and seminar flow for 31 student delegates featuring Mr. James Bentor on AI ethics, the D.E.B.U.G. framework, and counter-disinformation.',
                desc: 'Spearheaded technical operations and seminar flow for 31 student delegates featuring Mr. James Bentor on AI ethics, the D.E.B.U.G. framework, and counter-disinformation.',
                description: 'Served as Technical Lead for "Debugging Reality: Navigating AI and Disinformation in the Digital Age" organized by BPSU-SSITE. Directed audiovisual technicalities, interactive engagement platforms, and stage operations for 31 student participants, facilitating discussions on AI-driven disinformation, ethical computing, and the D.E.B.U.G. framework.',
                story: 'Served as Technical Lead for "Debugging Reality: Navigating AI and Disinformation in the Digital Age" conducted on October 29, 2025, at Room 201, Medina Lacson Building, BPSU Main Campus. Directed all technical prep operations, presentation workflows, and audio-visual setups for 31 student attendees (17 male, 14 female) from the College of Computer Studies. Spearheaded the technical coordination for keynote speaker Mr. James Bentor (Executive Chairman of Olavin Corp), who expounded on ethical computing and introduced the D.E.B.U.G. framework: Doubt first, Examine source, Break digital bubble, Understand AI, and Guard integrity. Administered the interactive Tech Trivia icebreaker, monitored student engagement during the D.E.B.U.G. challenge and Digital Integrity Pledge, and awarded commemorative pin tokens alongside SSITE executive officers.',
                responsibilities: [
                    'Directed AV technicalities, presentation decks, and technical setup for 31 IT student delegates and faculty',
                    'Coordinated speaker requirements and technical facilitation for keynote speaker Mr. James Bentor (Olavin Corp)',
                    'Managed the interactive digital platforms for the Tech Trivia icebreaker and D.E.B.U.G. challenge activity',
                    'Facilitated the student Digital Integrity Pledge and token distribution promoting ethical AI literacy and fact-checking'
                ],
                certificate: '',
                photos: [
                    {
                        src: 'assets/Debugging-Reality-SSITE/Debugging-Reality (1).jpg',
                        caption: 'Keynote presentation on AI ethics and disinformation in Room 201'
                    },
                    {
                        src: 'assets/Debugging-Reality-SSITE/Debugging-Reality (2).jpg',
                        caption: 'Student participants and delegates engaging with the speaker session'
                    },
                    {
                        src: 'assets/Debugging-Reality-SSITE/Debugging-Reality (3).jpg',
                        caption: 'Awarding certificate and commemorative tokens to speaker Mr. James Bentor'
                    },
                    {
                        src: 'assets/Debugging-Reality-SSITE/Debugging-Reality (4).jpg',
                        caption: 'Interactive discussion and D.E.B.U.G. challenge problem solving'
                    },
                    {
                        src: 'assets/Debugging-Reality-SSITE/Debugging-Reality (5).jpg',
                        caption: 'Group photo of IT student attendees, organizers, and faculty'
                    },
                    {
                        src: 'assets/Debugging-Reality-SSITE/Debugging-Reality (6).jpg',
                        caption: 'Commemorative group pose with the SSITE executive committee and participants'
                    }
                ],
                proofs: [
                    {
                        type: 'document',
                        label: 'Activity Proceedings & Technical Lead Documentation',
                        url: 'assets/Debugging-Reality-SSITE/Debugging-Reality (1).jpg'
                    },
                    {
                        type: 'post',
                        label: 'Official SSITE Event Recap & D.E.B.U.G. Framework Showcase',
                        url: 'assets/Debugging-Reality-SSITE/Debugging-Reality (3).jpg'
                    }
                ]
            }
        ]
    },
    dost: {
        id: 'dost',
        key: 'dost',
        stampNo: 'NO. 02',
        title: 'DOST',
        label: 'DOST-Based Events Attended',
        short: 'DOST',
        stamp: 'DOST',
        desc: 'Summits, trainings and programs attended as a DOST scholar.',
        accent: '#0E7C8C',
        cover: 'linear-gradient(135deg, #0B4F6C 0%, #0E7C8C 55%, #3CC3C9 100%)',
        icon: '<circle cx="12" cy="12" r="2" fill="currentColor"/><ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="currentColor" stroke-width="1.8"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" stroke="currentColor" stroke-width="1.8"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" stroke="currentColor" stroke-width="1.8"/>',
        items: [
            {
                id: 'focus-dos-general-assembly-2025',
                role: 'Project Co-Head & Lead Organizer',
                tag: 'Project Co-Head • VP Internals',
                org: 'BPSU-DOST Organization of Scholars (BPSU-DOS)',
                event: 'FOCUS 2025: BPSU-DOS General Assembly',
                institution: 'Bataan Peninsula State University – DOST Organization of Scholars',
                month: 'AUG',
                year: '2025',
                date: 'August 16, 2025',
                place: '2nd Floor, BPSU Main Campus Library, City of Balanga, Bataan',
                location: 'BPSU Main Campus, City of Balanga, Bataan',
                hours: '8 hrs (Planning, Operations & Assembly Execution)',
                summary: 'Co-spearheaded the 4th BPSU-DOS General Assembly with 153 scholar-attendees. Authored the project proposal and narrative report, delivered the opening remarks, organized the "Palette Party" design activity, and awarded keynote speakers.',
                desc: 'Co-spearheaded the 4th BPSU-DOS General Assembly with 153 scholar-attendees. Authored the project proposal and narrative report, delivered the opening remarks, organized the "Palette Party" design activity, and awarded keynote speakers.',
                description: 'Served as Project Co-Head and Vice President for Internal Affairs for "FOCUS 2025: Forging Opportunities through Creativity, Upliftment, and Solidarity" — the 4th General Assembly of the BPSU-DOST Organization of Scholars. Led comprehensive event planning, financial budgeting, guest speaker invitations, and narrative documentation, gathering 153 DOST student-scholars.',
                story: 'Served as Project Co-Head alongside Academic, Research, and Training (A.R.T.) Committee Head Jhanlem I. Caraig and Vice President for Internal Affairs for "FOCUS: Forging Opportunities through Creativity, Upliftment, and Solidarity" — the fourth General Assembly of the BPSU-DOST Organization of Scholars held on August 16, 2025 at the 2nd Floor BPSU Main Campus Library. With a turnout of 153 scholar-attendees, delivered the official opening remarks on behalf of Regional Office Representatives, recapping the organization’s annual milestones and inspiring scholars around the Filipino Patriot Scholar core values of Social Responsibility, Servant Leadership, and Professional Excellence. Facilitated the program flow featuring keynote addresses from DOST-SENTRO Regional Director Robert Louis M. Guese and former DOS President Carl Cyrus Lapuz, directed the collaborative "Palette Party" merchandise design activity, led open forum discussions, presented certificates of appreciation to distinguished speakers and partner business sponsors, and authored the post-activity narrative report.',
                responsibilities: [
                    'Co-authored the official Project Proposal, comprehensive program schedule, financial budget, and risk mitigation plan',
                    'Delivered the official Opening Remarks and inspirational message emphasizing the Filipino Patriot Scholar core values (Social Responsibility, Servant Leadership, Professional Excellence)',
                    'Directed the collaborative "Palette Party" merchandise ideation workshop where scholars designed concept apparel and lanyards for future releases',
                    'Coordinated logistics and stage operations hosting 153 scholar-attendees alongside partner sponsors (Madmaxx, BlueCad, Margarita Cafe, Eleventh Hour, Pulido Cuts)',
                    'Facilitated the open forum, awarded guest speaker certificates, and authored the comprehensive post-activity Narrative Report'
                ],
                certificate: 'assets/events/dos-general-assembly-2025/dos-general-assembly-2025 (1).jpg',
                photos: [
                    {
                        src: 'assets/events/dos-general-assembly-2025/dos-general-assembly-2025 (1).jpg',
                        caption: 'Vice President Aira Bianca delivering the Official Opening Remarks and keynote orientation'
                    },
                    {
                        src: 'assets/events/dos-general-assembly-2025/dos-general-assembly-2025 (2).jpg',
                        caption: 'Awarding Certificates of Appreciation to guest speakers Robert Louis M. Guese and Carl Cyrus Lapuz with President Marcus Dwayne and Scholarship Unit Representative'
                    },
                    {
                        src: 'assets/events/dos-general-assembly-2025/dos-general-assembly-2025 (3).jpg',
                        caption: 'Facilitating the collaborative "Palette Party" merchandise design brainstorming session with DOST scholars'
                    },
                    {
                        src: 'assets/events/dos-general-assembly-2025/dos-general-assembly-2025 (4).jpg',
                        caption: 'BPSU-DOS Executive Committee officers, guest speakers, and project heads holding the No. 1 unity pose'
                    },
                    {
                        src: 'assets/events/dos-general-assembly-2025/dos-general-assembly-2025 (5).jpg',
                        caption: 'Presentation of tokens and appreciation awards to keynote speakers and guests'
                    },
                    {
                        src: 'assets/events/dos-general-assembly-2025/dos-general-assembly-2025 (6).jpg',
                        caption: 'Palette Party group winners presenting their collaborative T-Shirt and Lanyard merchandise concept designs'
                    }
                ],
                proofs: [
                    {
                        type: 'document',
                        label: 'Official Project Proposal — FOCUS: BPSU-DOS General Assembly 2025 (PDF)',
                        url: 'assets/events/dos-general-assembly-2025/FOCUS_Project Proposal.pdf'
                    },
                    {
                        type: 'document',
                        label: 'Official Post-Activity Narrative Report — BPSU-DOS A.Y. 2025–2026 (DOCX)',
                        url: 'assets/events/dos-general-assembly-2025/NARRATIVE-REPORT_DOS-GA-A.Y.-25-26.docx'
                    }
                ]
            },
            {
                id: 'npsc-2025',
                role: 'Regional Delegate & Creative Lead',
                tag: 'Regional Delegate • Creative Lead',
                org: 'DOST – Science Education Institute',
                event: 'National Patriot Scholars Congress (NPSC) 2025',
                institution: 'DOST-SEI The Filipino Patriot Scholars Program × DOST-Central Luzon',
                month: 'SEP',
                year: '2025',
                date: 'September 3–5, 2025',
                place: 'Dusit Thani Mactan, Lapu-Lapu City, Cebu',
                location: 'Dusit Thani Mactan, Cebu',
                hours: '3 Days (Plenary, World Café & Cultural Night)',
                summary: 'Represented Central Luzon at NPSC 2025 in Cebu. Steered pre-event operations, designed the official World Café regional exhibit poster as lead presenter, formulated grassroots community initiatives, and performed in the Cultural Night.',
                desc: 'Represented Central Luzon at NPSC 2025 in Cebu. Steered pre-event operations, designed the official World Café regional exhibit poster as lead presenter, formulated grassroots community initiatives, and performed in the Cultural Night.',
                description: 'Served as official Region 3 Delegate and Creative Lead at the National Patriot Scholars Congress (NPSC) 2025 held at Dusit Thani Mactan, Cebu. Contributed across pre-event scriptwriting and technicalities, conceptualized the regional World Café showcase poster, led delegation presentation, and performed in the Cultural Night celebrating Central Luzon.',
                story: 'Looking back at this time last year, I am filled with immense gratitude for an unforgettable milestone that challenged, grounded, and broadened my perspective as a scholar-leader—the National Patriot Scholars Congress (NPSC) 2025 at Dusit Thani Mactan, Cebu.\n\nRepresenting Central Luzon alongside an incredible delegation was a journey that started long before we even stepped foot in the plenary hall. From behind the scenes to the main stage, it was an honor to contribute to our region\'s representation every step of the way:\n\n➯ Pre-Event Operations & Technicalities: Helped steer prep operations, finalized scriptwriting, fine-tuned presentation technicalities, and structured our overall workflow to ensure our regional voice was delivered clearly.\n\n➯ Creative Direction & The World Café: Conceptualized and designed our official World Café regional exhibit poster, translating Region 3’s community milestones, culture, and progress into a cohesive visual story. Stepping up as lead presenter to guide our delegation during the live showcase was an empowering highlight!\n\n➯ Community Action & Problem Solving: Collaborated with our team to formulate grassroots community initiatives, sharpening our strategic problem-solving frameworks around real-world issues.\n\n• Artistry on the National Stage: Brought our region’s spirit to life during Cultural Night, performing a musical piece with the delegation that celebrated the warmth, drive, and heart of Region 3 scholars.\n\nBeyond the deliverables, what made NPSC truly life-changing was the fellowship. Meeting, collaborating, and breaking bread with brilliant DOST scholar-leaders nationwide—from Luzon, Visayas, to Mindanao—reaffirmed that we are united by a singular calling: science and technology in genuine service of the Filipino people.\n\nA heartfelt thank you to DOST-Science Education Institute, DOST SEI The Filipino Patriot Scholars Program, DOST-Central Luzon Office, Dr. Jayeel Cornelio, and every organizer who created this empowering home for scholar-leaders. To my co-delegates who became family throughout the late-night preps and stage moments—cheers to the impact we built together! Padayon, mga Iskolar ng Bayan para sa Bayan! 💡🌾',
                responsibilities: [
                    'Steered regional pre-event operations, finalized presentation scriptwriting, and fine-tuned stage technicalities',
                    'Conceptualized and designed the official Region 3 World Café exhibit poster showcasing community milestones and regional progress',
                    'Stepped up as Lead Presenter guiding the Central Luzon delegation during the live national World Café showcase',
                    'Collaborated with inter-regional scholar teams to formulate grassroots community action initiatives and problem-solving frameworks',
                    'Performed in the Cultural Night national musical presentation celebrating the identity and heritage of Central Luzon scholars'
                ],
                certificate: 'assets/NPSC-Certificate.jpg',
                photos: [
                    {
                        src: 'assets/events/NPSC-2025/npsc-2025 (1).JPG',
                        caption: 'Plenary hall assembly at Dusit Thani Mactan, Cebu with Central Luzon delegates'
                    },
                    {
                        src: 'assets/events/NPSC-2025/npsc-2025 (2).JPG',
                        caption: 'Central Luzon delegation unity sign in front of the NPSC 2025 stage backdrop'
                    },
                    {
                        src: 'assets/events/NPSC-2025/npsc-2025 (4).JPG',
                        caption: 'DOST Region 3 delegation celebration pose during congress sessions'
                    },
                    {
                        src: 'assets/events/NPSC-2025/npsc-2025 (5).JPG',
                        caption: 'Delegates gathering together during the national scholar fellowship sessions'
                    },
                    {
                        src: 'assets/events/NPSC-2025/npsc-2025 (7).JPG',
                        caption: 'Official commemorative delegation portrait at the NPSC 2025 national congress'
                    }
                ],
                proofs: [
                    {
                        type: 'document',
                        label: 'Certificate of Participation — NPSC 2025 (DOST-SEI)',
                        url: 'assets/NPSC-Certificate.jpg'
                    }
                ]
            },
            {
                id: 'auf-ads-angeles-scholars-assembly',
                role: 'Guest Participant & Delegate',
                tag: 'Guest Participant',
                org: 'AUF – Association of DOST Scholars (AUF-ADS)',
                event: 'AUF-ADS SC: Angeles Scholars Assembly',
                institution: 'Angeles University Foundation (AUF)',
                month: 'NOV',
                year: '2025',
                date: 'November 2025',
                place: 'Angeles University Foundation, Angeles City, Pampanga',
                location: 'Angeles University Foundation, Angeles City, Pampanga',
                hours: 'Guest Participant & Fellowship',
                summary: 'Attended the AUF-ADS SC: Angeles Scholars Assembly as a guest participant and visiting scholar-leader in active solidarity and cross-institutional fellowship for Angeles University Foundation DOST scholars.',
                desc: 'Attended the AUF-ADS SC: Angeles Scholars Assembly as a guest participant and visiting scholar-leader in active solidarity and cross-institutional fellowship for Angeles University Foundation DOST scholars.',
                description: 'Attended the AUF-ADS SC: Angeles Scholars Assembly hosted by the Angeles University Foundation – Association of DOST Scholars. Participated as a visiting guest delegate and scholar-leader in support of regional scholar initiatives, leadership dialogues, and student fellowship across Central Luzon universities.',
                story: 'Attended the AUF-ADS SC: Angeles Scholars Assembly at Angeles University Foundation as a guest participant and scholar-leader in active support of the AUF-ADS community.\n\nTook part in cross-institutional fellowship, plenary assemblies, and delegation exchanges, strengthening linkages between regional scholar associations across Central Luzon.\n\nNote: Official documentation photos and Certificate of Participation are currently in compliance and will be updated upon submission.',
                responsibilities: [
                    'Attended plenary sessions and assembly highlights as an official visiting guest participant',
                    'Demonstrated cross-campus solidarity and camaraderie with the AUF-ADS scholar community',
                    'Engaged in regional scholar-leader networking and collaborative student development exchanges',
                    'Participated in peer support discussions championing science and technology for the nation'
                ],
                certificate: '',
                photos: [],
                proofs: []
            }
        ]
    },
    community: {
        id: 'community',
        key: 'community',
        stampNo: 'NO. 03',
        title: 'Community',
        label: 'Community Involvement',
        short: 'Community',
        stamp: 'Community',
        desc: 'Outreach, civic and community-driven initiatives.',
        accent: '#C8691E',
        cover: 'linear-gradient(135deg, #7A3410 0%, #C8691E 55%, #F0A24E 100%)',
        icon: '<circle cx="9" cy="8" r="3" stroke="currentColor" stroke-width="2"/><circle cx="17" cy="9.5" r="2.4" stroke="currentColor" stroke-width="2"/><path d="M3.5 19C3.5 15.9 6 13.5 9 13.5C12 13.5 14.5 15.9 14.5 19M15 13.8C17.6 13.6 20.5 15.4 20.5 18.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
        items: [
            {
                id: 'maya-multimedia',
                role: 'Multimedia Committee Member',
                tag: 'Committee Member',
                org: 'Mariveles Youth Alliance (MaYA)',
                event: 'Youth Empowerment & Civic Campaigns',
                institution: 'Mariveles Youth Alliance (MaYA)',
                month: '2021',
                year: '2024',
                date: '2021 – 2024',
                place: 'Mariveles, Bataan · Baguio City',
                location: 'Mariveles, Bataan · Baguio City',
                hours: '3 Years Active Service',
                summary: 'Served as a multimedia committee member from 2021 to 2024, tapped in to create publication materials and participate on 3-day team building planning in Baguio (maya-teambldg).',
                desc: 'Served as a multimedia committee member from 2021 to 2024, tapped in to create publication materials and participate on 3-day team building planning in Baguio (maya-teambldg).',
                description: 'Served as a multimedia committee member from 2021 to 2024, tapped in to create publication materials and participate on 3-day team building planning in Baguio (maya-teambldg).',
                story: 'Served as an active Multimedia Committee Member of the Mariveles Youth Alliance (MaYA) from 2021 to 2024. Tapped in to spearhead visual branding, create publication materials, and design promotional assets for youth advocacy campaigns and community development projects. Participated actively in the intensive 3-day team building and action planning workshop in Baguio City (maya-teambldg), formulating strategic annual youth roadmaps and community outreach programs.',
                responsibilities: [
                    'Created impactful publication materials, announcements, and digital media for MaYA youth advocacy and civic campaigns',
                    'Participated in the intensive 3-day team building and strategic action planning retreat in Baguio City (maya-teambldg)',
                    'Collaborated with committee heads and youth leaders on youth empowerment programs in Mariveles',
                    'Maintained consistent visual identity and public engagement across community communication channels'
                ],
                certificate: 'assets/events/MAYA/maya-certs (1).jpeg',
                photos: [
                    {
                        src: 'assets/events/MAYA/maya-teambldg.JPG',
                        caption: '3-Day Team Building & Strategic Planning session in Baguio City (maya-teambldg)'
                    },
                    {
                        src: 'assets/events/MAYA/maya-teambldg (1).JPG',
                        caption: 'Youth leaders and committee members during team building exercises in Baguio'
                    },
                    {
                        src: 'assets/events/MAYA/maya-teambldg (2).JPG',
                        caption: 'Collaborative planning and fellowship with the Mariveles Youth Alliance team'
                    },
                    {
                        src: 'assets/events/MAYA/maya-teambldg (3).JPG',
                        caption: 'Strategic roadmap formulation for youth initiatives and civic outreaches'
                    },
                    {
                        src: 'assets/events/MAYA/maya-teambldg (4).JPG',
                        caption: 'MaYA delegates commemorative group picture in Baguio City'
                    }
                ],
                proofs: [
                    {
                        type: 'document',
                        label: 'Certificate of Recognition — Multimedia Committee Member (MaYA)',
                        url: 'assets/events/MAYA/maya-certs (1).jpeg'
                    },
                    {
                        type: 'document',
                        label: 'Certificate of Commendation — MaYA Leadership & Service',
                        url: 'assets/events/MAYA/maya-certs (2).jpeg'
                    },
                    {
                        type: 'document',
                        label: 'Certificate of Appreciation — Youth Service & Development',
                        url: 'assets/events/MAYA/maya-certs (3).jpeg'
                    },
                    {
                        type: 'post',
                        label: 'Official MaYA Badge — Virtual Action Planning Credential',
                        url: 'assets/events/MAYA/MAYA BADGE - VIRTUAL ACTION PLANNING (1).png'
                    }
                ]
            },
            {
                id: 'gets-pbw-2025',
                role: 'Official Delegate (SSITE Representative)',
                tag: 'Official Delegate',
                org: 'Philippine Blockchain Week (PBW) × DICT × BCP',
                event: 'Global Emerging Tech Summit (GETS) 2025',
                institution: 'DICT, Provincial Government of Bataan & Blockchain Council of the Philippines',
                month: 'OCT',
                year: '2025',
                date: 'October 27, 2025',
                place: 'Bataan People’s Center, Balanga City, Bataan',
                location: 'Bataan People’s Center, Balanga City, Bataan',
                hours: 'Summit Delegate & Emerging Tech Exploration',
                summary: 'Represented SSITE as official delegate at GETS 2025 under the theme "Bayanihan Goes Digital", exploring emerging blockchain, AI innovations, and digital transformation.',
                desc: 'Represented SSITE as official delegate at GETS 2025 under the theme "Bayanihan Goes Digital", exploring emerging blockchain, AI innovations, and digital transformation.',
                description: 'Participated as an official student delegate representing BPSU-SSITE at the Global Emerging Tech Summit (GETS) 2025, organized by Philippine Blockchain Week (PBW) in cooperation with DICT, the Provincial Government of Bataan, and the Blockchain Council of the Philippines (BCP) at the Bataan People’s Center under the theme "Bayanihan Goes Digital".',
                story: 'On October 27, 2025, represented BPSU-SSITE as an official delegate at the Global Emerging Tech Summit (GETS) 2025 held at the Bataan People’s Center. Presented by the Department of Information and Communications Technology (DICT) in cooperation with the Provincial Government of Bataan, Blockchain Council of the Philippines (BCP), and organized by Philippine Blockchain Week (PBW), the summit convened under the banner of "Bayanihan Goes Digital" to emphasize how unity, technology, and cross-sector collaboration can create opportunities, generate jobs, and foster inclusive growth for Filipinos nationwide. Explored enterprise technology booths, observed cutting-edge innovations in blockchain networks, artificial intelligence, and digital government transformation, and engaged with national industry leaders and global experts during plenary panels.',
                responsibilities: [
                    'Represented BPSU-SSITE as an accredited delegate at the Global Emerging Tech Summit 2025',
                    'Explored tech exhibition booths focusing on decentralized blockchain architecture, Web3 governance, and AI workflows',
                    'Participated in industry plenaries on "Bayanihan Goes Digital" covering provincial digitization and inclusive economic growth',
                    'Brought key insights on emerging tech trends back to the university computing community and fellow student leaders'
                ],
                certificate: '',
                photos: [
                    {
                        src: 'assets/Philippine-Blockchain-Week-2025/PBWeek (1).jpg',
                        caption: 'GETS 2025 Summit plenary hall at Bataan People’s Center'
                    },
                    {
                        src: 'assets/Philippine-Blockchain-Week-2025/PBWeek (2).jpg',
                        caption: 'Official delegate pass and summit credentials'
                    },
                    {
                        src: 'assets/Philippine-Blockchain-Week-2025/PBWeek (3).jpg',
                        caption: 'SSITE student delegates exploring technology exhibits and industry booths'
                    },
                    {
                        src: 'assets/Philippine-Blockchain-Week-2025/PBWeek (4).jpg',
                        caption: 'Keynote presentation on Bayanihan Goes Digital and emerging tech adoption'
                    },
                    {
                        src: 'assets/Philippine-Blockchain-Week-2025/PBWeek (5).jpg',
                        caption: 'Panel discussion featuring tech innovators and government leaders'
                    },
                    {
                        src: 'assets/Philippine-Blockchain-Week-2025/PBWeek (6).jpg',
                        caption: 'Interactive technology showcase and blockchain demonstrations'
                    },
                    {
                        src: 'assets/Philippine-Blockchain-Week-2025/PBWeek (7).jpg',
                        caption: 'Commemorative group photo with fellow student delegates at the summit'
                    }
                ],
                proofs: [
                    {
                        type: 'post',
                        label: 'Official GETS 2025 Delegate Recap — SSITE Delegation',
                        url: 'assets/Philippine-Blockchain-Week-2025/PBWeek (1).jpg'
                    },
                    {
                        type: 'document',
                        label: 'DICT & Philippine Blockchain Week Summit Highlights',
                        url: 'assets/Philippine-Blockchain-Week-2025/PBWeek (4).jpg'
                    }
                ]
            }
        ]
    },
    speaking: {
        id: 'speaking',
        key: 'speaking',
        stampNo: 'NO. 04',
        title: 'Speaking',
        label: 'Speaking Engagements',
        short: 'Speaking',
        stamp: 'Speaking',
        desc: 'Keynote speeches, guest talks, and scholar leadership panels.',
        accent: '#8E44AD',
        cover: 'linear-gradient(135deg, #3A1054 0%, #8E44AD 55%, #B768E5 100%)',
        icon: '<path d="M12 2C9.79 2 8 3.79 8 6V12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12V6C16 3.79 14.21 2 12 2Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 10V12C19 15.87 15.87 19 12 19C8.13 19 5 15.87 5 12V10M12 19V22M8 22H16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
        items: [
            {
                id: 'speaking-01',
                year: '2026',
                month: 'OCT',
                date: 'October 31, 2026',
                role: 'Guest Speaker',
                tag: 'Guest Speaker',
                org: 'TSU-ADS General Assembly 2026',
                event: 'TSU-ADS General Assembly 2026',
                institution: 'Tarlac State University – Association of DOST Scholars',
                summary: 'Delivered an inspirational keynote and message addressing student-scholars on leadership execution, youth volunteerism, and bridging tech skills with civic impact.',
                desc: 'Delivered an inspirational keynote and message addressing student-scholars on leadership execution, youth volunteerism, and bridging tech skills with civic impact.',
                description: 'Delivered an inspirational keynote and message addressing student-scholars on leadership execution, youth volunteerism, and bridging tech skills with civic impact.',
                story: 'Invited by the Tarlac State University – Association of DOST Scholars (TSU-ADS) to serve as Guest Speaker and deliver an Inspirational Message at their annual General Assembly held at TSU Lucinda Campus. The assembly gathered DOST undergraduate scholars across academic levels under a unified vision of scholar-leadership, academic perseverance, and community volunteerism. In addition to delivering the address, participated in the interactive Scholar-Leader Talk Show panel and engaged scholars in a lively open forum discussing how tech expertise drives meaningful civic change.',
                place: 'TSU Lucinda Campus, Tarlac City',
                location: 'TSU Lucinda Campus, Tarlac City',
                hours: '6 hrs (Keynote & Open Forum)',
                responsibilities: [
                    'Delivered the keynote inspirational address on scholar-leadership, academic resilience, and community volunteerism',
                    'Participated as a panelist in the interactive Scholar-Leader Talk Show alongside fellow DOST scholar leaders',
                    'Facilitated the open forum Q&A, answering queries on balancing scholarship demands with creative and tech initiatives',
                    'Conducted networking and mentorship exchange with TSU-ADS student officers and delegates'
                ],
                certificate: 'assets/TSU-ADS-Speaker-2026/TSU-ADS-Speaker-Certificate.jpg',
                photos: [
                    {
                        src: 'assets/TSU-ADS-Speaker-2026/TSU-ADS-PIC.JPG',
                        caption: 'Delivering the inspirational address with fellow scholar-leaders on the talk show panel'
                    },
                    {
                        src: 'assets/TSU-ADS-Speaker-2026/TSU-ADS-PIC-3.JPG',
                        caption: 'Interactive Talk Show & Q&A open forum with DOST student-scholars'
                    },
                    {
                        src: 'assets/TSU-ADS-Speaker-2026/TSU-ADS-PIC-2.JPG',
                        caption: 'Awarding and commemorative group pose holding certificates with fellow DOST scholar delegates'
                    },
                    {
                        src: 'assets/TSU-ADS-Speaker-2026/TSU-ADS-Pic-4.JPG',
                        caption: 'DOST Scholar fellowship and unity pose with TSU-ADS officers, co-speakers, and delegates'
                    }
                ],
                proofs: [
                    {
                        type: 'letter',
                        label: 'Official Invitation Letter — TSU-ADS General Assembly 2026',
                        url: 'assets/TSU-ADS-Speaker-2026/TSU-ADS-Invitation-Letter.jpg'
                    },
                    {
                        type: 'document',
                        label: 'Certificate of Appreciation — Speaker Recognition',
                        url: 'assets/TSU-ADS-Speaker-2026/TSU-ADS-Speaker-Certificate.jpg'
                    }
                ]
            },
            {
                id: 'speaking-tsu-general-assembly-2025',
                year: '2025',
                month: 'OCT',
                date: 'October 2025',
                role: 'Guest Keynote Speaker',
                tag: 'Keynote Speaker',
                org: 'TSU – Association of DOST Scholars (TSU-ADS)',
                event: 'TSU-ADS General Assembly 2025',
                institution: 'Tarlac State University – College of Computer Studies',
                place: 'CCS AVR (Audio-Visual Room), Tarlac State University, Tarlac City',
                location: 'CCS AVR, Tarlac State University, Tarlac City',
                hours: 'Keynote Address & Dialogue (80+ Attendees)',
                summary: 'Delivered the featured keynote talk on "Like Ripples in Water, Every Act of Leadership Creates a Wave of Change" for 80+ fellow DOST scholars at the CCS AVR, discussing scholar resilience, leading without formal titles, and turning STEM innovation into community interventions.',
                desc: 'Delivered the featured keynote talk on "Like Ripples in Water, Every Act of Leadership Creates a Wave of Change" for 80+ fellow DOST scholars at the CCS AVR, discussing scholar resilience, leading without formal titles, and turning STEM innovation into community interventions.',
                description: 'Invited as Keynote Speaker by the Tarlac State University – Association of DOST Scholars (TSU-ADS) for the TSU-ADS General Assembly 2025 held at the CCS AVR. Spoke before a room of over 80 fellow DOST scholars on the theme "Like Ripples in Water, Every Act of Leadership Creates a Wave of Change", engaging attendees in an open dialogue on balancing academic excellence with organizational commitments, leading without titles, and mobilizing STEM knowledge for community impact.',
                story: 'A full year later, and the warmth of this room still stays with me.\n\nAround this time last year, I found myself on the road to Tarlac with a racing heart and a speech built straight from lived experience, ready to face a room of over 80 fellow DOST scholars at the TSU-ADS General Assembly 2025.\n\nWe often talk about the phrase "Like Ripples in Water, Every Act of Leadership Creates a Wave of Change," but standing in front of everyone at the CCS AVR that afternoon made every word tangible.\n\nInstead of an academic lecture, the afternoon turned into an open dialogue about the real grit of the scholar journey:\n\n• The delicate balancing act between high academic expectations and organizational commitments.\n• The realization that leadership rarely begins with formal titles, but with the quiet decision to step up when a solution is needed.\n• How young innovators across Science and Technology fields can collaborate to turn scholar knowledge into actual community interventions.\n\nLooking back 365 days later, the gratitude remains just as vivid:\n\nA heartfelt thank you to the TSU-ADS leadership—Project Head Russil Dave Robeños, President Louize Vein Manzano, and Ms. Karen Danez—for trusting me with your stage and for the genuine hospitality.\n\nTo the 80+ TSU DOST scholars who leaned in, laughed, and brought so much energy into that hall: thank you for making it such a safe, inspiring space to exchange stories.\n\nAnd to my travel companions and support circle behind the scenes: thank you for keeping me grounded and making the long miles so memorable.\n\nThe ripples started in that room haven’t stopped moving. Keep creating your own waves of change, TSU scholars!',
                responsibilities: [
                    'Delivered the featured keynote talk "Like Ripples in Water, Every Act of Leadership Creates a Wave of Change" before 80+ TSU DOST scholars',
                    'Facilitated an open dialogue on balancing heavy academic coursework with scholar leadership and organizational commitments',
                    'Empowered scholars on leading impact through initiative and grassroots problem-solving rather than formal executive titles',
                    'Engaged participants in collaborative discussions on translating STEM and computing competencies into direct community interventions'
                ],
                certificate: 'assets/TSU-General-Assembly-2025-cert.JPG',
                photos: [
                    {
                        src: 'assets/TSU-General-Assembly-2025/TSU-GenAssembly-2025.jpeg',
                        caption: 'Delivering the keynote address "Like Ripples in Water" at the TSU CCS AVR'
                    },
                    {
                        src: 'assets/TSU-General-Assembly-2025/TSU-GenAssembly-2025 (1).jpeg',
                        caption: 'Interactive open dialogue with 80+ fellow DOST scholars and student leaders'
                    },
                    {
                        src: 'assets/TSU-General-Assembly-2025/TSU-GenAssembly-2025 (2).jpeg',
                        caption: 'Engaging attendees on the grit and realities of the scholar leadership journey'
                    },
                    {
                        src: 'assets/TSU-General-Assembly-2025/TSU-GenAssembly-2025 (3).jpeg',
                        caption: 'Formal awarding of the Certificate of Appreciation by TSU-ADS leadership'
                    },
                    {
                        src: 'assets/TSU-General-Assembly-2025/TSU-GenAssembly-2025 (4).jpeg',
                        caption: 'Commemorative delegation and officer group photo at the CCS AVR hall'
                    }
                ],
                proofs: [
                    {
                        type: 'document',
                        label: 'Certificate of Appreciation — Keynote Speaker (TSU-ADS General Assembly 2025)',
                        url: 'assets/TSU-General-Assembly-2025-cert.JPG'
                    },
                    {
                        type: 'post',
                        label: 'Keynote Stage Session Highlights — TSU-ADS General Assembly 2025',
                        url: 'assets/TSU-General-Assembly-2025/TSU-GenAssembly-2025.jpeg'
                    }
                ]
            },
            {
                id: 'ssite-general-assembly',
                year: '2026',
                month: 'FEB',
                date: 'February 12, 2026',
                role: 'Invited Guest Speaker',
                tag: 'Guest Speaker',
                org: 'SSITE General Assembly 2026',
                event: 'This is Four: General Assembly 2026',
                institution: 'BPSU – Student Society on Information Technology Education (BPSU-SSITE)',
                place: '3/F Learning Commons, University Library, BPSU Main Campus',
                location: 'BPSU Main Campus, City of Balanga, Bataan',
                hours: '1.5 hrs (Speaker Discussion & Reflection)',
                summary: 'Invited as Guest Speaker by the incoming SSITE Executive Board to share insights on vision and leadership, and discuss career opportunities in Information Technology for IT students.',
                desc: 'Invited as Guest Speaker by the incoming SSITE Executive Board to share insights on vision and leadership, and discuss career opportunities in Information Technology for IT students.',
                description: 'Invited as a distinguished Guest Speaker and former President (AY 2024–2025) by the Student Society on Information Technology Education (BPSU-SSITE) for "This is Four: General Assembly 2026". Delivered a 1-hour speaker session discussing career opportunities in Information Technology, emerging tech paths, and continuous learning, followed by an interactive reflection session with 50+ IT student delegates and newly inducted officers.',
                story: 'Invited as a distinguished Guest Speaker and former President (AY 2024–2025) by the incoming Student Society on Information Technology Education (BPSU-SSITE) Executive Board for "This is Four: General Assembly 2026" held on February 12, 2026, at the 3rd Floor Learning Commons, University Library, BPSU Main Campus. Delivered a 1-hour speaker session discussing career opportunities in Information Technology, highlighting its wide career paths, high industry demand, and the imperative of continuous learning. Shared experiential insights on vision, service, and leadership as an organizational leader to inspire members as future tech innovators, followed by an interactive reflection and Q&A session with 50+ IT undergraduates.',
                responsibilities: [
                    'Delivered the featured keynote discussion on career opportunities in Information Technology, tech industry demand, and lifelong learning',
                    'Shared experiential insights on vision, service, and leadership from tenure as former SSITE President (AY 2024–2025)',
                    'Facilitated an interactive reflection and open Q&A session with 50+ IT student delegates and newly inducted officers',
                    'Collaborated with the incoming SSITE Executive Board (led by President Lance David H. Cornejo and Adviser John Jeremie Z. Desipida) on student development initiatives'
                ],
                certificate: 'assets/events/SSITE General Assembly/General-Assembly-SSITE-Certificate.png',
                photos: [
                    {
                        src: 'assets/events/SSITE General Assembly/ssite-general-assembly-01 (1).jpg',
                        caption: 'Stage presentation and keynote discussion during the SSITE General Assembly'
                    },
                    {
                        src: 'assets/events/SSITE General Assembly/ssite-general-assembly-01 (2).jpg',
                        caption: 'Sharing career pathways in Information Technology with IT students'
                    },
                    {
                        src: 'assets/events/SSITE General Assembly/ssite-general-assembly-01 (3).jpg',
                        caption: 'Interactive reflection session with student attendees and officers'
                    },
                    {
                        src: 'assets/events/SSITE General Assembly/ssite-general-assembly-01 (4).jpg',
                        caption: 'Commemorative photo with SSITE officers, advisers, and assembly attendees'
                    }
                ],
                proofs: [
                    {
                        type: 'letter',
                        label: 'Official Speaker Invitation Letter — SSITE General Assembly 2026 (PDF)',
                        url: 'assets/events/SSITE General Assembly/SPEAKER-1_INV_LETTER_GENERALASSEMBLY.pdf'
                    },
                    {
                        type: 'document',
                        label: 'Activity Request & Project Proposal Document (PDF)',
                        url: 'assets/events/SSITE General Assembly/REQUEST_TO_HOLD_THE_ACTIVITY_&_PROJECT_PROPOSAL.pdf'
                    },
                    {
                        type: 'document',
                        label: 'Certificate of Appreciation — Speaker Recognition',
                        url: 'assets/events/SSITE General Assembly/General-Assembly-SSITE-Certificate.png'
                    },
                    {
                        type: 'letter',
                        label: 'Speaker Invitation Letter (Original DOCX)',
                        url: 'assets/events/SSITE General Assembly/SPEAKER-1_INV_LETTER_GENERALASSEMBLY.docx'
                    }
                ]
            },
            {
                id: 'speaking-robotics-club',
                year: '2026',
                month: 'FEB',
                date: 'February 27, 2026',
                role: 'Guest Speaker',
                tag: 'Guest Speaker',
                org: 'Antikythera: Technology & Astronomy Club',
                event: 'Antikythera "Robo-Day" (RoboWeek 2026)',
                institution: 'Bataan National High School – Senior High School (BNHS-SHS)',
                summary: 'Invited by the Antikythera Club as Guest Speaker for Robo-Day during RoboWeek 2026 at BNHS-SHS, delivering an inspiring presentation on robotics, innovation, and scientific exploration.',
                desc: 'Invited by the Antikythera Club as Guest Speaker for Robo-Day during RoboWeek 2026 at BNHS-SHS, delivering an inspiring presentation on robotics, innovation, and scientific exploration.',
                description: 'Invited by the Antikythera Club (Technology and Astronomy Club / Robotics Club) of Bataan National High School – Senior High School (BNHS-SHS) to serve as a distinguished Guest Speaker for "Robo-Day" during RoboWeek 2026. Delivered an engaging keynote presentation and tech talk titled "Anyone Can Be Ada Lovelace: How Women in Tech Do Things," inspiring students in robotics, scientific exploration, and breaking gender barriers in STEM.',
                story: 'Invited by the Antikythera Club (Technology and Astronomy Club / Robotics Club) of Bataan National High School – Senior High School (BNHS-SHS) to serve as a distinguished Guest Speaker for "Robo-Day" during RoboWeek 2026 on February 27, 2026. Delivered an engaging and empowering keynote and tech talk titled "Anyone Can Be Ada Lovelace: How Women in Tech Do Things." Discussed breaking gender barriers in computer science, robotics, and engineering, celebrating historical trailblazers like Ada Lovelace while showcasing practical approaches to modern development, digital innovation, and scientific exploration.',
                place: 'BNHS-SHS, City of Balanga, Bataan',
                location: 'Bataan National High School – Senior High School (BNHS-SHS)',
                hours: 'Guest Speaker & Panelist',
                responsibilities: [
                    'Delivered the featured keynote talk "Anyone Can Be Ada Lovelace: How Women in Tech Do Things" to senior high school students',
                    'Showcased workflows and opportunities for women pursuing robotics, engineering, and digital innovation',
                    'Facilitated open Q&A and interactive discussions with Antikythera Club members on student robotics projects',
                    'Mentored students on bridging creative design thinking with STEM problem solving and scientific exploration'
                ],
                certificate: 'assets/events/robotics club/roboweek-cert.JPG',
                photos: [
                    {
                        src: 'assets/events/robotics club/Robotics-Club-01.JPG',
                        caption: 'Delivering the "Anyone Can Be Ada Lovelace" presentation at RoboWeek 2026'
                    },
                    {
                        src: 'assets/events/robotics club/Robotics-Club-02.JPG',
                        caption: 'Interactive discussion with high school students on women in STEM and robotics'
                    },
                    {
                        src: 'assets/events/robotics club/Robotics-Club-03 (1).JPG',
                        caption: 'Engaging participants on breaking barriers and innovating in technology'
                    },
                    {
                        src: 'assets/events/robotics club/Robotics-Club-03 (2).JPG',
                        caption: 'Commemorative group photo with Antikythera Club organizers and student delegates'
                    }
                ],
                proofs: [
                    {
                        type: 'document',
                        label: 'Certificate of Appreciation — Robo-Day Speaker (RoboWeek 2026)',
                        url: 'assets/events/robotics club/roboweek-cert.JPG'
                    },
                    {
                        type: 'post',
                        label: 'RoboWeek 2026 Speaker Session — Antikythera Club (BNHS-SHS)',
                        url: 'assets/events/robotics club/Robotics-Club-01.JPG'
                    },
                    {
                        type: 'document',
                        label: 'Event Highlights & Speaker Showcase',
                        url: 'assets/events/robotics club/Robotics-Club-02.JPG'
                    }
                ]
            }
        ]
    }
};

/* Backwards-compatibility wrapper for window.AIRCHIVE_VOLUNTEERING */
window.AIRCHIVE_VOLUNTEERING = {
    sections: Object.values(window.volunteerData)
};
