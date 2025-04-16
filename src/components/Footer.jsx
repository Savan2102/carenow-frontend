import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-4 mt-auto" style={{backgroundColor: '#e0e0e0'}}>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <Link to="/" className="d-flex align-items-center text-decoration-none mb-3">
              <i className="fas fa-circle-nodes fa-lg me-2 text-primary-custom"></i>
              <span className="fw-bold fs-4 text-dark">CARENOW</span>
            </Link>
            <p className="text-muted">
              Connecting healthcare professionals, startups, and investors to 
              drive innovation and improve patient outcomes.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-muted fs-5" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-muted fs-5" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-muted fs-5" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-muted fs-5" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="col-sm-6 col-lg-2 mb-4 mb-lg-0">
            <h6 className="fw-bold mb-3">Platform</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link to="/about" className="text-decoration-none text-muted">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-decoration-none text-muted">Services</Link>
              </li>
              <li className="mb-2">
                <Link to="/blog" className="text-decoration-none text-muted">Blog</Link>
              </li>
              <li className="mb-2">
                <Link to="/learn-more" className="text-decoration-none text-muted">Learn More</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-sm-6 col-lg-2 mb-4 mb-lg-0">
            <h6 className="fw-bold mb-3">Resources</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link to="/case-studies" className="text-decoration-none text-muted">Case Studies</Link>
              </li>
              <li className="mb-2">
                <Link to="/faq" className="text-decoration-none text-muted">FAQ</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-4">
            <h6 className="fw-bold mb-3">Subscribe to our newsletter</h6>
            <p className="text-muted mb-3">
              Get the latest updates and healthcare innovations straight to your inbox.
            </p>
            <div className="input-group mb-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Your email address" 
                aria-label="Email address" 
              />
              <button className="btn btn-primary-custom" type="button">
                Subscribe
              </button>
            </div>
            <p className="text-muted small">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>
        </div>
        
        <hr className="my-4 opacity-25" />
        
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="text-muted mb-0">
              &copy; {currentYear} CARENOW. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <Link to="/terms" className="text-decoration-none text-muted small">Terms of Service</Link>
              </li>
              <li className="list-inline-item ms-3">
                <Link to="/privacy" className="text-decoration-none text-muted small">Privacy Policy</Link>
              </li>
              <li className="list-inline-item ms-3">
                <Link to="/cookies" className="text-decoration-none text-muted small">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;