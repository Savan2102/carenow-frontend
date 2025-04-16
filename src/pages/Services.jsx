import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="display-4 fw-bold mb-3">Our Services</h1>
            <p className="lead text-muted mb-5">
              Innovative solutions for healthcare professionals, startups, and investors
            </p>
          </div>
        </div>

        <div className="row g-4">
          {/* For Doctors */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary-custom bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="fas fa-user-md text-primary-custom fs-4"></i>
                  </div>
                  <h3 className="h4 mb-0">For Doctors</h3>
                </div>
                <p className="text-muted">
                  Connect with patients, share knowledge with peers, and discover innovative medical startups to collaborate with.
                </p>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex align-items-center mb-2">
                    <i className="fas fa-check-circle text-primary-custom me-2"></i>
                    <span>Patient management</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="fas fa-check-circle text-primary-custom me-2"></i>
                    <span>Collaboration with peers</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="fas fa-check-circle text-primary-custom me-2"></i>
                    <span>Access to medical innovations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* For Patients */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary-custom bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="fas fa-hospital-user text-primary-custom fs-4"></i>
                  </div>
                  <h3 className="h4 mb-0">For Patients</h3>
                </div>
                <p className="text-muted">
                  Find qualified healthcare professionals, schedule appointments, and access innovative health solutions.
                </p>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex align-items-center mb-2">
                    <i className="fas fa-check-circle text-primary-custom me-2"></i>
                    <span>Doctor discovery</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="fas fa-check-circle text-primary-custom me-2"></i>
                    <span>Appointment scheduling</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="fas fa-check-circle text-primary-custom me-2"></i>
                    <span>Health tracking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* For Startups */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary-custom bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="fas fa-rocket text-primary-custom fs-4"></i>
                  </div>
                  <h3 className="h4 mb-0">For Startups</h3>
                </div>
                <p className="text-muted">
                  Showcase your innovations, connect with potential investors, and collaborate with healthcare professionals.
                </p>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex align-items-center mb-2">
                    <i className="fas fa-check-circle text-primary-custom me-2"></i>
                    <span>Investor matching</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="fas fa-check-circle text-primary-custom me-2"></i>
                    <span>Product showcasing</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="fas fa-check-circle text-primary-custom me-2"></i>
                    <span>Healthcare network access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* For Investors */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary-custom bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="fas fa-chart-line text-primary-custom fs-4"></i>
                  </div>
                  <h3 className="h4 mb-0">For Investors</h3>
                </div>
                <p className="text-muted">
                  Discover promising healthcare startups, analyze market trends, and make informed investment decisions.
                </p>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex align-items-center mb-2">
                    <i className="fas fa-check-circle text-primary-custom me-2"></i>
                    <span>Startup discovery</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="fas fa-check-circle text-primary-custom me-2"></i>
                    <span>Investment opportunities</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="fas fa-check-circle text-primary-custom me-2"></i>
                    <span>Performance tracking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mentorship */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary-custom bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="fas fa-graduation-cap text-primary-custom fs-4"></i>
                  </div>
                  <h3 className="h4 mb-0">Mentorship</h3>
                </div>
                <p className="text-muted">
                  Access expertise from industry leaders, experienced healthcare professionals, and successful entrepreneurs.
                </p>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex align-items-center mb-2">
                    <i className="fas fa-check-circle text-primary-custom me-2"></i>
                    <span>Expert guidance</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="fas fa-check-circle text-primary-custom me-2"></i>
                    <span>Regular consultations</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="fas fa-check-circle text-primary-custom me-2"></i>
                    <span>Growth strategies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Events & Networking */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary-custom bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="fas fa-handshake text-primary-custom fs-4"></i>
                  </div>
                  <h3 className="h4 mb-0">Events & Networking</h3>
                </div>
                <p className="text-muted">
                  Participate in virtual and in-person events to expand your network and discover new opportunities.
                </p>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex align-items-center mb-2">
                    <i className="fas fa-check-circle text-primary-custom me-2"></i>
                    <span>Industry conferences</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="fas fa-check-circle text-primary-custom me-2"></i>
                    <span>Networking meetups</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="fas fa-check-circle text-primary-custom me-2"></i>
                    <span>Pitch competitions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="bg-light rounded-4 p-5 text-center">
              <h2 className="fw-bold mb-3">Ready to get started?</h2>
              <p className="lead mb-4">
                Join our growing community of healthcare professionals, startups, and investors today.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <a href="/signup" className="btn btn-primary-custom btn-lg">
                  Sign Up Now
                </a>
                <a href="/about" className="btn btn-outline-secondary btn-lg">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;