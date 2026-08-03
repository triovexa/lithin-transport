import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function LoginPage({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim().toLowerCase() === 'lithintransport' && password === 'Lithintransport@884') {
      setError('');
      onLoginSuccess();
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="login-page">


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
      </div>
    </div>
  );
}