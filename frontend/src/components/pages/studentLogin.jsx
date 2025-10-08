import React, { useState } from "react";
import { GraduationCap, User, CreditCard, LogIn, ArrowLeft } from "lucide-react";

function StudentLoginPage({ onLogin, onBack }) {
  const [formData, setFormData] = useState({
    name: "",
    usn: ""
  });
  
  const [focusedField, setFocusedField] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (formData.name.trim().length < 2) {
      newErrors.name = "Please enter your full name";
    }
    
    if (formData.usn.trim().length < 5) {
      newErrors.usn = "Please enter a valid USN";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onLogin(formData);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '1rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute',
          top: '-10rem',
          right: '-10rem',
          width: '20rem',
          height: '20rem',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-10rem',
          left: '-10rem',
          width: '20rem',
          height: '20rem',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          animationDelay: '1.5s'
        }}></div>
      </div>

      {/* Back Button */}
      {onBack && (
        <button
          onClick={onBack}
          style={{
            position: 'absolute',
            top: '2rem',
            left: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '0.75rem',
            color: 'white',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s',
            zIndex: 20
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
            e.currentTarget.style.transform = 'translateX(-5px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            e.currentTarget.style.transform = 'translateX(0)';
          }}
        >
          <ArrowLeft style={{ width: '1.25rem', height: '1.25rem' }} />
          Back
        </button>
      )}

      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: '3rem 2.5rem',
        borderRadius: '2rem',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        maxWidth: '28rem',
        width: '100%',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '5rem',
            height: '5rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '1.25rem',
            boxShadow: '0 10px 25px -5px rgba(102, 126, 234, 0.5)',
            marginBottom: '1.5rem',
            transition: 'transform 0.3s',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
          >
            <GraduationCap style={{ width: '2.5rem', height: '2.5rem', color: 'white' }} />
          </div>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '0.5rem'
          }}>
            Student Login
          </h1>
          <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>Enter your credentials to access your dashboard</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Name Field */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#374151',
              marginBottom: '0.5rem'
            }}>
              Full Name
            </label>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              border: `2px solid ${errors.name ? '#ef4444' : focusedField === 'name' ? '#667eea' : '#e5e7eb'}`,
              borderRadius: '0.75rem',
              padding: '0.875rem 1rem',
              transition: 'all 0.3s',
              boxShadow: focusedField === 'name' ? '0 0 0 3px rgba(102, 126, 234, 0.1)' : 'none',
              background: 'white'
            }}>
              <User style={{ width: '1.25rem', height: '1.25rem', color: '#9ca3af', marginRight: '0.75rem' }} />
              <input
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                style={{
                  flex: 1,
                  outline: 'none',
                  background: 'transparent',
                  border: 'none',
                  fontSize: '1rem',
                  color: '#1f2937'
                }}
              />
            </div>
            {errors.name && <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.5rem' }}>{errors.name}</p>}
          </div>

          {/* USN Field */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#374151',
              marginBottom: '0.5rem'
            }}>
              University Seat Number (USN)
            </label>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              border: `2px solid ${errors.usn ? '#ef4444' : focusedField === 'usn' ? '#667eea' : '#e5e7eb'}`,
              borderRadius: '0.75rem',
              padding: '0.875rem 1rem',
              transition: 'all 0.3s',
              boxShadow: focusedField === 'usn' ? '0 0 0 3px rgba(102, 126, 234, 0.1)' : 'none',
              background: 'white'
            }}>
              <CreditCard style={{ width: '1.25rem', height: '1.25rem', color: '#9ca3af', marginRight: '0.75rem' }} />
              <input
                type="text"
                placeholder="Enter your USN"
                value={formData.usn}
                onChange={(e) => handleChange('usn', e.target.value.toUpperCase())}
                onFocus={() => setFocusedField('usn')}
                onBlur={() => setFocusedField(null)}
                style={{
                  flex: 1,
                  outline: 'none',
                  background: 'transparent',
                  border: 'none',
                  fontSize: '1rem',
                  color: '#1f2937',
                  textTransform: 'uppercase'
                }}
              />
            </div>
            {errors.usn && <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.5rem' }}>{errors.usn}</p>}
          </div>

          {/* Login Button */}
          <button
            onClick={handleSubmit}
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '1rem',
              borderRadius: '0.75rem',
              fontWeight: 700,
              fontSize: '1.125rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              marginTop: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              boxShadow: '0 10px 25px -5px rgba(102, 126, 234, 0.5)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 15px 30px -5px rgba(102, 126, 234, 0.6)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(102, 126, 234, 0.5)';
            }}
          >
            <LogIn style={{ width: '1.25rem', height: '1.25rem' }} />
            Login
          </button>
        </div>

        {/* Help Text */}
        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          background: 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)',
          borderRadius: '0.75rem',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>
            <strong style={{ color: '#5b21b6' }}>Need help?</strong>
          </p>
          <p style={{ fontSize: '0.8rem', color: '#6b7280' }}>
            Contact your institution administrator for login credentials
          </p>
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
      `}</style>
    </div>
  );
}

export default StudentLoginPage;