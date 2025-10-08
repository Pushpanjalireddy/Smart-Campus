import React, { useState } from "react";
import { GraduationCap, Users, UserCircle, Sparkles, BookOpen, Award } from "lucide-react";

function RoleSelectionPage({ onSelectRole }) {
  const [hoveredRole, setHoveredRole] = useState(null);

  const roles = [
    {
      type: "student",
      icon: GraduationCap,
      title: "Student",
      description: "Access your courses, marks, and resources",
      gradient: "linear-gradient(135deg, #22d3ee 0%, #3b82f6 50%, #4f46e5 100%)",
      hoverGradient: "linear-gradient(135deg, #06b6d4 0%, #2563eb 50%, #4338ca 100%)",
      bgColor: "#ecfeff",
      accentColor: "#06b6d4",
      features: ["📚 Course Materials", "📊 Track Progress", "🎯 Assignments"]
    },
    {
      type: "faculty",
      icon: Users,
      title: "Faculty",
      description: "Manage students, upload content, and track progress",
      gradient: "linear-gradient(135deg, #34d399 0%, #10b981 50%, #14b8a6 100%)",
      hoverGradient: "linear-gradient(135deg, #10b981 0%, #059669 50%, #0d9488 100%)",
      bgColor: "#ecfdf5",
      accentColor: "#10b981",
      features: ["👥 Manage Students", "📝 Upload Content", "📈 Analytics"]
    },
    {
      type: "parent",
      icon: UserCircle,
      title: "Parent",
      description: "Monitor your child's academic performance",
      gradient: "linear-gradient(135deg, #e879f9 0%, #a855f7 50%, #ec4899 100%)",
      hoverGradient: "linear-gradient(135deg, #d946ef 0%, #9333ea 50%, #db2777 100%)",
      bgColor: "#fdf4ff",
      accentColor: "#a855f7",
      features: ["👀 Monitor Progress", "📧 Get Updates", "🎓 Academic Reports"]
    },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)',
      padding: '2rem'
    }}>
      {/* Animated Background Elements */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute',
          top: '0',
          left: '25%',
          width: '24rem',
          height: '24rem',
          background: '#a855f7',
          borderRadius: '50%',
          mixBlendMode: 'multiply',
          filter: 'blur(80px)',
          opacity: 0.2,
          animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '33.33%',
          right: '25%',
          width: '24rem',
          height: '24rem',
          background: '#06b6d4',
          borderRadius: '50%',
          mixBlendMode: 'multiply',
          filter: 'blur(80px)',
          opacity: 0.2,
          animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          animationDelay: '2s'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '50%',
          width: '24rem',
          height: '24rem',
          background: '#ec4899',
          borderRadius: '50%',
          mixBlendMode: 'multiply',
          filter: 'blur(80px)',
          opacity: 0.2,
          animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          animationDelay: '4s'
        }}></div>
      </div>

      <div style={{ position: 'relative', zIndex: 10, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ maxWidth: '90rem', width: '100%' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ position: 'relative', display: 'inline-block', marginBottom: '2rem' }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, #22d3ee, #a855f7, #ec4899)',
                filter: 'blur(40px)',
                opacity: 0.5,
                animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}></div>
              <div style={{
                position: 'relative',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                padding: '1.5rem',
                borderRadius: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                display: 'inline-block'
              }}>
                <GraduationCap style={{ width: '5rem', height: '5rem', color: 'white' }} />
              </div>
            </div>
            
            <h1 style={{
              fontSize: '4rem',
              fontWeight: 900,
              background: 'linear-gradient(to right, #22d3ee, #a855f7, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '1rem',
              animation: 'gradient 3s ease infinite',
              backgroundSize: '200% 200%'
            }}>
              Welcome to Smart Campus
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '1.5rem', color: 'rgba(255, 255, 255, 0.9)' }}>
              <Sparkles style={{ width: '1.5rem', height: '1.5rem', color: '#fbbf24', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
              <p>Select your role to begin your journey</p>
              <Sparkles style={{ width: '1.5rem', height: '1.5rem', color: '#fbbf24', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
            </div>
          </div>

          {/* Role Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', maxWidth: '80rem', margin: '0 auto' }}>
            {roles.map((role, index) => (
              <div
                key={role.type}
                onMouseEnter={() => setHoveredRole(role.type)}
                onMouseLeave={() => setHoveredRole(null)}
                style={{ position: 'relative' }}
              >
                {/* Glow Effect */}
                {hoveredRole === role.type && (
                  <div style={{
                    position: 'absolute',
                    inset: '-4px',
                    background: role.gradient,
                    borderRadius: '1.5rem',
                    filter: 'blur(20px)',
                    opacity: 0.75,
                    zIndex: 0
                  }}></div>
                )}
                
                {/* Card */}
                <button
                  onClick={() => onSelectRole(role.type)}
                  style={{
                    position: 'relative',
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '1.5rem',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    padding: '2rem',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: hoveredRole === role.type ? 'translateY(-1rem)' : 'translateY(0)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                >
                  {/* Background Pattern */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: role.bgColor,
                    opacity: hoveredRole === role.type ? 1 : 0.5,
                    transition: 'opacity 0.5s'
                  }}></div>
                  
                  {/* Animated Circles */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '8rem',
                    height: '8rem',
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
                    borderRadius: '50%',
                    marginRight: '-4rem',
                    marginTop: '-4rem',
                    transform: hoveredRole === role.type ? 'scale(1.5)' : 'scale(1)',
                    transition: 'transform 0.5s'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '6rem',
                    height: '6rem',
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
                    borderRadius: '50%',
                    marginLeft: '-3rem',
                    marginBottom: '-3rem',
                    transform: hoveredRole === role.type ? 'scale(1.5)' : 'scale(1)',
                    transition: 'transform 0.5s'
                  }}></div>

                  {/* Content */}
                  <div style={{ position: 'relative', zIndex: 10 }}>
                    {/* Icon */}
                    <div style={{
                      width: '6rem',
                      height: '6rem',
                      margin: '0 auto 1.5rem',
                      borderRadius: '1rem',
                      background: hoveredRole === role.type ? role.hoverGradient : role.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.5s',
                      transform: hoveredRole === role.type ? 'rotate(12deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                    }}>
                      <role.icon style={{ width: '3rem', height: '3rem', color: 'white' }} />
                    </div>

                    {/* Title */}
                    <h2 style={{
                      fontSize: '1.875rem',
                      fontWeight: 900,
                      marginBottom: '0.75rem',
                      background: 'linear-gradient(to right, #1f2937, #4b5563)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      {role.title}
                    </h2>

                    {/* Description */}
                    <p style={{
                      color: '#4b5563',
                      marginBottom: '1.5rem',
                      fontSize: '1rem',
                      lineHeight: 1.6
                    }}>
                      {role.description}
                    </p>

                    {/* Features */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                      {role.features.map((feature, idx) => (
                        <div 
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.875rem',
                            color: '#374151',
                            background: 'rgba(255, 255, 255, 0.5)',
                            borderRadius: '0.5rem',
                            padding: '0.5rem 0.75rem',
                            backdropFilter: 'blur(4px)',
                            transform: hoveredRole === role.type ? 'scale(1.05)' : 'scale(1)',
                            transition: `transform 0.3s ${idx * 50}ms`
                          }}
                        >
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Button */}
                    <div style={{
                      marginTop: '1.5rem',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '0.75rem',
                      background: role.gradient,
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '1.125rem',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                      transform: hoveredRole === role.type ? 'scale(1.05)' : 'scale(1)',
                      transition: 'all 0.3s'
                    }}>
                      Continue as {role.title}
                    </div>

                    {/* Hover Indicator */}
                    {hoveredRole === role.type && (
                      <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                        <div style={{
                          width: '0.75rem',
                          height: '0.75rem',
                          borderRadius: '50%',
                          background: 'linear-gradient(to right, #34d399, #10b981)',
                          animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite'
                        }}></div>
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          width: '0.75rem',
                          height: '0.75rem',
                          borderRadius: '50%',
                          background: 'linear-gradient(to right, #34d399, #10b981)'
                        }}></div>
                      </div>
                    )}
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div style={{ textAlign: 'center', marginTop: '4rem', color: 'rgba(255, 255, 255, 0.7)' }}>
            <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>Need help choosing? Contact support</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', fontSize: '0.75rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Award style={{ width: '1rem', height: '1rem' }} /> Trusted Platform
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <BookOpen style={{ width: '1rem', height: '1rem' }} /> Easy to Use
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Sparkles style={{ width: '1rem', height: '1rem' }} /> Modern Interface
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default RoleSelectionPage;