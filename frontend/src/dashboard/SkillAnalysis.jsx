import React from 'react';

const SkillAnalysis = ({ currentRoadmap }) => {
  React.useEffect(() => {
    const styleId = 'skill-premium-effects';
    if (!document.getElementById(styleId)) {
      const styleSheet = document.createElement('style');
      styleSheet.id = styleId;
      styleSheet.innerText = `
        .premium-skill-pill {
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .premium-skill-pill:hover {
          transform: translateY(-3px);
          background: #ffffff !important;
          border-color: #3b82f6 !important;
          box-shadow: 0 10px 20px -5px rgba(59, 130, 246, 0.12) !important;
        }
      `;
      document.head.appendChild(styleSheet);
    }
  }, []);

  if (!currentRoadmap) {
    return (
      <div style={{ background: '#fff', padding: '40px', borderRadius: '24px', textAlign: 'center', border: '1px solid #e2e8f0', maxWidth: '1000px', margin: '0 auto' }}>
        <span style={{ fontSize: '40px' }}>📊</span>
        <h3 style={{ color: '#1e293b', margin: '15px 0 5px 0', fontWeight: '700' }}>No Target Track Selected</h3>
        <p style={{ color: '#64748b', margin: 0 }}>Select a specialization track under "Select Career" to parse target core skills matrix nodes.</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '1000px', margin: '0 auto' }}>
      {/* Mini Banner Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'linear-gradient(135deg, #1e293b, #0f172a)', padding: '30px 40px', borderRadius: '24px', color: '#fff', boxShadow: '0 15px 20px -5px rgba(15, 23, 42, 0.1)' }}>
        <div>
          <span style={{ background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', padding: '4px 12px', borderRadius: '99px', fontSize: '12px', fontWeight: '700', letterSpacing: '0.5px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '10px' }}>Target Capabilities</span>
          <h1 style={{ fontSize: '24px', fontWeight: '800', margin: '0 0 4px 0', letterSpacing: '-0.5px', color: '#ffffff' }}>Core Skills Distribution 📊</h1>
          <p style={{ color: '#94a3b8', margin: 0, fontSize: '14px' }}>A strategic overview of required high-priority technologies for the <span style={{ color: '#60a5fa', fontWeight: '600' }}>{currentRoadmap.title}</span> track.</p>
        </div>
        <div style={{ fontSize: '50px' }}>⚡</div>
      </div>

      {/* Modernized Body Container */}
      <div style={{ 
        background: 'linear-gradient(135deg, #ffffff, #f8fafc)', 
        padding: '35px', 
        borderRadius: '24px', 
        border: '1px solid #e2e8f0', 
        boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.05)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle top branding indicator line */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #3b82f6, #60a5fa)' }}></div>
        
        <h3 style={{ margin: '0 0 24px 0', fontSize: '16px', fontWeight: '700', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#eff6ff', width: '28px', height: '28px', borderRadius: '8px', fontSize: '14px' }}>🛠️</span> 
          Required Technology Stack Modules
        </h3>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
          {currentRoadmap.skills?.map((skill, index) => (
            <div 
              key={index} 
              className="premium-skill-pill"
              style={{
                background: '#ffffff',
                color: '#334155',
                padding: '14px 22px',
                borderRadius: '16px',
                fontWeight: '600',
                fontSize: '14px',
                border: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 4px 6px -1px rgba(15, 23, 42, 0.02)'
              }}
            >
              <span style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)', width: '7px', height: '7px', borderRadius: '50%' }}></span>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillAnalysis;