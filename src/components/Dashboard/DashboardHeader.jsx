import React from 'react';

const DashboardHeader = ({ user, pageTitle }) => {
  return (
    <div className="dashboard-header p-3 bg-white border-bottom shadow-sm">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="h4 mb-0">{pageTitle}</h1>
        <div className="d-flex align-items-center">
          <div className="dropdown me-3">
            <button 
              className="btn btn-sm btn-outline-secondary dropdown-toggle"
              type="button" 
              id="notificationsDropdown" 
              data-bs-toggle="dropdown" 
              aria-expanded="false"
            >
              <i className="bi bi-bell me-1"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3+
              </span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="notificationsDropdown">
              <li>
                <h6 className="dropdown-header">Notifications</h6>
              </li>
              <li>
                <a className="dropdown-item d-flex align-items-center py-2" href="#">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-2 me-3">
                    <i className="bi bi-envelope text-primary"></i>
                  </div>
                  <div>
                    <p className="mb-0 small">You have a new message</p>
                    <small className="text-muted">5 minutes ago</small>
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item d-flex align-items-center py-2" href="#">
                  <div className="rounded-circle bg-success bg-opacity-10 p-2 me-3">
                    <i className="bi bi-calendar-check text-success"></i>
                  </div>
                  <div>
                    <p className="mb-0 small">Upcoming appointment reminder</p>
                    <small className="text-muted">Tomorrow, 10:30 AM</small>
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item d-flex align-items-center py-2" href="#">
                  <div className="rounded-circle bg-info bg-opacity-10 p-2 me-3">
                    <i className="bi bi-info-circle text-info"></i>
                  </div>
                  <div>
                    <p className="mb-0 small">System update completed</p>
                    <small className="text-muted">1 hour ago</small>
                  </div>
                </a>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <a className="dropdown-item text-center" href="#">
                  View all notifications
                </a>
              </li>
            </ul>
          </div>
          
          <div className="dropdown">
            <button 
              className="btn dropdown-toggle d-flex align-items-center p-0"
              type="button" 
              id="userDropdown" 
              data-bs-toggle="dropdown" 
              aria-expanded="false"
            >
              <img 
                src={user.profileImage} 
                alt={user.name} 
                className="rounded-circle me-2"
                width="40"
                height="40"
              />
              <div className="d-none d-sm-block text-start">
                <h6 className="mb-0">{user.name}</h6>
                <small className="text-muted">{user.role.charAt(0).toUpperCase() + user.role.slice(1)}</small>
              </div>
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-person me-2"></i>
                  My Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-gear me-2"></i>
                  Settings
                </a>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-box-arrow-right me-2"></i>
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;