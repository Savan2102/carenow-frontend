import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const user = await login(email, password);
      // Redirect to the appropriate dashboard based on user role
      switch (user.role) {
        case 'investor':
          navigate('/investor-dashboard');
          break;
        case 'startup':
          navigate('/startup-dashboard');
          break;
        case 'doctor':
          navigate('/doctor-dashboard');
          break;
        case 'patient':
          navigate('/patient-dashboard');
          break;
        case 'admin':
          navigate('/admin-dashboard');
          break;
        default:
          navigate('/');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-page">
        <div className="container">
          <div className="row justify-content-center align-items-center min-vh-75">
            <div className="col-md-6 p-4">
              <div className="card shadow-lg border-0">
                <div className="card-body p-5">
                  <h2 className="text-center mb-4 fw-bold text-primary">Welcome Back</h2>
                  {error && <div className="alert alert-danger">{error}</div>}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="rememberMe"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                      </div>
                      <Link to="/forgot-password" className="text-decoration-none">Forgot password?</Link>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg w-100"
                      disabled={loading}
                    >
                      {loading ? 'Logging in...' : 'Log In'}
                    </button>
                  </form>
                  <div className="text-center mt-4">
                    <p>Don't have an account? <Link to="/signup" className="text-decoration-none">Sign up</Link></p>
                  </div>
                  <div className="mt-4">
                    <div className="alert alert-info" role="alert">
                      <h5 className="alert-heading">Demo Accounts</h5>
                      <p className="mb-0">Use these credentials to test different user dashboards:</p>
                      <ul className="mt-2 mb-0">
                        <li>Investor: investor@example.com / password</li>
                        <li>Startup: startup@example.com / password</li>
                        <li>Doctor: doctor@example.com / password</li>
                        <li>Patient: patient@example.com / password</li>
                        <li>Admin: admin@example.com / password</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-block">
              <div className="p-5 text-white rounded" style={{ background: 'linear-gradient(135deg, #4A00E0, #8E2DE2)' }}>
                <h2 className="display-4 fw-bold mb-4">CARENOW</h2>
                <p className="lead mb-4">Connect with health tech startups, investors, and medical professionals all in one platform.</p>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Discover innovative healthcare startups
                  </li>
                  <li className="mb-3">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Connect with potential investors
                  </li>
                  <li className="mb-3">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Consult with medical professionals
                  </li>
                  <li className="mb-3">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Secure communication and data privacy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;