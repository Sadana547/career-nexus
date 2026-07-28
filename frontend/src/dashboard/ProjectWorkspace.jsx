import React, { useState } from 'react';

const ProjectWorkspace = ({ currentRoadmap }) => {
  const [activeModalProject, setActiveModalProject] = useState(null);

  React.useEffect(() => {
    const styleId = 'project-premium-interactive';
    if (!document.getElementById(styleId)) {
      const styleSheet = document.createElement('style');
      styleSheet.id = styleId;
      styleSheet.innerText = `
        .premium-project-card { 
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
        }
        .premium-project-card:hover { 
          transform: translateY(-6px); 
          border-color: #3b82f6 !important; 
          box-shadow: 0 20px 35px -10px rgba(59, 130, 246, 0.12) !important; 
        }
        .premium-blueprint-btn {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        .premium-blueprint-btn:hover {
          background: linear-gradient(135deg, #2563eb, #1d4ed8) !important;
          color: #ffffff !important;
          box-shadow: 0 8px 16px rgba(37, 99, 235, 0.25);
          transform: translateY(-1px);
        }
        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .modal-animate {
          animation: modalFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `;
      document.head.appendChild(styleSheet);
    }
  }, []);

  if (!currentRoadmap) {
    return (
      <div style={{ background: '#fff', padding: '40px', borderRadius: '24px', textAlign: 'center', border: '1px solid #e2e8f0', maxWidth: '1000px', margin: '0 auto' }}>
        <span style={{ fontSize: '40px' }}>🛠️</span>
        <h3 style={{ color: '#1e293b', margin: '15px 0 5px 0', fontWeight: '700' }}>No Target Track Selected</h3>
        <p style={{ color: '#64748b', margin: 0 }}>Select a specialization track under "Select Career" to populate required portfolio sandbox projects.</p>
      </div>
    );
  }

  const blueprintsData = {
    "Dynamic Blog Application": {
      dbModel: "✓ User Schema (Name, Email, Password, Hash)\n✓ Post Schema (Title, Slug, Body, AuthorRef, Timestamps)",
      endpoints: "• POST /api/auth/register (Argon2 encryption)\n• POST /api/auth/login (JWT generation)\n• GET /api/posts (Paginated data feed)\n• POST /api/posts/create (Protected state session route)",
      structure: "├── server.js\n├── config/db.js\n├── controllers/\n│   ├── authController.js\n│   └── postController.js\n├── models/\n└── routes/"
    },
    "E-Commerce System": {
      dbModel: "✓ Product Schema (SKU, Title, Pricing, StockLevel, Gallery)\n✓ Order Schema (UserRef, OrderItems[], TotalValue, GatewayReceipt)",
      endpoints: "• GET /api/products (Sorting + filtering index maps)\n• POST /api/cart/sync (Session state retention sync)\n• POST /api/checkout/payment (Stripe integration hook pipelines)",
      structure: "├── backend/\n│   ├── models/Product.js\n│   └── routes/checkout.js\n├── frontend/\n│   ├── src/context/CartContext.jsx\n│   └── src/pages/CartView.jsx"
    }
  };

  const openBlueprint = (projectTitle, projectDesc) => {
    const spec = blueprintsData[projectTitle] || {
      dbModel: "✓ Specialized Operational Schemas\n✓ Document Relationship Object Mappings",
      endpoints: "• GET /api/v1/resources (Filtered dynamic response index)\n• POST /api/v1/resources/secure (Protected state parameters)",
      structure: "├── config/\n├── components/\n├── routes/\n└── index.js"
    };
    setActiveModalProject({ title: projectTitle, desc: projectDesc, ...spec });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
      
      {/* Banner */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'linear-gradient(135deg, #1e293b, #0f172a)', padding: '30px 40px', borderRadius: '24px', color: '#fff', boxShadow: '0 15px 20px -5px rgba(15, 23, 42, 0.1)' }}>
        <div>
          <span style={{ background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', padding: '4px 12px', borderRadius: '99px', fontSize: '12px', fontWeight: '700', letterSpacing: '0.5px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '10px' }}>Portfolio Enforcers</span>
          <h1 style={{ fontSize: '24px', fontWeight: '800', margin: '0 0 4px 0', letterSpacing: '-0.5px', color: '#ffffff' }}>Practical Capstone Workspaces 🛠️</h1>
          <p style={{ color: '#94a3b8', margin: 0, fontSize: '14px' }}>Build these reference implementation models to solidify enterprise framework architecture capabilities.</p>
        </div>
        <div style={{ fontSize: '50px' }}>💻</div>
      </div>

      {/* Upgraded Project Cards Display Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '26px' }}>
        {currentRoadmap.projects?.map((proj, index) => (
          <div 
            key={index}
            className="premium-project-card"
            style={{
              background: 'linear-gradient(135deg, #ffffff, #f8fafc)',
              padding: '35px',
              borderRadius: '24px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 10px 30px -15px rgba(15, 23, 42, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderLeft: '6px solid #3b82f6'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#eff6ff', width: '26px', height: '26px', borderRadius: '6px', fontSize: '12px' }}>🔷</span>
                <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>{proj.name}</h4>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: '#64748b', lineHeight: '1.65' }}>{proj.desc}</p>
            </div>
            
            <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '22px', marginTop: '26px', display: 'flex', justifyContent: 'flex-end' }}>
              <button 
                onClick={() => openBlueprint(proj.name, proj.desc)}
                className="premium-blueprint-btn"
                style={{ fontSize: '13px', fontWeight: '700', color: '#3b82f6', background: '#eff6ff', padding: '10px 20px', borderRadius: '14px', border: '1px solid #bfdbfe', outline: 'none' }}
              >
                View Production Blueprint 📋
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Blueprint Modal Overlay */}
      {activeModalProject && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15, 23, 42, 0.4)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: '20px' }}>
          <div className="modal-animate" style={{ background: '#ffffff', width: '100%', maxWidth: '650px', borderRadius: '28px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
            
            <div style={{ background: 'linear-gradient(135deg, #1e293b, #0f172a)', padding: '24px 30px', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#3b82f6', background: 'rgba(59, 130, 246, 0.15)', padding: '4px 10px', borderRadius: '99px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Production Architecture Map</span>
                <h3 style={{ margin: '6px 0 0 0', fontSize: '20px', fontWeight: '800', color: '#ffffff' }}>{activeModalProject.title}</h3>
              </div>
              <button onClick={() => setActiveModalProject(null)} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#94a3b8', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontWeight: 'bold' }}>✕</button>
            </div>

            <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px', maxHeight: '70vh', overflowY: 'auto' }}>
              <div>
                <h5 style={{ margin: '0 0 6px 0', fontSize: '13px', color: '#3b82f6', textTransform: 'uppercase', fontWeight: '700' }}>🗄️ Database Architecture Schema</h5>
                <pre style={{ margin: 0, background: '#f8fafc', padding: '12px 16px', borderRadius: '12px', fontFamily: 'monospace', fontSize: '13px', color: '#334155', border: '1px solid #e2e8f0', whiteSpace: 'pre-wrap' }}>{activeModalProject.dbModel}</pre>
              </div>
              <div>
                <h5 style={{ margin: '0 0 6px 0', fontSize: '13px', color: '#0284c7', textTransform: 'uppercase', fontWeight: '700' }}>🔗 Core System REST API Endpoints</h5>
                <pre style={{ margin: 0, background: '#f8fafc', padding: '12px 16px', borderRadius: '12px', fontFamily: 'monospace', fontSize: '13px', color: '#334155', border: '1px solid #e2e8f0', whiteSpace: 'pre-wrap' }}>{activeModalProject.endpoints}</pre>
              </div>
              <div>
                <h5 style={{ margin: '0 0 6px 0', fontSize: '13px', color: '#b45309', textTransform: 'uppercase', fontWeight: '700' }}>📁 Target Directory Layout Tree</h5>
                <pre style={{ margin: 0, background: '#0f172a', padding: '14px 18px', borderRadius: '14px', fontFamily: 'monospace', fontSize: '13px', color: '#38bdf8', border: '1px solid #1e293b', overflowX: 'auto' }}>{activeModalProject.structure}</pre>
              </div>
            </div>

            <div style={{ padding: '16px 30px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={() => setActiveModalProject(null)} style={{ padding: '10px 20px', background: '#1e293b', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: '600', fontSize: '13px', cursor: 'pointer' }}>Acknowledge Spec Blueprint</button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default ProjectWorkspace;