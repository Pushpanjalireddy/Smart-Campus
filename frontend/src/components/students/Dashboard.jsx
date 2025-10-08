import React, { useState } from "react";
import { 
  ArrowLeft, TrendingUp, Calendar, Award,
  BookOpen, Target, Activity, CheckCircle, XCircle
} from "lucide-react";

/**
 * Dashboard component displaying various academic metrics and trends.
 * @param {object} props
 * @param {object} props.studentData - Data about the logged-in student.
 * @param {function} props.onBack - Function to navigate back to the main student menu.
 */
const Dashboard = ({ studentData, onBack }) => {
  // State for hover effects on the main four metric cards
  const [hoveredCard, setHoveredCard] = useState(null); 
  
  // Sample academic data
  const [academicData] = useState({
    cgpa: 8.5,
    sgpa: 8.7,
    overallAttendance: 87, // Percentage
    subjects: [
      { name: "Data Structures", marks: 85, attendance: 90, credits: 4 },
      { name: "DBMS", marks: 78, attendance: 85, credits: 4 },
      { name: "Web Tech", marks: 92, attendance: 95, credits: 3 },
      { name: "Networks", marks: 88, attendance: 88, credits: 4 },
      { name: "OS", marks: 75, attendance: 82, credits: 4 },
    ],
    semesterProgress: [
      { sem: "Sem 1", cgpa: 7.8 },
      { sem: "Sem 2", cgpa: 8.1 },
      { sem: "Sem 3", cgpa: 8.3 },
      { sem: "Sem 4", cgpa: 8.5 },
      { sem: "Sem 5", cgpa: 8.7 },
    ],
    monthlyAttendance: [
      { month: "Aug", percentage: 85 },
      { month: "Sep", percentage: 88 },
      { month: "Oct", percentage: 82 },
      { month: "Nov", percentage: 87 },
      { month: "Dec", percentage: 90 },
      { month: "Jan", percentage: 87 },
    ]
  });

  // Calculate maximum values for chart scaling
  const maxMarks = Math.max(...academicData.subjects.map(s => s.marks));
  
  // Base button styles for clean, bright look
  const backButtonBaseStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#3b82f6', // Bright Blue
    border: 'none',
    borderRadius: '0.75rem',
    color: 'white',
    fontWeight: '600',
    transition: 'all 0.3s',
    marginBottom: '1.5rem',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(59, 130, 246, 0.4)',
  };
  
  // Base style for the light metric cards
  const mainCardBaseStyle = {
    backgroundColor: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '1.5rem',
    padding: '1.5rem',
    color: '#1f2937', // Dark text
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    flex: '1 1 30%', 
    minWidth: '280px',
  };

  // Function to apply hover transform for better interaction
  const getCardStyle = (id) => ({
    ...mainCardBaseStyle,
    transform: hoveredCard === id ? 'translateY(-3px) scale(1.01)' : 'translateY(0)',
    boxShadow: hoveredCard === id ? '0 10px 25px rgba(59, 130, 246, 0.3)' : mainCardBaseStyle.boxShadow,
  });

  // Color Mapping for the main cards
  const cardColors = {
    performance: { background: 'linear-gradient(135deg, #ffedd5, #fdba74)', iconColor: '#f97316' }, // Light Orange to Orange
    attendance: { background: 'linear-gradient(135deg, #dbeafe, #60a5fa)', iconColor: '#2563eb' }, // Light Blue to Blue
    credits: { background: 'linear-gradient(135deg, #d1fae5, #34d399)', iconColor: '#059669' }, // Light Green to Green (for completion/success)
  };


  return (
    <div style={{
      minHeight: '100vh', 
      padding: '1.5rem 0', 
      background: 'linear-gradient(135deg, #f0f4f8 0%, #ffffff 100%)', // Light/White background
      fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
        
        {/* Header and Back Button */}
        <button
          onClick={onBack}
          style={backButtonBaseStyle}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
        >
          <ArrowLeft style={{ width: '1.25rem', height: '1.25rem' }} />
          Back to Menu
        </button>

        {/* Title and Key Stats Card */}
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '1.5rem', 
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: window.innerWidth < 768 ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: window.innerWidth < 768 ? 'flex-start' : 'center',
          gap: '1.5rem',
          marginBottom: '1.5rem' // Reduced margin
        }}>
          <div style={{ flexGrow: 1 }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 900, color: '#1f2937', marginBottom: '0.25rem' }}>
              Academic Dashboard
            </h1>
            <p style={{ color: '#6b7280', fontSize: '1rem' }}>
              {studentData?.name || 'Student'} | ID: <strong style={{ color: '#3b82f6' }}>{studentData?.id || 'N/A'}</strong>
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {/* CGPA Stat */}
            <div style={{ textAlign: 'center', padding: '1rem 1.5rem', background: 'linear-gradient(135deg, #60a5fa, #2563eb)', borderRadius: '1rem', boxShadow: '0 4px 10px rgba(59, 130, 246, 0.3)' }}>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', marginBottom: '0.25rem' }}>CGPA</p>
              <p style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'white' }}>{academicData.cgpa}</p>
            </div>
            {/* SGPA Stat */}
            <div style={{ textAlign: 'center', padding: '1rem 1.5rem', background: 'linear-gradient(135deg, #ffb347, #f97316)', borderRadius: '1rem', boxShadow: '0 4px 10px rgba(249, 115, 22, 0.3)' }}>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', marginBottom: '0.25rem' }}>SGPA</p>
              <p style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'white' }}>{academicData.sgpa}</p>
            </div>
          </div>
        </div>

        {/* --- Main Metric Cards (Interactive) --- */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
          
          {/* Overall Stats */}
          <div 
            style={{ ...getCardStyle('performance'), background: cardColors.performance.background }}
            onMouseEnter={() => setHoveredCard('performance')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Target style={{ width: '2rem', height: '2rem', color: cardColors.performance.iconColor }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1f2937' }}>Overall Performance</h3>
            </div>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: cardColors.performance.iconColor }}>
              {Math.round((academicData.subjects.reduce((acc, s) => acc + s.marks, 0) / academicData.subjects.length))}%
            </div>
            <p style={{ opacity: 0.9, fontSize: '0.875rem', color: '#4b5563' }}>Average across all subjects</p>
          </div>

          {/* Attendance Stats */}
          <div 
            style={{ ...getCardStyle('attendance'), background: cardColors.attendance.background }}
            onMouseEnter={() => setHoveredCard('attendance')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Calendar style={{ width: '2rem', height: '2rem', color: cardColors.attendance.iconColor }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1f2937' }}>Attendance Rate</h3>
            </div>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: cardColors.attendance.iconColor }}>
              {academicData.overallAttendance}%
            </div>
            <p style={{ opacity: 0.9, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#4b5563' }}>
              {academicData.overallAttendance >= 75 
                ? <><CheckCircle style={{ width: '1rem', height: '1rem', color: '#10b981' }} /> Meeting requirement</> 
                : <><XCircle style={{ width: '1rem', height: '1rem', color: '#ef4444' }} /> Below requirement</>
              }
            </p>
          </div>

          {/* Total Credits */}
          <div 
            style={{ ...getCardStyle('credits'), background: cardColors.credits.background }}
            onMouseEnter={() => setHoveredCard('credits')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Award style={{ width: '2rem', height: '2rem', color: cardColors.credits.iconColor }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1f2937' }}>Total Credits</h3>
            </div>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: cardColors.credits.iconColor }}>
              {academicData.subjects.reduce((acc, s) => acc + s.credits, 0)}
            </div>
            <p style={{ opacity: 0.9, fontSize: '0.875rem', color: '#4b5563' }}>Current semester credits attempted</p>
          </div>
        </div>

        {/* Charts Section: Two columns on large screens, stack on small screens */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
          
          {/* 1. Subject-wise Marks Bar Chart */}
          <div style={{
            flex: '1 1 100%',
            minWidth: window.innerWidth < 1024 ? 'auto' : '450px',
            maxWidth: window.innerWidth < 1024 ? '100%' : 'calc(50% - 0.75rem)',
            backgroundColor: 'white',
            borderRadius: '1.5rem',
            padding: '1.5rem',
            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '0.75rem',
                backgroundColor: '#e0f2ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <BookOpen style={{ width: '1.5rem', height: '1.5rem', color: '#3b82f6' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1f2937' }}>Subject Performance</h3>
                <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Marks obtained in each subject</p>
              </div>
            </div>
            <div style={{ 
                height: '300px', 
                display: 'flex', 
                alignItems: 'flex-end', 
                justifyContent: 'space-around', 
                gap: '0.5rem', 
                padding: '1rem', 
                backgroundColor: '#f9fafb', 
                borderRadius: '0.75rem' 
            }}>
              {academicData.subjects.map((subject, index) => {
                const colors = ['#3b82f6', '#10b981', '#f97316', '#8b5cf6', '#ef4444'];
                const height = (subject.marks / maxMarks) * 100;
                return (
                  <div key={index} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', maxWidth: '20%' }}>
                    <div 
                      style={{
                        width: '100%',
                        minHeight: '3rem',
                        height: `${height}%`,
                        background: `linear-gradient(to top, ${colors[index]}ee, ${colors[index]})`,
                        borderRadius: '0.5rem 0.5rem 0 0',
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        paddingTop: '0.5rem',
                        transition: 'all 0.3s',
                        cursor: 'default',
                        boxShadow: '0 -2px 5px rgba(0,0,0,0.05)'
                      }}
                    >
                      <span style={{ fontSize: '0.875rem', fontWeight: 'bold', color: 'white' }}>{subject.marks}%</span>
                    </div>
                    <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#6b7280', textAlign: 'center', wordBreak: 'break-word', maxWidth: '100%' }}>
                      {subject.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. CGPA Trend Line Chart (Academic Improvement Graph) */}
          <div style={{
            flex: '1 1 100%',
            minWidth: window.innerWidth < 1024 ? 'auto' : '450px',
            maxWidth: window.innerWidth < 1024 ? '100%' : 'calc(50% - 0.75rem)',
            backgroundColor: 'white',
            borderRadius: '1.5rem',
            padding: '1.5rem',
            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
            border: '2px solid #3b82f633' // Highlight the improvement chart
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '0.75rem',
                backgroundColor: '#e9e6ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <TrendingUp style={{ width: '1.5rem', height: '1.5rem', color: '#6366f1' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1f2937' }}>CGPA Progress (Academic Improvement)</h3>
                <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Semester-wise trend showing improvement</p>
              </div>
            </div>
            <div style={{ height: '300px', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '0.75rem', position: 'relative' }}>
              <svg width="100%" height="100%" viewBox="0 0 500 250" style={{ overflow: 'visible' }}>
                {/* Grid lines */}
                {[10, 8, 6, 4, 2, 0].map((val, i) => (
                  <line
                    key={i}
                    x1="40"
                    y1={40 + (i * 35)}
                    x2="480"
                    y2={40 + (i * 35)}
                    stroke="#e5e7eb"
                    strokeWidth="1"
                  />
                ))}
                
                {/* Line chart and Data points */}
                {academicData.semesterProgress.map((sem, index) => {
                  const x = 80 + (index * 80);
                  const y = 215 - ((sem.cgpa / 10) * 180); 
                  
                  if (index < academicData.semesterProgress.length - 1) {
                    const nextSem = academicData.semesterProgress[index + 1];
                    const x2 = 80 + ((index + 1) * 80);
                    const y2 = 215 - ((nextSem.cgpa / 10) * 180);
                    return (
                      <g key={index}>
                        <line
                          x1={x} y1={y} x2={x2} y2={y2}
                          stroke="#6366f1" // Vibrant blue/indigo line
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </g>
                    );
                  }
                  return null;
                })}

                {/* Data points and Labels */}
                {academicData.semesterProgress.map((sem, index) => {
                  const x = 80 + (index * 80);
                  const y = 215 - ((sem.cgpa / 10) * 180); 
                  return (
                    <g key={`point-${index}`}>
                      <circle cx={x} cy={y} r="6" fill="#6366f1" stroke="white" strokeWidth="3" />
                      <text x={x} y={y - 15} textAnchor="middle" fontSize="12" fontWeight="bold" fill="#6366f1">
                        {sem.cgpa}
                      </text>
                      <text x={x} y={240} textAnchor="middle" fontSize="11" fontWeight="600" fill="#6b7280">
                        {sem.sem}
                      </text>
                    </g>
                  );
                })}
                
                {/* Y-axis labels (CGPA 0-10) */}
                {[10, 8, 6, 4, 2, 0].map((val, i) => (
                  <text key={i} x="25" y={40 + (i * 35)} fontSize="11" fill="#9ca3af" textAnchor="end" dominantBaseline="middle">
                    {val}
                  </text>
                ))}
              </svg>
            </div>
          </div>
          
          {/* 3. Monthly Attendance Bar Chart */}
          <div style={{
            flex: '1 1 100%',
            minWidth: window.innerWidth < 1024 ? 'auto' : '450px',
            maxWidth: window.innerWidth < 1024 ? '100%' : 'calc(50% - 0.75rem)',
            backgroundColor: 'white',
            borderRadius: '1.5rem',
            padding: '1.5rem',
            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '0.75rem',
                backgroundColor: '#ffedd5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Activity style={{ width: '1.5rem', height: '1.5rem', color: '#f97316' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1f2937' }}>Monthly Attendance</h3>
                <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Last 6 months trend</p>
              </div>
            </div>
            <div style={{ 
                height: '300px', 
                display: 'flex', 
                alignItems: 'flex-end', 
                justifyContent: 'space-around', 
                gap: '0.75rem', 
                padding: '1rem', 
                backgroundColor: '#f9fafb', 
                borderRadius: '0.75rem' 
            }}>
              {academicData.monthlyAttendance.map((month, index) => {
                const height = (month.percentage / 100) * 100;
                let color;
                if (month.percentage >= 90) color = '#10b981'; 
                else if (month.percentage >= 75) color = '#f97316'; // Orange for warning/good
                else color = '#ef4444'; // Red for low

                return (
                  <div key={index} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', maxWidth: '16.6%' }}>
                    <div 
                      style={{
                        width: '100%',
                        minHeight: '2.5rem',
                        height: `${height}%`,
                        background: `linear-gradient(to top, ${color}ee, ${color})`,
                        borderRadius: '0.5rem 0.5rem 0 0',
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        paddingTop: '0.25rem',
                        transition: 'all 0.3s',
                        cursor: 'default',
                      }}
                    >
                      <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'white' }}>{month.percentage}%</span>
                    </div>
                    <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#6b7280' }}>{month.month}</p>
                  </div>
                );
              })}
            </div>
            <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', fontSize: '0.75rem', color: '#6b7280' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', background: '#10b981' }}></div>
                &ge;90% Excellent
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', background: '#f97316' }}></div>
                75-89% Good
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', background: '#ef4444' }}></div>
                &lt;75% Low
              </span>
            </div>
          </div>

          {/* 4. Subject Attendance Comparison (Progress Bars) */}
          <div style={{
            flex: '1 1 100%',
            minWidth: window.innerWidth < 1024 ? 'auto' : '450px',
            maxWidth: window.innerWidth < 1024 ? '100%' : 'calc(50% - 0.75rem)',
            backgroundColor: 'white',
            borderRadius: '1.5rem',
            padding: '1.5rem',
            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '0.75rem',
                backgroundColor: '#e0f7fa',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Calendar style={{ width: '1.5rem', height: '1.5rem', color: '#00bcd4' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1f2937' }}>Subject Attendance Breakdown</h3>
                <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Current semester breakdown</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '0.75rem' }}>
              {academicData.subjects.map((subject, index) => {
                const colors = ['#3b82f6', '#f97316', '#10b981', '#6366f1', '#00bcd4'];
                const progressColor = colors[index % colors.length];

                return (
                  <div key={index}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1f2937' }}>{subject.name}</span>
                      <span style={{ fontSize: '0.875rem', fontWeight: 700, color: progressColor }}>{subject.attendance}%</span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: '0.75rem',
                      backgroundColor: '#e5e7eb',
                      borderRadius: '0.5rem',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${subject.attendance}%`,
                        height: '100%',
                        borderRadius: '0.5rem',
                        background: `linear-gradient(90deg, ${progressColor}, ${progressColor}dd)`,
                        transition: 'width 1s ease'
                      }}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
