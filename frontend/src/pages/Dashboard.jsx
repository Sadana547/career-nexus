import { useContext, useState } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { roadmapData } from '../data/roadmapData';

// Import sub-pages directly from your src/dashboard folder structure
import SelectCareer from '../dashboard/SelectCareer';
import SkillAnalysis from '../dashboard/SkillAnalysis';
import LearningRoadmap from '../dashboard/LearningRoadmap';
import ProjectWorkspace from '../dashboard/ProjectWorkspace';
import ResourceCenter from '../dashboard/ResourceCenter';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  
  const [selectedTrack, setSelectedTrack] = useState('');
  const [completedSteps, setCompletedSteps] = useState({});

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: '"Inter", sans-serif' }}>
        <h2 style={{ color: '#ef4444' }}>Access Denied 🛑</h2>
        <p style={{ color: '#64748b', marginBottom: '20px' }}>Please sign in to access your Career Nexus workspace.</p>
        <button onClick={() => navigate('/login')} style={{ padding: '10px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
          Go to Login
        </button>
      </div>
    );
  }

  const currentRoadmap = roadmapData[selectedTrack];

  // Global Progress State Calculations
  const totalSteps = currentRoadmap?.steps?.length || 0;
  const completedCount = currentRoadmap?.steps?.filter((_, idx) => completedSteps[`${selectedTrack}-${idx}`]).length || 0;
  const progressPercentage = totalSteps > 0 ? Math.round((completedCount / totalSteps) * 100) : 0;

  const toggleStep = (index) => {
    const key = `${selectedTrack}-${index}`;
    setCompletedSteps(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Modern Sidebar Styling Generator with smooth transitions
  const getSidebarStyle = (path) => {
    const isActive = location.pathname === path;
    return {
      background: isActive ? 'linear-gradient(135deg, #1e293b, #0f172a)' : 'transparent',
      color: isActive ? '#3b82f6' : '#94a3b8',
      padding: '12px 16px',
      borderRadius: '10px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      textDecoration: 'none',
      borderLeft: isActive ? '4px solid #3b82f6' : '4px solid transparent',
      transform: isActive ? 'translateX(4px)' : 'none',
      boxShadow: isActive ? '0 10px 15px -3px rgba(0,0,0,0.3)' : 'none',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    };
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc', fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
      
      {/* 🧭 Premium Left Sidebar Navigation */}
      <div style={{ width: '280px', background: '#0f172a', color: '#fff', padding: '30px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'sticky', top: 0, height: '100vh', boxSizing: 'border-box', boxShadow: '4px 0 25px rgba(0,0,0,0.05)' }}>
        <div>
          {/* Brand Logo Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
            <div style={{ background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '18px', boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)' }}>C</div>
            <span style={{ fontSize: '20px', fontWeight: '800', letterSpacing: '-0.5px', background: 'linear-gradient(180deg, #ffffff, #cbd5e1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Career Nexus</span>
          </div>
          
          {/* Sub-page Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Link to="/dashboard" style={getSidebarStyle('/dashboard')}>
              <span style={{ fontSize: '18px' }}>🎯</span> Select Career
            </Link>
            <Link to="/dashboard/skills" style={getSidebarStyle('/dashboard/skills')}>
              <span style={{ fontSize: '18px' }}>📊</span> Skill Analysis
            </Link>
            <Link to="/dashboard/roadmap" style={getSidebarStyle('/dashboard/roadmap')}>
              <span style={{ fontSize: '18px' }}>🚀</span> Learning Roadmap
            </Link>
            <Link to="/dashboard/projects" style={getSidebarStyle('/dashboard/projects')}>
              <span style={{ fontSize: '18px' }}>🛠️</span> Project Workspace
            </Link>
            <Link to="/dashboard/resources" style={getSidebarStyle('/dashboard/resources')}>
              <span style={{ fontSize: '18px' }}>📚</span> Resource Center
            </Link>
          </div>
        </div>

        {/* User Account Context Footer */}
        <div style={{ borderTop: '1px solid #1e293b', paddingTop: '20px' }}>
          <div style={{ marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#f8fafc' }}>{user?.name}</span>
            <span style={{ fontSize: '12px', color: '#64748b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user?.email}</span>
          </div>
          <button 
            onClick={handleLogout} 
            style={{ width: '100%', padding: '12px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: '600', fontSize: '14px', transition: 'background 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            onMouseEnter={(e) => e.target.style.background = '#dc2626'}
            onMouseLeave={(e) => e.target.style.background = '#ef4444'}
          >
            <span>🚪</span> Sign Out
          </button>
        </div>
      </div>

      {/* 💻 Dynamic Content Viewport Window */}
      <div style={{ flex: 1, padding: '40px', overflowY: 'auto', boxSizing: 'border-box' }}>
        <Routes>
          {/* Default view handles Track choosing & global metric bar mapping */}
          <Route 
            path="/" 
            element={
              <SelectCareer 
                roadmaps={roadmapData} 
                selectedTrack={selectedTrack} 
                handleTrackChange={setSelectedTrack} 
                progress={progressPercentage} 
              />
            } 
          />
          
          {/* Linked sub-views mapping state parameters */}
          <Route path="skills" element={<SkillAnalysis currentRoadmap={currentRoadmap} />} />
          <Route path="roadmap" element={<LearningRoadmap currentRoadmap={currentRoadmap} selectedTrack={selectedTrack} completedSteps={completedSteps} toggleStep={toggleStep} />} />
          <Route path="projects" element={<ProjectWorkspace currentRoadmap={currentRoadmap} />} />
          <Route path="resources" element={<ResourceCenter currentRoadmap={currentRoadmap} />} />
        </Routes>
      </div>

    </div>
  );
};

export default Dashboard;