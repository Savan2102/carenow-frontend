import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DashboardSidebar from '../../components/Dashboard/DashboardSidebar';
import DashboardHeader from '../../components/Dashboard/DashboardHeader';
import { investors, startups, investorStats } from '../../utils/mockData';

const InvestorDashboard = () => {
  const [activePage, setActivePage] = useState('overview');
  const user = {
    name: "Alexandra Smith",
    role: "investor",
    email: "alexandra@venturefirm.com",
    profileImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200&h=200",
    company: "Venture Health Capital",
    investmentFocus: ["Digital Health", "Medical Devices", "Biotechnology"],
    totalInvested: "$12.8M",
    activeInvestments: 8,
    portfolioPerformance: "+23%"
  };

  const renderDashboardContent = () => {
    switch(activePage) {
      case 'overview':
        return renderOverview();
      case 'startups':
        return renderStartups();
      case 'investment-opportunities':
        return renderInvestmentOpportunities();
      case 'portfolio':
        return renderPortfolio();
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
          {investorStats.map(stat => (
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
        
        {/* Recent Activity */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-header bg-white py-3">
            <h3 className="h5 mb-0">Recent Activity</h3>
          </div>
          <div className="card-body p-0">
            <div className="list-group list-group-flush">
              <div className="list-group-item px-4 py-3 d-flex align-items-center">
                <div className="rounded-circle bg-primary bg-opacity-10 p-2 me-3">
                  <i className="bi bi-eye text-primary"></i>
                </div>
                <div className="me-auto">
                  <p className="mb-0">You viewed <strong>NeuraTech AI</strong>'s profile</p>
                  <small className="text-muted">2 hours ago</small>
                </div>
              </div>
              <div className="list-group-item px-4 py-3 d-flex align-items-center">
                <div className="rounded-circle bg-success bg-opacity-10 p-2 me-3">
                  <i className="bi bi-check-circle text-success"></i>
                </div>
                <div className="me-auto">
                  <p className="mb-0">You completed due diligence for <strong>HealthSync</strong></p>
                  <small className="text-muted">Yesterday</small>
                </div>
              </div>
              <div className="list-group-item px-4 py-3 d-flex align-items-center">
                <div className="rounded-circle bg-info bg-opacity-10 p-2 me-3">
                  <i className="bi bi-chat-dots text-info"></i>
                </div>
                <div className="me-auto">
                  <p className="mb-0">New message from <strong>Dr. James Wilson</strong></p>
                  <small className="text-muted">2 days ago</small>
                </div>
              </div>
              <div className="list-group-item px-4 py-3 d-flex align-items-center">
                <div className="rounded-circle bg-warning bg-opacity-10 p-2 me-3">
                  <i className="bi bi-calendar-event text-warning"></i>
                </div>
                <div className="me-auto">
                  <p className="mb-0">Scheduled a pitch meeting with <strong>MediRemote</strong></p>
                  <small className="text-muted">3 days ago</small>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer bg-white text-center py-3">
            <button className="btn btn-sm btn-outline-primary">View All Activity</button>
          </div>
        </div>
        
        {/* Featured Startups */}
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
            <h3 className="h5 mb-0">Featured Investment Opportunities</h3>
            <button className="btn btn-sm btn-outline-primary">View All</button>
          </div>
          <div className="card-body">
            <div className="row g-3">
              {startups.slice(0, 3).map(startup => (
                <div key={startup.id} className="col-md-6 col-xl-4">
                  <div className="card h-100 border shadow-sm">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <img src={startup.logo} alt={startup.name} className="me-3 rounded" width="40" height="40" />
                        <div>
                          <h4 className="h6 mb-0">{startup.name}</h4>
                          <span className="badge bg-primary-custom">{startup.category}</span>
                        </div>
                      </div>
                      <p className="small text-muted mb-3">{startup.description}</p>
                      <div className="d-flex justify-content-between">
                        <small className="text-muted">Funding Goal: <strong>{startup.fundingGoal}</strong></small>
                        <button className="btn btn-sm btn-primary-custom">View Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const renderStartups = () => {
    return (
      <div className="dashboard-content p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h4 mb-0">Browse Startups</h2>
          <div className="d-flex gap-2">
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <i className="bi bi-search"></i>
              </span>
              <input type="text" className="form-control border-start-0" placeholder="Search startups..." />
            </div>
            <select className="form-select" style={{ width: 'auto' }}>
              <option>All Categories</option>
              <option>Telemedicine</option>
              <option>Medical Devices</option>
              <option>AI Diagnostics</option>
              <option>Health Analytics</option>
            </select>
          </div>
        </div>
        
        <div className="row g-3">
          {startups.map(startup => (
            <div key={startup.id} className="col-md-6 col-xl-4">
              <div className="card h-100 border shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <img src={startup.logo} alt={startup.name} className="me-3 rounded" width="40" height="40" />
                    <div>
                      <h4 className="h6 mb-0">{startup.name}</h4>
                      <span className="badge bg-primary-custom">{startup.category}</span>
                    </div>
                  </div>
                  <p className="small text-muted mb-3">{startup.description}</p>
                  <div className="d-flex justify-content-between">
                    <small className="text-muted">Funding Goal: <strong>{startup.fundingGoal}</strong></small>
                    <button className="btn btn-sm btn-primary-custom">View Details</button>
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
  
  const renderInvestmentOpportunities = () => {
    return (
      <div className="dashboard-content p-4">
        <h2 className="h4 mb-4">Investment Opportunities</h2>
        
        <div className="row mb-4">
          <div className="col-12">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h3 className="h5 mb-3">Filter Opportunities</h3>
                <div className="row g-3">
                  <div className="col-md-4">
                    <label className="form-label">Category</label>
                    <select className="form-select">
                      <option value="">All Categories</option>
                      <option>Telemedicine</option>
                      <option>Medical Devices</option>
                      <option>AI Diagnostics</option>
                      <option>Digital Therapeutics</option>
                      <option>Health Analytics</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Funding Stage</label>
                    <select className="form-select">
                      <option value="">All Stages</option>
                      <option>Pre-Seed</option>
                      <option>Seed</option>
                      <option>Series A</option>
                      <option>Series B</option>
                      <option>Series C+</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Funding Range</label>
                    <select className="form-select">
                      <option value="">Any Amount</option>
                      <option>Under $500K</option>
                      <option>$500K - $1M</option>
                      <option>$1M - $5M</option>
                      <option>$5M - $10M</option>
                      <option>$10M+</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary-custom">Apply Filters</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-white py-3">
            <h3 className="h5 mb-0">Featured Opportunities</h3>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="bg-light">
                  <tr>
                    <th>Startup</th>
                    <th>Category</th>
                    <th>Funding Goal</th>
                    <th>Stage</th>
                    <th>Match Score</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {startups.map(startup => (
                    <tr key={startup.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src={startup.logo} alt={startup.name} className="me-2 rounded" width="32" height="32" />
                          <div>
                            <h6 className="mb-0">{startup.name}</h6>
                          </div>
                        </div>
                      </td>
                      <td>{startup.category}</td>
                      <td>{startup.fundingGoal}</td>
                      <td>
                        <span className="badge bg-info text-dark">Seed</span>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="progress flex-grow-1" style={{ height: '0.5rem' }}>
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '85%' }}></div>
                          </div>
                          <span className="ms-2">85%</span>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group">
                          <button className="btn btn-sm btn-primary-custom">View</button>
                          <button className="btn btn-sm btn-outline-primary">Save</button>
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
  
  const renderPortfolio = () => {
    return (
      <div className="dashboard-content p-4">
        <h2 className="h4 mb-4">Investment Portfolio</h2>
        
        {/* Portfolio Summary */}
        <div className="row mb-4">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h3 className="h6 text-muted mb-2">Total Invested</h3>
                <h4 className="h3 mb-0">{user.totalInvested}</h4>
                <div className="small text-success mt-2">
                  <i className="bi bi-arrow-up me-1"></i>
                  12.5% from last quarter
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h3 className="h6 text-muted mb-2">Active Investments</h3>
                <h4 className="h3 mb-0">{user.activeInvestments}</h4>
                <div className="small text-success mt-2">
                  <i className="bi bi-arrow-up me-1"></i>
                  2 new this quarter
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h3 className="h6 text-muted mb-2">Portfolio Performance</h3>
                <h4 className="h3 mb-0">{user.portfolioPerformance}</h4>
                <div className="small text-success mt-2">
                  <i className="bi bi-arrow-up me-1"></i>
                  5.3% from last month
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Investment Breakdown */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-header bg-white py-3">
            <h3 className="h5 mb-0">Investment Breakdown</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h4 className="h6 mb-3">By Sector</h4>
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="small">Telemedicine</span>
                    <span className="small text-muted">45%</span>
                  </div>
                  <div className="progress" style={{ height: '0.5rem' }}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="small">Medical Devices</span>
                    <span className="small text-muted">30%</span>
                  </div>
                  <div className="progress" style={{ height: '0.5rem' }}>
                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '30%' }}></div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="small">AI Diagnostics</span>
                    <span className="small text-muted">15%</span>
                  </div>
                  <div className="progress" style={{ height: '0.5rem' }}>
                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '15%' }}></div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="small">Digital Therapeutics</span>
                    <span className="small text-muted">10%</span>
                  </div>
                  <div className="progress" style={{ height: '0.5rem' }}>
                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h4 className="h6 mb-3">By Funding Stage</h4>
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="small">Seed</span>
                    <span className="small text-muted">25%</span>
                  </div>
                  <div className="progress" style={{ height: '0.5rem' }}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '25%' }}></div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="small">Series A</span>
                    <span className="small text-muted">40%</span>
                  </div>
                  <div className="progress" style={{ height: '0.5rem' }}>
                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="small">Series B</span>
                    <span className="small text-muted">20%</span>
                  </div>
                  <div className="progress" style={{ height: '0.5rem' }}>
                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="small">Series C+</span>
                    <span className="small text-muted">15%</span>
                  </div>
                  <div className="progress" style={{ height: '0.5rem' }}>
                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '15%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Portfolio Companies */}
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
            <h3 className="h5 mb-0">Portfolio Companies</h3>
            <button className="btn btn-sm btn-outline-primary">Export Report</button>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="bg-light">
                  <tr>
                    <th>Company</th>
                    <th>Investment Date</th>
                    <th>Amount</th>
                    <th>Stage</th>
                    <th>Performance</th>
                    <th>Last Update</th>
                  </tr>
                </thead>
                <tbody>
                  {startups.slice(0, 4).map((startup, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src={startup.logo} alt={startup.name} className="me-2 rounded" width="32" height="32" />
                          <div>
                            <h6 className="mb-0">{startup.name}</h6>
                          </div>
                        </div>
                      </td>
                      <td>Mar 15, 2023</td>
                      <td>$1.2M</td>
                      <td>
                        <span className="badge bg-info text-dark">Series A</span>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="text-success me-2">
                            <i className="bi bi-arrow-up-right"></i>
                          </span>
                          +18.5%
                        </div>
                      </td>
                      <td>2 days ago</td>
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
                    {startups.map((startup, index) => (
                      <a 
                        key={index}
                        href="#" 
                        className={`list-group-item list-group-item-action px-3 py-3 ${index === 0 ? 'active' : ''}`}
                      >
                        <div className="d-flex">
                          <img 
                            src={startup.logo} 
                            className="rounded-circle me-3"
                            width="48"
                            height="48"
                            alt={startup.name}
                          />
                          <div className="flex-grow-1 overflow-hidden">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                              <h6 className="mb-0 text-truncate">{startup.name}</h6>
                              <small className={index === 0 ? 'text-white' : 'text-muted'}>10:23 AM</small>
                            </div>
                            <p className="mb-0 small text-truncate">
                              {index === 0 ? 'Thank you for your interest in our startup...' : 'We would love to schedule a demo call with you...'}
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
                      src={startups[0].logo} 
                      className="rounded-circle me-2"
                      width="40"
                      height="40"
                      alt={startups[0].name}
                    />
                    <div>
                      <h6 className="mb-0">{startups[0].name}</h6>
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
                      src={startups[0].logo} 
                      className="rounded-circle mt-1 me-2 align-self-start"
                      width="32"
                      height="32"
                      alt={startups[0].name}
                    />
                    <div>
                      <div className="bg-white p-3 rounded shadow-sm">
                        <p className="mb-0">Hello! Thank you for your interest in our startup. We're developing an AI-powered diagnostic tool for early detection of neurological conditions.</p>
                      </div>
                      <small className="text-muted">10:15 AM</small>
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <img 
                      src={startups[0].logo} 
                      className="rounded-circle mt-1 me-2 align-self-start"
                      width="32"
                      height="32"
                      alt={startups[0].name}
                    />
                    <div>
                      <div className="bg-white p-3 rounded shadow-sm">
                        <p className="mb-0">Our technology has shown a 94% accuracy rate in initial clinical trials, and we're looking for investment to scale our operations and complete FDA approval.</p>
                      </div>
                      <small className="text-muted">10:17 AM</small>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mb-3">
                    <div className="text-end">
                      <div className="bg-primary text-white p-3 rounded shadow-sm">
                        <p className="mb-0">That sounds impressive. What stage of FDA approval are you in currently?</p>
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
                      src={startups[0].logo} 
                      className="rounded-circle mt-1 me-2 align-self-start"
                      width="32"
                      height="32"
                      alt={startups[0].name}
                    />
                    <div>
                      <div className="bg-white p-3 rounded shadow-sm">
                        <p className="mb-0">We're currently in Phase II of clinical trials, with plans to submit for 510(k) clearance by Q3 of this year. Our technology is classified as Class II medical device.</p>
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
                  <i className="bi bi-credit-card me-2"></i> Billing
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
                <h3 className="h5 mb-0">Profile Information</h3>
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
                    <p className="text-muted mb-2">{user.company}</p>
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
                  <div className="mb-3">
                    <label className="form-label">Company</label>
                    <input type="text" className="form-control" value={user.company} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Investment Focus</label>
                    <select className="form-select" multiple style={{ height: '100px' }}>
                      {user.investmentFocus.map((focus, index) => (
                        <option key={index} value={focus} selected>{focus}</option>
                      ))}
                      <option value="Remote Patient Monitoring">Remote Patient Monitoring</option>
                      <option value="Healthcare Analytics">Healthcare Analytics</option>
                    </select>
                    <small className="text-muted">Hold Ctrl (CMD on Mac) to select multiple options</small>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Bio</label>
                    <textarea className="form-control" rows="4">Alexandra Smith is a Partner at Venture Health Capital with over 10 years of experience investing in healthcare startups. She specializes in digital health innovations and medical device technologies.</textarea>
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
        <DashboardSidebar role="investor" activePage={activePage} setActivePage={setActivePage} />
        <div className="dashboard-main">
          <DashboardHeader user={user} pageTitle={activePage.charAt(0).toUpperCase() + activePage.slice(1).replace('-', ' ')} />
          {renderDashboardContent()}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InvestorDashboard;