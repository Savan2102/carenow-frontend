import { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is already logged in on component mount
  useEffect(() => {
    // In a real app, this would check with the backend
    // For now, we'll just check localStorage
    const user = localStorage.getItem('user');
    if (user) {
      setCurrentUser(JSON.parse(user));
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  // Login function
  const login = (email, password) => {
    // This would be an API call in a real application
    // For now, we'll simulate a login with dummy users
    const dummyUsers = [
      { id: 1, email: 'investor@example.com', password: 'password', name: 'John Investor', role: 'investor' },
      { id: 2, email: 'startup@example.com', password: 'password', name: 'Jane Startup', role: 'startup' },
      { id: 3, email: 'doctor@example.com', password: 'password', name: 'Dr. Smith', role: 'doctor' },
      { id: 4, email: 'patient@example.com', password: 'password', name: 'Patient User', role: 'patient' },
      { id: 5, email: 'admin@example.com', password: 'password', name: 'Admin User', role: 'admin' },
    ];

    return new Promise((resolve, reject) => {
      const user = dummyUsers.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        // Remove password from the user object
        const { password, ...secureUser } = user;
        setCurrentUser(secureUser);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(secureUser));
        toast.success('Logged in successfully!');
        resolve(secureUser);
      } else {
        toast.error('Invalid email or password');
        reject(new Error('Invalid email or password'));
      }
    });
  };

  // Signup function
  const signup = (userData) => {
    // This would be an API call in a real application
    return new Promise((resolve) => {
      // Simulate API delay
      setTimeout(() => {
        const newUser = {
          id: Date.now(),
          name: userData.fullName,
          email: userData.email,
          role: userData.role,
        };
        
        setCurrentUser(newUser);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(newUser));
        toast.success('Account created successfully!');
        resolve(newUser);
      }, 1000);
    });
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    toast.info('Logged out successfully');
  };

  // Forgot password function
  const forgotPassword = (email) => {
    // This would be an API call in a real application
    return new Promise((resolve) => {
      // Simulate API delay
      setTimeout(() => {
        toast.info(`Password reset link sent to ${email}`);
        resolve(true);
      }, 1000);
    });
  };

  // Reset password function
  const resetPassword = (code, newPassword) => {
    // This would be an API call in a real application
    return new Promise((resolve) => {
      // Simulate API delay
      setTimeout(() => {
        toast.success('Password reset successfully');
        resolve(true);
      }, 1000);
    });
  };

  const value = {
    currentUser,
    isAuthenticated,
    loading,
    login,
    signup,
    logout,
    forgotPassword,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};