import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  // Don't show navbar on dashboard pages
  if (location.pathname.includes('dashboard')) {
    return null;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm sticky-top" style={{backgroundColor: '#f0f0f0'}}>
      <div className="container">
        <Link className="navbar-brand text-primary-custom fw-bold fs-4" to="/">
          CARENOW
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
          aria-controls="navbarNav" 
          aria-expanded={!isNavCollapsed} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/' ? 'fw-medium border-bottom border-primary-custom text-dark' : 'text-secondary'}`} 
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/about' ? 'fw-medium border-bottom border-primary-custom text-dark' : 'text-secondary'}`} 
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/services' ? 'fw-medium border-bottom border-primary-custom text-dark' : 'text-secondary'}`} 
                to="/services"
              >
                Services
              </Link>
            </li>
          </ul>
          
          <div className="d-flex gap-2">
            {isAuthenticated ? (
              <div className="dropdown">
                <button 
                  className="btn btn-transparent dropdown-toggle d-flex align-items-center gap-2" 
                  type="button" 
                  id="userDropdown" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  <img 
                    src={user?.profileImage || `https://ui-avatars.com/api/?name=${user?.name}`} 
                    alt={user?.name} 
                    className="rounded-circle"
                    width="32"
                    height="32"
                  />
                  <span>{user?.name}</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                  <li>
                    <Link 
                      className="dropdown-item" 
                      to={`/${user?.role}-dashboard`}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button 
                      className="dropdown-item text-danger" 
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <Link to="/login" className="btn text-dark">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-primary-custom">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
