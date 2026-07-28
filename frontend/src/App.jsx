import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './context/AuthContext';

// ✨ Inline Modern Premium Welcome Landing Screen
const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: 'calc(100vh - 71px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(circle at 50% 30%, #1e293b 0%, #0f172a 100%)',
      fontFamily: '"Inter", sans-serif',
      padding: '40px 20px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background glow elements */}
      <div style={{ position: 'absolute', width: '400px', height: '400px', background: '#3b82f6', filter: 'blur(150px)', opacity: 0.08, top: '10%', left: '25%', pointerEvents: 'none' }}></div>
      
      <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', zIndex: 2 }}>
        <h1 style={{
          fontSize: '52px',
          fontWeight: '900',
          color: '#ffffff',
          letterSpacing: '-1.5px',
          margin: 0,
          lineHeight: '1.2'
        }}>
          Welcome to <span style={{ background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Career Nexus</span> 🚀
        </h1>
        
        <p style={{
          fontSize: '19px',
          color: '#94a3b8',
          maxWidth: '600px',
          lineHeight: '1.6',
          margin: '0 0 12px 0'
        }}>
          Your premium multi-page workspace platform for career tracking, skill roadmaps, and resume analytics.
        </p>

        <button 
          onClick={() => navigate('/login')}
          style={{
            padding: '16px 36px',
            background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
            color: '#ffffff',
            border: 'none',
            borderRadius: '14px',
            fontSize: '16px',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)',
            transition: 'all 0.2s ease'
          }}
        >
          Explore Your Dashboard Workspace →
        </button>
      </div>
    </div>
  );
};

// Global Header Component
const GlobalNavbar = () => {
  const location = useLocation();
  
  if (location.pathname.startsWith('/dashboard')) return null;

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '18px 40px',
      background: '#ffffff',
      borderBottom: '1px solid #e2e8f0',
      boxShadow: '0 4px 6px -1px rgba(15, 23, 42, 0.02)',
      fontFamily: '"Inter", sans-serif'
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
        <div style={{ background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', width: '34px', height: '34px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '16px', color: '#fff', boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)' }}>C</div>
        <span style={{ fontSize: '20px', fontWeight: '800', letterSpacing: '-0.5px', color: '#0f172a' }}>
          Career <span style={{ background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Nexus</span>
        </span>
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <Link to="/login" style={{ color: '#64748b', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>
          Login
        </Link>
        <Link to="/register" style={{ 
          padding: '10px 22px', 
          background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', 
          color: '#ffffff', 
          textDecoration: 'none', 
          borderRadius: '12px', 
          fontWeight: '700', 
          fontSize: '14px', 
          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.25)' 
        }}>
          Register
        </Link>
      </div>
    </nav>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <GlobalNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;