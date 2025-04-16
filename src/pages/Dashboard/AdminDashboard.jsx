import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DashboardSidebar from '../../components/Dashboard/DashboardSidebar';
import DashboardHeader from '../../components/Dashboard/DashboardHeader';
import { investors, doctors, pendingUsers, adminStats } from '../../utils/mockData';

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState('overview');
  
  const user = {
    name: "Admin User",
    role: "admin",
    email: "admin@doccircle.com",
    profileImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200",
    adminLevel: "Super Admin",
    lastLogin: "April 02, 2025, 10:23 AM",
    twoFactorEnabled: true
  };

  const renderDashboardContent = () => {
    switch(activePage) {
      case 'overview':
        return renderOverview();
      case 'users':
        return renderUsers();
      case 'approvals':
        return renderApprovals();
      case 'analytics':
        return renderAnalytics();
      case 'settings':
        return renderSettings();
      default:
        return renderOverview();
    }
  };
  
  const renderOverview = () => {
    return (
      <div className="dashboard-content p-4">
        <h2 className="h4 mb-4">Admin Dashboard Overview</h2>
        
        {/* Stats Cards */}
        <div className="row g-3 mb-4">
          {adminStats.map(stat => (
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
        
        {/* Pending Approvals */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
            <h3 className="h5 mb-0">Pending Approvals</h3>
            <button className="btn btn-sm btn-outline-primary">View All</button>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="bg-light">
                  <tr>
                    <th>User</th>
                    <th>Role</th>
                    <th>Email</th>
                    <th>Request Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingUsers.slice(0, 5).map(user => (
                    <tr key={user.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img 
                            src={user.photo} 
                            alt={user.name} 
                            className="rounded-circle me-2"
                            width="40"
                            height="40"
                          />
                          <div>
                            <h6 className="mb-0">{user.name}</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className={`badge ${
                          user.role === 'doctor' ? 'bg-info' : 
                          user.role === 'investor' ? 'bg-success' : 
                          user.role === 'startup' ? 'bg-primary' : 
                          'bg-secondary'
                        }`}>
                          {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                        </span>
                      </td>
                      <td>{user.email}</td>
                      <td>{user.requestedOn}</td>
                      <td>
                        <span className={`badge ${
                          user.status === 'pending' ? 'bg-warning text-dark' : 
                          user.status === 'approved' ? 'bg-success' : 
                          'bg-danger'
                        }`}>
                          {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                        </span>
                      </td>
                      <td>
                        <div className="btn-group">
                          <button className="btn btn-sm btn-success">Approve</button>
                          <button className="btn btn-sm btn-danger">Reject</button>
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
                  <i className="bi bi-person-check text-primary"></i>
                </div>
                <div className="me-auto">
                  <p className="mb-0">Administrator <strong>John Smith</strong> approved <strong>Dr. Michael Chen</strong>'s account</p>
                  <small className="text-muted">2 hours ago</small>
                </div>
              </div>
              <div className="list-group-item px-4 py-3 d-flex align-items-center">
                <div className="rounded-circle bg-success bg-opacity-10 p-2 me-3">
                  <i className="bi bi-gear text-success"></i>
                </div>
                <div className="me-auto">
                  <p className="mb-0">Updated platform settings: <strong>Two-factor authentication</strong> is now required for all new users</p>
                  <small className="text-muted">Yesterday</small>
                </div>
              </div>
              <div className="list-group-item px-4 py-3 d-flex align-items-center">
                <div className="rounded-circle bg-danger bg-opacity-10 p-2 me-3">
                  <i className="bi bi-person-x text-danger"></i>
                </div>
                <div className="me-auto">
                  <p className="mb-0">Administrator <strong>Jane Doe</strong> rejected <strong>MediTech Solutions</strong>'s startup application</p>
                  <small className="text-muted">2 days ago</small>
                </div>
              </div>
              <div className="list-group-item px-4 py-3 d-flex align-items-center">
                <div className="rounded-circle bg-info bg-opacity-10 p-2 me-3">
                  <i className="bi bi-database-add text-info"></i>
                </div>
                <div className="me-auto">
                  <p className="mb-0">System backup completed successfully. <strong>Database version: 2.4.5</strong></p>
                  <small className="text-muted">3 days ago</small>
                </div>
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
  
  const renderUsers = () => {
    return (
      <div className="dashboard-content p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h4 mb-0">User Management</h2>
          <div className="d-flex gap-2">
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <i className="bi bi-search"></i>
              </span>
              <input type="text" className="form-control border-start-0" placeholder="Search users..." />
            </div>
            <select className="form-select" style={{ width: 'auto' }}>
              <option>All Roles</option>
              <option>Investors</option>
              <option>Startups</option>
              <option>Doctors</option>
              <option>Patients</option>
              <option>Admins</option>
            </select>
            <button className="btn btn-primary-custom">
              <i className="bi bi-plus-circle me-2"></i>
              Add User
            </button>
          </div>
        </div>
        
        <div className="card border-0 shadow-sm">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="bg-light">
                  <tr>
                    <th>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="selectAllUsers" />
                      </div>
                    </th>
                    <th>User</th>
                    <th>Role</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Joined Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Admin Users */}
                  <tr>
                    <td>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="user1" />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img 
                          src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200" 
                          alt="Admin User" 
                          className="rounded-circle me-2"
                          width="40"
                          height="40"
                        />
                        <div>
                          <h6 className="mb-0">John Smith</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-dark">Admin</span>
                    </td>
                    <td>john.smith@doccircle.com</td>
                    <td>
                      <span className="badge bg-success">Active</span>
                    </td>
                    <td>Jan 10, 2024</td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-sm btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                          Actions
                        </button>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">View Profile</a></li>
                          <li><a className="dropdown-item" href="#">Edit User</a></li>
                          <li><a className="dropdown-item" href="#">Reset Password</a></li>
                          <li><hr className="dropdown-divider" /></li>
                          <li><a className="dropdown-item text-danger" href="#">Deactivate</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="user2" />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img 
                          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200&h=200" 
                          alt="Admin User" 
                          className="rounded-circle me-2"
                          width="40"
                          height="40"
                        />
                        <div>
                          <h6 className="mb-0">Jane Doe</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-dark">Admin</span>
                    </td>
                    <td>jane.doe@doccircle.com</td>
                    <td>
                      <span className="badge bg-success">Active</span>
                    </td>
                    <td>Feb 15, 2024</td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-sm btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                          Actions
                        </button>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">View Profile</a></li>
                          <li><a className="dropdown-item" href="#">Edit User</a></li>
                          <li><a className="dropdown-item" href="#">Reset Password</a></li>
                          <li><hr className="dropdown-divider" /></li>
                          <li><a className="dropdown-item text-danger" href="#">Deactivate</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  
                  {/* Doctor Users */}
                  {doctors.slice(0, 2).map((doctor, index) => (
                    <tr key={index}>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id={`doctor${index}`} />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img 
                            src={doctor.photo} 
                            alt={doctor.name} 
                            className="rounded-circle me-2"
                            width="40"
                            height="40"
                          />
                          <div>
                            <h6 className="mb-0">{doctor.name}</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge bg-info">Doctor</span>
                      </td>
                      <td>{doctor.name.toLowerCase().replace(' ', '.').replace(' ', '')}@medical.com</td>
                      <td>
                        <span className="badge bg-success">Active</span>
                      </td>
                      <td>Mar 5, 2025</td>
                      <td>
                        <div className="dropdown">
                          <button className="btn btn-sm btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Actions
                          </button>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">View Profile</a></li>
                            <li><a className="dropdown-item" href="#">Edit User</a></li>
                            <li><a className="dropdown-item" href="#">Reset Password</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item text-danger" href="#">Deactivate</a></li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  ))}
                  
                  {/* Investor Users */}
                  {investors.slice(0, 2).map((investor, index) => (
                    <tr key={index}>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id={`investor${index}`} />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img 
                            src={investor.photo} 
                            alt={investor.name} 
                            className="rounded-circle me-2"
                            width="40"
                            height="40"
                          />
                          <div>
                            <h6 className="mb-0">{investor.name}</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge bg-success">Investor</span>
                      </td>
                      <td>{investor.name.toLowerCase().replace(' ', '.').replace(' ', '')}@investor.com</td>
                      <td>
                        <span className="badge bg-success">Active</span>
                      </td>
                      <td>Feb 20, 2025</td>
                      <td>
                        <div className="dropdown">
                          <button className="btn btn-sm btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Actions
                          </button>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">View Profile</a></li>
                            <li><a className="dropdown-item" href="#">Edit User</a></li>
                            <li><a className="dropdown-item" href="#">Reset Password</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item text-danger" href="#">Deactivate</a></li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  ))}
                  
                  {/* Showing an Inactive User */}
                  <tr>
                    <td>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="userInactive" />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img 
                          src="https://images.unsplash.com/photo-1605664041952-4a2855d9c4c6?auto=format&fit=crop&q=80&w=200&h=200" 
                          alt="Inactive User" 
                          className="rounded-circle me-2"
                          width="40"
                          height="40"
                        />
                        <div>
                          <h6 className="mb-0">Robert Johnson</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-primary">Startup</span>
                    </td>
                    <td>robert.johnson@startup.com</td>
                    <td>
                      <span className="badge bg-secondary">Inactive</span>
                    </td>
                    <td>Jan 05, 2025</td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-sm btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                          Actions
                        </button>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">View Profile</a></li>
                          <li><a className="dropdown-item" href="#">Edit User</a></li>
                          <li><a className="dropdown-item" href="#">Reset Password</a></li>
                          <li><hr className="dropdown-divider" /></li>
                          <li><a className="dropdown-item text-success" href="#">Activate</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card-footer bg-white py-3">
            <div className="row align-items-center">
              <div className="col-md-6 mb-3 mb-md-0">
                <div className="d-flex align-items-center">
                  <p className="mb-0 me-3">Showing 1 to 7 of 248 users</p>
                  <div className="btn-group">
                    <button className="btn btn-sm btn-outline-primary">Export</button>
                    <button className="btn btn-sm btn-outline-danger">Delete Selected</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <nav aria-label="User pagination">
                  <ul className="pagination justify-content-md-end justify-content-center mb-0">
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
  
  const renderApprovals = () => {
    return (
      <div className="dashboard-content p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h4 mb-0">User Approval Requests</h2>
          <div className="d-flex gap-2">
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <i className="bi bi-search"></i>
              </span>
              <input type="text" className="form-control border-start-0" placeholder="Search requests..." />
            </div>
            <select className="form-select" style={{ width: 'auto' }}>
              <option>All Statuses</option>
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
            <button className="btn btn-primary-custom">
              <i className="bi bi-check2-all me-2"></i>
              Batch Approve
            </button>
          </div>
        </div>
        
        <ul className="nav nav-tabs mb-4">
          <li className="nav-item">
            <a className="nav-link active" href="#">All Requests (24)</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pending (15)</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Approved (5)</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Rejected (4)</a>
          </li>
        </ul>
        
        <div className="card border-0 shadow-sm">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="bg-light">
                  <tr>
                    <th>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="selectAllRequests" />
                      </div>
                    </th>
                    <th>User</th>
                    <th>Role</th>
                    <th>Email</th>
                    <th>Requested On</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingUsers.map(user => (
                    <tr key={user.id}>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id={`user${user.id}`} />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img 
                            src={user.photo} 
                            alt={user.name} 
                            className="rounded-circle me-2"
                            width="40"
                            height="40"
                          />
                          <div>
                            <h6 className="mb-0">{user.name}</h6>
                            {user.specialty && (
                              <small className="text-muted">{user.specialty}</small>
                            )}
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className={`badge ${
                          user.role === 'doctor' ? 'bg-info' : 
                          user.role === 'investor' ? 'bg-success' : 
                          user.role === 'startup' ? 'bg-primary' : 
                          'bg-secondary'
                        }`}>
                          {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                        </span>
                      </td>
                      <td>{user.email}</td>
                      <td>{user.requestedOn}</td>
                      <td>
                        <span className={`badge ${
                          user.status === 'pending' ? 'bg-warning text-dark' : 
                          user.status === 'approved' ? 'bg-success' : 
                          'bg-danger'
                        }`}>
                          {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                        </span>
                      </td>
                      <td>
                        <div className="btn-group">
                          <button className="btn btn-sm btn-primary-custom">View</button>
                          {user.status === 'pending' ? (
                            <>
                              <button className="btn btn-sm btn-success">Approve</button>
                              <button className="btn btn-sm btn-danger">Reject</button>
                            </>
                          ) : (
                            <button className="btn btn-sm btn-outline-primary">Details</button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="card-footer bg-white py-3">
            <div className="row align-items-center">
              <div className="col-md-6 mb-3 mb-md-0">
                <p className="mb-0">Showing 1 to 6 of 24 requests</p>
              </div>
              <div className="col-md-6">
                <nav aria-label="Approval requests pagination">
                  <ul className="pagination justify-content-md-end justify-content-center mb-0">
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
  
  const renderAnalytics = () => {
    return (
      <div className="dashboard-content p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h4 mb-0">Platform Analytics</h2>
          <div className="d-flex gap-2">
            <select className="form-select">
              <option>Last 30 Days</option>
              <option>Last Quarter</option>
              <option>Last 6 Months</option>
              <option>Last Year</option>
              <option>All Time</option>
            </select>
            <button className="btn btn-outline-primary">
              <i className="bi bi-download me-2"></i>
              Export
            </button>
          </div>
        </div>
        
        {/* User Metrics */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-header bg-white py-3">
            <h3 className="h5 mb-0">User Metrics</h3>
          </div>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-3">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="text-muted mb-2">Total Users</h6>
                    <h3 className="mb-0">2,845</h3>
                    <small className="text-muted">across all roles</small>
                    <div className="mt-2 small text-success">
                      <i className="bi bi-arrow-up me-1"></i>
                      15% from last month
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="text-muted mb-2">New Users</h6>
                    <h3 className="mb-0">342</h3>
                    <small className="text-muted">this month</small>
                    <div className="mt-2 small text-success">
                      <i className="bi bi-arrow-up me-1"></i>
                      8% from last month
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="text-muted mb-2">Active Users</h6>
                    <h3 className="mb-0">1,764</h3>
                    <small className="text-muted">last 30 days</small>
                    <div className="mt-2 small text-success">
                      <i className="bi bi-arrow-up me-1"></i>
                      12% from last month
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="text-muted mb-2">Conversion Rate</h6>
                    <h3 className="mb-0">68%</h3>
                    <small className="text-muted">signup to active</small>
                    <div className="mt-2 small text-success">
                      <i className="bi bi-arrow-up me-1"></i>
                      3% from last month
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="h6 mb-3">User Growth</h4>
              <div className="bg-light p-3 rounded">
                <div className="d-flex justify-content-between text-center mb-3">
                  <div className="px-3">
                    <h5 className="h6 text-primary">720</h5>
                    <small className="text-muted">Doctors</small>
                  </div>
                  <div className="px-3">
                    <h5 className="h6 text-success">485</h5>
                    <small className="text-muted">Investors</small>
                  </div>
                  <div className="px-3">
                    <h5 className="h6 text-info">325</h5>
                    <small className="text-muted">Startups</small>
                  </div>
                  <div className="px-3">
                    <h5 className="h6 text-warning">1,315</h5>
                    <small className="text-muted">Patients</small>
                  </div>
                </div>
                
                {/* This would be a chart in a real app */}
                <div style={{ height: '250px', background: 'rgba(0,0,0,0.05)' }} className="d-flex align-items-center justify-content-center">
                  <p className="text-muted mb-0">User Growth Chart Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Platform Engagement */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-header bg-white py-3">
            <h3 className="h5 mb-0">Platform Engagement</h3>
          </div>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-4">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="text-muted mb-2">Connections Made</h6>
                    <h3 className="mb-0">1,487</h3>
                    <small className="text-muted">total connections</small>
                    <div className="mt-2 small text-success">
                      <i className="bi bi-arrow-up me-1"></i>
                      24% from last month
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="text-muted mb-2">Messages Sent</h6>
                    <h3 className="mb-0">12,456</h3>
                    <small className="text-muted">this month</small>
                    <div className="mt-2 small text-success">
                      <i className="bi bi-arrow-up me-1"></i>
                      18% from last month
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="text-muted mb-2">Appointments Booked</h6>
                    <h3 className="mb-0">842</h3>
                    <small className="text-muted">this month</small>
                    <div className="mt-2 small text-success">
                      <i className="bi bi-arrow-up me-1"></i>
                      15% from last month
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="row g-3 mt-3">
              <div className="col-md-6">
                <div className="card h-100 border-0">
                  <div className="card-body">
                    <h4 className="h6 mb-3">Investment Activity</h4>
                    {/* This would be a chart in a real app */}
                    <div style={{ height: '200px', background: 'rgba(0,0,0,0.05)' }} className="d-flex align-items-center justify-content-center mb-3">
                      <p className="text-muted mb-0">Investment Activity Chart Placeholder</p>
                    </div>
                    <div className="d-flex justify-content-between text-center">
                      <div>
                        <h5 className="h6 mb-0">$42.5M</h5>
                        <small className="text-muted">Total Investments</small>
                      </div>
                      <div>
                        <h5 className="h6 mb-0">67</h5>
                        <small className="text-muted">Funding Rounds</small>
                      </div>
                      <div>
                        <h5 className="h6 mb-0">$634K</h5>
                        <small className="text-muted">Avg. Investment</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0">
                  <div className="card-body">
                    <h4 className="h6 mb-3">Healthcare Consultations</h4>
                    {/* This would be a chart in a real app */}
                    <div style={{ height: '200px', background: 'rgba(0,0,0,0.05)' }} className="d-flex align-items-center justify-content-center mb-3">
                      <p className="text-muted mb-0">Consultations Chart Placeholder</p>
                    </div>
                    <div className="d-flex justify-content-between text-center">
                      <div>
                        <h5 className="h6 mb-0">4,872</h5>
                        <small className="text-muted">Total Consultations</small>
                      </div>
                      <div>
                        <h5 className="h6 mb-0">78%</h5>
                        <small className="text-muted">Video Calls</small>
                      </div>
                      <div>
                        <h5 className="h6 mb-0">45 min</h5>
                        <small className="text-muted">Avg. Duration</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* System Performance */}
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-white py-3">
            <h3 className="h5 mb-0">System Performance</h3>
          </div>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-3">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="text-muted mb-2">Uptime</h6>
                    <h3 className="mb-0">99.97%</h3>
                    <small className="text-muted">last 30 days</small>
                    <div className="mt-2 small text-success">
                      <i className="bi bi-check-circle me-1"></i>
                      SLA requirements met
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="text-muted mb-2">Response Time</h6>
                    <h3 className="mb-0">187ms</h3>
                    <small className="text-muted">average</small>
                    <div className="mt-2 small text-success">
                      <i className="bi bi-arrow-down me-1"></i>
                      12ms from last month
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="text-muted mb-2">Error Rate</h6>
                    <h3 className="mb-0">0.05%</h3>
                    <small className="text-muted">last 24 hours</small>
                    <div className="mt-2 small text-success">
                      <i className="bi bi-arrow-down me-1"></i>
                      0.02% from yesterday
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="text-muted mb-2">API Calls</h6>
                    <h3 className="mb-0">3.4M</h3>
                    <small className="text-muted">last 24 hours</small>
                    <div className="mt-2 small text-success">
                      <i className="bi bi-arrow-up me-1"></i>
                      8% from yesterday
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="h6 mb-3">Server Load</h4>
              {/* This would be a chart in a real app */}
              <div style={{ height: '200px', background: 'rgba(0,0,0,0.05)' }} className="d-flex align-items-center justify-content-center">
                <p className="text-muted mb-0">Server Load Chart Placeholder</p>
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
        <h2 className="h4 mb-4">Admin Settings</h2>
        
        <div className="row">
          <div className="col-lg-3 mb-4 mb-lg-0">
            <div className="card border-0 shadow-sm">
              <div className="list-group list-group-flush">
                <a href="#" className="list-group-item list-group-item-action active">
                  <i className="bi bi-gear me-2"></i> General Settings
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i className="bi bi-shield-lock me-2"></i> Security
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i className="bi bi-envelope me-2"></i> Email Templates
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i className="bi bi-bell me-2"></i> Notifications
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i className="bi bi-credit-card me-2"></i> Billing
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i className="bi bi-people me-2"></i> Admin Users
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i className="bi bi-database me-2"></i> Backups
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-white py-3">
                <h3 className="h5 mb-0">General Settings</h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Platform Name</label>
                    <input type="text" className="form-control" value="DocCircle" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Admin Contact Email</label>
                    <input type="email" className="form-control" value="admin@doccircle.com" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Support Email</label>
                    <input type="email" className="form-control" value="support@doccircle.com" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Default Language</label>
                    <select className="form-select">
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                      <option value="zh">Chinese</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Time Zone</label>
                    <select className="form-select">
                      <option value="UTC">UTC (Coordinated Universal Time)</option>
                      <option value="EST" selected>EST (Eastern Standard Time)</option>
                      <option value="CST">CST (Central Standard Time)</option>
                      <option value="PST">PST (Pacific Standard Time)</option>
                      <option value="GMT">GMT (Greenwich Mean Time)</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Date Format</label>
                    <select className="form-select">
                      <option value="MM/DD/YYYY" selected>MM/DD/YYYY</option>
                      <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="maintenanceMode" />
                      <label className="form-check-label" htmlFor="maintenanceMode">Maintenance Mode</label>
                    </div>
                    <small className="text-muted d-block mt-1">
                      When enabled, the platform will be unavailable to regular users and display a maintenance message.
                    </small>
                  </div>
                  
                  <button type="submit" className="btn btn-primary-custom">Save Changes</button>
                </form>
              </div>
            </div>
            
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-white py-3">
                <h3 className="h5 mb-0">User Registration Settings</h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="userSignups" checked />
                      <label className="form-check-label" htmlFor="userSignups">Allow User Signups</label>
                    </div>
                    <small className="text-muted d-block mt-1">
                      When disabled, new users cannot register for accounts.
                    </small>
                  </div>
                  
                  <div className="mb-3">
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="adminApproval" checked />
                      <label className="form-check-label" htmlFor="adminApproval">Require Admin Approval</label>
                    </div>
                    <small className="text-muted d-block mt-1">
                      When enabled, new user accounts require administrator approval before activation.
                    </small>
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label">Default User Role</label>
                    <select className="form-select">
                      <option>Patient</option>
                      <option>Doctor</option>
                      <option>Investor</option>
                      <option>Startup</option>
                    </select>
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label">Available Roles for Signup</label>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="patientRole" checked />
                      <label className="form-check-label" htmlFor="patientRole">
                        Patient
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="doctorRole" checked />
                      <label className="form-check-label" htmlFor="doctorRole">
                        Doctor
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="investorRole" checked />
                      <label className="form-check-label" htmlFor="investorRole">
                        Investor
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="startupRole" checked />
                      <label className="form-check-label" htmlFor="startupRole">
                        Startup
                      </label>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="emailVerification" checked />
                      <label className="form-check-label" htmlFor="emailVerification">Require Email Verification</label>
                    </div>
                    <small className="text-muted d-block mt-1">
                      When enabled, new users must verify their email address before accessing their account.
                    </small>
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
        <DashboardSidebar role="admin" activePage={activePage} setActivePage={setActivePage} />
        <div className="dashboard-main">
          <DashboardHeader user={user} pageTitle={activePage.charAt(0).toUpperCase() + activePage.slice(1).replace('-', ' ')} />
          {renderDashboardContent()}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;