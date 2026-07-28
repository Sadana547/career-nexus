import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setError('All synchronization fields are required.');
      return;
    }
    navigate('/login');
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
      background: 'radial-gradient(circle at 90% 20%, rgba(16, 185, 129, 0.06) 0%, transparent 45%), radial-gradient(circle at 10% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%), #0f172a', 
      fontFamily: '"Inter", sans-serif', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '40px 20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Absolute Decorative Glow Mesh */}
      <div style={{ position: 'absolute', width: '350px', height: '350px', background: '#10b981', filter: 'blur(130px)', opacity: 0.1, bottom: '15%', right: '10%', pointerEvents: 'none' }}></div>

      {/* Modern Card Block */}
      <div style={{ background: '#ffffff', width: '100%', maxWidth: '420px', padding: '45px 40px', borderRadius: '28px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', zIndex: 2, borderTop: '6px solid #3b82f6' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#0f172a', margin: '0 0 8px 0', letterSpacing: '-0.75px' }}>Create Account</h2>
          <p style={{ fontSize: '14px', color: '#64748b', margin: 0, fontWeight: '500' }}>Join the premium workspace core track.</p>
        </div>

        {error && <div style={{ background: '#fef2f2', color: '#ef4444', padding: '12px', borderRadius: '10px', fontSize: '13px', fontWeight: '600', marginBottom: '20px', border: '1px solid #fee2e2' }}>{error}</div>}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '8px' }}>Full Name</label>
            <input 
              type="text" 
              placeholder="Sadana S" 
              style={inputStyle} 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '8px' }}>Email Address</label>
            <input 
              type="email" 
              placeholder="sadana@gmail.com" 
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
            style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #10b981, #059669)', color: '#ffffff', border: 'none', borderRadius: '12px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 4px 14px rgba(16, 185, 129, 0.2)', marginTop: '8px' }}
          >
            Register Base Node
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '28px', fontSize: '13px', color: '#64748b', fontWeight: '500' }}>
          Already have an account? <Link to="/login" style={{ color: '#3b82f6', fontWeight: '700', textDecoration: 'none' }}>Log in here</Link>
        </div>

      </div>
    </div>
  );
};

export default Register;