import React from 'react';

const LearningRoadmap = ({ currentRoadmap, selectedTrack, completedSteps, toggleStep }) => {
  React.useEffect(() => {
    const styleId = 'roadmap-premium-effects';
    if (!document.getElementById(styleId)) {
      const styleSheet = document.createElement('style');
      styleSheet.id = styleId;
      styleSheet.innerText = `
        .roadmap-premium-card { transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1); }
        .roadmap-premium-card:hover { 
          transform: translateX(8px); 
          border-color: #3b82f6 !important; 
          background: linear-gradient(135deg, #ffffff, #eff6ff) !important;
          box-shadow: 0 12px 24px -8px rgba(59, 130, 246, 0.15) !important;
        }
      `;
      document.head.appendChild(styleSheet);
    }
  }, []);

  if (!currentRoadmap) {
    return (
      <div style={{ background: '#fff', padding: '40px', borderRadius: '24px', textAlign: 'center', border: '1px solid #e2e8f0', maxWidth: '1000px', margin: '0 auto' }}>
        <span style={{ fontSize: '40px' }}>🚀</span>
        <h3 style={{ color: '#1e293b', margin: '15px 0 5px 0', fontWeight: '700' }}>No Target Track Selected</h3>
        <p style={{ color: '#64748b', margin: 0 }}>Select a specialization track under "Select Career" to map execution checkpoint vectors.</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '1000px', margin: '0 auto' }}>
      {/* Banner */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'linear-gradient(135deg, #1e293b, #0f172a)', padding: '30px 40px', borderRadius: '24px', color: '#fff', boxShadow: '0 15px 20px -5px rgba(15, 23, 42, 0.1)' }}>
        <div>
          <span style={{ background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', padding: '4px 12px', borderRadius: '99px', fontSize: '12px', fontWeight: '700', letterSpacing: '0.5px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '10px' }}>Execution Sequence</span>
          <h1 style={{ fontSize: '24px', fontWeight: '800', margin: '0 0 4px 0', letterSpacing: '-0.5px', color: '#ffffff' }}>Guided Learning Roadmap 🚀</h1>
          <p style={{ color: '#94a3b8', margin: 0, fontSize: '14px' }}>Check off completion parameters to dynamically scale your matrix metrics.</p>
        </div>
        <div style={{ fontSize: '50px' }}>🏁</div>
      </div>

      {/* Enhanced Stack Checklist Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        {currentRoadmap.steps?.map((step, index) => {
          const isDone = !!completedSteps[`${selectedTrack}-${index}`];
          return (
            <div 
              key={index}
              className="roadmap-premium-card"
              style={{
                background: isDone ? 'linear-gradient(135deg, #f8fafc, #f1f5f9)' : 'linear-gradient(135deg, #ffffff, #f8fafc)',
                padding: '26px 30px',
                borderRadius: '20px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 10px 25px -15px rgba(15, 23, 42, 0.04)',
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                cursor: 'pointer',
                opacity: isDone ? 0.8 : 1,
                borderLeft: isDone ? '6px solid #10b981' : '6px solid #3b82f6',
                position: 'relative'
              }}
              onClick={() => toggleStep(index)}
            >
              {/* Premium Status Ring Checkbox */}
              <div style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                border: isDone ? '2px solid #10b981' : '2px solid #cbd5e1',
                background: isDone ? 'linear-gradient(135deg, #10b981, #059669)' : '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '13px',
                fontWeight: 'bold',
                flexShrink: 0,
                boxShadow: isDone ? '0 4px 10px rgba(16, 185, 129, 0.3)' : 'inset 0 2px 4px rgba(0,0,0,0.02)',
                transition: 'all 0.2s ease'
              }}>
                {isDone && '✓'}
              </div>

              <div style={{ flexGrow: 1 }}>
                <h4 style={{ margin: '0 0 5px 0', fontSize: '16px', fontWeight: '700', color: isDone ? '#64748b' : '#1e293b', textDecoration: isDone ? 'line-through' : 'none' }}>
                  {step.phase}
                </h4>
                <p style={{ margin: 0, fontSize: '14px', color: isDone ? '#94a3b8' : '#64748b', lineHeight: '1.5' }}>
                  {step.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LearningRoadmap;