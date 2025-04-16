import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "HealthSync: Revolutionizing Patient Data Management",
      challenge: "A leading hospital network was struggling with fragmented patient data across multiple systems, causing delays in care and administrative inefficiencies.",
      solution: "DocCircle connected the hospital with HealthSync, a startup specializing in unified health records. Through our platform, they secured $4.2M in funding to implement their AI-driven data integration system.",
      results: "Reduced administrative time by 42%, improved diagnosis accuracy by 38%, and decreased patient wait times by 27% within the first year of implementation.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=500&h=280",
      sector: "Hospital Management"
    },
    {
      id: 2,
      title: "MediRemote: Expanding Telemedicine to Rural Areas",
      challenge: "Rural communities in multiple states were experiencing severe healthcare access issues, with residents having to travel over 50 miles for routine medical care.",
      solution: "DocCircle facilitated a partnership between three rural health clinics and MediRemote, providing the startup with both technology expertise and $2.8M in investor funding through our network.",
      results: "Established 15 virtual care centers serving over 25,000 patients, reduced emergency room visits by 31%, and improved chronic disease management outcomes in 68% of tracked cases.",
      image: "https://images.unsplash.com/photo-1631217868264-e6641023941d?auto=format&fit=crop&q=80&w=500&h=280",
      sector: "Telemedicine"
    },
    {
      id: 3,
      title: "NeuroDiagnostics: Enhancing Stroke Detection with AI",
      challenge: "Emergency departments were facing critical delays in stroke diagnosis, significantly impacting patient outcomes due to the time-sensitive nature of treatment.",
      solution: "Through DocCircle's investor-startup matching algorithm, NeuroDiagnostics secured $7.5M in funding to deploy their AI-powered stroke detection software in emergency settings.",
      results: "Reduced diagnostic time from an average of 43 minutes to 8 minutes, leading to a 27% improvement in patient recovery rates and saving an estimated $3.2M in long-term care costs.",
      image: "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?auto=format&fit=crop&q=80&w=500&h=280",
      sector: "AI Diagnostics"
    },
    {
      id: 4,
      title: "PediConnect: Specialized Pediatric Care Coordination",
      challenge: "Parents of children with complex medical conditions were struggling to coordinate care across multiple specialists, leading to treatment conflicts and caregiver burnout.",
      solution: "DocCircle's platform enabled specialists from three different hospitals to collaborate with PediConnect's innovative care coordination app, backed by $1.8M in investment facilitated through our network.",
      results: "90% of participating families reported reduced stress levels, appointment conflicts decreased by 64%, and treatment plan adherence improved by 47%, resulting in fewer hospitalizations.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=500&h=280",
      sector: "Pediatric Care"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="display-4 fw-bold mb-4">Success Stories</h1>
            <p className="lead text-muted">
              Real-world examples of how DocCircle's network has helped healthcare startups, investors, and medical professionals create meaningful impact.
            </p>
          </div>
        </div>

        {caseStudies.map((study, index) => (
          <div key={study.id} className="row mb-5 pb-5 border-bottom">
            <div className={`col-lg-6 ${index % 2 === 1 ? 'order-lg-2' : ''} mb-4 mb-lg-0`}>
              <img 
                src={study.image} 
                className="img-fluid rounded shadow" 
                alt={study.title}
              />
            </div>
            <div className={`col-lg-6 ${index % 2 === 1 ? 'order-lg-1' : ''} d-flex flex-column justify-content-center`}>
              <div className="badge bg-primary-custom mb-3">{study.sector}</div>
              <h2 className="h3 fw-bold mb-3">{study.title}</h2>
              
              <div className="mb-3">
                <h6 className="text-uppercase text-primary small fw-bold mb-2">The Challenge</h6>
                <p>{study.challenge}</p>
              </div>
              
              <div className="mb-3">
                <h6 className="text-uppercase text-primary small fw-bold mb-2">Our Solution</h6>
                <p>{study.solution}</p>
              </div>
              
              <div className="mb-4">
                <h6 className="text-uppercase text-primary small fw-bold mb-2">Results</h6>
                <p>{study.results}</p>
              </div>
              
              <button className="btn btn-primary-custom align-self-start">
                View Full Case Study
              </button>
            </div>
          </div>
        ))}

        <div className="row mt-5">
          <div className="col-12 text-center">
            <h3 className="mb-4">Ready to write your success story?</h3>
            <button className="btn btn-lg btn-primary-custom">Join DocCircle Today</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CaseStudies;