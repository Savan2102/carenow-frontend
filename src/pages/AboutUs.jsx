import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-primary-custom text-white py-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="display-4 fw-bold mb-4">About CARENOW</h1>
              <p className="lead mb-4">
                Connecting healthcare professionals, startups, and investors to drive innovation 
                and transform the future of healthcare.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Mission */}
      <div className="py-5 bg-white">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">Our Mission</h2>
              <p className="lead mb-4">
                CARENOW aims to bridge the gap between healthcare professionals, innovative startups, 
                and investors to create a thriving ecosystem that advances medical care and improves patient outcomes.
              </p>
              <p className="text-muted">
                We believe that by connecting these key stakeholders, we can accelerate the development and adoption 
                of groundbreaking healthcare solutions, making quality healthcare more accessible and effective for everyone.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="bg-light rounded-4 p-4 shadow-sm">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3 text-primary-custom">
                        <i className="fas fa-heartbeat fa-2x"></i>
                      </div>
                      <h5 className="mb-0">Better Care</h5>
                    </div>
                    <p className="text-muted small">
                      Enabling healthcare professionals to deliver improved patient care through innovative solutions.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3 text-secondary-custom">
                        <i className="fas fa-flask fa-2x"></i>
                      </div>
                      <h5 className="mb-0">Innovation</h5>
                    </div>
                    <p className="text-muted small">
                      Accelerating the development of groundbreaking healthcare technologies and approaches.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3 text-accent-custom">
                        <i className="fas fa-handshake fa-2x"></i>
                      </div>
                      <h5 className="mb-0">Collaboration</h5>
                    </div>
                    <p className="text-muted small">
                      Fostering meaningful partnerships between all stakeholders in the healthcare ecosystem.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3 text-success-custom">
                        <i className="fas fa-chart-line fa-2x"></i>
                      </div>
                      <h5 className="mb-0">Growth</h5>
                    </div>
                    <p className="text-muted small">
                      Supporting the sustainable growth of healthcare startups through smart investments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <div className="py-5 bg-light">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-4">Our Story</h2>
              <p className="mb-5 lead">
                CARENOW was founded by a team of healthcare professionals, tech entrepreneurs, 
                and investors who saw the need for better collaboration in the healthcare industry.
              </p>
            </div>
          </div>
          
          <div className="row g-4 mt-3">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <div className="rounded-circle bg-primary-custom text-white d-inline-flex p-3 mb-3">
                      <i className="fas fa-lightbulb fa-2x"></i>
                    </div>
                    <h3 className="h5 fw-bold">The Idea</h3>
                  </div>
                  <p className="text-muted">
                    In 2020, our founders recognized that while healthcare innovation was booming, 
                    there was a significant disconnect between doctors, startups, and investors, 
                    slowing the adoption of life-changing technologies.
                  </p>
                </div>
                <div className="card-footer bg-white text-center border-0 py-3">
                  <span className="text-muted small">2020</span>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <div className="rounded-circle bg-secondary-custom text-white d-inline-flex p-3 mb-3">
                      <i className="fas fa-code fa-2x"></i>
                    </div>
                    <h3 className="h5 fw-bold">Development</h3>
                  </div>
                  <p className="text-muted">
                    We assembled a team of healthcare experts and developers to create a platform 
                    that would bridge this gap and create meaningful connections between all 
                    stakeholders in the healthcare ecosystem.
                  </p>
                </div>
                <div className="card-footer bg-white text-center border-0 py-3">
                  <span className="text-muted small">2022</span>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <div className="rounded-circle bg-accent-custom text-white d-inline-flex p-3 mb-3">
                      <i className="fas fa-rocket fa-2x"></i>
                    </div>
                    <h3 className="h5 fw-bold">Launch</h3>
                  </div>
                  <p className="text-muted">
                    In 2025, CARENOW was launched, providing a comprehensive platform where 
                    doctors, startups, and investors could connect, collaborate, and drive 
                    healthcare innovation forward together.
                  </p>
                </div>
                <div className="card-footer bg-white text-center border-0 py-3">
                  <span className="text-muted small">2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="py-5 bg-white">
        <div className="container py-5">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-4">Our Leadership Team</h2>
              <p className="lead">
                Meet the passionate individuals driving our mission to transform healthcare through collaboration.
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm hover-scale">
                <div className="card-body p-4 text-center">
                  <div className="d-inline-block mb-3">
                    <div className="avatar avatar-lg bg-primary-custom">JD</div>
                  </div>
                  <h3 className="h5 fw-bold mb-1">Dr. Jane Doe</h3>
                  <p className="text-muted mb-3">CEO & Co-Founder</p>
                  <p className="text-muted small">
                    Former Chief of Medicine with 15+ years of experience in healthcare innovation.
                  </p>
                  <div className="d-flex justify-content-center gap-2 mt-3">
                    <a href="#" className="text-muted"><i className="fab fa-linkedin"></i></a>
                    <a href="#" className="text-muted"><i className="fab fa-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm hover-scale">
                <div className="card-body p-4 text-center">
                  <div className="d-inline-block mb-3">
                    <div className="avatar avatar-lg bg-secondary-custom">MS</div>
                  </div>
                  <h3 className="h5 fw-bold mb-1">Mark Smith</h3>
                  <p className="text-muted mb-3">CTO & Co-Founder</p>
                  <p className="text-muted small">
                    Tech entrepreneur with multiple successful healthcare startup exits.
                  </p>
                  <div className="d-flex justify-content-center gap-2 mt-3">
                    <a href="#" className="text-muted"><i className="fab fa-linkedin"></i></a>
                    <a href="#" className="text-muted"><i className="fab fa-github"></i></a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm hover-scale">
                <div className="card-body p-4 text-center">
                  <div className="d-inline-block mb-3">
                    <div className="avatar avatar-lg bg-accent-custom">AJ</div>
                  </div>
                  <h3 className="h5 fw-bold mb-1">Alex Johnson</h3>
                  <p className="text-muted mb-3">Chief Investment Officer</p>
                  <p className="text-muted small">
                    Former VC with expertise in healthcare investments and market strategy.
                  </p>
                  <div className="d-flex justify-content-center gap-2 mt-3">
                    <a href="#" className="text-muted"><i className="fab fa-linkedin"></i></a>
                    <a href="#" className="text-muted"><i className="fab fa-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Services Section */}
      <div className="py-5 bg-light">
        <div className="container py-5">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-4">Our Services</h2>
              <p className="lead">
                CARENOW offers a comprehensive suite of services tailored to each stakeholder in the healthcare ecosystem.
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="rounded-circle bg-primary-custom p-3 text-white me-3">
                      <i className="fas fa-user-md"></i>
                    </div>
                    <h3 className="h5 fw-bold mb-0">For Doctors</h3>
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check text-success-custom me-2"></i>
                      <span>Connect with patients through telemedicine</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check text-success-custom me-2"></i>
                      <span>Collaborate with innovative health startups</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check text-success-custom me-2"></i>
                      <span>Access cutting-edge medical technologies</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fas fa-check text-success-custom me-2"></i>
                      <span>Participate in clinical trials and research</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="rounded-circle bg-secondary-custom p-3 text-white me-3">
                      <i className="fas fa-rocket"></i>
                    </div>
                    <h3 className="h5 fw-bold mb-0">For Startups</h3>
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check text-success-custom me-2"></i>
                      <span>Connect with healthcare investors</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check text-success-custom me-2"></i>
                      <span>Get feedback from medical professionals</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check text-success-custom me-2"></i>
                      <span>Access market insights and analytics</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fas fa-check text-success-custom me-2"></i>
                      <span>Showcase your solutions to the right audience</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="rounded-circle bg-accent-custom p-3 text-white me-3">
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <h3 className="h5 fw-bold mb-0">For Investors</h3>
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check text-success-custom me-2"></i>
                      <span>Discover promising healthcare startups</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check text-success-custom me-2"></i>
                      <span>Validate solutions with medical experts</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check text-success-custom me-2"></i>
                      <span>Track portfolio performance and metrics</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fas fa-check text-success-custom me-2"></i>
                      <span>Network with other healthcare investors</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-primary-custom py-5 text-white">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-4">Join Our Healthcare Network</h2>
              <p className="lead mb-5">
                Be part of the future of healthcare innovation. Connect, collaborate, and transform healthcare together.
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <a href="/signup" className="btn btn-light btn-lg px-4 py-3 fw-medium">
                  Sign Up Today
                </a>
                <a href="/login" className="btn btn-outline-light btn-lg px-4 py-3">
                  Login
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

export default AboutUs;