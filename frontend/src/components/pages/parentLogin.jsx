import React, { useState } from "react";
import { User, Users, LogIn, ArrowLeft } from "lucide-react";

function ParentLoginPage({ onLogin, onBack }) {
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: ""
  });

  const [focusedField, setFocusedField] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.parentName.trim().length < 2) {
      newErrors.parentName = "Please enter your full name";
    }
    if (formData.studentName.trim().length < 2) {
      newErrors.studentName = "Please enter the student name";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (onLogin) {
        onLogin(formData);
      } else {
        alert(`Login successful!\nParent: ${formData.parentName}\nStudent: ${formData.studentName}`);
      }
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
            <Users style={{ width: '2.5rem', height: '2.5rem', color: 'white' }} />
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
            Parent Login
          </h1>
          <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>Enter your credentials to access the dashboard</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#374151',
              marginBottom: '0.5rem'
            }}>
              Parent Name
            </label>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              border: `2px solid ${errors.parentName ? '#ef4444' : focusedField === 'parentName' ? '#667eea' : '#e5e7eb'}`,
              borderRadius: '0.75rem',
              padding: '0.875rem 1rem',
              transition: 'all 0.3s',
              boxShadow: focusedField === 'parentName' ? '0 0 0 3px rgba(102, 126, 234, 0.1)' : 'none',
              background: 'white'
            }}>
              <User style={{ width: '1.25rem', height: '1.25rem', color: '#9ca3af', marginRight: '0.75rem' }} />
              <input
                type="text"
                placeholder="Enter parent name"
                value={formData.parentName}
                onChange={(e) => handleChange('parentName', e.target.value)}
                onFocus={() => setFocusedField('parentName')}
                onBlur={() => setFocusedField(null)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
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
            {errors.parentName && <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.5rem' }}>{errors.parentName}</p>}
          </div>

          <div>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#374151',
              marginBottom: '0.5rem'
            }}>
              Student Name
            </label>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              border: `2px solid ${errors.studentName ? '#ef4444' : focusedField === 'studentName' ? '#667eea' : '#e5e7eb'}`,
              borderRadius: '0.75rem',
              padding: '0.875rem 1rem',
              transition: 'all 0.3s',
              boxShadow: focusedField === 'studentName' ? '0 0 0 3px rgba(102, 126, 234, 0.1)' : 'none',
              background: 'white'
            }}>
              <Users style={{ width: '1.25rem', height: '1.25rem', color: '#9ca3af', marginRight: '0.75rem' }} />
              <input
                type="text"
                placeholder="Enter student name"
                value={formData.studentName}
                onChange={(e) => handleChange('studentName', e.target.value)}
                onFocus={() => setFocusedField('studentName')}
                onBlur={() => setFocusedField(null)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
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
            {errors.studentName && <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.5rem' }}>{errors.studentName}</p>}
          </div>

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
      </div>
    </div>
  );
}

export default ParentLoginPage;