import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DashboardSidebar from '../../components/Dashboard/DashboardSidebar';
import DashboardHeader from '../../components/Dashboard/DashboardHeader';
import { investors, startupStats } from '../../utils/mockData';

const StartupDashboard = () => {
  const [activePage, setActivePage] = useState('overview');
  
  const user = {
    name: "Michael Chen",
    role: "startup",
    email: "michael@neuratech.io",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    company: "NeuraTech AI",
    category: "AI Diagnostics",
    fundingStage: "Series A",
    fundingGoal: "$5,000,000",
    fundingRaised: "$3,200,000",
    pitchDeckViews: 145,
    investorInterest: 28,
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=200&h=200"
  };

  const renderDashboardContent = () => {
    switch(activePage) {
      case 'overview':
        return renderOverview();
      case 'investors':
        return renderInvestors();
      case 'pitch-deck':
        return renderPitchDeck();
      case 'funding':
        return renderFunding();
      case 'metrics':
        return renderMetrics();
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
          {startupStats.map(stat => (
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
        
        {/* Funding Progress */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-header bg-white py-3">
            <h3 className="h5 mb-0">Funding Progress</h3>
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-between mb-1">
              <span>Total Raised: <strong>{user.fundingRaised}</strong></span>
              <span>Goal: <strong>{user.fundingGoal}</strong></span>
            </div>
            <div className="progress mb-3" style={{ height: '1rem' }}>
              <div 
                className="progress-bar bg-primary" 
                role="progressbar" 
                style={{ width: '64%' }} 
                aria-valuenow="64" 
                aria-valuemin="0" 
                aria-valuemax="100"
              >
                64%
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-6">
                <h4 className="h6 mb-3">Recent Investments</h4>
                <div className="list-group list-group-flush">
                  <div className="list-group-item px-0 py-3 d-flex align-items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=50&h=50" 
                      alt="Investor" 
                      className="rounded-circle me-3"
                      width="40"
                      height="40"
                    />
                    <div className="me-auto">
                      <h6 className="mb-0">Venture Health Capital</h6>
                      <small className="text-success">$500,000 - Mar 15, 2025</small>
                    </div>
                  </div>
                  <div className="list-group-item px-0 py-3 d-flex align-items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=50&h=50" 
                      alt="Investor" 
                      className="rounded-circle me-3"
                      width="40"
                      height="40"
                    />
                    <div className="me-auto">
                      <h6 className="mb-0">HealthTech Partners</h6>
                      <small className="text-success">$750,000 - Feb 28, 2025</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h4 className="h6 mb-3">Upcoming Milestones</h4>
                <div className="list-group list-group-flush">
                  <div className="list-group-item px-0 py-3 d-flex align-items-center">
                    <div className="rounded-circle bg-primary bg-opacity-10 p-2 me-3">
                      <i className="bi bi-check-circle text-primary"></i>
                    </div>
                    <div className="me-auto">
                      <h6 className="mb-0">FDA Submission</h6>
                      <small className="text-muted">Due: June 15, 2025</small>
                    </div>
                    <span className="badge bg-warning text-dark">In Progress</span>
                  </div>
                  <div className="list-group-item px-0 py-3 d-flex align-items-center">
                    <div className="rounded-circle bg-primary bg-opacity-10 p-2 me-3">
                      <i className="bi bi-check-circle text-primary"></i>
                    </div>
                    <div className="me-auto">
                      <h6 className="mb-0">Clinical Trial Completion</h6>
                      <small className="text-muted">Due: August 30, 2025</small>
                    </div>
                    <span className="badge bg-info text-dark">Planned</span>
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
                <div className="rounded-circle bg-success bg-opacity-10 p-2 me-3">
                  <i className="bi bi-eye text-success"></i>
                </div>
                <div className="me-auto">
                  <p className="mb-0"><strong>Alexandra Smith</strong> viewed your pitch deck</p>
                  <small className="text-muted">2 hours ago</small>
                </div>
                <button className="btn btn-sm btn-outline-primary">Follow Up</button>
              </div>
              <div className="list-group-item px-4 py-3 d-flex align-items-center">
                <div className="rounded-circle bg-primary bg-opacity-10 p-2 me-3">
                  <i className="bi bi-chat-dots text-primary"></i>
                </div>
                <div className="me-auto">
                  <p className="mb-0">New message from <strong>HealthTech Partners</strong></p>
                  <small className="text-muted">Yesterday</small>
                </div>
                <button className="btn btn-sm btn-outline-primary">View</button>
              </div>
              <div className="list-group-item px-4 py-3 d-flex align-items-center">
                <div className="rounded-circle bg-warning bg-opacity-10 p-2 me-3">
                  <i className="bi bi-calendar-event text-warning"></i>
                </div>
                <div className="me-auto">
                  <p className="mb-0">Scheduled investor pitch with <strong>Medical Innovation Fund</strong></p>
                  <small className="text-muted">2 days ago</small>
                </div>
                <button className="btn btn-sm btn-outline-primary">View</button>
              </div>
              <div className="list-group-item px-4 py-3 d-flex align-items-center">
                <div className="rounded-circle bg-info bg-opacity-10 p-2 me-3">
                  <i className="bi bi-clipboard-check text-info"></i>
                </div>
                <div className="me-auto">
                  <p className="mb-0">Due diligence request from <strong>Dr. James Wilson</strong></p>
                  <small className="text-muted">3 days ago</small>
                </div>
                <button className="btn btn-sm btn-outline-primary">Review</button>
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
  
  const renderInvestors = () => {
    return (
      <div className="dashboard-content p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h4 mb-0">Investor Network</h2>
          <div className="d-flex gap-2">
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <i className="bi bi-search"></i>
              </span>
              <input type="text" className="form-control border-start-0" placeholder="Search investors..." />
            </div>
            <select className="form-select" style={{ width: 'auto' }}>
              <option>All Investors</option>
              <option>Engaged</option>
              <option>Interested</option>
              <option>Not Contacted</option>
            </select>
          </div>
        </div>
        
        <div className="row g-3">
          {investors.map(investor => (
            <div key={investor.id} className="col-md-6 col-xl-4">
              <div className="card h-100 border shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <img src={investor.photo} alt={investor.name} className="me-3 rounded-circle" width="60" height="60" />
                    <div>
                      <h4 className="h6 mb-0">{investor.name}</h4>
                      <p className="text-muted small mb-0">{investor.company}</p>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <small className="text-muted">Investment Range:</small>
                      <small><strong>{investor.investmentRange}</strong></small>
                    </div>
                    <div className="d-flex justify-content-between mb-1">
                      <small className="text-muted">Portfolio:</small>
                      <small><strong>{investor.portfolio}</strong></small>
                    </div>
                    <div className="d-flex justify-content-between mb-1">
                      <small className="text-muted">Match Score:</small>
                      <small className="text-success"><strong>85%</strong></small>
                    </div>
                  </div>
                  
                  <div className="d-flex gap-2">
                    <button className="btn btn-sm btn-primary-custom flex-grow-1">Connect</button>
                    <button className="btn btn-sm btn-outline-primary flex-grow-1">View Profile</button>
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
  
  const renderPitchDeck = () => {
    return (
      <div className="dashboard-content p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h4 mb-0">Pitch Deck & Materials</h2>
          <button className="btn btn-primary-custom">
            <i className="bi bi-upload me-2"></i>
            Upload New
          </button>
        </div>
        
        {/* Pitch Deck Stats */}
        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h3 className="h6 text-muted mb-2">Total Views</h3>
                <h4 className="h3 mb-0">{user.pitchDeckViews}</h4>
                <div className="small text-success mt-2">
                  <i className="bi bi-arrow-up me-1"></i>
                  23% from last month
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h3 className="h6 text-muted mb-2">Investor Interest</h3>
                <h4 className="h3 mb-0">{user.investorInterest}</h4>
                <div className="small text-success mt-2">
                  <i className="bi bi-arrow-up me-1"></i>
                  5 new this week
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h3 className="h6 text-muted mb-2">Average Time Spent</h3>
                <h4 className="h3 mb-0">4:32</h4>
                <div className="small text-success mt-2">
                  <i className="bi bi-arrow-up me-1"></i>
                  45 seconds from last month
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Current Materials */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-header bg-white py-3">
            <h3 className="h5 mb-0">Current Materials</h3>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="bg-light">
                  <tr>
                    <th>File Name</th>
                    <th>Type</th>
                    <th>Uploaded</th>
                    <th>Size</th>
                    <th>Views</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="bg-primary bg-opacity-10 p-2 rounded me-3">
                          <i className="bi bi-file-earmark-slides text-primary"></i>
                        </div>
                        <div>
                          <p className="mb-0">NeuraTech_Pitch_Deck_v3.pdf</p>
                        </div>
                      </div>
                    </td>
                    <td>Pitch Deck</td>
                    <td>Mar 10, 2025</td>
                    <td>8.5 MB</td>
                    <td>98</td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-primary">
                          <i className="bi bi-eye"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-primary">
                          <i className="bi bi-download"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-danger">
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="bg-info bg-opacity-10 p-2 rounded me-3">
                          <i className="bi bi-file-earmark-text text-info"></i>
                        </div>
                        <div>
                          <p className="mb-0">NeuraTech_Executive_Summary.pdf</p>
                        </div>
                      </div>
                    </td>
                    <td>Executive Summary</td>
                    <td>Mar 5, 2025</td>
                    <td>2.1 MB</td>
                    <td>76</td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-primary">
                          <i className="bi bi-eye"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-primary">
                          <i className="bi bi-download"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-danger">
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="bg-success bg-opacity-10 p-2 rounded me-3">
                          <i className="bi bi-file-earmark-spreadsheet text-success"></i>
                        </div>
                        <div>
                          <p className="mb-0">NeuraTech_Financial_Projections.xlsx</p>
                        </div>
                      </div>
                    </td>
                    <td>Financial Model</td>
                    <td>Feb 28, 2025</td>
                    <td>4.2 MB</td>
                    <td>32</td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-primary">
                          <i className="bi bi-eye"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-primary">
                          <i className="bi bi-download"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-danger">
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="bg-warning bg-opacity-10 p-2 rounded me-3">
                          <i className="bi bi-file-earmark-medical text-warning"></i>
                        </div>
                        <div>
                          <p className="mb-0">NeuraTech_Clinical_Results.pdf</p>
                        </div>
                      </div>
                    </td>
                    <td>Clinical Data</td>
                    <td>Feb 15, 2025</td>
                    <td>6.8 MB</td>
                    <td>47</td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-primary">
                          <i className="bi bi-eye"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-primary">
                          <i className="bi bi-download"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-danger">
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Recent Viewers */}
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-white py-3">
            <h3 className="h5 mb-0">Recent Viewers</h3>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="bg-light">
                  <tr>
                    <th>Investor</th>
                    <th>Material</th>
                    <th>View Date</th>
                    <th>Time Spent</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {investors.slice(0, 4).map((investor, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src={investor.photo} alt={investor.name} className="me-3 rounded-circle" width="40" height="40" />
                          <div>
                            <h6 className="mb-0">{investor.name}</h6>
                            <small className="text-muted">{investor.company}</small>
                          </div>
                        </div>
                      </td>
                      <td>NeuraTech_Pitch_Deck_v3.pdf</td>
                      <td>{index === 0 ? '2 hours ago' : index === 1 ? 'Yesterday' : index === 2 ? '2 days ago' : '3 days ago'}</td>
                      <td>{index === 0 ? '5:23' : index === 1 ? '3:47' : index === 2 ? '6:12' : '2:30'}</td>
                      <td>
                        <button className="btn btn-sm btn-primary-custom">Follow Up</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const renderFunding = () => {
    return (
      <div className="dashboard-content p-4">
        <h2 className="h4 mb-4">Funding</h2>
        
        {/* Funding Progress */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-8">
                <h3 className="h5 mb-4">Current Round: Series A</h3>
                <div className="d-flex justify-content-between mb-1">
                  <span>Total Raised: <strong>{user.fundingRaised}</strong></span>
                  <span>Goal: <strong>{user.fundingGoal}</strong></span>
                </div>
                <div className="progress mb-3" style={{ height: '1.5rem' }}>
                  <div 
                    className="progress-bar bg-primary" 
                    role="progressbar" 
                    style={{ width: '64%' }} 
                    aria-valuenow="64" 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  >
                    64%
                  </div>
                </div>
                <div className="d-flex gap-2 mb-4">
                  <button className="btn btn-primary-custom">
                    <i className="bi bi-plus-circle me-2"></i>
                    Add Investment
                  </button>
                  <button className="btn btn-outline-primary">
                    <i className="bi bi-pencil me-2"></i>
                    Edit Round Details
                  </button>
                </div>
                <div>
                  <h4 className="h6 mb-3">Round Details</h4>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <small className="text-muted d-block mb-1">Pre-money Valuation</small>
                        <strong>$25,000,000</strong>
                      </div>
                      <div className="mb-3">
                        <small className="text-muted d-block mb-1">Target Close Date</small>
                        <strong>July 15, 2025</strong>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <small className="text-muted d-block mb-1">Minimum Investment</small>
                        <strong>$250,000</strong>
                      </div>
                      <div className="mb-3">
                        <small className="text-muted d-block mb-1">Round Type</small>
                        <strong>Equity</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card h-100 bg-light border-0 p-3">
                  <h4 className="h6 mb-3">Funding Timeline</h4>
                  <div className="mb-4">
                    <div className="d-flex justify-content-between mb-1">
                      <small className="text-muted">Seed Round</small>
                      <small className="text-success">Completed</small>
                    </div>
                    <p className="small mb-0">$1.2M raised - August 2023</p>
                  </div>
                  <div className="mb-4">
                    <div className="d-flex justify-content-between mb-1">
                      <small className="text-muted">Series A</small>
                      <small className="text-warning">In Progress</small>
                    </div>
                    <p className="small mb-0">$3.2M / $5M - Target close: July 2025</p>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between mb-1">
                      <small className="text-muted">Series B</small>
                      <small className="text-muted">Planned</small>
                    </div>
                    <p className="small mb-0">$10M - Target: Q2 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Current Investors */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-header bg-white py-3">
            <h3 className="h5 mb-0">Current Investors</h3>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="bg-light">
                  <tr>
                    <th>Investor</th>
                    <th>Amount</th>
                    <th>Investment Date</th>
                    <th>Round</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src={investors[0].photo} alt={investors[0].name} className="me-2 rounded-circle" width="40" height="40" />
                        <div>
                          <h6 className="mb-0">{investors[0].name}</h6>
                          <small className="text-muted">{investors[0].company}</small>
                        </div>
                      </div>
                    </td>
                    <td>$500,000</td>
                    <td>Mar 15, 2025</td>
                    <td>Series A</td>
                    <td><span className="badge bg-success">Completed</span></td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary">Details</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src={investors[1].photo} alt={investors[1].name} className="me-2 rounded-circle" width="40" height="40" />
                        <div>
                          <h6 className="mb-0">{investors[1].name}</h6>
                          <small className="text-muted">{investors[1].company}</small>
                        </div>
                      </div>
                    </td>
                    <td>$750,000</td>
                    <td>Feb 28, 2025</td>
                    <td>Series A</td>
                    <td><span className="badge bg-success">Completed</span></td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary">Details</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src={investors[2].photo} alt={investors[2].name} className="me-2 rounded-circle" width="40" height="40" />
                        <div>
                          <h6 className="mb-0">{investors[2].name}</h6>
                          <small className="text-muted">{investors[2].company}</small>
                        </div>
                      </div>
                    </td>
                    <td>$1,000,000</td>
                    <td>Jan 15, 2025</td>
                    <td>Series A</td>
                    <td><span className="badge bg-success">Completed</span></td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary">Details</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src={investors[3].photo} alt={investors[3].name} className="me-2 rounded-circle" width="40" height="40" />
                        <div>
                          <h6 className="mb-0">{investors[3].name}</h6>
                          <small className="text-muted">{investors[3].company}</small>
                        </div>
                      </div>
                    </td>
                    <td>$950,000</td>
                    <td>Dec 10, 2024</td>
                    <td>Series A</td>
                    <td><span className="badge bg-success">Completed</span></td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary">Details</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="bg-primary-custom text-white rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '40px', height: '40px' }}>
                          <i className="bi bi-building"></i>
                        </div>
                        <div>
                          <h6 className="mb-0">BioVenture Labs</h6>
                          <small className="text-muted">Lead Investor</small>
                        </div>
                      </div>
                    </td>
                    <td>$1,200,000</td>
                    <td>Aug 05, 2023</td>
                    <td>Seed</td>
                    <td><span className="badge bg-success">Completed</span></td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary">Details</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Interested Investors */}
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
            <h3 className="h5 mb-0">Interested Investors</h3>
            <div className="btn-group">
              <button className="btn btn-sm btn-outline-primary">Export</button>
              <button className="btn btn-sm btn-primary-custom">
                <i className="bi bi-plus-circle me-1"></i>
                Add Investor
              </button>
            </div>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="bg-light">
                  <tr>
                    <th>Investor</th>
                    <th>Interest Level</th>
                    <th>Potential Amount</th>
                    <th>Due Diligence Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {investors.slice(0, 3).map((investor, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src={investor.photo} alt={investor.name} className="me-2 rounded-circle" width="40" height="40" />
                          <div>
                            <h6 className="mb-0">{investor.name}</h6>
                            <small className="text-muted">{investor.company}</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="progress flex-grow-1 me-2" style={{ height: '0.5rem', width: '100px' }}>
                            <div 
                              className="progress-bar bg-primary" 
                              role="progressbar" 
                              style={{ width: index === 0 ? '90%' : index === 1 ? '75%' : '50%' }}
                            ></div>
                          </div>
                          <span className="small">{index === 0 ? 'High' : index === 1 ? 'Medium' : 'Low'}</span>
                        </div>
                      </td>
                      <td>{index === 0 ? '$750,000' : index === 1 ? '$500,000' : '$250,000'}</td>
                      <td>
                        <span className={`badge ${index === 0 ? 'bg-warning text-dark' : index === 1 ? 'bg-info text-dark' : 'bg-secondary'}`}>
                          {index === 0 ? 'In Progress' : index === 1 ? 'Initial' : 'Not Started'}
                        </span>
                      </td>
                      <td>
                        <div className="btn-group">
                          <button className="btn btn-sm btn-primary-custom">Contact</button>
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
      </div>
    );
  };
  
  const renderMetrics = () => {
    return (
      <div className="dashboard-content p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h4 mb-0">Key Performance Metrics</h2>
          <div className="btn-group">
            <button className="btn btn-outline-primary">
              <i className="bi bi-download me-2"></i>
              Export
            </button>
            <button className="btn btn-primary-custom">
              <i className="bi bi-plus-circle me-2"></i>
              Add Metric
            </button>
          </div>
        </div>
        
        {/* Financial Metrics */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-header bg-white py-3">
            <h3 className="h5 mb-0">Financial Metrics</h3>
          </div>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-3">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="text-muted mb-2">Burn Rate</h6>
                    <h3 className="mb-0">$85,000</h3>
                    <small className="text-muted">per month</small>
                    <div className="mt-2 small text-danger">
                      <i className="bi bi-arrow-up me-1"></i>
                      5% from last month
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="text-muted mb-2">Runway</h6>
                    <h3 className="mb-0">18.5</h3>
                    <small className="text-muted">months</small>
                    <div className="mt-2 small text-warning">
                      <i className="bi bi-dash me-1"></i>
                      Same as last month
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="text-muted mb-2">Revenue</h6>
                    <h3 className="mb-0">$42,000</h3>
                    <small className="text-muted">last month</small>
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
                    <h6 className="text-muted mb-2">Gross Margin</h6>
                    <h3 className="mb-0">68%</h3>
                    <small className="text-muted">last quarter</small>
                    <div className="mt-2 small text-success">
                      <i className="bi bi-arrow-up me-1"></i>
                      3% from previous quarter
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Metrics */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-header bg-white py-3">
            <h3 className="h5 mb-0">Product Metrics</h3>
          </div>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-3">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="text-muted mb-2">Diagnostic Accuracy</h6>
                    <h3 className="mb-0">94%</h3>
                    <small className="text-muted">clinical trials</small>
                    <div className="mt-2 small text-success">
                      <i className="bi bi-arrow-up me-1"></i>
                      2% from last trial
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="text-muted mb-2">Processing Time</h6>
                    <h3 className="mb-0">3.2</h3>
                    <small className="text-muted">seconds per scan</small>
                    <div className="mt-2 small text-success">
                      <i className="bi bi-arrow-down me-1"></i>
                      0.8s improvement
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="text-muted mb-2">Patent Applications</h6>
                    <h3 className="mb-0">3</h3>
                    <small className="text-muted">pending</small>
                    <div className="mt-2 small text-success">
                      <i className="bi bi-arrow-up me-1"></i>
                      1 new submission
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="text-muted mb-2">Regulatory Status</h6>
                    <h3 className="mb-0">Phase II</h3>
                    <small className="text-muted">clinical trials</small>
                    <div className="mt-2 small text-success">
                      <i className="bi bi-check-circle me-1"></i>
                      On track for FDA submission
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Metrics */}
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-white py-3">
            <h3 className="h5 mb-0">Team Metrics</h3>
          </div>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-3">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="text-muted mb-2">Team Size</h6>
                    <h3 className="mb-0">12</h3>
                    <small className="text-muted">full-time employees</small>
                    <div className="mt-2 small text-success">
                      <i className="bi bi-arrow-up me-1"></i>
                      2 new hires this quarter
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="text-muted mb-2">Engineers</h6>
                    <h3 className="mb-0">7</h3>
                    <small className="text-muted">developers & data scientists</small>
                    <div className="mt-2 small text-success">
                      <i className="bi bi-arrow-up me-1"></i>
                      1 new ML engineer
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="text-muted mb-2">Clinical Advisors</h6>
                    <h3 className="mb-0">5</h3>
                    <small className="text-muted">medical specialists</small>
                    <div className="mt-2 small text-success">
                      <i className="bi bi-arrow-up me-1"></i>
                      1 new neurologist
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="text-muted mb-2">Open Positions</h6>
                    <h3 className="mb-0">3</h3>
                    <small className="text-muted">actively recruiting</small>
                    <div className="mt-2 small text-muted">
                      <i className="bi bi-info-circle me-1"></i>
                      2 technical, 1 clinical
                    </div>
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
                  <i className="bi bi-building me-2"></i> Company Profile
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i className="bi bi-people me-2"></i> Team Members
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i className="bi bi-shield-lock me-2"></i> Security
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i className="bi bi-bell me-2"></i> Notifications
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
                <h3 className="h5 mb-0">Company Profile</h3>
              </div>
              <div className="card-body">
                <div className="mb-4 d-flex">
                  <img 
                    src={user.logo} 
                    alt={user.company} 
                    className="rounded me-4"
                    width="100"
                    height="100"
                  />
                  <div>
                    <h4 className="h5 mb-1">{user.company}</h4>
                    <p className="text-muted mb-2">{user.category}</p>
                    <button className="btn btn-sm btn-primary-custom">Change Logo</button>
                  </div>
                </div>
                
                <form>
                  <div className="mb-3">
                    <label className="form-label">Company Name</label>
                    <input type="text" className="form-control" value={user.company} />
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Industry/Category</label>
                      <select className="form-select">
                        <option selected>{user.category}</option>
                        <option>Telemedicine</option>
                        <option>Medical Devices</option>
                        <option>Digital Therapeutics</option>
                        <option>Health Analytics</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Company Stage</label>
                      <select className="form-select">
                        <option>Pre-Seed</option>
                        <option>Seed</option>
                        <option selected>{user.fundingStage}</option>
                        <option>Series B</option>
                        <option>Series C+</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Company Website</label>
                    <input type="url" className="form-control" value="https://neuratech.io" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Founding Year</label>
                    <input type="number" className="form-control" value="2023" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Company Description</label>
                    <textarea className="form-control" rows="4">NeuraTech AI is developing an AI-powered diagnostic platform for early detection and monitoring of neurological conditions. Our proprietary algorithms analyze brain scan data to identify patterns associated with neurological disorders at their earliest stages, enabling earlier intervention and improved patient outcomes.</textarea>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Headquarter Location</label>
                    <input type="text" className="form-control" value="Boston, MA, USA" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Team Size</label>
                    <select className="form-select">
                      <option>1-5 employees</option>
                      <option selected>6-15 employees</option>
                      <option>16-25 employees</option>
                      <option>26-50 employees</option>
                      <option>51+ employees</option>
                    </select>
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
        <DashboardSidebar role="startup" activePage={activePage} setActivePage={setActivePage} />
        <div className="dashboard-main">
          <DashboardHeader user={user} pageTitle={activePage.charAt(0).toUpperCase() + activePage.slice(1).replace('-', ' ')} />
          {renderDashboardContent()}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StartupDashboard;