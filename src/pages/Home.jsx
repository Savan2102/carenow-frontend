import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Welcome from '../components/Welcome';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { currentUser } = useAuth();
  const [showWelcome, setShowWelcome] = useState(false);
  
  // Check if user is new (logged in less than 7 days ago)
  // or hasn't dismissed the welcome message yet
  useEffect(() => {
    if (currentUser) {
      const welcomeDismissed = localStorage.getItem('welcomeDismissed');
      
      // Show welcome component for new users or if they haven't dismissed it
      if (!welcomeDismissed) {
        setShowWelcome(true);
      }
    }
  }, [currentUser]);
  
  const handleDismissWelcome = () => {
    setShowWelcome(false);
    localStorage.setItem('welcomeDismissed', 'true');
  };
  
  return (
    <>
      <Navbar />
      
      {/* Welcome Component for logged in users */}
      {currentUser && showWelcome && (
        <div className="container my-4">
          <Welcome user={currentUser} onDismiss={handleDismissWelcome} />
        </div>
      )}
      
      {/* Hero Section */}
      <div className="hero-gradient py-5 pt-md-5">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-4 fw-bold mb-3">
                <span className="d-block text-dark">Connect with the</span>
                <span className="d-block text-primary-custom">Healthcare Ecosystem</span>
              </h1>
              <p className="lead text-muted mb-5">
                CARENOW brings together healthcare professionals, startups, and investors in one seamless platform. 
                Build meaningful connections, discover investment opportunities, and transform healthcare together.
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">
                <Link to="/signup" className="btn btn-primary-custom btn-lg px-4 py-3">
                  Get Started
                </Link>
                <Link to="#" className="btn btn-outline-primary-custom btn-lg px-4 py-3">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bg-white rounded-4 shadow-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070" 
                  alt="Healthcare professionals collaborating" 
                  className="img-fluid w-100 h-100 object-fit-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-5 bg-white">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">
              Connecting Healthcare Stakeholders
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              CARENOW provides specialized tools for each role in the healthcare ecosystem
            </p>
          </div>
          
          <div className="row g-4">
            {/* Feature Card - Doctors */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm hover-scale">
                <div className="card-body p-4 text-center">
                  <div className="d-inline-flex align-items-center justify-content-center bg-primary-custom text-white rounded-circle p-3 mb-4">
                    <i className="fas fa-user-md fs-4"></i>
                  </div>
                  <h3 className="card-title h5 fw-bold">For Doctors</h3>
                  <p className="card-text text-muted">
                    Connect with patients, collaborate with startups on innovative health solutions, 
                    and expand your professional network.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Feature Card - Investors */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm hover-scale">
                <div className="card-body p-4 text-center">
                  <div className="d-inline-flex align-items-center justify-content-center bg-secondary-custom text-white rounded-circle p-3 mb-4">
                    <i className="fas fa-chart-line fs-4"></i>
                  </div>
                  <h3 className="card-title h5 fw-bold">For Investors</h3>
                  <p className="card-text text-muted">
                    Discover promising healthcare startups, analyze investment opportunities, 
                    and fund the future of healthcare innovation.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Feature Card - Startups */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm hover-scale">
                <div className="card-body p-4 text-center">
                  <div className="d-inline-flex align-items-center justify-content-center bg-accent-custom text-white rounded-circle p-3 mb-4">
                    <i className="fas fa-rocket fs-4"></i>
                  </div>
                  <h3 className="card-title h5 fw-bold">For Startups</h3>
                  <p className="card-text text-muted">
                    Connect with investors, collaborate with healthcare professionals, 
                    and accelerate your growth in the healthcare market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-primary-custom py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h2 className="display-5 fw-bold text-white mb-2">
                Ready to dive in?
              </h2>
              <p className="lead text-white-50">
                Join CARENOW today.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-end">
                <Link to="/signup" className="btn btn-light fw-medium px-4 py-3">
                  Sign up
                </Link>
                <Link to="#" className="btn btn-outline-light px-4 py-3">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Home;
