import React from 'react';

const DashboardSidebar = ({ role, activePage, setActivePage }) => {
  // Define sidebar links based on user role
  const getSidebarLinks = () => {
    switch(role) {
      case 'investor':
        return [
          { id: 'overview', label: 'Overview', icon: 'bi-house-door' },
          { id: 'startups', label: 'Browse Startups', icon: 'bi-building' },
          { id: 'investment-opportunities', label: 'Investment Opportunities', icon: 'bi-graph-up-arrow' },
          { id: 'portfolio', label: 'My Portfolio', icon: 'bi-briefcase' },
          { id: 'messages', label: 'Messages', icon: 'bi-chat-dots' },
          { id: 'settings', label: 'Settings', icon: 'bi-gear' }
        ];
      case 'startup':
        return [
          { id: 'overview', label: 'Overview', icon: 'bi-house-door' },
          { id: 'investors', label: 'Investors', icon: 'bi-people' },
          { id: 'pitch-deck', label: 'Pitch Deck', icon: 'bi-file-earmark-slides' },
          { id: 'funding', label: 'Funding', icon: 'bi-cash-stack' },
          { id: 'metrics', label: 'Metrics', icon: 'bi-graph-up' },
          { id: 'messages', label: 'Messages', icon: 'bi-chat-dots' },
          { id: 'settings', label: 'Settings', icon: 'bi-gear' }
        ];
      case 'doctor':
        return [
          { id: 'overview', label: 'Overview', icon: 'bi-house-door' },
          { id: 'patients', label: 'Patients', icon: 'bi-people' },
          { id: 'appointments', label: 'Appointments', icon: 'bi-calendar2-check' },
          { id: 'medical-records', label: 'Medical Records', icon: 'bi-clipboard2-pulse' },
          { id: 'messages', label: 'Messages', icon: 'bi-chat-dots' },
          { id: 'settings', label: 'Settings', icon: 'bi-gear' }
        ];
      case 'patient':
        return [
          { id: 'overview', label: 'Overview', icon: 'bi-house-door' },
          { id: 'appointments', label: 'Appointments', icon: 'bi-calendar2-check' },
          { id: 'doctors', label: 'Find Doctors', icon: 'bi-hospital' },
          { id: 'records', label: 'Medical Records', icon: 'bi-clipboard2-pulse' },
          { id: 'messages', label: 'Messages', icon: 'bi-chat-dots' },
          { id: 'settings', label: 'Settings', icon: 'bi-gear' }
        ];
      case 'admin':
        return [
          { id: 'overview', label: 'Overview', icon: 'bi-house-door' },
          { id: 'users', label: 'User Management', icon: 'bi-people' },
          { id: 'approvals', label: 'Approvals', icon: 'bi-check2-square' },
          { id: 'analytics', label: 'Analytics', icon: 'bi-bar-chart' },
          { id: 'settings', label: 'Settings', icon: 'bi-gear' }
        ];
      default:
        return [];
    }
  };
  
  const sidebarLinks = getSidebarLinks();
  
  return (
    <div className="dashboard-sidebar bg-white border-end shadow-sm">
      <div className="sidebar-header p-3 border-bottom">
        <h2 className="h5 mb-0">CARENOW</h2>
      </div>
      <div className="sidebar-body p-0">
        <ul className="nav flex-column">
          {sidebarLinks.map(link => (
            <li key={link.id} className="nav-item">
              <a 
                href="#" 
                className={`nav-link py-3 px-4 d-flex align-items-center ${activePage === link.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActivePage(link.id);
                }}
              >
                <i className={`bi ${link.icon} me-3`}></i>
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar-footer p-3 border-top mt-auto">
        <div className="d-flex justify-content-between align-items-center">
          <a href="/" className="text-decoration-none text-muted">
            <i className="bi bi-box-arrow-left me-2"></i>
            <span>Logout</span>
          </a>
          <a href="/" className="text-decoration-none text-muted">
            <i className="bi bi-question-circle me-2"></i>
            <span>Help</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;