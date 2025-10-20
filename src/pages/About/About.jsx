import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About Our Company</h1>
            <p>Leading the digital transformation in healthcare with innovative solutions and dedicated expertise.</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section section-light">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p>
                We are committed to revolutionizing healthcare delivery through cutting-edge technology 
                solutions that enhance patient care, streamline medical processes, and empower healthcare 
                professionals worldwide.
              </p>
              <p>
                Our team of experts combines deep healthcare knowledge with technical excellence to 
                create solutions that make a real difference in people's lives.
              </p>
            </div>
            <div className="mission-image">
              <div className="image-placeholder">
                <span>Mission Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Excellence</h3>
              <p>We strive for excellence in every solution we deliver and every interaction we have.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>We continuously push boundaries to develop groundbreaking healthcare technology.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>We believe in the power of partnership to achieve transformative results.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Compassion</h3>
              <p>We care deeply about improving patient outcomes and healthcare experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Leadership Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder">CEO</div>
              </div>
              <h3>Dr. Sarah Johnson</h3>
              <p className="role">Chief Executive Officer</p>
              <p>20+ years in healthcare technology and innovation.</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder">CTO</div>
              </div>
              <h3>Michael Chen</h3>
              <p className="role">Chief Technology Officer</p>
              <p>Expert in scalable healthcare systems and AI solutions.</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder">COO</div>
              </div>
              <h3>Emily Rodriguez</h3>
              <p className="role">Chief Operations Officer</p>
              <p>Specialized in healthcare operations and process optimization.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;