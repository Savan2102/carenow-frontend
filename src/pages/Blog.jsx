import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Healthcare Investments in 2025",
      excerpt: "Exploring emerging trends in healthcare investments and how digital health solutions are reshaping the industry.",
      date: "March 28, 2025",
      author: "Dr. Sarah Johnson",
      category: "Healthcare Investment",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=500&h=280"
    },
    {
      id: 2,
      title: "How Telemedicine Is Transforming Rural Healthcare Access",
      excerpt: "Discover how telemedicine platforms are breaking down barriers and providing essential healthcare services to underserved rural communities.",
      date: "March 21, 2025",
      author: "Dr. Michael Chen",
      category: "Telemedicine",
      image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=500&h=280"
    },
    {
      id: 3,
      title: "Medical Startups: Navigating Regulatory Challenges",
      excerpt: "A comprehensive guide for healthcare startups on how to successfully navigate complex regulatory environments while maintaining innovation.",
      date: "March 15, 2025",
      author: "Amanda Rodriguez, JD",
      category: "Startup Guidance",
      image: "https://images.unsplash.com/photo-1581093458791-b4c6e5623732?auto=format&fit=crop&q=80&w=500&h=280"
    },
    {
      id: 4,
      title: "AI in Diagnostics: Case Studies and Success Stories",
      excerpt: "Real-world examples of how artificial intelligence is improving diagnostic accuracy and patient outcomes in clinical settings.",
      date: "March 10, 2025",
      author: "Dr. James Wilson",
      category: "Medical Technology",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=500&h=280"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="display-4 fw-bold mb-4">CARENOW Blog</h1>
            <p className="lead text-muted">
              Insights, trends, and innovations at the intersection of healthcare, technology, and investment.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {blogPosts.map(post => (
            <div key={post.id} className="col-md-6 col-lg-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <img 
                  src={post.image} 
                  className="card-img-top" 
                  alt={post.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="badge bg-primary-custom">{post.category}</span>
                    <small className="text-muted">{post.date}</small>
                  </div>
                  <h5 className="card-title fw-bold">{post.title}</h5>
                  <p className="card-text text-muted">{post.excerpt}</p>
                </div>
                <div className="card-footer bg-white border-0 pt-0">
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">By {post.author}</small>
                    <button className="btn btn-sm btn-outline-primary">Read More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <button className="btn btn-primary-custom px-4 py-2">
              Load More Articles
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;