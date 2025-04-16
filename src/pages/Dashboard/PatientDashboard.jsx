import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DashboardSidebar from '../../components/Dashboard/DashboardSidebar';
import DashboardHeader from '../../components/Dashboard/DashboardHeader';
import { doctors, patientStats } from '../../utils/mockData';

const PatientDashboard = () => {
  const [activePage, setActivePage] = useState('overview');
  
  const user = {
    name: "Sarah Johnson",
    role: "patient",
    email: "sarah.johnson@example.com",
    profileImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200&h=200",
    medicalCondition: "Type 2 Diabetes",
    appointments: 3,
    upcomingAppointment: "April 10, 2025",
    doctorName: "Dr. Michael Chen",
    recentMedication: "Metformin",
    recentReadings: {
      bloodPressure: "125/82",
      bloodSugar: "142 mg/dL",
      weight: "168 lbs"
    }
  };

  const renderDashboardContent = () => {
    switch(activePage) {
      case 'overview':
        return renderOverview();
      case 'appointments':
        return renderAppointments();
      case 'doctors':
        return renderDoctors();
      case 'records':
        return renderMedicalRecords();
      case 'messages':
        return renderMessages();
      case 'settings':
        return renderSettings();
      default:
        return renderOverview();
    }
  };
  
  const renderOverview = () => {
    return (
      <div className="dashboard-content p-4">
        <h2 className="h4 mb-4">Dashboard Overview</h2>
        
        {/* Stats Cards */}
        <div className="row g-3 mb-4">
          {patientStats.map(stat => (
            <div key={stat.id} className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body d-flex align-items-center">
                  <div className={`rounded-circle p-3 me-3`} style={{ backgroundColor: `${stat.color}20` }}>
                    <i className={`bi ${stat.icon} fs-4`} style={{ color: stat.color }}></i>
                  </div>
                  <div>
                    <h3 className="h5 mb-0">{stat.value}</h3>
                    <p className="text-muted small mb-0">{stat.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Health Summary */}
        <div className="row mb-4">
          <div className="col-lg-8 mb-4 mb-lg-0">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
                <h3 className="h5 mb-0">Health Summary</h3>
                <button className="btn btn-sm btn-outline-primary">View All</button>
              </div>
              <div className="card-body">
                <div className="mb-4">
                  <h4 className="h6">Recent Readings</h4>
                  <div className="row g-3 mt-2">
                    <div className="col-md-4">
                      <div className="card h-100 bg-light border-0">
                        <div className="card-body p-3">
                          <div className="d-flex justify-content-between mb-2">
                            <small className="text-muted">Blood Pressure</small>
                            <i className="bi bi-heart-pulse text-danger"></i>
                          </div>
                          <h5 className="mb-0">{user.recentReadings.bloodPressure}</h5>
                          <small className="text-muted">Last checked: Yesterday</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card h-100 bg-light border-0">
                        <div className="card-body p-3">
                          <div className="d-flex justify-content-between mb-2">
                            <small className="text-muted">Blood Sugar</small>
                            <i className="bi bi-droplet text-primary"></i>
                          </div>
                          <h5 className="mb-0">{user.recentReadings.bloodSugar}</h5>
                          <small className="text-muted">Last checked: Today</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card h-100 bg-light border-0">
                        <div className="card-body p-3">
                          <div className="d-flex justify-content-between mb-2">
                            <small className="text-muted">Weight</small>
                            <i className="bi bi-speedometer2 text-success"></i>
                          </div>
                          <h5 className="mb-0">{user.recentReadings.weight}</h5>
                          <small className="text-muted">Last checked: 2 days ago</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="h6">Current Medications</h4>
                  <div className="table-responsive mt-2">
                    <table className="table table-hover align-middle mb-0">
                      <thead className="bg-light">
                        <tr>
                          <th>Medication</th>
                          <th>Dosage</th>
                          <th>Schedule</th>
                          <th>Prescribed By</th>
                          <th>Refill Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Metformin</td>
                          <td>500mg</td>
                          <td>Twice daily</td>
                          <td>Dr. Michael Chen</td>
                          <td>April 15, 2025</td>
                        </tr>
                        <tr>
                          <td>Lisinopril</td>
                          <td>10mg</td>
                          <td>Once daily</td>
                          <td>Dr. Michael Chen</td>
                          <td>April 30, 2025</td>
                        </tr>
                        <tr>
                          <td>Vitamin D3</td>
                          <td>2000 IU</td>
                          <td>Once daily</td>
                          <td>Dr. Sarah Rodriguez</td>
                          <td>May 20, 2025</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-header bg-white py-3">
                <h3 className="h5 mb-0">Upcoming Appointment</h3>
              </div>
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3 me-3">
                    <i className="bi bi-calendar-event text-primary fs-4"></i>
                  </div>
                  <div>
                    <h5 className="h6 mb-0">{user.upcomingAppointment}</h5>
                    <p className="small text-muted mb-0">10:30 AM - 11:15 AM</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-center mb-3">
                  <img 
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200" 
                    alt="Doctor" 
                    className="rounded-circle me-3"
                    width="50"
                    height="50"
                  />
                  <div>
                    <h5 className="h6 mb-0">{user.doctorName}</h5>
                    <p className="small text-muted mb-0">Endocrinologist</p>
                  </div>
                </div>
                
                <p className="small text-muted mb-3">
                  <i className="bi bi-geo-alt me-2"></i>
                  HealthFirst Medical Center, Suite 305
                </p>
                
                <div className="d-flex gap-2">
                  <button className="btn btn-sm btn-primary-custom flex-grow-1">
                    <i className="bi bi-camera-video me-2"></i>
                    Join Video
                  </button>
                  <button className="btn btn-sm btn-outline-primary flex-grow-1">
                    <i className="bi bi-pencil me-2"></i>
                    Reschedule
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recent Activity */}
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-white py-3">
            <h3 className="h5 mb-0">Recent Activity</h3>
          </div>
          <div className="card-body p-0">
            <div className="list-group list-group-flush">
              <div className="list-group-item px-4 py-3 d-flex align-items-center">
                <div className="rounded-circle bg-success bg-opacity-10 p-2 me-3">
                  <i className="bi bi-clipboard2-check text-success"></i>
                </div>
                <div className="me-auto">
                  <p className="mb-0">Lab results from your blood test are now available</p>
                  <small className="text-muted">2 hours ago</small>
                </div>
                <button className="btn btn-sm btn-outline-primary">View</button>
              </div>
              <div className="list-group-item px-4 py-3 d-flex align-items-center">
                <div className="rounded-circle bg-primary bg-opacity-10 p-2 me-3">
                  <i className="bi bi-calendar-plus text-primary"></i>
                </div>
                <div className="me-auto">
                  <p className="mb-0">Appointment confirmed with <strong>Dr. Michael Chen</strong></p>
                  <small className="text-muted">Yesterday</small>
                </div>
                <button className="btn btn-sm btn-outline-primary">Details</button>
              </div>
              <div className="list-group-item px-4 py-3 d-flex align-items-center">
                <div className="rounded-circle bg-info bg-opacity-10 p-2 me-3">
                  <i className="bi bi-chat-dots text-info"></i>
                </div>
                <div className="me-auto">
                  <p className="mb-0">New message from <strong>Dr. Sarah Rodriguez</strong></p>
                  <small className="text-muted">2 days ago</small>
                </div>
                <button className="btn btn-sm btn-outline-primary">Read</button>
              </div>
              <div className="list-group-item px-4 py-3 d-flex align-items-center">
                <div className="rounded-circle bg-warning bg-opacity-10 p-2 me-3">
                  <i className="bi bi-bell text-warning"></i>
                </div>
                <div className="me-auto">
                  <p className="mb-0">Reminder: Take your medication measurements today</p>
                  <small className="text-muted">3 days ago</small>
                </div>
                <button className="btn btn-sm btn-outline-primary">Dismiss</button>
              </div>
            </div>
          </div>
          <div className="card-footer bg-white text-center py-3">
            <button className="btn btn-sm btn-outline-primary">View All Activity</button>
          </div>
        </div>
      </div>
    );
  };
  
  const renderAppointments = () => {
    return (
      <div className="dashboard-content p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h4 mb-0">My Appointments</h2>
          <button className="btn btn-primary-custom">
            <i className="bi bi-plus-circle me-2"></i>
            Book New Appointment
          </button>
        </div>
        
        <div className="row mb-4">
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 className="h5 mb-0">Upcoming</h3>
                  <span className="badge bg-primary rounded-pill">3</span>
                </div>
                
                <div className="list-group list-group-flush">
                  <div className="list-group-item px-0 py-3 border-0">
                    <div className="d-flex align-items-center mb-2">
                      <div className="bg-primary bg-opacity-10 text-primary rounded p-2 me-3">
                        <i className="bi bi-calendar-event"></i>
                      </div>
                      <div>
                        <h6 className="mb-0">Dr. Michael Chen</h6>
                        <small className="text-muted">Endocrinologist</small>
                      </div>
                    </div>
                    <div className="ps-5">
                      <p className="small mb-1">
                        <i className="bi bi-clock me-2"></i>
                        April 10, 2025 - 10:30 AM
                      </p>
                      <p className="small mb-1">
                        <i className="bi bi-geo-alt me-2"></i>
                        HealthFirst Medical Center
                      </p>
                      <div className="d-flex gap-2 mt-2">
                        <button className="btn btn-sm btn-primary-custom">Join Video</button>
                        <button className="btn btn-sm btn-outline-primary">Reschedule</button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="list-group-item px-0 py-3 border-0">
                    <div className="d-flex align-items-center mb-2">
                      <div className="bg-primary bg-opacity-10 text-primary rounded p-2 me-3">
                        <i className="bi bi-calendar-event"></i>
                      </div>
                      <div>
                        <h6 className="mb-0">Dr. Sarah Rodriguez</h6>
                        <small className="text-muted">Nutritionist</small>
                      </div>
                    </div>
                    <div className="ps-5">
                      <p className="small mb-1">
                        <i className="bi bi-clock me-2"></i>
                        April 17, 2025 - 2:00 PM
                      </p>
                      <p className="small mb-1">
                        <i className="bi bi-geo-alt me-2"></i>
                        Wellness Nutrition Center
                      </p>
                      <div className="d-flex gap-2 mt-2">
                        <button className="btn btn-sm btn-primary-custom">Join Video</button>
                        <button className="btn btn-sm btn-outline-primary">Reschedule</button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="list-group-item px-0 py-3 border-0">
                    <div className="d-flex align-items-center mb-2">
                      <div className="bg-primary bg-opacity-10 text-primary rounded p-2 me-3">
                        <i className="bi bi-calendar-event"></i>
                      </div>
                      <div>
                        <h6 className="mb-0">Dr. James Wilson</h6>
                        <small className="text-muted">Ophthalmologist</small>
                      </div>
                    </div>
                    <div className="ps-5">
                      <p className="small mb-1">
                        <i className="bi bi-clock me-2"></i>
                        May 5, 2025 - 11:15 AM
                      </p>
                      <p className="small mb-1">
                        <i className="bi bi-geo-alt me-2"></i>
                        Vision Care Specialists
                      </p>
                      <div className="d-flex gap-2 mt-2">
                        <button className="btn btn-sm btn-primary-custom">Join Video</button>
                        <button className="btn btn-sm btn-outline-primary">Reschedule</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-8">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-header bg-white py-3">
                <h3 className="h5 mb-0">Appointment History</h3>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                    <thead className="bg-light">
                      <tr>
                        <th>Doctor</th>
                        <th>Specialty</th>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <img 
                              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=50&h=50" 
                              alt="Doctor" 
                              className="rounded-circle me-2"
                              width="40"
                              height="40"
                            />
                            <div>Dr. Michael Chen</div>
                          </div>
                        </td>
                        <td>Endocrinologist</td>
                        <td>March 10, 2025</td>
                        <td>In-person</td>
                        <td><span className="badge bg-success">Completed</span></td>
                        <td>
                          <div className="btn-group">
                            <button className="btn btn-sm btn-outline-primary">View Notes</button>
                            <button className="btn btn-sm btn-outline-primary">Book Again</button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <img 
                              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=50&h=50" 
                              alt="Doctor" 
                              className="rounded-circle me-2"
                              width="40"
                              height="40"
                            />
                            <div>Dr. Sarah Rodriguez</div>
                          </div>
                        </td>
                        <td>Nutritionist</td>
                        <td>February 15, 2025</td>
                        <td>Video Call</td>
                        <td><span className="badge bg-success">Completed</span></td>
                        <td>
                          <div className="btn-group">
                            <button className="btn btn-sm btn-outline-primary">View Notes</button>
                            <button className="btn btn-sm btn-outline-primary">Book Again</button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <img 
                              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=50&h=50" 
                              alt="Doctor" 
                              className="rounded-circle me-2"
                              width="40"
                              height="40"
                            />
                            <div>Dr. Robert Garcia</div>
                          </div>
                        </td>
                        <td>Cardiologist</td>
                        <td>January 28, 2025</td>
                        <td>In-person</td>
                        <td><span className="badge bg-success">Completed</span></td>
                        <td>
                          <div className="btn-group">
                            <button className="btn btn-sm btn-outline-primary">View Notes</button>
                            <button className="btn btn-sm btn-outline-primary">Book Again</button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <img 
                              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=50&h=50" 
                              alt="Doctor" 
                              className="rounded-circle me-2"
                              width="40"
                              height="40"
                            />
                            <div>Dr. Michael Chen</div>
                          </div>
                        </td>
                        <td>Endocrinologist</td>
                        <td>December 10, 2024</td>
                        <td>Video Call</td>
                        <td><span className="badge bg-success">Completed</span></td>
                        <td>
                          <div className="btn-group">
                            <button className="btn btn-sm btn-outline-primary">View Notes</button>
                            <button className="btn btn-sm btn-outline-primary">Book Again</button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-footer bg-white py-3">
                <nav aria-label="Appointment history pagination">
                  <ul className="pagination justify-content-center mb-0">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#">Next</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const renderDoctors = () => {
    return (
      <div className="dashboard-content p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h4 mb-0">Find Doctors</h2>
          <div className="d-flex gap-2">
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <i className="bi bi-search"></i>
              </span>
              <input type="text" className="form-control border-start-0" placeholder="Search doctors..." />
            </div>
            <select className="form-select" style={{ width: 'auto' }}>
              <option>All Specialties</option>
              <option>Cardiology</option>
              <option>Dermatology</option>
              <option>Endocrinology</option>
              <option>Neurology</option>
              <option>Oncology</option>
            </select>
          </div>
        </div>
        
        <div className="row g-3">
          {doctors.map(doctor => (
            <div key={doctor.id} className="col-md-6 col-xl-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="d-flex mb-3">
                    <img 
                      src={doctor.photo} 
                      alt={doctor.name} 
                      className="rounded-circle me-3"
                      width="80"
                      height="80"
                    />
                    <div>
                      <h4 className="h5 mb-1">{doctor.name}</h4>
                      <p className="text-primary-custom mb-2">{doctor.specialty}</p>
                      <div className="d-flex align-items-center">
                        <div className="text-warning me-1">
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <span className="me-2">{doctor.rating}</span>
                        <span className="text-muted small">({doctor.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted small mb-3">{doctor.description}</p>
                  
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <div className="text-primary-custom me-2">
                        <i className="bi bi-briefcase"></i>
                      </div>
                      <span className="small">{doctor.experience} Years Experience</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="text-primary-custom me-2">
                        <i className="bi bi-geo-alt"></i>
                      </div>
                      <span className="small">HealthFirst Medical Center</span>
                    </div>
                  </div>
                  
                  <div className="d-flex gap-2">
                    <button className="btn btn-primary-custom flex-grow-1">Book Appointment</button>
                    <button className="btn btn-outline-primary flex-grow-1">View Profile</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <nav className="mt-4">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
            </li>
            <li className="page-item active"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  };
  
  const renderMedicalRecords = () => {
    return (
      <div className="dashboard-content p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h4 mb-0">Medical Records</h2>
          <button className="btn btn-primary-custom">
            <i className="bi bi-upload me-2"></i>
            Upload Records
          </button>
        </div>
        
        <div className="row mb-4">
          <div className="col-lg-3 mb-4 mb-lg-0">
            <div className="card border-0 shadow-sm">
              <div className="list-group list-group-flush">
                <a href="#" className="list-group-item list-group-item-action active">
                  <i className="bi bi-file-earmark-text me-2"></i> All Records
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i className="bi bi-clipboard2-pulse me-2"></i> Lab Results
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i className="bi bi-image me-2"></i> Imaging & Scans
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i className="bi bi-journal-medical me-2"></i> Visit Summaries
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i className="bi bi-capsule me-2"></i> Prescriptions
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i className="bi bi-heart-pulse me-2"></i> Vitals History
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-9">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
                <h3 className="h5 mb-0">All Records</h3>
                <div className="d-flex gap-2">
                  <select className="form-select form-select-sm">
                    <option>All Time</option>
                    <option>Last 3 Months</option>
                    <option>Last 6 Months</option>
                    <option>Last Year</option>
                  </select>
                  <div className="input-group input-group-sm">
                    <span className="input-group-text bg-white border-end-0">
                      <i className="bi bi-search"></i>
                    </span>
                    <input type="text" className="form-control border-start-0" placeholder="Search records..." />
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                    <thead className="bg-light">
                      <tr>
                        <th>Record Type</th>
                        <th>Date</th>
                        <th>Provider</th>
                        <th>Description</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="bg-primary bg-opacity-10 p-2 rounded me-3">
                              <i className="bi bi-clipboard2-pulse text-primary"></i>
                            </div>
                            <div>Lab Results</div>
                          </div>
                        </td>
                        <td>Mar 10, 2025</td>
                        <td>HealthFirst Lab</td>
                        <td>Comprehensive Metabolic Panel</td>
                        <td>
                          <div className="btn-group">
                            <button className="btn btn-sm btn-outline-primary">View</button>
                            <button className="btn btn-sm btn-outline-primary">Download</button>
                            <button className="btn btn-sm btn-outline-primary">Share</button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="bg-info bg-opacity-10 p-2 rounded me-3">
                              <i className="bi bi-image text-info"></i>
                            </div>
                            <div>Imaging</div>
                          </div>
                        </td>
                        <td>Feb 15, 2025</td>
                        <td>Radiology Partners</td>
                        <td>Chest X-Ray</td>
                        <td>
                          <div className="btn-group">
                            <button className="btn btn-sm btn-outline-primary">View</button>
                            <button className="btn btn-sm btn-outline-primary">Download</button>
                            <button className="btn btn-sm btn-outline-primary">Share</button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="bg-success bg-opacity-10 p-2 rounded me-3">
                              <i className="bi bi-journal-medical text-success"></i>
                            </div>
                            <div>Visit Summary</div>
                          </div>
                        </td>
                        <td>Feb 10, 2025</td>
                        <td>Dr. Michael Chen</td>
                        <td>Endocrinology Follow-up</td>
                        <td>
                          <div className="btn-group">
                            <button className="btn btn-sm btn-outline-primary">View</button>
                            <button className="btn btn-sm btn-outline-primary">Download</button>
                            <button className="btn btn-sm btn-outline-primary">Share</button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="bg-warning bg-opacity-10 p-2 rounded me-3">
                              <i className="bi bi-capsule text-warning"></i>
                            </div>
                            <div>Prescription</div>
                          </div>
                        </td>
                        <td>Feb 10, 2025</td>
                        <td>Dr. Michael Chen</td>
                        <td>Metformin Renewal</td>
                        <td>
                          <div className="btn-group">
                            <button className="btn btn-sm btn-outline-primary">View</button>
                            <button className="btn btn-sm btn-outline-primary">Download</button>
                            <button className="btn btn-sm btn-outline-primary">Share</button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="bg-primary bg-opacity-10 p-2 rounded me-3">
                              <i className="bi bi-clipboard2-pulse text-primary"></i>
                            </div>
                            <div>Lab Results</div>
                          </div>
                        </td>
                        <td>Jan 05, 2025</td>
                        <td>HealthFirst Lab</td>
                        <td>Hemoglobin A1C</td>
                        <td>
                          <div className="btn-group">
                            <button className="btn btn-sm btn-outline-primary">View</button>
                            <button className="btn btn-sm btn-outline-primary">Download</button>
                            <button className="btn btn-sm btn-outline-primary">Share</button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-footer bg-white py-3">
                <nav aria-label="Medical records pagination">
                  <ul className="pagination justify-content-center mb-0">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#">Next</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const renderMessages = () => {
    return (
      <div className="dashboard-content p-4">
        <h2 className="h4 mb-4">Messages</h2>
        
        <div className="card border-0 shadow-sm">
          <div className="card-body p-0">
            <div className="row g-0" style={{ height: '600px' }}>
              <div className="col-md-4 border-end">
                <div className="p-3 border-bottom">
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0">
                      <i className="bi bi-search"></i>
                    </span>
                    <input type="text" className="form-control border-start-0" placeholder="Search messages..." />
                  </div>
                </div>
                <div className="overflow-auto" style={{ maxHeight: 'calc(600px - 56px)' }}>
                  <div className="list-group list-group-flush">
                    <a 
                      href="#" 
                      className="list-group-item list-group-item-action px-3 py-3 active"
                    >
                      <div className="d-flex">
                        <img 
                          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200" 
                          className="rounded-circle me-3"
                          width="48"
                          height="48"
                          alt="Dr. Michael Chen"
                        />
                        <div className="flex-grow-1 overflow-hidden">
                          <div className="d-flex justify-content-between align-items-center mb-1">
                            <h6 className="mb-0 text-truncate">Dr. Michael Chen</h6>
                            <small className="text-white">10:23 AM</small>
                          </div>
                          <p className="mb-0 small text-truncate">
                            Hello Sarah, I've reviewed your latest test results...
                          </p>
                        </div>
                      </div>
                    </a>
                    <a 
                      href="#" 
                      className="list-group-item list-group-item-action px-3 py-3"
                    >
                      <div className="d-flex">
                        <img 
                          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200" 
                          className="rounded-circle me-3"
                          width="48"
                          height="48"
                          alt="Dr. Sarah Rodriguez"
                        />
                        <div className="flex-grow-1 overflow-hidden">
                          <div className="d-flex justify-content-between align-items-center mb-1">
                            <h6 className="mb-0 text-truncate">Dr. Sarah Rodriguez</h6>
                            <small className="text-muted">Yesterday</small>
                          </div>
                          <p className="mb-0 small text-truncate">
                            Don't forget to track your daily food intake before our...
                          </p>
                        </div>
                      </div>
                    </a>
                    <a 
                      href="#" 
                      className="list-group-item list-group-item-action px-3 py-3"
                    >
                      <div className="d-flex">
                        <img 
                          src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200&h=200" 
                          className="rounded-circle me-3"
                          width="48"
                          height="48"
                          alt="Dr. Robert Garcia"
                        />
                        <div className="flex-grow-1 overflow-hidden">
                          <div className="d-flex justify-content-between align-items-center mb-1">
                            <h6 className="mb-0 text-truncate">Dr. Robert Garcia</h6>
                            <small className="text-muted">Mar 10</small>
                          </div>
                          <p className="mb-0 small text-truncate">
                            Your heart rate readings are looking good. Keep up the...
                          </p>
                        </div>
                      </div>
                    </a>
                    <a 
                      href="#" 
                      className="list-group-item list-group-item-action px-3 py-3"
                    >
                      <div className="d-flex">
                        <div 
                          className="rounded-circle bg-primary-custom d-flex align-items-center justify-content-center me-3"
                          style={{ width: '48px', height: '48px' }}
                        >
                          <i className="bi bi-hospital text-white"></i>
                        </div>
                        <div className="flex-grow-1 overflow-hidden">
                          <div className="d-flex justify-content-between align-items-center mb-1">
                            <h6 className="mb-0 text-truncate">HealthFirst Medical</h6>
                            <small className="text-muted">Mar 05</small>
                          </div>
                          <p className="mb-0 small text-truncate">
                            Your upcoming appointment reminder: Dr. Michael Chen on...
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-8 d-flex flex-column">
                <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200" 
                      className="rounded-circle me-2"
                      width="40"
                      height="40"
                      alt="Dr. Michael Chen"
                    />
                    <div>
                      <h6 className="mb-0">Dr. Michael Chen</h6>
                      <small className="text-muted">Last active: 5 min ago</small>
                    </div>
                  </div>
                  <div>
                    <button className="btn btn-sm btn-outline-primary me-2">
                      <i className="bi bi-telephone"></i> Call
                    </button>
                    <button className="btn btn-sm btn-outline-primary">
                      <i className="bi bi-three-dots-vertical"></i>
                    </button>
                  </div>
                </div>
                <div className="p-3 overflow-auto flex-grow-1" style={{ backgroundColor: '#f8f9fa' }}>
                  <div className="d-flex mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200" 
                      className="rounded-circle mt-1 me-2 align-self-start"
                      width="32"
                      height="32"
                      alt="Dr. Michael Chen"
                    />
                    <div>
                      <div className="bg-white p-3 rounded shadow-sm">
                        <p className="mb-0">Hello Sarah, I've reviewed your latest test results. Your blood sugar levels have improved, but they're still a bit higher than our target range.</p>
                      </div>
                      <small className="text-muted">10:15 AM</small>
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200" 
                      className="rounded-circle mt-1 me-2 align-self-start"
                      width="32"
                      height="32"
                      alt="Dr. Michael Chen"
                    />
                    <div>
                      <div className="bg-white p-3 rounded shadow-sm">
                        <p className="mb-0">I'd like to discuss adjusting your medication dosage at our next appointment. Have you been experiencing any side effects with the current prescription?</p>
                      </div>
                      <small className="text-muted">10:17 AM</small>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mb-3">
                    <div className="text-end">
                      <div className="bg-primary text-white p-3 rounded shadow-sm">
                        <p className="mb-0">Thanks for the update, Dr. Chen. I've been feeling a bit tired in the afternoons, but otherwise no major side effects. I've been following the diet plan as discussed.</p>
                      </div>
                      <small className="text-muted">10:20 AM</small>
                    </div>
                    <img 
                      src={user.profileImage} 
                      className="rounded-circle mt-1 ms-2 align-self-start"
                      width="32"
                      height="32"
                      alt={user.name}
                    />
                  </div>
                  <div className="d-flex mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200" 
                      className="rounded-circle mt-1 me-2 align-self-start"
                      width="32"
                      height="32"
                      alt="Dr. Michael Chen"
                    />
                    <div>
                      <div className="bg-white p-3 rounded shadow-sm">
                        <p className="mb-0">The fatigue could be related to the medication. Let's monitor it closely. Please continue tracking your blood sugar levels daily, and we'll review again at your appointment next week.</p>
                      </div>
                      <small className="text-muted">10:23 AM</small>
                    </div>
                  </div>
                </div>
                <div className="p-3 border-top">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Type a message..." />
                    <button className="btn btn-primary-custom">
                      <i className="bi bi-send"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const renderSettings = () => {
    return (
      <div className="dashboard-content p-4">
        <h2 className="h4 mb-4">Account Settings</h2>
        
        <div className="row">
          <div className="col-lg-3 mb-4 mb-lg-0">
            <div className="card border-0 shadow-sm">
              <div className="list-group list-group-flush">
                <a href="#" className="list-group-item list-group-item-action active">
                  <i className="bi bi-person me-2"></i> Profile
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i className="bi bi-shield-lock me-2"></i> Security
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i className="bi bi-bell me-2"></i> Notifications
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i className="bi bi-people me-2"></i> Care Team
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i className="bi bi-sliders me-2"></i> Preferences
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-white py-3">
                <h3 className="h5 mb-0">Personal Information</h3>
              </div>
              <div className="card-body">
                <div className="mb-4 d-flex align-items-center">
                  <img 
                    src={user.profileImage} 
                    alt={user.name} 
                    className="rounded-circle me-4"
                    width="100"
                    height="100"
                  />
                  <div>
                    <h4 className="h5 mb-1">{user.name}</h4>
                    <p className="text-muted mb-2">Patient ID: 9385712</p>
                    <button className="btn btn-sm btn-primary-custom">Change Photo</button>
                  </div>
                </div>
                
                <form>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" value={user.name} />
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" value={user.email} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Phone Number</label>
                      <input type="tel" className="form-control" value="+1 (555) 123-4567" />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Date of Birth</label>
                      <input type="date" className="form-control" value="1985-06-15" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Gender</label>
                      <select className="form-select">
                        <option>Select Gender</option>
                        <option selected>Female</option>
                        <option>Male</option>
                        <option>Non-binary</option>
                        <option>Prefer not to say</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control mb-2" value="123 Main Street" />
                    <input type="text" className="form-control mb-2" value="Apt 4B" />
                    <div className="row">
                      <div className="col-md-5 mb-2 mb-md-0">
                        <input type="text" className="form-control" placeholder="City" value="Boston" />
                      </div>
                      <div className="col-md-3 mb-2 mb-md-0">
                        <input type="text" className="form-control" placeholder="State" value="MA" />
                      </div>
                      <div className="col-md-4">
                        <input type="text" className="form-control" placeholder="Zip Code" value="02108" />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Emergency Contact</label>
                    <div className="row mb-2">
                      <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Name" value="John Johnson" />
                      </div>
                      <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Relationship" value="Spouse" />
                      </div>
                    </div>
                    <input type="tel" className="form-control" placeholder="Phone Number" value="+1 (555) 987-6543" />
                  </div>
                  <button type="submit" className="btn btn-primary-custom">Save Changes</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <DashboardSidebar role="patient" activePage={activePage} setActivePage={setActivePage} />
        <div className="dashboard-main">
          <DashboardHeader user={user} pageTitle={activePage.charAt(0).toUpperCase() + activePage.slice(1).replace('-', ' ')} />
          {renderDashboardContent()}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PatientDashboard;