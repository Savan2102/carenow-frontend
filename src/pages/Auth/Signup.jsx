import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [terms, setTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Password validation
    if (password.length < 6) {
      return setError('Password must be at least 6 characters long');
    }

    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    if (!terms) {
      return setError('You must accept the terms and conditions');
    }

    setLoading(true);

    try {
      const userData = {
        fullName,
        email,
        password,
        confirmPassword,
        role,
        terms
      };
      
      const user = await signup(userData);
      
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
      <div className="signup-page">
        <div className="container">
          <div className="row justify-content-center align-items-center min-vh-75">
            <div className="col-md-6 p-4">
              <div className="card shadow-lg border-0">
                <div className="card-body p-5">
                  <h2 className="text-center mb-4 fw-bold text-primary">Create an Account</h2>
                  {error && <div className="alert alert-danger">{error}</div>}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                    </div>
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
                      <small className="form-text text-muted">Password must be at least 6 characters long</small>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="role" className="form-label">I am a:</label>
                      <select
                        className="form-select"
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                      >
                        <option value="" disabled>Select your role</option>
                        <option value="investor">Investor</option>
                        <option value="startup">Startup Founder</option>
                        <option value="doctor">Medical Professional</option>
                        <option value="patient">Patient</option>
                      </select>
                    </div>
                    <div className="mb-4 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="terms"
                        checked={terms}
                        onChange={(e) => setTerms(e.target.checked)}
                        required
                      />
                      <label className="form-check-label" htmlFor="terms">
                        I agree to the <Link to="#" className="text-decoration-none">Terms and Conditions</Link>
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg w-100"
                      disabled={loading}
                    >
                      {loading ? 'Creating Account...' : 'Sign Up'}
                    </button>
                  </form>
                  <div className="text-center mt-4">
                    <p>Already have an account? <Link to="/login" className="text-decoration-none">Log in</Link></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-block">
              <div className="p-5 text-white rounded" style={{ background: 'linear-gradient(135deg, #4A00E0, #8E2DE2)' }}>
                <h2 className="display-4 fw-bold mb-4">Join CARENOW</h2>
                <p className="lead mb-4">Create an account to connect with the healthcare innovation ecosystem:</p>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Investors: Discover promising health tech startups
                  </li>
                  <li className="mb-3">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Startups: Connect with potential investors and partners
                  </li>
                  <li className="mb-3">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Medical Professionals: Offer consultations and explore innovations
                  </li>
                  <li className="mb-3">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Patients: Get access to specialized medical care
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

export default Signup;