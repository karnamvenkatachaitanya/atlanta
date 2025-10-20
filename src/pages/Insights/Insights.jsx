import React from 'react';
import './Insights.css';

const Insights = () => {
  const insights = [
    {
      category: 'Technology',
      title: 'The Future of AI in Healthcare Diagnosis',
      excerpt: 'Exploring how artificial intelligence is revolutionizing medical diagnostics and patient care.',
      date: 'March 15, 2024',
      readTime: '5 min read'
    },
    {
      category: 'Innovation',
      title: 'Telemedicine: Transforming Patient Access',
      excerpt: 'How virtual care is breaking down barriers and improving healthcare accessibility.',
      date: 'March 10, 2024',
      readTime: '4 min read'
    },
    {
      category: 'Security',
      title: 'Ensuring HIPAA Compliance in Digital Health',
      excerpt: 'Best practices for maintaining data security and compliance in healthcare technology.',
      date: 'March 5, 2024',
      readTime: '6 min read'
    },
    {
      category: 'Trends',
      title: 'Healthcare Digital Transformation Trends 2024',
      excerpt: 'Key trends shaping the future of healthcare technology and patient experiences.',
      date: 'February 28, 2024',
      readTime: '7 min read'
    },
    {
      category: 'Case Study',
      title: 'Success Story: Regional Hospital Digital Overhaul',
      excerpt: 'How one hospital achieved 40% efficiency gains through digital transformation.',
      date: 'February 20, 2024',
      readTime: '8 min read'
    },
    {
      category: 'Research',
      title: 'Patient Engagement Through Mobile Health Apps',
      excerpt: 'Research findings on improving patient outcomes with mobile technology.',
      date: 'February 15, 2024',
      readTime: '5 min read'
    }
  ];

  return (
    <div className="insights">
      {/* Hero Section */}
      <section className="insights-hero">
        <div className="container">
          <div className="insights-hero-content">
            <h1>Insights & Resources</h1>
            <p>Stay updated with the latest trends, research, and innovations in healthcare technology.</p>
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="section section-light">
        <div className="container">
          <div className="insights-grid">
            {insights.map((insight, index) => (
              <article key={index} className="insight-card">
                <div className="insight-category">{insight.category}</div>
                <h3>{insight.title}</h3>
                <p>{insight.excerpt}</p>
                <div className="insight-meta">
                  <span className="date">{insight.date}</span>
                  <span className="read-time">{insight.readTime}</span>
                </div>
                <button className="btn-secondary">Read More</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section section-white">
        <div className="container">
          <div className="newsletter">
            <h2>Stay Informed</h2>
            <p>Subscribe to our newsletter for the latest insights and updates in healthcare technology.</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;