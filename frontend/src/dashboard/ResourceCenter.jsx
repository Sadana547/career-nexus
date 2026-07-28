import React from 'react';

const ResourceCenter = ({ currentRoadmap }) => {
  React.useEffect(() => {
    const styleId = 'resource-premium-effects';
    if (!document.getElementById(styleId)) {
      const styleSheet = document.createElement('style');
      styleSheet.id = styleId;
      styleSheet.innerText = `
        .premium-resource-row { transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1); }
        .premium-resource-row:hover { 
          background: linear-gradient(135deg, #ffffff, #eff6ff) !important; 
          border-color: #bfdbfe !important; 
          transform: translateY(-2px);
          box-shadow: 0 10px 20px -8px rgba(59, 130, 246, 0.1) !important;
        }
        .premium-portal-link { transition: all 0.2s ease; text-decoration: none; }
        .premium-resource-row:hover .premium-portal-link { color: #2563eb !important; transform: translateX(3px); }
      `;
      document.head.appendChild(styleSheet);
    }
  }, []);

  if (!currentRoadmap) {
    return (
      <div style={{ background: '#fff', padding: '40px', borderRadius: '24px', textAlign: 'center', border: '1px solid #e2e8f0', maxWidth: '1000px', margin: '0 auto' }}>
        <span style={{ fontSize: '40px' }}>📚</span>
        <h3 style={{ color: '#1e293b', margin: '15px 0 5px 0', fontWeight: '700' }}>No Target Track Selected</h3>
        <p style={{ color: '#64748b', margin: 0 }}>Select a specialization track under "Select Career" to fetch external reference indices.</p>
      </div>
    );
  }

  const fallbackResources = [
    { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
    { name: "javascript.info", url: "https://javascript.info" }
  ];

  const activeResources = currentRoadmap.resources || fallbackResources;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '1000px', margin: '0 auto' }}>
      
      {/* Banner */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'linear-gradient(135deg, #1e293b, #0f172a)', padding: '30px 40px', borderRadius: '24px', color: '#fff', boxShadow: '0 15px 20px -5px rgba(15, 23, 42, 0.1)' }}>
        <div>
          <span style={{ background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', padding: '4px 12px', borderRadius: '99px', fontSize: '12px', fontWeight: '700', letterSpacing: '0.5px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '10px' }}>Curated Reference</span>
          <h1 style={{ fontSize: '24px', fontWeight: '800', margin: '0 0 4px 0', letterSpacing: '-0.5px', color: '#ffffff' }}>Documentation & Link Indexes 📚</h1>
          <p style={{ color: '#94a3b8', margin: 0, fontSize: '14px' }}>Handpicked academic portals to accelerate your mastering of the <span style={{ color: '#60a5fa', fontWeight: '600' }}>{currentRoadmap.title}</span> curriculum.</p>
        </div>
        <div style={{ fontSize: '50px' }}>📖</div>
      </div>

      {/* Premium Resource Row List Body */}
      <div style={{ 
        background: 'linear-gradient(135deg, #ffffff, #f8fafc)', 
        padding: '35px', 
        borderRadius: '24px', 
        border: '1px solid #e2e8f0', 
        boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.04)', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '16px',
        position: 'relative'
      }}>
        {activeResources.map((resource, index) => (
          <a 
            key={index}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-resource-row"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '22px 28px',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '18px',
              textDecoration: 'none',
              boxShadow: '0 4px 6px -2px rgba(15, 23, 42, 0.01)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '8px', height: '8px', background: '#3b82f6', borderRadius: '50%' }}></div>
              <span style={{ fontSize: '16px', fontWeight: '700', color: '#1e293b' }}>{resource.name}</span>
            </div>
            <span className="premium-portal-link" style={{ fontSize: '13px', fontWeight: '700', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
              Access Portal <span style={{ fontSize: '11px' }}>↗</span>
            </span>
          </a>
        ))}
      </div>

    </div>
  );
};

export default ResourceCenter;