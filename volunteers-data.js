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
                id: 'campus-01', sample: true,
                role: 'Volunteer Role', org: 'Campus Organization / Event',
                month: 'MON', year: '2026', date: 'Month DD, 2026', place: 'BPSU Main Campus', hours: '— hrs',
                summary: 'Placeholder — what the activity was and how you helped.',
                story: '',
                responsibilities: [],
                certificate: '', photos: [], proofs: []
            },
            {
                id: 'campus-02', sample: true,
                role: 'Volunteer Role', org: 'Campus Organization / Event',
                month: 'MON', year: '2025', date: 'Month DD, 2025', place: 'BPSU Main Campus', hours: '— hrs',
                summary: 'Placeholder — describe your contribution.',
                story: '', responsibilities: [], certificate: '', photos: [], proofs: []
            },
            {
                id: 'campus-03', sample: true,
                role: 'Volunteer Role', org: 'Campus Organization / Event',
                month: 'MON', year: '2024', date: 'Month DD, 2024', place: 'BPSU Main Campus', hours: '— hrs',
                summary: 'Placeholder — describe your contribution.',
                story: '', responsibilities: [], certificate: '', photos: [], proofs: []
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
                id: 'dost-01', sample: true,
                role: 'Participant', org: 'DOST Event / Program',
                month: 'MON', year: '2026', date: 'Month DD, 2026', place: 'Venue', hours: '— hrs',
                summary: 'Placeholder — the event, what you learned and took part in.',
                story: '', responsibilities: [], certificate: '', photos: [], proofs: []
            },
            {
                id: 'dost-02', sample: true,
                role: 'Participant', org: 'DOST Event / Program',
                month: 'MON', year: '2025', date: 'Month DD, 2025', place: 'Venue', hours: '— hrs',
                summary: 'Placeholder — describe the event.',
                story: '', responsibilities: [], certificate: '', photos: [], proofs: []
            },
            {
                id: 'dost-03', sample: true,
                role: 'Delegate', org: 'DOST Event / Program',
                month: 'MON', year: '2025', date: 'Month DD, 2025', place: 'Venue', hours: '— hrs',
                summary: 'Placeholder — describe the event.',
                story: '', responsibilities: [], certificate: '', photos: [], proofs: []
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
                id: 'community-01', sample: true,
                role: 'Volunteer', org: 'Community Initiative',
                month: 'MON', year: '2026', date: 'Month DD, 2026', place: 'Barangay / City', hours: '— hrs',
                summary: 'Placeholder — the cause, the people served and your part in it.',
                story: '', responsibilities: [], certificate: '', photos: [], proofs: []
            },
            {
                id: 'community-02', sample: true,
                role: 'Volunteer', org: 'Community Initiative',
                month: 'MON', year: '2025', date: 'Month DD, 2025', place: 'Barangay / City', hours: '— hrs',
                summary: 'Placeholder — describe the initiative.',
                story: '', responsibilities: [], certificate: '', photos: [], proofs: []
            },
            {
                id: 'community-03', sample: true,
                role: 'Volunteer', org: 'Community Initiative',
                month: 'MON', year: '2024', date: 'Month DD, 2024', place: 'Barangay / City', hours: '— hrs',
                summary: 'Placeholder — describe the initiative.',
                story: '', responsibilities: [], certificate: '', photos: [], proofs: []
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
                id: 'speaking-02',
                year: 'MON 2025',
                month: 'MON',
                role: 'Guest Speaker',
                tag: 'Guest Speaker',
                org: 'TSU-ADS Annual General Assembly 2025',
                event: 'TSU-ADS Annual General Assembly 2025',
                institution: 'Tarlac State University – Association of DOST Scholars',
                summary: 'Shared actionable insights and personal journeys on balancing academic excellence, creative leadership, and DOST undergraduate scholarship commitments.',
                desc: 'Shared actionable insights and personal journeys on balancing academic excellence, creative leadership, and DOST undergraduate scholarship commitments.',
                description: 'Shared actionable insights and personal journeys on balancing academic excellence, creative leadership, and DOST undergraduate scholarship commitments.',
                story: 'Shared actionable insights and personal journeys on balancing academic excellence, creative leadership, and DOST undergraduate scholarship commitments.',
                place: 'Tarlac City',
                location: 'Tarlac City',
                date: '2025',
                hours: 'Speaker',
                responsibilities: [
                    'Shared personal journeys on balancing academic excellence with creative leadership',
                    'Provided strategic guidance for managing DOST undergraduate scholarship commitments'
                ],
                certificate: '',
                photos: [],
                proofs: []
            },
            {
                id: 'speaking-03',
                year: 'MON 2026',
                month: 'MON',
                role: 'Resource Person',
                tag: 'Resource Person',
                org: 'Scholar Assembly & Youth Leadership Panels',
                event: 'Scholar Assembly & Youth Leadership Panels',
                institution: 'Partner Scholar Chapters & Youth Summits',
                summary: 'Invited speaker and panelist facilitating discussions on youth-led initiatives, community project building, and digital media advocacy.',
                desc: 'Invited speaker and panelist facilitating discussions on youth-led initiatives, community project building, and digital media advocacy.',
                description: 'Invited speaker and panelist facilitating discussions on youth-led initiatives, community project building, and digital media advocacy.',
                story: 'Invited speaker and panelist facilitating discussions on youth-led initiatives, community project building, and digital media advocacy.',
                place: 'Regional',
                location: 'Regional',
                date: '2026',
                hours: 'Panelist',
                responsibilities: [
                    'Facilitated panel discussion on sustainable youth-led community projects',
                    'Guided participants on digital media advocacy and tech-driven public service'
                ],
                certificate: '',
                photos: [],
                proofs: []
            }
        ]
    }
};

/* Backwards-compatibility wrapper for window.AIRCHIVE_VOLUNTEERING */
window.AIRCHIVE_VOLUNTEERING = {
    sections: Object.values(window.volunteerData)
};
