import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Transforming Healthcare with Innovative Solutions</h1>
            <p>We provide cutting-edge technology solutions to revolutionize patient care and medical practices worldwide.</p>
            <div className="hero-buttons">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Implementation</h3>
              <p>Quick deployment and seamless integration with existing systems.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Secure & Compliant</h3>
              <p>HIPAA compliant solutions with enterprise-grade security.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Innovative Solutions</h3>
              <p>Cutting-edge technology driving healthcare transformation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <h3>500+</h3>
              <p>Healthcare Partners</p>
            </div>
            <div className="stat">
              <h3>1M+</h3>
              <p>Patients Served</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Countries</p>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;