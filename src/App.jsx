import React, { useState, useEffect } from 'react';
import { Truck, Lock } from 'lucide-react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return (localStorage.getItem('lt_is_logged_in') || localStorage.getItem('svat_is_logged_in')) === 'true';
  });
  const [page, setPage] = useState(() => {
    const loggedIn = (localStorage.getItem('lt_is_logged_in') || localStorage.getItem('svat_is_logged_in')) === 'true';
    return loggedIn ? 'dashboard' : 'home';
  });

  // Enforce permanent persistent login sync with localStorage
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem('lt_is_logged_in', 'true');
      localStorage.setItem('svat_is_logged_in', 'true');
    }
  }, [isLoggedIn]);

  const navigateTo = (targetPage) => {
    if (isLoggedIn && targetPage === 'login') {
      setPage('dashboard');
    } else {
      setPage(targetPage);
    }
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    localStorage.setItem('lt_is_logged_in', 'true');
    localStorage.setItem('svat_is_logged_in', 'true');
    setPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('lt_is_logged_in');
    localStorage.removeItem('svat_is_logged_in');
    setPage('home');
  };

  return (
    <>
      <>
        <svg className="global-wave-bg" viewBox="0 0 500 800" preserveAspectRatio="none">
          <path d="M0,0 L220,0 C340,160 180,320 280,480 C360,600 230,730 180,800 L0,800 Z" fill="#FFFFFF" opacity="0.4" />
          <path d="M0,0 L180,0 C290,180 130,350 220,520 C290,650 180,750 140,800 L0,800 Z" fill="#5CE1E6" opacity="0.2" />
        </svg>

        <div className="global-stripes-bg">
          <div className="global-stripe stripe-1"></div>
          <div className="global-stripe stripe-2"></div>
          <div className="global-stripe stripe-3"></div>
        </div>

        {page !== 'dashboard' && (
          <div className="global-left-brand">
            <div className="global-brand-dot"></div>
            <span>Lithin Transport</span>
          </div>
        )}
      </>

      {page !== 'dashboard' && (
        <header className="navbar" style={{
          background: 'linear-gradient(135deg, rgba(225, 250, 254, 0.85) 0%, rgba(200, 245, 252, 0.6) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0, 180, 216, 0.15)',
          padding: '0.85rem 3rem'
        }}>
          <div className="logo-container" onClick={() => navigateTo('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '2px solid rgba(255, 255, 255, 0.95)',
              boxShadow: '0 4px 12px rgba(0, 180, 216, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              padding: '2px'
            }}>
              <img src="/logo.png" alt="Lithin Transport Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          </div>

          <ul className="nav-links" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <li>
              <button
                onClick={() => navigateTo('home')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#007A93',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  padding: '0.4rem 0.8rem'
                }}
              >
                Home
              </button>
            </li>
          </ul>

          <div className="nav-actions">
            {isLoggedIn ? (
              <button className="btn-primary" onClick={() => navigateTo('dashboard')}>
                Dashboard
              </button>
            ) : (
              <button 
                onClick={() => navigateTo('login')} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  background: '#FFFFFF',
                  color: '#00A8C6',
                  border: '1.5px solid rgba(0, 168, 198, 0.3)',
                  borderRadius: '50px',
                  padding: '0.55rem 1.25rem',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(0, 180, 216, 0.12)',
                  transition: 'all 0.3s ease'
                }}
              >
                <Lock size={15} />
                Client Login
              </button>
            )}
          </div>
        </header>
      )}

      {/* Pages Container */}
      {page === 'home' && <LandingPage onNavigate={navigateTo} />}
      {page === 'login' && <LoginPage onLoginSuccess={handleLoginSuccess} />}
      {page === 'dashboard' && <Dashboard onLogout={handleLogout} />}

    
      {page === 'home' && (
        <footer className="footer">
          <div>
            <div className="logo-container" style={{ display: 'flex', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                border: '2px solid rgba(255, 255, 255, 0.9)',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                padding: '2px'
              }}>
                <img src="/logo.png" alt="LT Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
              © {new Date().getFullYear()} Lithin Transport.<br />All rights reserved.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '1rem' }}>HQ Address</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              4/252, Vedivattam,<br />
              Agraharam vill and po,<br />
              Natrampalli TK, Tirupattur DT. 635651
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '1rem' }}>Contact Info</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span><strong>Phone:</strong> +91 95667 38884, +91 93423 17996</span>
              <span><strong>Email:</strong> lithintransports@gmail.com</span>
              <span><strong>Website:</strong> www.lithintransport.in</span>
            </p>
          </div>
        </footer>
      )}
    </>
  );
}

export default App;
