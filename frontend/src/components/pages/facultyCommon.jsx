import React, { useState } from "react";
import {
  FileText,
  Award,
  BookOpen,
  Bell,
  Users,
  LogOut,
  Menu,
  X,
} from "lucide-react";

function FacultyDashboardPage({ facultyData, onLogout, onFeatureClick }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const features = [
    {
      id: "uploadAssessments",
      name: "Upload Assessments",
      icon: FileText,
      color: "#667eea",
      description: "Create and upload new assessments for students",
    },
    {
      id: "uploadMarks",
      name: "Upload Marks",
      icon: Award,
      color: "#f59e0b",
      description: "Enter and manage student marks and grades",
    },
    {
      id: "uploadNotes",
      name: "Upload Notes",
      icon: BookOpen,
      color: "#10b981",
      description: "Share study materials and notes with students",
    },
    {
      id: "manageNotices",
      name: "Manage Notices",
      icon: Bell,
      color: "#ef4444",
      description: "Post announcements and important notices",
    },
    {
      id: "studentInfo",
      name: "Student Information",
      icon: Users,
      color: "#8b5cf6",
      description: "View and manage student details and records",
    },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f3f4f6" }}>
      {/* Sidebar */}
      <div
        style={{
          width: isSidebarOpen ? "280px" : "0",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          transition: "width 0.3s",
          overflow: "hidden",
          position: "relative",
          boxShadow: "2px 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ padding: "2rem 1.5rem" }}>
          {/* Profile Section */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "1rem",
              padding: "1.5rem",
              marginBottom: "2rem",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                background: "linear-gradient(135deg, #fff 0%, #f0f0f0 100%)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1rem",
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#667eea",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              }}
            >
              {facultyData?.facultyName?.charAt(0).toUpperCase() || "F"}
            </div>
            <h2
              style={{
                color: "white",
                fontSize: "1.25rem",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "0.25rem",
              }}
            >
              {facultyData?.facultyName || "Faculty Member"}
            </h2>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "0.875rem",
                textAlign: "center",
              }}
            >
              {facultyData?.department || "CSE"}
            </p>
          </div>

          {/* Quick Stats */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "1rem",
              padding: "1rem",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <h3
              style={{
                color: "white",
                fontSize: "0.875rem",
                fontWeight: "600",
                marginBottom: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Quick Stats
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", color: "white" }}>
                <span style={{ fontSize: "0.875rem" }}>Total Students</span>
                <span style={{ fontWeight: "bold" }}>45</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", color: "white" }}>
                <span style={{ fontSize: "0.875rem" }}>Pending Reviews</span>
                <span style={{ fontWeight: "bold" }}>12</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", color: "white" }}>
                <span style={{ fontSize: "0.875rem" }}>Active Notices</span>
                <span style={{ fontWeight: "bold" }}>3</span>
              </div>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <div style={{ position: "absolute", bottom: "2rem", left: "1.5rem", right: "1.5rem" }}>
          <button
            onClick={onLogout}
            style={{
              width: "100%",
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "0.75rem",
              padding: "0.875rem",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              cursor: "pointer",
              fontWeight: "600",
              transition: "all 0.3s",
            }}
          >
            <LogOut style={{ width: "1.25rem", height: "1.25rem" }} />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <header
          style={{
            background: "white",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            padding: "1.5rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              style={{
                background: "#f3f4f6",
                border: "none",
                borderRadius: "0.5rem",
                padding: "0.5rem",
                cursor: "pointer",
              }}
            >
              {isSidebarOpen ? (
                <X style={{ width: "1.5rem", height: "1.5rem", color: "#667eea" }} />
              ) : (
                <Menu style={{ width: "1.5rem", height: "1.5rem", color: "#667eea" }} />
              )}
            </button>
            <h1
              style={{
                fontSize: "1.875rem",
                fontWeight: "bold",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Faculty Dashboard
            </h1>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "0.5rem 1rem",
              background: "#f3f4f6",
              borderRadius: "0.75rem",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              {facultyData?.facultyName?.charAt(0).toUpperCase() || "F"}
            </div>
            <span style={{ fontWeight: "600", color: "#374151" }}>
              {facultyData?.facultyName || "Faculty"}
            </span>
          </div>
        </header>

        {/* Features Grid */}
        <main style={{ padding: "2rem", flex: 1 }}>
          <div style={{ marginBottom: "2rem" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#1f2937",
                marginBottom: "0.5rem",
              }}
            >
              Welcome Back! 👋
            </h2>
            <p style={{ color: "#6b7280" }}>
              Manage your classes, upload materials, and track student progress
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.id}
                  onClick={() => onFeatureClick && onFeatureClick(feature.id)}
                  style={{
                    background: "white",
                    borderRadius: "1rem",
                    padding: "2rem",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    border: "2px solid #e5e7eb",
                    position: "relative",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1)";
                    e.currentTarget.style.borderColor = feature.color;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "#e5e7eb";
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      background: `${feature.color}15`,
                      borderRadius: "1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <Icon style={{ width: "2rem", height: "2rem", color: feature.color }} />
                  </div>

                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "bold",
                      color: "#1f2937",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {feature.name}
                  </h3>
                  <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}

export default FacultyDashboardPage;
