import React from 'react';

// --- Data Structure (Unchanged) ---
const getEventType = (activity) => {
    activity = activity.toUpperCase();
    if (activity.includes('SUNDAY') || activity.includes('HOLIDAY') || activity.includes('JAYANTHI') || activity.includes('FESTIVAL') || activity.includes('INDEPENDENCE DAY') || activity.includes('EID')) {
        return 'Holiday';
    }
    if (activity.includes('IA TEST') || activity.includes('EXAMINATION') || activity.includes('PRACTICAL')) {
        return 'Exam/Assessment';
    }
    if (activity.includes('SOFT SKILLS') || activity.includes('APTITUDE') || activity.includes('EXTEMPORE') || activity.includes('TECH QUIZ') || activity.includes('WEBINAR')) {
        return 'Skill/Training';
    }
    if (activity.includes('PLACEMENT') || activity.includes('PROJECT') || activity.includes('DEPT STAFF MEETING') || activity.includes('COMMENCEMENT') || activity.includes('GUEST LECTURERS')) {
        return 'Academic/Admin';
    }
    return 'Other';
};

// Colors defined as JS objects for direct use in 'style' attribute
const styleColors = {
    'Exam/Assessment': { bg: '#FEE2E2', border: '4px solid #EF4444', text: '#B91C1C', tagBg: '#EF4444' }, // Light Red to Red
    'Holiday': { bg: '#D1FAE5', border: '4px solid #10B981', text: '#059669', tagBg: '#10B981' },         // Light Green to Green
    'Skill/Training': { bg: '#EFF6FF', border: '4px solid #3B82F6', text: '#2563EB', tagBg: '#3B82F6' },  // Light Blue to Blue
    'Academic/Admin': { bg: '#FFFBEB', border: '4px solid #F59E0B', text: '#D97706', tagBg: '#F59E0B' }, // Light Yellow to Yellow
    'Other': { bg: '#F3F4F6', border: '4px solid #6B7280', text: '#4B5563', tagBg: '#6B7280' },        // Light Gray to Gray
    'Header': '#4F46E5', // Indigo-600
    'HeaderDec': '#4B5563', // Gray-700
    'Background': '#F3F4F6', // Gray-100
};

// Data (Mapped to include event type)
const calendarData = [
    // AUGUST data remains similar, but you should apply the getEventType function to each event's activity.
    {
        month: 'AUGUST',
        workingDays: 19,
        events: [
            { date: '4/8/25', day: 'D1', activity: '#Commencement' },
            { date: '5/8/25', day: 'D2', activity: 'Dept Staff Meeting' },
            { date: '6/8/25', day: 'D3', activity: 'Placement Activities' },
            { date: '7/8/25', day: 'D4', activity: 'Group Discussion' },
            { date: '8/8/25', day: 'D5', activity: 'SC/ST & Minority Activities' },
            { date: '9/8/25', day: 'D6', activity: 'IA Test - I' },
            { date: '10/8/25', day: 'SUNDAY', activity: 'SUNDAY' },
            { date: '11/8/25', day: 'D6', activity: 'IA Test - II' },
            { date: '12/8/25', day: 'D1', activity: 'Dept Staff Meeting' },
            { date: '13/8/25', day: 'D2', activity: 'Aptitude Test' },
            { date: '14/8/25', day: 'D3', activity: 'Aptitude Test' },
            { date: '15/8/25', day: 'D4', activity: 'INDEPENDENCE DAY' },
            { date: '16/8/25', day: 'D5', activity: 'Soft Skills' },
            { date: '17/8/25', day: 'SUNDAY', activity: 'SUNDAY' },
            { date: '18/8/25', day: 'D6', activity: 'Dept Staff Meeting' },
            { date: '19/8/25', day: 'D1', activity: 'Soft Skills' },
            { date: '20/8/25', day: 'D2', activity: 'Webinar' },
            { date: '21/8/25', day: 'D3', activity: 'Placement Activities' },
            { date: '22/8/25', day: 'D4', activity: 'IA Test - III' },
            { date: '23/8/25', day: 'D5', activity: 'Placement Activities' },
            { date: '24/8/25', day: 'D6', activity: 'LINK HOLIDAY' },
            { date: '25/8/25', day: 'D1', activity: 'VARALAXMI FESTIVAL' },
            { date: '26/8/25', day: 'D2', activity: 'GANESHA FESTIVAL' },
            { date: '27/8/25', day: 'D3', activity: 'Mock Test C/C++/Quiz' },
            { date: '28/8/25', day: 'D4', activity: 'IA Test - I' },
            { date: '29/8/25', day: 'D5', activity: 'Placement Activities' },
            { date: '30/8/25', day: 'D6', activity: 'IA Test - II' },
            { date: '31/8/25', day: 'SUNDAY', activity: 'SUNDAY' },
        ].map(event => ({ ...event, type: getEventType(event.activity) })),
    },
    {
        month: 'SEPTEMBER',
        workingDays: 24,
        events: [
            { date: '1/9/25', day: 'D2', activity: 'IA Test - I' },
            { date: '2/9/25', day: 'D3', activity: 'Dept Staff Meeting' },
            { date: '3/9/25', day: 'D4', activity: 'Placement Activities' },
            { date: '4/9/25', day: 'D5', activity: 'Tech Quiz' },
            { date: '5/9/25', day: 'D6', activity: 'EID MILAD' },
            { date: '6/9/25', day: 'SATURDAY', activity: 'IA Test - II' },
            { date: '7/9/25', day: 'SUNDAY', activity: 'SUNDAY' },
            { date: '8/9/25', day: 'D1', activity: 'IA Test - I' },
            { date: '9/9/25', day: 'D2', activity: 'IA Test - I' },
            { date: '10/9/25', day: 'D3', activity: 'IA Test - II' },
            { date: '11/9/25', day: 'D4', activity: 'Extempore' },
            { date: '12/9/25', day: 'D5', activity: 'IA Test - III' },
            { date: '13/9/25', day: 'D6', activity: 'Placement Activities' },
            { date: '14/9/25', day: 'SUNDAY', activity: 'SUNDAY' },
            { date: '15/9/25', day: 'D1', activity: 'Dept Staff Meeting' },
            { date: '16/9/25', day: 'D2', activity: 'IA Test - III' },
            { date: '17/9/25', day: 'D3', activity: 'Soft Skills' },
            { date: '18/9/25', day: 'D4', activity: 'Soft Skills' },
            { date: '19/9/25', day: 'D5', activity: 'Placement Activities' },
            { date: '20/9/25', day: 'D6', activity: 'IA Test - I' },
            { date: '21/9/25', day: 'SUNDAY', activity: 'SUNDAY' },
            { date: '22/9/25', day: 'D1', activity: 'Placement Activities' },
            { date: '23/9/25', day: 'D2', activity: 'Dept Staff Meeting' },
            { date: '24/9/25', day: 'D3', activity: 'Webinar' },
            { date: '25/9/25', day: 'D4', activity: 'IA Test - II' },
            { date: '26/9/25', day: 'D5', activity: 'Placement Activities' },
            { date: '27/9/25', day: 'D6', activity: 'Team Activities' },
            { date: '28/9/25', day: 'SUNDAY', activity: 'SUNDAY' },
            { date: '29/9/25', day: 'D1', activity: 'Dept Staff Meeting' },
            { date: '30/9/25', day: 'D2', activity: 'Placement Activities' },
        ].map(event => ({ ...event, type: getEventType(event.activity) })),
    },
    {
        month: 'OCTOBER',
        workingDays: 19,
        events: [
            { date: '1/10/25', day: 'D3', activity: 'AYUDHA POOJA' },
            { date: '2/10/25', day: 'D4', activity: 'GANDHI JAYANTHI' },
            { date: '3/10/25', day: 'D5', activity: 'LINK HOLIDAY' },
            { date: '4/10/25', day: 'D6', activity: 'IA Test - III' },
            { date: '5/10/25', day: 'SUNDAY', activity: 'SUNDAY' },
            { date: '6/10/25', day: 'D1', activity: 'LINK HOLIDAY' },
            { date: '7/10/25', day: 'D2', activity: 'VALMIKI JAYANTHI' },
            { date: '8/10/25', day: 'D3', activity: 'Team Activities' },
            { date: '9/10/25', day: 'D4', activity: 'Group Projects' },
            { date: '10/10/25', day: 'D5', activity: 'IA Test - I' },
            { date: '11/10/25', day: 'D6', activity: 'IA Test - II' },
            { date: '12/10/25', day: 'SUNDAY', activity: 'SUNDAY' },
            { date: '13/10/25', day: 'D1', activity: 'Placement Activities' },
            { date: '14/10/25', day: 'D2', activity: 'Dept Staff Meeting' },
            { date: '15/10/25', day: 'D3', activity: 'Guest Lecturers' },
            { date: '16/10/25', day: 'D4', activity: 'Soft Skills' },
            { date: '17/10/25', day: 'D5', activity: 'Soft Skills' },
            { date: '18/10/25', day: 'D6', activity: 'IA Test - III' },
            { date: '19/10/25', day: 'SUNDAY', activity: 'SUNDAY' },
            { date: '20/10/25', day: 'D1', activity: 'NARAKA CHATURTHI' },
            { date: '21/10/25', day: 'D2', activity: 'LINK HOLIDAY' },
            { date: '22/10/25', day: 'D3', activity: 'BALIPADYAMI' },
            { date: '23/10/25', day: 'D4', activity: 'IA Test - I' },
            { date: '24/10/25', day: 'D5', activity: 'IA Test - II' },
            { date: '25/10/25', day: 'D6', activity: 'Placement Activities' },
            { date: '26/10/25', day: 'SUNDAY', activity: 'SUNDAY' },
            { date: '27/10/25', day: 'D1', activity: 'Dept Staff Meeting' },
            { date: '28/10/25', day: 'D2', activity: 'Placement Activities' },
            { date: '29/10/25', day: 'D3', activity: 'Group Projects' },
            { date: '30/10/25', day: 'D4', activity: 'IA Test - III' },
            { date: '31/10/25', day: 'D5', activity: 'IA Test - I' },
        ].map(event => ({ ...event, type: getEventType(event.activity) })),
    },
    {
        month: 'NOVEMBER',
        workingDays: 22,
        events: [
            { date: '1/11/25', day: 'D6', activity: 'KANNADA RAJYOTHSAVA' },
            { date: '2/11/25', day: 'SUNDAY', activity: 'SUNDAY' },
            { date: '3/11/25', day: 'D1', activity: 'Placement Activities' },
            { date: '4/11/25', day: 'D2', activity: 'Dept Staff Meeting' },
            { date: '5/11/25', day: 'D3', activity: 'IA Test - II' },
            { date: '6/11/25', day: 'D4', activity: 'Project Exhibition' },
            { date: '7/11/25', day: 'D5', activity: 'Team Activities' },
            { date: '8/11/25', day: 'D6', activity: 'KANAKA DASA JAYANTHI' },
            { date: '9/11/25', day: 'SUNDAY', activity: 'SUNDAY' },
            { date: '10/11/25', day: 'D1', activity: 'IA Test - I' },
            { date: '11/11/25', day: 'D2', activity: 'Dept Staff Meeting' },
            { date: '12/11/25', day: 'D3', activity: 'Placement Activities' },
            { date: '13/11/25', day: 'D4', activity: 'Tech Fests' },
            { date: '14/11/25', day: 'D5', activity: 'Tech Fests' },
            { date: '15/11/25', day: 'D6', activity: '3rd SATURDAY' },
            { date: '16/11/25', day: 'SUNDAY', activity: 'SUNDAY' },
            { date: '17/11/25', day: 'D1', activity: 'IA Test - III' },
            { date: '18/11/25', day: 'D2', activity: 'Dept Staff Meeting' },
            { date: '19/11/25', day: 'D3', activity: 'Placement Activities' },
            { date: '20/11/25', day: 'D4', activity: 'Soft Skills' },
            { date: '21/11/25', day: 'D5', activity: 'Soft Skills' },
            { date: '22/11/25', day: 'D6', activity: 'IA Test - I' },
            { date: '23/11/25', day: 'SUNDAY', activity: 'SUNDAY' },
            { date: '24/11/25', day: 'D1', activity: 'Practical Examination Starts' },
            { date: '25/11/25', day: 'D2', activity: 'Dept Staff Meeting' },
            { date: '26/11/25', day: 'D3', activity: 'Placement Activities' },
            { date: '27/11/25', day: 'D4', activity: 'Team Activities' },
            { date: '28/11/25', day: 'D5', activity: 'IA Test - III' },
            { date: '29/11/25', day: 'D6', activity: 'Placement Activities' },
            { date: '30/11/25', day: 'SUNDAY', activity: 'SUNDAY' },
        ].map(event => ({ ...event, type: getEventType(event.activity) })),
    },
    {
        month: 'DECEMBER',
        workingDays: 'N/A',
        events: [
            { date: '1/12/25', day: 'D1', activity: 'IA Test - III' },
            { date: '2/12/25', day: 'D2', activity: 'IA Test - III' },
            { date: '3/12/25', day: 'D3', activity: 'IA Test - III' },
            { date: '4/12/25', day: 'D4', activity: 'Theory Examination Start' },
            { date: '5/12/25', day: 'D5', activity: 'IA Test - III' },
            { date: '12/01/26', day: 'N/A', activity: 'Commencement of NEXT Semester' },
        ].map(event => ({ ...event, type: getEventType(event.activity) })),
        notes: [
            'IA Test - I Available Days: 23',
            'IA Test - II Available Days: 30',
            'IA Test - III Available Days: 27',
            'Total No. of Working Days in Sem: 89',
            'Practical Examination: 24/11/2025 onwards',
            'Theory Examination: 04/12/2025 onwards',
            'Commencement of NEXT Semester: 12/01/2026',
        ],
    },
];


const EventCard = ({ event }) => {
    const colors = styleColors[event.type] || styleColors['Other'];
    const textStyle = event.type === 'Exam/Assessment' ? { color: styleColors['Exam/Assessment'].text, fontWeight: '600' } : { color: styleColors['Other'].text };
    
    // Note: React inline styles cannot handle pseudo-classes like :hover.
    // Transition and simple background/border properties are applied here.
    const cardStyle = {
        padding: '12px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        transition: 'all 0.3s ease-in-out',
        backgroundColor: colors.bg,
        borderLeft: colors.border,
        marginBottom: '16px',
    };

    const tagStyle = {
        display: 'inline-block',
        padding: '2px 8px',
        fontSize: '0.75rem', // text-xs
        borderRadius: '9999px', // rounded-full
        marginLeft: '12px',
        whiteSpace: 'nowrap',
        backgroundColor: colors.tagBg,
        color: '#FFFFFF',
        fontWeight: '600',
    };

    return (
        <li style={{ listStyle: 'none' }}>
            <div style={cardStyle}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: '1' }}>
                        <p style={{ fontSize: '1.125rem', fontWeight: '600', margin: 0, ...textStyle }}>{event.activity}</p>
                        <p style={{ fontSize: '0.875rem', color: '#6B7280', marginTop: '2px' }}>
                            {event.date} ({event.day})
                        </p>
                    </div>
                    <span style={tagStyle}>
                        {event.type}
                    </span>
                </div>
            </div>
        </li>
    );
};

const MonthCard = ({ monthData }) => {
    const isDecember = monthData.month === 'DECEMBER';
    const headerBg = isDecember ? styleColors.HeaderDec : styleColors.Header;

    const cardContainerStyle = {
        width: '100%', // Default to full width on small screens
        padding: '16px',
    };

    const innerCardStyle = {
        backgroundColor: '#FFFFFF',
        border: '1px solid #E5E7EB',
        borderRadius: '12px',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        overflow: 'hidden',
        // Note: transform: hover:scale-[1.01] cannot be done inline.
    };

    const headerStyle = {
        padding: '16px',
        backgroundColor: headerBg,
        color: '#FFFFFF',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const contentStyle = {
        padding: '16px',
        height: '384px', // h-96
        overflowY: 'auto',
    };
    
    // Using Tailwind utility classes for responsiveness (lg:w-1/2) is essential here
    // for the two-column layout. Pure inline style can't handle media queries easily.
    return (
        <div className="w-full lg:w-1/2 p-4" style={cardContainerStyle}>
            <div style={innerCardStyle}>
                <div style={headerStyle}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '800', margin: 0 }}>{monthData.month}</h3>
                    <span style={{ fontSize: '0.875rem', fontWeight: '500', opacity: '0.8' }}>
                        {monthData.workingDays !== 'N/A' ? `Working Days: ${monthData.workingDays}` : 'Summary'}
                    </span>
                </div>
                
                <div style={contentStyle}>
                    {!isDecember ? (
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {monthData.events.map((event, index) => (
                                <EventCard key={index} event={event} />
                            ))}
                        </ul>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <h4 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: styleColors.Header, margin: 0 }}>Key Events/Exams</h4>
                            <ul style={{ listStyle: 'none', paddingLeft: '16px', margin: 0, borderLeft: '2px dashed #D1D5DB' }}>
                                {monthData.events.map((event, index) => (
                                    <li key={index} style={{ marginBottom: '12px', position: 'relative' }}>
                                        <div style={{ position: 'absolute', left: '-25px', top: '4px', width: '12px', height: '12px', backgroundColor: styleColors['Exam/Assessment'].tagBg, borderRadius: '50%' }}></div>
                                        <p style={{ margin: 0 }}>
                                            <span style={{ fontWeight: '600', color: styleColors['Other'].text }}>{event.activity}</span>
                                            <span style={{ fontSize: '0.875rem', color: '#6B7280', display: 'block' }}>{event.date}</span>
                                        </p>
                                    </li>
                                ))}
                            </ul>

                            <h4 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: styleColors.Header, margin: 0, paddingTop: '16px', borderTop: '1px solid #E5E7EB' }}>Semester Summary</h4>
                            <ul style={{ listStyle: 'disc', paddingLeft: '32px', margin: 0, fontSize: '0.875rem', color: styleColors['Other'].text, backgroundColor: styleColors.Background, padding: '12px', borderRadius: '6px' }}>
                                {monthData.notes.map((note, index) => (
                                    <li key={index} style={{ marginBottom: '8px' }}>
                                        <span style={note.includes('Examination') || note.includes('Next Semester') ? { fontWeight: 'bold', color: styleColors['Exam/Assessment'].tagBg } : {}}>
                                            {note}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const Calender = () => {
    return (
        <div style={{ padding: '16px 32px', backgroundColor: styleColors.Background, minHeight: '100vh' }}>
            <header className="sticky top-0 bg-white shadow-xl z-10 rounded-b-xl p-4 mb-8" style={{
                position: 'sticky',
                top: '0',
                backgroundColor: '#FFFFFF',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                zIndex: 10,
                borderRadius: '0 0 12px 12px',
                padding: '16px',
                marginBottom: '32px',
                textAlign: 'center'
            }}>
                <h1 style={{ fontSize: '2.25rem', fontWeight: '800', color: styleColors.Header, margin: 0 }}>
                    Academic Event Planner 🚀
                </h1>
                <p style={{ fontSize: '1.25rem', color: '#4B5563', marginTop: '4px', margin: 0 }}>
                    V & VII Semester B.E. | Odd Semester (Aug - Dec 2025)
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '12px', gap: '16px', fontSize: '0.875rem', fontWeight: '500' }}>
                    <span style={{ color: styleColors['Exam/Assessment'].tagBg, borderBottom: '2px solid ' + styleColors['Exam/Assessment'].tagBg }}>Exams/Assessments</span>
                    <span style={{ color: styleColors['Holiday'].tagBg, borderBottom: '2px solid ' + styleColors['Holiday'].tagBg }}>Holidays</span>
                    <span style={{ color: styleColors['Skill/Training'].tagBg, borderBottom: '2px solid ' + styleColors['Skill/Training'].tagBg }}>Skill/Training</span>
                </div>
            </header>

            {/* Main Calendar Grid - Using Tailwind utility classes for flex and lg:w-1/2 for responsiveness */}
            <div className="flex flex-wrap -m-4">
                {calendarData.map((month) => (
                    <MonthCard key={month.month} monthData={month} />
                ))}
            </div>

            <footer style={{ textAlign: 'center', marginTop: '48px', padding: '24px', borderTop: '4px solid #E0E7FF', backgroundColor: '#FFFFFF', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                <p style={{ fontSize: '1rem', fontStyle: 'italic', color: '#6B7280', margin: 0 }}>
                    "The beautiful thing about learning is that no one can take it away from you." - B.B. King
                </p>
            </footer>
        </div>
    );
};

export default Calender;