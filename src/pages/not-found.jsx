import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      
      <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 text-center">
              <h1 className="display-1 fw-bold text-primary-custom">404</h1>
              <h2 className="mb-4">Page Not Found</h2>
              <p className="mb-4 text-muted">
                The page you are looking for might have been removed, had its name changed, 
                or is temporarily unavailable.
              </p>
              <Link to="/" className="btn btn-primary-custom px-4 py-2">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
