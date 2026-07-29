import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function LoginPage({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'SVAT' && password === 'SVAT@104') {
      setError('');
      onLoginSuccess();
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="login-page">
      {/* Organic Left Fluid Wave Background */}
      <svg className="login-wave-bg" viewBox="0 0 500 800" preserveAspectRatio="none">
        <path d="M0,0 L220,0 C340,160 180,320 280,480 C360,600 230,730 180,800 L0,800 Z" fill="#FFFFFF" opacity="0.9" />
        <path d="M0,0 L260,0 C380,180 210,350 310,530 C390,650 260,760 210,800 L0,800 Z" fill="#6EE2F1" opacity="0.4" />
      </svg>

      {/* Background Soft Diagonal Stripes */}
      <div className="login-stripes-bg">
        <div className="login-stripe stripe-1"></div>
        <div className="login-stripe stripe-2"></div>
        <div className="login-stripe stripe-3"></div>
      </div>

      {/* Top Left Brand Indicator */}
      <div className="login-left-brand">
        <div className="login-brand-dot"></div>
        <span>SVAT Transport AI</span>
      </div>

      {/* Center Member Login Box */}
      <div className="login-card">
        <div className="login-title-container">
          <span className="login-sub-heading">MEMBER</span>
          <h1 className="login-main-heading">LOGIN</h1>
        </div>

        {error && <div className="login-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="login-form-group">
            <input 
              type="text" 
              className="login-input" 
              placeholder="Username / Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="login-form-group" style={{ position: 'relative' }}>
            <input 
              type={showPassword ? "text" : "password"} 
              className="login-input" 
              placeholder="Password"
              style={{ paddingRight: '45px' }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '15px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                padding: 0,
                color: '#00A8C6',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button type="submit" className="login-btn">
            LOGIN NOW!
          </button>
        </form>

        <div className="login-footer-text">
          Don't have an account? <span className="request-access-link">Request Access</span>
        </div>
      </div>
    </div>
  );
}
