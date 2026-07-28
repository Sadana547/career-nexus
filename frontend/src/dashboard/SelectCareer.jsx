import React from 'react';

const SelectCareer = ({ roadmaps, selectedTrack, handleTrackChange, progress = 0 }) => {
  React.useEffect(() => {
    const styleId = 'career-premium-effects';
    if (!document.getElementById(styleId)) {
      const styleSheet = document.createElement('style');
      styleSheet.id = styleId;
      styleSheet.innerText = `
        .premium-select-box {
          transition: all 0.25s ease;
          background: #ffffff;
        }
        .premium-select-box:focus-within {
          border-color: #3b82f6 !important;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15) !important;
        }
        .interactive-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .interactive-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 35px -10px rgba(15, 23, 42, 0.06) !important;
          border-color: #cbd5e1 !important;
        }
      `;
      document.head.appendChild(styleSheet);
    }
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '1000px', margin: '0 auto' }}>
      
      {/* Workspace Hero Banner */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'linear-gradient(135deg, #1e293b, #0f172a)', padding: '35px 40px', borderRadius: '24px', color: '#fff', boxShadow: '0 15px 20px -5px rgba(15, 23, 42, 0.1)', position: 'relative' }}>
        <div>
          <span style={{ background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', padding: '4px 12px', borderRadius: '99px', fontSize: '12px', fontWeight: '700', letterSpacing: '0.5px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '12px' }}>Workspace Initializer</span>
          <h1 style={{ fontSize: '26px', fontWeight: '800', margin: '0 0 8px 0', letterSpacing: '-0.5px', color: '#ffffff' }}>Architect Your Engineering Future 🎯</h1>
          <p style={{ color: '#94a3b8', margin: 0, fontSize: '14px', maxWidth: '620px', lineHeight: '1.6' }}>
            Ready to build your skills? Select your focus track below, and we'll craft a step-by-step roadmap packed with handpicked study modules and real-world portfolio projects.
          </p>
        </div>
        <div style={{ fontSize: '55px' }}>🚀</div>
      </div>

      {/* Main Selection Area Card */}
      <div className="interactive-card" style={{ 
        background: 'linear-gradient(135deg, #ffffff, #f8fafc)', 
        padding: '35px', 
        borderRadius: '24px', 
        border: '1px solid #e2e8f0', 
        boxShadow: '0 10px 30px -15px rgba(15, 23, 42, 0.03)',
        borderLeft: '6px solid #3b82f6',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ background: '#eff6ff', width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>🧭</div>
          <div>
            <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#1e293b' }}>Select Aimed Career Track</h3>
            <p style={{ margin: '2px 0 0 0', fontSize: '13px', color: '#64748b' }}>Choose one specialization node to switch runtime layouts.</p>
          </div>
        </div>

        {/* Custom Styled Select Element Dropdown Wrapper */}
        <div className="premium-select-box" style={{ border: '1px solid #cbd5e1', borderRadius: '14px', padding: '4px 12px', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.01)' }}>
          <select 
            value={selectedTrack} 
            onChange={(e) => handleTrackChange(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 6px',
              fontSize: '15px',
              fontWeight: '600',
              color: '#334155',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            {Object.keys(roadmaps || {}).map((trackKey) => (
              <option key={trackKey} value={trackKey}>
                {roadmaps[trackKey].title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Dynamic Metrics Progress Matrix Card */}
      <div className="interactive-card" style={{ 
        background: 'linear-gradient(135deg, #ffffff, #f8fafc)', 
        padding: '30px 35px', 
        borderRadius: '24px', 
        border: '1px solid #e2e8f0', 
        boxShadow: '0 10px 30px -15px rgba(15, 23, 42, 0.03)',
        borderLeft: '6px solid #10b981'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ background: '#10b981', width: '8px', height: '8px', borderRadius: '50%' }}></span>
            <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#1e293b' }}>Track Progress Matrix</h4>
          </div>
          <span style={{ fontSize: '12px', fontWeight: '700', color: '#047857', background: '#d1fae5', padding: '4px 12px', borderRadius: '99px' }}>
            {progress}% Completed
          </span>
        </div>

        {/* Premium Progress Bar Track */}
        <div style={{ width: '100%', height: '10px', background: '#e2e8f0', borderRadius: '99px', overflow: 'hidden' }}>
          <div style={{ 
            width: `${progress}%`, 
            height: '100%', 
            background: 'linear-gradient(90deg, #10b981, #34d399)', 
            borderRadius: '99px',
            transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}></div>
        </div>
      </div>

    </div>
  );
};

export default SelectCareer;