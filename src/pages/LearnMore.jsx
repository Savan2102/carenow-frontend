import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LearnMore = () => {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        {/* Hero Section */}
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="display-4 fw-bold mb-4">About CARENOW</h1>
            <p className="lead text-muted mb-4">
              Connecting healthcare innovation with investment and expertise to improve patient outcomes worldwide.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-primary-custom px-4 py-2">Get Started</button>
              <button className="btn btn-outline-primary px-4 py-2">Contact Us</button>
            </div>
          </div>
        </div>
        
        {/* Mission Section */}
        <div className="row mb-5 py-4">
          <div className="col-lg-10 mx-auto">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-5">
                <h2 className="h3 fw-bold mb-4">Our Mission</h2>
                <p className="text-muted mb-4">
                  CARENOW was founded with a single mission: to accelerate healthcare innovation by connecting the key players in the healthcare ecosystem. We believe that transformative healthcare solutions often fail to reach their potential due to disconnects between innovators, investors, and medical professionals.
                </p>
                <p className="text-muted mb-0">
                  Our platform bridges these gaps by creating a collaborative environment where healthcare startups can access capital and clinical expertise, investors can discover and support promising innovations, and medical professionals can provide valuable input and adopt new technologies that improve patient care.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Key Features Section */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-5">
            <h2 className="fw-bold">Key Platform Features</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
              CARENOW offers a comprehensive set of tools and services designed to facilitate meaningful connections and collaborations in healthcare innovation.
            </p>
          </div>
          
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 border-0 shadow-sm text-center p-4">
              <div className="text-primary mb-3">
                <i className="bi bi-search fs-1"></i>
              </div>
              <h5 className="card-title fw-bold">Smart Matching</h5>
              <p className="card-text text-muted small">
                Our AI-powered matching algorithm connects startups with relevant investors and healthcare providers based on specialization, investment criteria, and clinical needs.
              </p>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 border-0 shadow-sm text-center p-4">
              <div className="text-primary mb-3">
                <i className="bi bi-shield-check fs-1"></i>
              </div>
              <h5 className="card-title fw-bold">Secure Data Rooms</h5>
              <p className="card-text text-muted small">
                HIPAA-compliant virtual data rooms allow startups to securely share sensitive information with potential investors and clinical partners.
              </p>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 border-0 shadow-sm text-center p-4">
              <div className="text-primary mb-3">
                <i className="bi bi-chat-dots fs-1"></i>
              </div>
              <h5 className="card-title fw-bold">Expert Consultations</h5>
              <p className="card-text text-muted small">
                Startups can schedule virtual consultations with doctors and healthcare specialists to gain clinical insights and validate their solutions.
              </p>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 border-0 shadow-sm text-center p-4">
              <div className="text-primary mb-3">
                <i className="bi bi-graph-up fs-1"></i>
              </div>
              <h5 className="card-title fw-bold">Investment Tracking</h5>
              <p className="card-text text-muted small">
                Comprehensive dashboard for investors to track portfolio performance, milestone achievements, and return on investment metrics.
              </p>
            </div>
          </div>
        </div>
        
        {/* How It Works Section */}
        <div className="row mb-5 py-5 bg-light rounded-3">
          <div className="col-12 text-center mb-5">
            <h2 className="fw-bold">How CARENOW Works</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Our platform provides tailored experiences for each user type in the healthcare innovation ecosystem.
            </p>
          </div>
          
          <div className="col-lg-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary text-white rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <span className="fw-bold">1</span>
                  </div>
                  <h5 className="card-title fw-bold mb-0">For Startups</h5>
                </div>
                <ul className="text-muted">
                  <li className="mb-2">Create a comprehensive profile highlighting your innovation, team, and funding needs</li>
                  <li className="mb-2">Access a network of healthcare-focused investors and clinical advisors</li>
                  <li className="mb-2">Receive expert feedback on your product from practicing healthcare professionals</li>
                  <li className="mb-2">Secure investment and establish clinical partnerships for validation studies</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary text-white rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <span className="fw-bold">2</span>
                  </div>
                  <h5 className="card-title fw-bold mb-0">For Investors</h5>
                </div>
                <ul className="text-muted">
                  <li className="mb-2">Discover promising healthcare startups filtered by investment criteria and focus areas</li>
                  <li className="mb-2">Perform due diligence with access to secure data rooms and clinical assessment reports</li>
                  <li className="mb-2">Connect with other investors for syndication opportunities</li>
                  <li className="mb-2">Track portfolio performance with detailed analytics and milestone reports</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary text-white rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <span className="fw-bold">3</span>
                  </div>
                  <h5 className="card-title fw-bold mb-0">For Medical Professionals</h5>
                </div>
                <ul className="text-muted">
                  <li className="mb-2">Discover cutting-edge healthcare technologies relevant to your specialty</li>
                  <li className="mb-2">Provide expert feedback and consulting to startups developing innovative solutions</li>
                  <li className="mb-2">Participate in early validation studies and clinical trials</li>
                  <li className="mb-2">Explore investment opportunities in healthcare startups with clinical expertise advantages</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-5">
            <h2 className="fw-bold">Our Leadership Team</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
              CARENOW was founded by a team of experienced healthcare professionals, technologists, and investors dedicated to transforming healthcare innovation.
            </p>
          </div>
          
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card border-0 shadow-sm text-center">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300" className="card-img-top" alt="CEO" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title fw-bold mb-1">Dr. James Wilson</h5>
                <p className="text-primary small mb-2">CEO & Co-Founder</p>
                <p className="card-text text-muted small">
                  Former cardiothoracic surgeon with 15+ years of clinical experience and serial healthcare entrepreneur.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card border-0 shadow-sm text-center">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300" className="card-img-top" alt="CTO" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title fw-bold mb-1">Sarah Chen</h5>
                <p className="text-primary small mb-2">CTO & Co-Founder</p>
                <p className="card-text text-muted small">
                  AI/ML expert with previous experience at leading health tech companies and multiple patents in healthcare technology.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card border-0 shadow-sm text-center">
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300" className="card-img-top" alt="CFO" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title fw-bold mb-1">Michael Rodriguez</h5>
                <p className="text-primary small mb-2">CFO</p>
                <p className="card-text text-muted small">
                  Former venture capital partner specialized in healthcare investments with over $500M in deployed capital.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card border-0 shadow-sm text-center">
              <img src="https://images.unsplash.com/photo-1573497019236-61e1a8b00b99?auto=format&fit=crop&q=80&w=300&h=300" className="card-img-top" alt="CMO" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title fw-bold mb-1">Dr. Aisha Patel</h5>
                <p className="text-primary small mb-2">Chief Medical Officer</p>
                <p className="card-text text-muted small">
                  Board-certified internist and digital health researcher with publications in leading medical journals.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="row py-5">
          <div className="col-lg-10 mx-auto text-center">
            <div className="card border-0 bg-primary text-white p-5 rounded-3">
              <h2 className="fw-bold mb-3">Ready to Transform Healthcare?</h2>
              <p className="mb-4 mx-auto" style={{ maxWidth: '700px' }}>
                Join DocCircle today and become part of the healthcare innovation ecosystem that's shaping the future of medicine.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-light px-4 py-2 text-primary">Create Account</button>
                <button className="btn btn-outline-light px-4 py-2">Schedule a Demo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LearnMore;