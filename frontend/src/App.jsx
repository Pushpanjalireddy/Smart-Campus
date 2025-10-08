import React, { useState, useEffect } from "react";
import RegisterPage from "./components/pages/RegisterPage";
import RoleSelectionPage from "./components/pages/RoleSelectionPage";
import StudentLoginPage from "./components/pages/studentLogin";
import FacultyLoginPage from "./components/pages/facultyLogin";
import ParentLoginPage from "./components/pages/parentLogin";
import StudentDashboardPage from "./components/pages/StudentDashboardPage";
import Dashboard from "./components/students/Dashboard";
import FacultyDashboardPage from "./components/pages/facultyCommon";
// ** NEW IMPORT **
import Calender from "./components/students/Calender"; 

// Corrected the typo/casing in the original import
import UploadAssessment from "./components/faculty/uploadAssessnment"; 
// New imports using the requested lowercase file path
import UploadMarks from "./components/faculty/uploadMarks";
import UploadNotes from "./components/faculty/uploadNotes";

function App() {
 const [studentData, setStudentData] = useState(null);
 const [facultyData, setFacultyData] = useState(null);
 const [page, setPage] = useState("register");

 // Protected route checks
 useEffect(() => {
   if (page === "studentDashboard" && !studentData) {
      setPage("studentLogin");
    }
    if (page === "dashboard" && !studentData) {
      setPage("studentLogin");
    }
    // ** NEW PROTECTED ROUTE CHECK FOR CALENDAR **
    if (page === "calendar" && !studentData) {
      setPage("studentLogin");
    }

    // Consolidated faculty protected route check
    const facultyPages = ["facultyDashboard", "uploadAssessments", "uploadMarks", "uploadNotes"];
    if (facultyPages.includes(page) && !facultyData) {
      setPage("facultyLogin");
    }
  }, [page, studentData, facultyData]);

  // Register Page
  if (page === "register") {
    return (
      <RegisterPage
        onRegister={() => {
          console.log("Registration successful! Select your role next."); // Replaced alert()
          setPage("role");
        }}
        onSignInClick={() => {
          setPage("role");
        }}
      />
    );
  }

  // Role Selection Page
  if (page === "role") {
    return (
      <RoleSelectionPage
        onSelectRole={(role) => {
          if (role === "student") {
            setPage("studentLogin");
          } else if (role === "faculty") {
            setPage("facultyLogin");
          } else if (role === "parent") {
            setPage("parentLogin");
          }
        }}
      />
    );
  }

  // Student Login Page
  if (page === "studentLogin") {
    return (
      <StudentLoginPage
        onLogin={(data) => {
          console.log("Student logged in:", data);
          setStudentData(data);
          setPage("studentDashboard");
        }}
        onBack={() => setPage("role")}
      />
    );
  }

  // Faculty Login Page
  if (page === "facultyLogin") {
    return (
      <FacultyLoginPage
        onLogin={(data) => {
          console.log("Faculty logged in:", data);
          setFacultyData({
             facultyName: data.name || data.facultyName || 'Faculty Member',
             department: data.department || 'Department',
             facultyId: data.id || data.facultyId || 'N/A'
           });
           setPage("facultyDashboard");
        }}
        onBack={() => setPage("role")}
      />
    );
  }

  // Parent Login Page
  if (page === "parentLogin") {
    return (
      <ParentLoginPage
        onLogin={(data) => {
          console.log("Parent logged in:", data);
          console.log(`Welcome ${data.parentName}! Parent Dashboard coming soon.`); // Replaced alert()
          setPage("role");
        }}
        onBack={() => setPage("role")}
      />
    );
  }

  // Student Dashboard Page
  if (page === "studentDashboard") {
    if (!studentData) return null;
    return (
      <StudentDashboardPage
        studentData={studentData}
        onLogout={() => {
          setStudentData(null);
          setPage("register");
        }}
        onFeatureClick={(featureName) => {
          if (featureName === "Dashboard") {
            setPage("dashboard");
          } 
          // ** NEW ROUTING LOGIC FOR CALENDAR **
          else if (featureName === "Calendar of Events") {
              setPage("calendar");
          }
          // ** END NEW ROUTING LOGIC **
          else {
            console.log(`${featureName} - Feature Coming Soon!`); // Replaced alert()
          }
        }}
      />
    );
  }

  // Faculty Dashboard Page
  if (page === "facultyDashboard") {
    if (!facultyData) return null;
    return (
      <FacultyDashboardPage
        facultyData={facultyData}
        onLogout={() => {
          setFacultyData(null);
          setPage("register");
        }}
        onFeatureClick={(featureId) => {
          console.log("Feature clicked:", featureId);
          switch(featureId) {
            case "uploadAssessments":
              setPage("uploadAssessments");
              break;
            case "uploadMarks":
              // ROUTE TO NEW MARKS PAGE
              setPage("uploadMarks");
              break;
            case "uploadNotes":
              // ROUTE TO NEW NOTES PAGE
              setPage("uploadNotes");
              break;
            case "manageNotices":
              console.log("Manage Notices - Feature Coming Soon!"); // Replaced alert()
              break;
            case "studentInfo":
              console.log("Student Information - Feature Coming Soon!"); // Replaced alert()
              break;
            default:
              console.log(`${featureId} - Feature Coming Soon!`); // Replaced alert()
          }
        }}
      />
    );
  }

  // Dashboard Page
  if (page === "dashboard") {
    if (!studentData) return null;
    return (
      <Dashboard
        studentData={studentData}
        onBack={() => setPage("studentDashboard")}
      />
    );
  }
  
  // ** NEW: Calendar Page **
  if (page === "calendar") {
    if (!studentData) return null;
    return (
      <Calender 
        studentData={studentData}
        onBack={() => setPage("studentDashboard")} // Added a back function if you need it in Calender.jsx
      />
    );
  }

  // Upload Assessment Page
  if (page === "uploadAssessments") {
    if (!facultyData) return null;
    return (
      <UploadAssessment
        facultyData={facultyData}
        onBack={() => setPage("facultyDashboard")}
      />
    );
  }

  // NEW: Upload Marks Page
  if (page === "uploadMarks") {
    if (!facultyData) return null;
    return (
      <UploadMarks
        facultyData={facultyData}
        onBack={() => setPage("facultyDashboard")}
      />
    );
  }

  // NEW: Upload Notes Page
  if (page === "uploadNotes") {
    if (!facultyData) return null;
    return (
      <UploadNotes
        facultyData={facultyData}
        onBack={() => setPage("facultyDashboard")}
      />
    );
  }

  // Success Page
  if (page === "success") {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#e5e7eb'
      }}>
        <div style={{
          background: 'white',
          padding: '2.5rem',
          borderRadius: '1rem',
          textAlign: 'center',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
            Login Successful!
          </h2>
          <p style={{ color: '#6b7280' }}>Welcome to Smart Campus.</p>
          <button
            onClick={() => setPage("register")}
            style={{
              marginTop: '1.5rem',
              padding: '0.75rem 1.5rem',
              background: '#4f46e5',
              color: 'white',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              transition: 'background 0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = '#4338ca'}
            onMouseOut={(e) => e.currentTarget.style.background = '#4f46e5'}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // Fallback Loading State
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f9fafb'
    }}>
      <div style={{
        textAlign: 'center',
        fontSize: '1.25rem',
        color: '#6b7280'
      }}>
        Loading...
      </div>
    </div>
  );
}

export default App;
