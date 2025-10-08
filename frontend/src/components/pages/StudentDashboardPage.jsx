// src/components/pages/StudentDashboardPage.jsx
import React from "react";
import { 
  Home, BookOpen, ClipboardCheck, Calendar, Zap, Bot,
  FileText, TrendingUp, Bell
} from "lucide-react";

// Feature data structure
const features = [
  { 
    title: "Dashboard", 
    description: "Your academic summary and quick stats.", 
    icon: Home, 
    bgColor: "#f0f9ff", 
    iconColor: "#0ea5e9" 
  },
  { 
    title: "Notes & Materials", 
    description: "Access all class-related documents and resources.", 
    icon: BookOpen, 
    bgColor: "#f0fdf4", 
    iconColor: "#10b981" 
  },
  { 
    title: "Assignments & Submissions", 
    description: "View deadlines and submit your completed work.", 
    icon: ClipboardCheck, 
    bgColor: "#fef2f2", 
    iconColor: "#ef4444" 
  },
  { 
    title: "Attendance Tracker", 
    description: "Monitor your presence in all lectures and labs.", 
    icon: TrendingUp, 
    bgColor: "#fff7ed", 
    iconColor: "#f97316" 
  },
  { 
    title: "AI Quiz Generator", 
    description: "Create custom quizzes from your course materials.", 
    icon: Zap, 
    bgColor: "#f5f3ff", 
    iconColor: "#8b5cf6" 
  },
  { 
    title: "AI Summarizer", 
    description: "Instantly condense lecture notes and long articles.", 
    icon: FileText, 
    bgColor: "#f0fdfa", 
    iconColor: "#14b8a6" 
  },
  { 
    title: "AI Chatbot 🤖", 
    description: "Get instant answers and tutoring support 24/7.", 
    icon: Bot, 
    bgColor: "#eef2ff", 
    iconColor: "#6366f1" 
  },
  { 
    title: "Calendar of Events", 
    description: "Check upcoming exams, holidays, and college activities.", 
    icon: Calendar, 
    bgColor: "#fffbeb", 
    iconColor: "#f59e0b" 
  },
  { 
    title: "Notifications", 
    description: "See important announcements and updates.", 
    icon: Bell, 
    bgColor: "#fefce8", 
    iconColor: "#eab308" 
  },
];

const StudentDashboardPage = ({ studentData, onLogout, onFeatureClick }) => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#f4f4f5', 
      padding: '2rem',
      fontFamily: 'system-ui, sans-serif'
    }}>
      {/* Header */}
      <header style={{ 
        maxWidth: '72rem', 
        margin: '0 auto', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '3rem',
        padding: '1.5rem',
        background: 'white',
        borderRadius: '1rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
      }}>
        <div>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 700, color: '#1f2937', marginBottom: '0.25rem' }}>
            Welcome back, {studentData?.name?.split(' ')[0] || 'Student'}! 👋
          </h1>
          <p style={{ color: '#6b7280', fontSize: '1rem' }}>
            USN: <strong style={{ color: '#4f46e5' }}>{studentData?.usn || 'N/A'}</strong> | Smart Campus Student Dashboard
          </p>
        </div>
        <button
          onClick={onLogout}
          style={{
            padding: '0.75rem 1.5rem',
            background: '#ef4444',
            color: 'white',
            borderRadius: '0.5rem',
            fontWeight: 600,
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#dc2626'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ef4444'}
        >
          Logout
        </button>
      </header>

      {/* Feature Grid */}
      <main style={{ 
        maxWidth: '72rem', 
        margin: '0 auto' 
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#374151', marginBottom: '1.5rem' }}>
          Explore Key Features
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => onFeatureClick(feature.title)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '2rem',
                background: 'white',
                borderRadius: '1rem',
                border: '1px solid #e5e7eb',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              }}
            >
              {/* Icon Circle */}
              <div style={{
                marginBottom: '1rem',
                width: '3.5rem',
                height: '3.5rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: feature.bgColor,
              }}>
                <feature.icon style={{ width: '1.5rem', height: '1.5rem', color: feature.iconColor }} />
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1f2937', marginBottom: '0.5rem' }}>
                {feature.title}
              </h3>
              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                {feature.description}
              </p>
              <span style={{ 
                marginTop: '1rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: feature.iconColor,
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}>
                Go to Feature &rarr;
              </span>
            </button>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={{ textAlign: 'center', marginTop: '4rem', color: '#9ca3af', fontSize: '0.875rem' }}>
        <p>© {new Date().getFullYear()} Smart Campus. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default StudentDashboardPage;
