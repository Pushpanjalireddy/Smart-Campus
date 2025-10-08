import React, { useState } from "react";
import { GraduationCap, User, Mail, Phone, Lock, Eye, EyeOff, Check, X } from "lucide-react";

function RegisterPage({ onRegister, onSignInClick }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone: "",
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const validatePassword = (password) => {
    return {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
    };
  };

  const passwordStrength = validatePassword(formData.password);
  const allPasswordValid = Object.values(passwordStrength).every(v => v);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    
    if (!allPasswordValid) {
      newErrors.password = "Password doesn't meet requirements";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowSuccess(true);
      setTimeout(() => {
        onRegister(formData);
      }, 1500);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(to bottom right, #4f46e5, #7c3aed, #ec4899)',
      padding: '1rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none'
      }}>
        <div style={{
          position: 'absolute',
          top: '-10rem',
          right: '-10rem',
          width: '20rem',
          height: '20rem',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
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
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          animationDelay: '1s'
        }}></div>
      </div>

      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: '2rem',
        borderRadius: '1.5rem',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        maxWidth: '42rem',
        width: '100%',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '5rem',
            height: '5rem',
            background: 'linear-gradient(to bottom right, #4f46e5, #7c3aed)',
            borderRadius: '1rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            marginBottom: '1rem',
            transition: 'transform 0.2s',
            cursor: 'pointer'
          }}>
            <GraduationCap style={{ width: '2.5rem', height: '2.5rem', color: 'white' }} />
          </div>
          <h1 style={{
            fontSize: '2.25rem',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #4f46e5, #7c3aed)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.5rem'
          }}>
            Smart Campus
          </h1>
          <p style={{ color: '#6b7280' }}>Join our community of learners</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Name Fields */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                border: `2px solid ${focusedField === 'first_name' ? '#4f46e5' : '#e5e7eb'}`,
                borderRadius: '0.75rem',
                padding: '0.75rem 1rem',
                transition: 'all 0.2s',
                boxShadow: focusedField === 'first_name' ? '0 10px 15px -3px rgba(79, 70, 229, 0.1)' : 'none'
              }}>
                <User style={{ width: '1.25rem', height: '1.25rem', color: '#9ca3af', marginRight: '0.75rem' }} />
                <input
                  type="text"
                  placeholder="First Name"
                  value={formData.first_name}
                  onChange={(e) => handleChange('first_name', e.target.value)}
                  onFocus={() => setFocusedField('first_name')}
                  onBlur={() => setFocusedField(null)}
                  style={{
                    flex: 1,
                    outline: 'none',
                    background: 'transparent',
                    border: 'none',
                    fontSize: '1rem'
                  }}
                  required
                />
              </div>
            </div>

            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                border: `2px solid ${focusedField === 'last_name' ? '#4f46e5' : '#e5e7eb'}`,
                borderRadius: '0.75rem',
                padding: '0.75rem 1rem',
                transition: 'all 0.2s',
                boxShadow: focusedField === 'last_name' ? '0 10px 15px -3px rgba(79, 70, 229, 0.1)' : 'none'
              }}>
                <User style={{ width: '1.25rem', height: '1.25rem', color: '#9ca3af', marginRight: '0.75rem' }} />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={formData.last_name}
                  onChange={(e) => handleChange('last_name', e.target.value)}
                  onFocus={() => setFocusedField('last_name')}
                  onBlur={() => setFocusedField(null)}
                  style={{
                    flex: 1,
                    outline: 'none',
                    background: 'transparent',
                    border: 'none',
                    fontSize: '1rem'
                  }}
                  required
                />
              </div>
            </div>
          </div>

          {/* Username */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              border: `2px solid ${errors.username ? '#f87171' : focusedField === 'username' ? '#4f46e5' : '#e5e7eb'}`,
              borderRadius: '0.75rem',
              padding: '0.75rem 1rem',
              transition: 'all 0.2s',
              boxShadow: focusedField === 'username' ? '0 10px 15px -3px rgba(79, 70, 229, 0.1)' : 'none'
            }}>
              <User style={{ width: '1.25rem', height: '1.25rem', color: '#9ca3af', marginRight: '0.75rem' }} />
              <input
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={(e) => handleChange('username', e.target.value)}
                onFocus={() => setFocusedField('username')}
                onBlur={() => setFocusedField(null)}
                style={{
                  flex: 1,
                  outline: 'none',
                  background: 'transparent',
                  border: 'none',
                  fontSize: '1rem'
                }}
                required
              />
            </div>
            {errors.username && <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem', marginLeft: '0.25rem' }}>{errors.username}</p>}
          </div>

          {/* Email */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              border: `2px solid ${errors.email ? '#f87171' : focusedField === 'email' ? '#4f46e5' : '#e5e7eb'}`,
              borderRadius: '0.75rem',
              padding: '0.75rem 1rem',
              transition: 'all 0.2s',
              boxShadow: focusedField === 'email' ? '0 10px 15px -3px rgba(79, 70, 229, 0.1)' : 'none'
            }}>
              <Mail style={{ width: '1.25rem', height: '1.25rem', color: '#9ca3af', marginRight: '0.75rem' }} />
              <input
                type="email"
                placeholder="Email Adress"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                style={{
                  flex: 1,
                  outline: 'none',
                  background: 'transparent',
                  border: 'none',
                  fontSize: '1rem'
                }}
                required
              />
            </div>
            {errors.email && <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem', marginLeft: '0.25rem' }}>{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              border: `2px solid ${errors.phone ? '#f87171' : focusedField === 'phone' ? '#4f46e5' : '#e5e7eb'}`,
              borderRadius: '0.75rem',
              padding: '0.75rem 1rem',
              transition: 'all 0.2s',
              boxShadow: focusedField === 'phone' ? '0 10px 15px -3px rgba(79, 70, 229, 0.1)' : 'none'
            }}>
              <Phone style={{ width: '1.25rem', height: '1.25rem', color: '#9ca3af', marginRight: '0.75rem' }} />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                style={{
                  flex: 1,
                  outline: 'none',
                  background: 'transparent',
                  border: 'none',
                  fontSize: '1rem'
                }}
                required
              />
            </div>
            {errors.phone && <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem', marginLeft: '0.25rem' }}>{errors.phone}</p>}
          </div>

          {/* Password */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              border: `2px solid ${errors.password ? '#f87171' : focusedField === 'password' ? '#4f46e5' : '#e5e7eb'}`,
              borderRadius: '0.75rem',
              padding: '0.75rem 1rem',
              transition: 'all 0.2s',
              boxShadow: focusedField === 'password' ? '0 10px 15px -3px rgba(79, 70, 229, 0.1)' : 'none'
            }}>
              <Lock style={{ width: '1.25rem', height: '1.25rem', color: '#9ca3af', marginRight: '0.75rem' }} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                style={{
                  flex: 1,
                  outline: 'none',
                  background: 'transparent',
                  border: 'none',
                  fontSize: '1rem'
                }}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  marginLeft: '0.5rem',
                  color: '#9ca3af',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                {showPassword ? <EyeOff style={{ width: '1.25rem', height: '1.25rem' }} /> : <Eye style={{ width: '1.25rem', height: '1.25rem' }} />}
              </button>
            </div>

            {/* Password Strength Indicator */}
            {formData.password && (
              <div style={{
                marginTop: '0.75rem',
                padding: '0.75rem',
                background: '#f9fafb',
                borderRadius: '0.5rem'
              }}>
                <p style={{ fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.5rem' }}>Password Requirements:</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem' }}>
                    {passwordStrength.length ? (
                      <Check style={{ width: '1rem', height: '1rem', color: '#10b981', marginRight: '0.5rem' }} />
                    ) : (
                      <X style={{ width: '1rem', height: '1rem', color: '#d1d5db', marginRight: '0.5rem' }} />
                    )}
                    <span style={{ color: passwordStrength.length ? '#059669' : '#6b7280' }}>
                      At least 8 characters
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem' }}>
                    {passwordStrength.uppercase ? (
                      <Check style={{ width: '1rem', height: '1rem', color: '#10b981', marginRight: '0.5rem' }} />
                    ) : (
                      <X style={{ width: '1rem', height: '1rem', color: '#d1d5db', marginRight: '0.5rem' }} />
                    )}
                    <span style={{ color: passwordStrength.uppercase ? '#059669' : '#6b7280' }}>
                      One uppercase letter
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem' }}>
                    {passwordStrength.lowercase ? (
                      <Check style={{ width: '1rem', height: '1rem', color: '#10b981', marginRight: '0.5rem' }} />
                    ) : (
                      <X style={{ width: '1rem', height: '1rem', color: '#d1d5db', marginRight: '0.5rem' }} />
                    )}
                    <span style={{ color: passwordStrength.lowercase ? '#059669' : '#6b7280' }}>
                      One lowercase letter
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem' }}>
                    {passwordStrength.number ? (
                      <Check style={{ width: '1rem', height: '1rem', color: '#10b981', marginRight: '0.5rem' }} />
                    ) : (
                      <X style={{ width: '1rem', height: '1rem', color: '#d1d5db', marginRight: '0.5rem' }} />
                    )}
                    <span style={{ color: passwordStrength.number ? '#059669' : '#6b7280' }}>
                      One number
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={showSuccess}
            style={{
              width: '100%',
              background: 'linear-gradient(to right, #4f46e5, #7c3aed)',
              color: 'white',
              padding: '1rem',
              borderRadius: '0.75rem',
              fontWeight: 600,
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              border: 'none',
              cursor: showSuccess ? 'not-allowed' : 'pointer',
              opacity: showSuccess ? 0.75 : 1,
              transition: 'all 0.2s',
              marginTop: '1.5rem',
              fontSize: '1rem'
            }}
          >
            {showSuccess ? (
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Check style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem' }} />
                Account Created!
              </span>
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        {/* Footer */}
        <p style={{ textAlign: 'center', color: '#6b7280', marginTop: '1.5rem' }}>
          Already have an account?{" "}
          <span 
            onClick={onSignInClick}
            style={{
              color: '#4f46e5',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'color 0.2s'
            }}
          >
            Sign In
          </span>
        </p>
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

export default RegisterPage;