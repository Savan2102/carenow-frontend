import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DashboardSidebar from '../../components/Dashboard/DashboardSidebar';
import DashboardHeader from '../../components/Dashboard/DashboardHeader';
import { patients, doctorStats, appointments } from '../../utils/mockData';

const DoctorDashboard = () => {
  const [activePage, setActivePage] = useState('overview');
  
  const user = {
    name: "Dr. Michael Chen",
    role: "doctor",
    email: "dr.chen@medical.com",
    profileImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200",
    specialty: "Endocrinologist",
    hospital: "HealthFirst Medical Center",
    experience: "15 years",
    patients: 128,
    appointmentsToday: 8,
    rating: 4.9,
    reviews: 87
  };

  const renderDashboardContent = () => {
    switch(activePage) {
      case 'overview':
        return renderOverview();
      case 'patients':
        return renderPatients();
      case 'appointments':
        return renderAppointments();
      case 'medical-records':
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
          {doctorStats.map(stat => (
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
        
        {/* Today's Schedule */}
        <div className="row mb-4">
          <div className="col-lg-8 mb-4 mb-lg-0">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-header bg-white py-3">
                <h3 className="h5 mb-0">Today's Schedule - April 03, 2025</h3>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                    <thead className="bg-light">
                      <tr>
                        <th>Time</th>
                        <th>Patient</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>08:30 AM</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img 
                              src="https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?auto=format&fit=crop&q=80&w=50&h=50" 
                              alt="Patient" 
                              className="rounded-circle me-2"
                              width="40"
                              height="40"
                            />
                            <div>
                              <h6 className="mb-0">John Williams</h6>
                              <small className="text-muted">Type 2 Diabetes</small>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-success">In-person</span>
                        </td>
                        <td>
                          <span className="badge bg-success">Checked In</span>
                        </td>
                        <td>
                          <div className="btn-group">
                            <button className="btn btn-sm btn-primary-custom">Start Session</button>
                            <button className="btn btn-sm btn-outline-primary">View Records</button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>09:15 AM</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img 
                              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=50&h=50" 
                              alt="Patient" 
                              className="rounded-circle me-2"
                              width="40"
                              height="40"
                            />
                            <div>
                              <h6 className="mb-0">Emily Johnson</h6>
                              <small className="text-muted">Gestational Diabetes</small>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-info text-dark">Video Call</span>
                        </td>
                        <td>
                          <span className="badge bg-warning text-dark">Scheduled</span>
                        </td>
                        <td>
                          <div className="btn-group">
                            <button className="btn btn-sm btn-outline-primary">Prepare</button>
                            <button className="btn btn-sm btn-outline-primary">View Records</button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>10:00 AM</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img 
                              src="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=50&h=50" 
                              alt="Patient" 
                              className="rounded-circle me-2"
                              width="40"
                              height="40"
                            />
                            <div>
                              <h6 className="mb-0">Robert Garcia</h6>
                              <small className="text-muted">Insulin Resistance</small>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-success">In-person</span>
                        </td>
                        <td>
                          <span className="badge bg-warning text-dark">Scheduled</span>
                        </td>
                        <td>
                          <div className="btn-group">
                            <button className="btn btn-sm btn-outline-primary">Prepare</button>
                            <button className="btn btn-sm btn-outline-primary">View Records</button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>11:30 AM</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img 
                              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200&h=200" 
                              alt="Patient" 
                              className="rounded-circle me-2"
                              width="40"
                              height="40"
                            />
                            <div>
                              <h6 className="mb-0">Sarah Johnson</h6>
                              <small className="text-muted">Type 2 Diabetes</small>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-info text-dark">Video Call</span>
                        </td>
                        <td>
                          <span className="badge bg-warning text-dark">Scheduled</span>
                        </td>
                        <td>
                          <div className="btn-group">
                            <button className="btn btn-sm btn-outline-primary">Prepare</button>
                            <button className="btn btn-sm btn-outline-primary">View Records</button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-footer bg-white text-center py-3">
                <button className="btn btn-sm btn-outline-primary">View Full Schedule</button>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-header bg-white py-3">
                <h3 className="h5 mb-0">Patient Reminders</h3>
              </div>
              <div className="card-body">
                <div className="list-group list-group-flush">
                  <div className="list-group-item px-0 py-3 border-0">
                    <div className="d-flex align-items-center mb-2">
                      <div className="bg-warning bg-opacity-10 text-warning rounded p-2 me-3">
                        <i className="bi bi-exclamation-triangle"></i>
                      </div>
                      <div>
                        <h6 className="mb-0">Lab Results Review</h6>
                        <small className="text-muted">Sarah Johnson's A1C results</small>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="btn btn-sm btn-outline-primary">Review</button>
                    </div>
                  </div>
                  
                  <div className="list-group-item px-0 py-3 border-0">
                    <div className="d-flex align-items-center mb-2">
                      <div className="bg-info bg-opacity-10 text-info rounded p-2 me-3">
                        <i className="bi bi-bell"></i>
                      </div>
                      <div>
                        <h6 className="mb-0">Prescription Renewal</h6>
                        <small className="text-muted">Robert Garcia's Metformin</small>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="btn btn-sm btn-outline-primary">Process</button>
                    </div>
                  </div>
                  
                  <div className="list-group-item px-0 py-3 border-0">
                    <div className="d-flex align-items-center mb-2">
                      <div className="bg-primary bg-opacity-10 text-primary rounded p-2 me-3">
                        <i className="bi bi-clipboard2-pulse"></i>
                      </div>
                      <div>
                        <h6 className="mb-0">Treatment Plan Update</h6>
                        <small className="text-muted">Emily Johnson's care plan</small>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="btn btn-sm btn-outline-primary">Update</button>
                    </div>
                  </div>
                  
                  <div className="list-group-item px-0 py-3 border-0">
                    <div className="d-flex align-items-center mb-2">
                      <div className="bg-success bg-opacity-10 text-success rounded p-2 me-3">
                        <i className="bi bi-check-circle"></i>
                      </div>
                      <div>
                        <h6 className="mb-0">Follow-up Required</h6>
                        <small className="text-muted">John Williams post-appointment</small>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="btn btn-sm btn-outline-primary">Schedule</button>
                    </div>
                  </div>
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
                <div className="rounded-circle bg-primary bg-opacity-10 p-2 me-3">
                  <i className="bi bi-file-earmark-text text-primary"></i>
                </div>
                <div className="me-auto">
                  <p className="mb-0">You updated medical records for <strong>Sarah Johnson</strong></p>
                  <small className="text-muted">2 hours ago</small>
                </div>
                <button className="btn btn-sm btn-outline-primary">View</button>
              </div>
              <div className="list-group-item px-4 py-3 d-flex align-items-center">
                <div className="rounded-circle bg-success bg-opacity-10 p-2 me-3">
                  <i className="bi bi-capsule text-success"></i>
                </div>
                <div className="me-auto">
                  <p className="mb-0">You prescribed <strong>Metformin 500mg</strong> for <strong>Robert Garcia</strong></p>
                  <small className="text-muted">Yesterday</small>
                </div>
                <button className="btn btn-sm btn-outline-primary">View</button>
              </div>
              <div className="list-group-item px-4 py-3 d-flex align-items-center">
                <div className="rounded-circle bg-info bg-opacity-10 p-2 me-3">
                  <i className="bi bi-chat-dots text-info"></i>
                </div>
                <div className="me-auto">
                  <p className="mb-0">You sent a message to <strong>Emily Johnson</strong></p>
                  <small className="text-muted">2 days ago</small>
                </div>
                <button className="btn btn-sm btn-outline-primary">View</button>
              </div>
              <div className="list-group-item px-4 py-3 d-flex align-items-center">
                <div className="rounded-circle bg-warning bg-opacity-10 p-2 me-3">
                  <i className="bi bi-calendar-check text-warning"></i>
                </div>
                <div className="me-auto">
                  <p className="mb-0">You completed an appointment with <strong>John Williams</strong></p>
                  <small className="text-muted">3 days ago</small>
                </div>
                <button className="btn btn-sm btn-outline-primary">View Notes</button>
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
  
  const renderPatients = () => {
    return (
      <div className="dashboard-content p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h4 mb-0">My Patients</h2>
          <div className="d-flex gap-2">
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <i className="bi bi-search"></i>
              </span>
              <input type="text" className="form-control border-start-0" placeholder="Search patients..." />
            </div>
            <select className="form-select" style={{ width: 'auto' }}>
              <option>All Conditions</option>
              <option>Type 1 Diabetes</option>
              <option>Type 2 Diabetes</option>
              <option>Gestational Diabetes</option>
              <option>Insulin Resistance</option>
            </select>
            <button className="btn btn-primary-custom">
              <i className="bi bi-plus-circle me-2"></i>
              Add Patient
            </button>
          </div>
        </div>
        
        <div className="card border-0 shadow-sm">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="bg-light">
                  <tr>
                    <th>Patient</th>
                    <th>Condition</th>
                    <th>Last Visit</th>
                    <th>Next Appointment</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map(patient => (
                    <tr key={patient.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img 
                            src={patient.photo} 
                            alt={patient.name} 
                            className="rounded-circle me-2"
                            width="40"
                            height="40"
                          />
                          <div>
                            <h6 className="mb-0">{patient.name}</h6>
                            <small className="text-muted">ID: {patient.id.slice(0, 8)}</small>
                          </div>
                        </div>
                      </td>
                      <td>{patient.condition}</td>
                      <td>March 10, 2025</td>
                      <td>April 10, 2025</td>
                      <td>
                        <span className="badge bg-success">Active</span>
                      </td>
                      <td>
                        <div className="btn-group">
                          <button className="btn btn-sm btn-primary-custom">View Profile</button>
                          <button className="btn btn-sm btn-outline-primary">Message</button>
                          <button className="btn btn-sm btn-outline-primary">
                            <i className="bi bi-three-dots-vertical"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="card-footer bg-white py-3">
            <nav aria-label="Patient pagination">
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
    );
  };
  
  const renderAppointments = () => {
    return (
      <div className="dashboard-content p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h4 mb-0">Appointments</h2>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-primary">
              <i className="bi bi-calendar me-2"></i>
              Calendar View
            </button>
            <button className="btn btn-primary-custom">
              <i className="bi bi-plus-circle me-2"></i>
              New Appointment
            </button>
          </div>
        </div>
        
        <ul className="nav nav-tabs mb-4">
          <li className="nav-item">
            <a className="nav-link active" href="#">Upcoming</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Past</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Canceled</a>
          </li>
        </ul>
        
        <div className="row mb-4">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="h6 mb-0">Today - April 03, 2025</h5>
                  <span className="badge bg-primary rounded-pill">4</span>
                </div>
                <div className="list-group list-group-flush">
                  {appointments.slice(0, 4).map((appointment, index) => (
                    <div key={index} className="list-group-item px-0 py-2 border-0">
                      <div className="d-flex align-items-center">
                        <div className="bg-primary bg-opacity-10 rounded text-primary p-2 me-3">
                          <i className="bi bi-clock"></i>
                        </div>
                        <div className="me-auto">
                          <h6 className="mb-0">{appointment.time}</h6>
                          <small className="text-muted">{appointment.title}</small>
                        </div>
                        <div className="dropdown">
                          <button className="btn btn-sm btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Actions
                          </button>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Start</a></li>
                            <li><a className="dropdown-item" href="#">Reschedule</a></li>
                            <li><a className="dropdown-item" href="#">Cancel</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="h6 mb-0">Tomorrow - April 04, 2025</h5>
                  <span className="badge bg-primary rounded-pill">3</span>
                </div>
                <div className="list-group list-group-flush">
                  <div className="list-group-item px-0 py-2 border-0">
                    <div className="d-flex align-items-center">
                      <div className="bg-primary bg-opacity-10 rounded text-primary p-2 me-3">
                        <i className="bi bi-clock"></i>
                      </div>
                      <div className="me-auto">
                        <h6 className="mb-0">09:00 AM</h6>
                        <small className="text-muted">Maria Lopez</small>
                      </div>
                      <div className="dropdown">
                        <button className="btn btn-sm btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                          Actions
                        </button>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Prepare</a></li>
                          <li><a className="dropdown-item" href="#">Reschedule</a></li>
                          <li><a className="dropdown-item" href="#">Cancel</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item px-0 py-2 border-0">
                    <div className="d-flex align-items-center">
                      <div className="bg-primary bg-opacity-10 rounded text-primary p-2 me-3">
                        <i className="bi bi-clock"></i>
                      </div>
                      <div className="me-auto">
                        <h6 className="mb-0">10:30 AM</h6>
                        <small className="text-muted">David Brown</small>
                      </div>
                      <div className="dropdown">
                        <button className="btn btn-sm btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                          Actions
                        </button>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Prepare</a></li>
                          <li><a className="dropdown-item" href="#">Reschedule</a></li>
                          <li><a className="dropdown-item" href="#">Cancel</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item px-0 py-2 border-0">
                    <div className="d-flex align-items-center">
                      <div className="bg-primary bg-opacity-10 rounded text-primary p-2 me-3">
                        <i className="bi bi-clock"></i>
                      </div>
                      <div className="me-auto">
                        <h6 className="mb-0">02:15 PM</h6>
                        <small className="text-muted">James Wilson</small>
                      </div>
                      <div className="dropdown">
                        <button className="btn btn-sm btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                          Actions
                        </button>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Prepare</a></li>
                          <li><a className="dropdown-item" href="#">Reschedule</a></li>
                          <li><a className="dropdown-item" href="#">Cancel</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="h6 mb-0">April 05, 2025</h5>
                  <span className="badge bg-primary rounded-pill">2</span>
                </div>
                <div className="list-group list-group-flush">
                  <div className="list-group-item px-0 py-2 border-0">
                    <div className="d-flex align-items-center">
                      <div className="bg-primary bg-opacity-10 rounded text-primary p-2 me-3">
                        <i className="bi bi-clock"></i>
                      </div>
                      <div className="me-auto">
                        <h6 className="mb-0">11:00 AM</h6>
                        <small className="text-muted">Emma Thompson</small>
                      </div>
                      <div className="dropdown">
                        <button className="btn btn-sm btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                          Actions
                        </button>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Prepare</a></li>
                          <li><a className="dropdown-item" href="#">Reschedule</a></li>
                          <li><a className="dropdown-item" href="#">Cancel</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item px-0 py-2 border-0">
                    <div className="d-flex align-items-center">
                      <div className="bg-primary bg-opacity-10 rounded text-primary p-2 me-3">
                        <i className="bi bi-clock"></i>
                      </div>
                      <div className="me-auto">
                        <h6 className="mb-0">03:45 PM</h6>
                        <small className="text-muted">Michael Davis</small>
                      </div>
                      <div className="dropdown">
                        <button className="btn btn-sm btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                          Actions
                        </button>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Prepare</a></li>
                          <li><a className="dropdown-item" href="#">Reschedule</a></li>
                          <li><a className="dropdown-item" href="#">Cancel</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* All Upcoming Appointments */}
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
            <h3 className="h5 mb-0">All Upcoming Appointments</h3>
            <div className="d-flex gap-2">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0">
                  <i className="bi bi-search"></i>
                </span>
                <input type="text" className="form-control border-start-0" placeholder="Search appointments..." />
              </div>
              <button className="btn btn-outline-primary">
                <i className="bi bi-filter me-2"></i>
                Filter
              </button>
            </div>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="bg-light">
                  <tr>
                    <th>Patient</th>
                    <th>Date & Time</th>
                    <th>Type</th>
                    <th>Condition</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img 
                            src={patient.photo} 
                            alt={patient.name} 
                            className="rounded-circle me-2"
                            width="40"
                            height="40"
                          />
                          <div>
                            <h6 className="mb-0">{patient.name}</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        April {10 + index}, 2025<br />
                        <small className="text-muted">{index % 2 === 0 ? '10:30 AM' : '02:15 PM'}</small>
                      </td>
                      <td>
                        <span className={`badge ${index % 2 === 0 ? 'bg-success' : 'bg-info text-dark'}`}>
                          {index % 2 === 0 ? 'In-person' : 'Video Call'}
                        </span>
                      </td>
                      <td>{patient.condition}</td>
                      <td>
                        <span className="badge bg-warning text-dark">Scheduled</span>
                      </td>
                      <td>
                        <div className="btn-group">
                          <button className="btn btn-sm btn-outline-primary">Details</button>
                          <button className="btn btn-sm btn-outline-secondary">Reschedule</button>
                          <button className="btn btn-sm btn-outline-danger">Cancel</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="card-footer bg-white py-3">
            <nav aria-label="Appointments pagination">
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
    );
  };
  
  const renderMedicalRecords = () => {
    return (
      <div className="dashboard-content p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h4 mb-0">Patient Medical Records</h2>
          <div className="d-flex gap-2">
            <select className="form-select" style={{ width: 'auto' }}>
              <option>Select Patient</option>
              {patients.map((patient, index) => (
                <option key={index} value={patient.id}>{patient.name}</option>
              ))}
            </select>
            <button className="btn btn-primary-custom">
              <i className="bi bi-plus-circle me-2"></i>
              Add Record
            </button>
          </div>
        </div>
        
        <div className="alert alert-info">
          <i className="bi bi-info-circle me-2"></i>
          Please select a patient to view their medical records
        </div>
        
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-header bg-white py-3">
            <h3 className="h5 mb-0">Sarah Johnson's Records</h3>
          </div>
          <div className="card-body">
            <div className="row g-3 mb-4">
              <div className="col-md-3">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="text-muted mb-2">Date of Birth</h6>
                    <p className="mb-0">June 15, 1985</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="text-muted mb-2">Diagnosis</h6>
                    <p className="mb-0">Type 2 Diabetes</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="text-muted mb-2">Last A1C</h6>
                    <p className="mb-0">7.2% (Mar 10, 2025)</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="text-muted mb-2">Blood Pressure</h6>
                    <p className="mb-0">125/82 (Mar 10, 2025)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <ul className="nav nav-tabs mb-4">
              <li className="nav-item">
                <a className="nav-link active" href="#">Medical History</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Lab Results</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Prescriptions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Notes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Attachments</a>
              </li>
            </ul>
            
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="bg-light">
                  <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Provider</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mar 10, 2025</td>
                    <td>
                      <span className="badge bg-primary">Consultation</span>
                    </td>
                    <td>Dr. Michael Chen</td>
                    <td>Regular checkup and A1C test</td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-primary">View</button>
                        <button className="btn btn-sm btn-outline-primary">Edit</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Feb 15, 2025</td>
                    <td>
                      <span className="badge bg-info text-dark">Test</span>
                    </td>
                    <td>HealthFirst Lab</td>
                    <td>Comprehensive blood panel</td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-primary">View</button>
                        <button className="btn btn-sm btn-outline-primary">Edit</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Jan 10, 2025</td>
                    <td>
                      <span className="badge bg-primary">Consultation</span>
                    </td>
                    <td>Dr. Michael Chen</td>
                    <td>Medication adjustment and nutrition plan</td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-primary">View</button>
                        <button className="btn btn-sm btn-outline-primary">Edit</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Dec 05, 2024</td>
                    <td>
                      <span className="badge bg-success">Procedure</span>
                    </td>
                    <td>Dr. James Wilson</td>
                    <td>Annual eye examination</td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-primary">View</button>
                        <button className="btn btn-sm btn-outline-primary">Edit</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Nov 12, 2024</td>
                    <td>
                      <span className="badge bg-info text-dark">Test</span>
                    </td>
                    <td>HealthFirst Lab</td>
                    <td>Lipid panel and kidney function tests</td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-primary">View</button>
                        <button className="btn btn-sm btn-outline-primary">Edit</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
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
                    {patients.map((patient, index) => (
                      <a 
                        key={index}
                        href="#" 
                        className={`list-group-item list-group-item-action px-3 py-3 ${index === 0 ? 'active' : ''}`}
                      >
                        <div className="d-flex">
                          <img 
                            src={patient.photo} 
                            className="rounded-circle me-3"
                            width="48"
                            height="48"
                            alt={patient.name}
                          />
                          <div className="flex-grow-1 overflow-hidden">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                              <h6 className="mb-0 text-truncate">{patient.name}</h6>
                              <small className={index === 0 ? 'text-white' : 'text-muted'}>10:23 AM</small>
                            </div>
                            <p className="mb-0 small text-truncate">
                              {index === 0 ? "Thanks for the update, Dr. Chen. I've been feeling a bit tired..." : "Hello Dr. Chen, I wanted to ask about my recent..."}
                            </p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-md-8 d-flex flex-column">
                <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img 
                      src={patients[0].photo} 
                      className="rounded-circle me-2"
                      width="40"
                      height="40"
                      alt={patients[0].name}
                    />
                    <div>
                      <h6 className="mb-0">{patients[0].name}</h6>
                      <small className="text-muted">{patients[0].condition}</small>
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
                      src={user.profileImage} 
                      className="rounded-circle mt-1 me-2 align-self-start"
                      width="32"
                      height="32"
                      alt={user.name}
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
                      src={user.profileImage} 
                      className="rounded-circle mt-1 me-2 align-self-start"
                      width="32"
                      height="32"
                      alt={user.name}
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
                      src={patients[0].photo} 
                      className="rounded-circle mt-1 ms-2 align-self-start"
                      width="32"
                      height="32"
                      alt={patients[0].name}
                    />
                  </div>
                  <div className="d-flex mb-3">
                    <img 
                      src={user.profileImage} 
                      className="rounded-circle mt-1 me-2 align-self-start"
                      width="32"
                      height="32"
                      alt={user.name}
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
                  <i className="bi bi-calendar-week me-2"></i> Schedule
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i className="bi bi-cash-stack me-2"></i> Billing
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-white py-3">
                <h3 className="h5 mb-0">Professional Information</h3>
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
                    <p className="text-muted mb-2">{user.specialty}</p>
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
                      <input type="tel" className="form-control" value="+1 (555) 987-6543" />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Specialty</label>
                      <input type="text" className="form-control" value={user.specialty} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">License Number</label>
                      <input type="text" className="form-control" value="MD12345678" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Primary Practice</label>
                    <input type="text" className="form-control" value={user.hospital} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Years of Experience</label>
                    <input type="text" className="form-control" value={user.experience} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Bio</label>
                    <textarea className="form-control" rows="4">Dr. Michael Chen is a board-certified Endocrinologist specializing in diabetes care and thyroid disorders. With 15 years of experience, he focuses on personalized treatment plans and preventative care for patients with endocrine conditions.</textarea>
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
        <DashboardSidebar role="doctor" activePage={activePage} setActivePage={setActivePage} />
        <div className="dashboard-main">
          <DashboardHeader user={user} pageTitle={activePage.charAt(0).toUpperCase() + activePage.slice(1).replace('-', ' ')} />
          {renderDashboardContent()}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DoctorDashboard;