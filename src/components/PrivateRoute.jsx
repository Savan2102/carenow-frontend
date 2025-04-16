import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children, role }) => {
  const { isAuthenticated, currentUser } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Check if the user has the required role
  if (role && currentUser.role !== role) {
    // Redirect to the appropriate dashboard based on user role
    switch (currentUser.role) {
      case 'investor':
        return <Navigate to="/investor-dashboard" />;
      case 'startup':
        return <Navigate to="/startup-dashboard" />;
      case 'doctor':
        return <Navigate to="/doctor-dashboard" />;
      case 'patient':
        return <Navigate to="/patient-dashboard" />;
      case 'admin':
        return <Navigate to="/admin-dashboard" />;
      default:
        return <Navigate to="/" />;
    }
  }

  return children;
};

export default PrivateRoute;