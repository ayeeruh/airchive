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
window.AIRCHIVE_VOLUNTEERING = {
    sections: [
        {
            key: 'campus',
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
        {
            key: 'dost',
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
        {
            key: 'community',
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
        }
    ]
};
