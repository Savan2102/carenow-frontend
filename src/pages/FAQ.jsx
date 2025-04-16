import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqCategories = [
    {
      category: "For Investors",
      questions: [
        {
          question: "How does CARENOW vet the healthcare startups on the platform?",
          answer: "We employ a rigorous multi-stage vetting process that includes technology assessment, market analysis, regulatory compliance review, and team evaluation. All startups undergo background checks and must provide detailed documentation of their business model, intellectual property, and regulatory strategy before being approved to join our platform."
        },
        {
          question: "What types of healthcare startups can I find on CARENOW?",
          answer: "CARENOW hosts a diverse range of healthcare startups including telemedicine platforms, medical devices, AI diagnostic tools, health data analytics, digital therapeutics, remote patient monitoring, mental health technologies, and innovative healthcare service models. Our platform specifically focuses on solutions that demonstrate potential for significant healthcare impact and financial viability."
        },
        {
          question: "How does the investment process work on the platform?",
          answer: "After identifying a startup of interest, you can initiate contact through our secure messaging system. If there's mutual interest, you'll gain access to a data room with detailed financial information and business documentation. Our platform facilitates the entire investment process from initial interest through due diligence, deal structuring, and final investment execution with appropriate legal documentation."
        },
        {
          question: "What are the minimum investment requirements?",
          answer: "Investment minimums vary by startup and funding round, typically ranging from $25,000 for early-stage seed investments to $250,000+ for later-stage rounds. We accommodate various investment structures including equity, convertible notes, and SAFE agreements. Our platform clearly displays minimum investment requirements for each opportunity."
        }
      ]
    },
    {
      category: "For Startups",
      questions: [
        {
          question: "What benefits do startups receive when joining CARENOW?",
          answer: "Startups on CARENOW gain access to our curated network of healthcare-focused investors, strategic connections with healthcare providers for potential pilot programs, domain expertise through our advisor network, and visibility within the healthcare innovation ecosystem. We also provide guidance on pitch refinement, regulatory navigation, and investment readiness."
        },
        {
          question: "What information do I need to provide to list my startup?",
          answer: "To join CARENOW, you'll need to provide comprehensive information about your team, technology, market opportunity, regulatory strategy, current traction, intellectual property status, and funding requirements. Additionally, we require financial projections, cap table information, and details about previous funding rounds if applicable. All information is kept confidential and only shared with verified investors."
        },
        {
          question: "How does CARENOW help with regulatory compliance?",
          answer: "While we don't provide direct regulatory consulting, we connect startups with experienced regulatory advisors in our network who specialize in healthcare innovation. Our platform includes resources and guidance on regulatory pathways for different types of healthcare solutions. We also host webinars and provide content on navigating FDA requirements, HIPAA compliance, and international regulatory considerations."
        },
        {
          question: "Can CARENOW help us find clinical partners for validation studies?",
          answer: "Yes, one of our key value propositions is facilitating connections between startups and healthcare providers in our network. We help identify appropriate clinical partners for pilot programs, validation studies, and real-world implementation based on your specific solution and target patient population. Our provider network includes hospitals, clinic networks, and specialty practices across various medical fields."
        }
      ]
    },
    {
      category: "For Healthcare Providers",
      questions: [
        {
          question: "How can doctors and healthcare professionals use CARENOW?",
          answer: "Healthcare professionals can use CARENOW to discover innovative technologies that may benefit their practice, provide expert feedback to startups developing relevant solutions, participate in paid consulting opportunities, join advisory boards, and even explore investment opportunities. Our platform allows you to create a profile highlighting your clinical expertise and areas of interest."
        },
        {
          question: "What types of collaboration opportunities are available?",
          answer: "Collaboration opportunities include clinical advisory roles, paid consulting engagements, participation in product testing and feedback sessions, speaking opportunities at innovation events, and involvement in pilot programs and clinical validation studies. Healthcare providers can also explore potential research collaborations with startups working in their area of specialty."
        },
        {
          question: "How does CARENOW ensure patient privacy in collaborations?",
          answer: "All collaborations facilitated through DocCircle adhere to strict HIPAA compliance guidelines and institutional privacy requirements. Our platform provides standardized NDA and data use agreements for all interactions. We require all startups to demonstrate appropriate security measures and data protection protocols before facilitating any patient-related collaborations."
        },
        {
          question: "Can I use CATRENOW to find solutions for specific clinical challenges?",
          answer: "Absolutely. CARENOW allows healthcare providers to post specific clinical challenges or areas where innovation is needed. Startups can then respond with relevant solutions or develop new approaches based on your input. This 'reverse pitch' model helps ensure that innovation efforts are directed toward real clinical needs and pain points experienced by frontline providers."
        }
      ]
    },
    {
      category: "Platform & Security",
      questions: [
        {
          question: "How does CARENOW protect sensitive information shared on the platform?",
          answer: "CARENOW employs enterprise-grade security measures including end-to-end encryption for all communications, secure data storage with regular penetration testing, multi-factor authentication, role-based access controls, and comprehensive audit logs. All data is encrypted both in transit and at rest, and we maintain compliance with healthcare industry security standards including HIPAA and SOC 2."
        },
        {
          question: "What fees does CARENOW charge?",
          answer: "CARENOW operates on a subscription model for startups and investors with tiered pricing based on access level and features required. We also charge a success fee on investments facilitated through the platform, typically 2-5% depending on deal size and complexity. Healthcare providers can access basic features for free, with premium features available through institutional subscriptions."
        },
        {
          question: "Is my information visible to everyone on the platform?",
          answer: "No. CARENOW employs a permission-based visibility system. You control exactly what information is shared and with whom. Detailed financial information, proprietary technology details, and other sensitive data are only accessible to users you specifically approve. Our platform includes granular privacy controls for each type of user and information category."
        },
        {
          question: "How can I get help if I'm having technical issues?",
          answer: "CARENOW provides multiple support channels including live chat support during business hours, a comprehensive help center with tutorials and guides, email support with guaranteed 24-hour response time, and scheduled video assistance for complex issues. Premium users also receive access to a dedicated account representative for personalized support."
        }
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="display-4 fw-bold mb-4">Frequently Asked Questions</h1>
            <p className="lead text-muted">
              Find answers to common questions about how DocCircle works for healthcare startups, investors, and medical professionals.
            </p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="col-lg-12 mb-4">
              <h3 className="h4 fw-bold mb-4">{category.category}</h3>
              
              <div className="accordion" id={`accordion-${categoryIndex}`}>
                {category.questions.map((faq, faqIndex) => {
                  const index = `${categoryIndex}-${faqIndex}`;
                  const isActive = activeIndex === index;
                  
                  return (
                    <div key={faqIndex} className="accordion-item border-0 mb-3 shadow-sm">
                      <h2 className="accordion-header">
                        <button 
                          className={`accordion-button ${!isActive ? 'collapsed' : ''} bg-white`}
                          type="button"
                          onClick={() => toggleAccordion(index)}
                          aria-expanded={isActive}
                        >
                          <span className="fw-medium">{faq.question}</span>
                        </button>
                      </h2>
                      <div 
                        className={`accordion-collapse collapse ${isActive ? 'show' : ''}`}
                      >
                        <div className="accordion-body text-muted">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="row py-5 mt-3">
          <div className="col-lg-8 mx-auto text-center">
            <h3 className="h4 mb-4">Still have questions?</h3>
            <p className="mb-4">Our support team is ready to help you with any additional questions you might have about our platform.</p>
            <button className="btn btn-primary-custom px-4 py-2 me-3">
              Contact Support
            </button>
            <button className="btn btn-outline-primary px-4 py-2">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;