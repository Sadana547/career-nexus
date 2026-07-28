import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Please fill in all layout credentials.');
      return;
    }
    login({ name: 'Sadana', email: formData.email });
    navigate('/dashboard');
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#0f172a',
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'all 0.2s ease',
  };

  return (
    <div style={{ 
      minHeight: 'calc(100vh - 71px)', 
      background: 'radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(29, 78, 216, 0.06) 0%, transparent 50%), #0f172a', 
      fontFamily: '"Inter", sans-serif', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '40px 20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Absolute Decorative Glow Mesh */}
      <div style={{ position: 'absolute', width: '300px', height: '300px', background: '#3b82f6', filter: 'blur(120px)', opacity: 0.15, top: '20%', left: '15%', pointerEvents: 'none' }}></div>

      {/* Modern Card Block */}
      <div style={{ background: '#ffffff', width: '100%', maxWidth: '420px', padding: '45px 40px', borderRadius: '28px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', zIndex: 2, border: '1px solid rgba(255, 255, 255, 0.1)' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#0f172a', margin: '0 0 8px 0', letterSpacing: '-0.75px' }}>Welcome Back</h2>
          <p style={{ fontSize: '14px', color: '#64748b', margin: 0, fontWeight: '500' }}>Enter your engineering token to log in.</p>
        </div>

        {error && <div style={{ background: '#fef2f2', color: '#ef4444', padding: '12px', borderRadius: '10px', fontSize: '13px', fontWeight: '600', marginBottom: '20px', border: '1px solid #fee2e2' }}>{error}</div>}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '8px' }}>Email Address</label>
            <input 
              type="email" 
              placeholder="name@company.com" 
              style={inputStyle} 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '8px' }}>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              style={inputStyle} 
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <button 
            type="submit"
            style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', color: '#ffffff', border: 'none', borderRadius: '12px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 4px 14px rgba(59, 130, 246, 0.3)', marginTop: '8px' }}
          >
            Sign In to Dashboard
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '28px', fontSize: '13px', color: '#64748b', fontWeight: '500' }}>
          Don't have an account? <Link to="/register" style={{ color: '#3b82f6', fontWeight: '700', textDecoration: 'none' }}>Register here</Link>
        </div>

      </div>
    </div>
  );
};

export default Login;