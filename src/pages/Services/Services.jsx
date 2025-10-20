import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🏥',
      title: 'Healthcare IT Solutions',
      description: 'Comprehensive electronic health records and practice management systems.',
      features: ['EHR Implementation', 'Practice Management', 'Revenue Cycle Management']
    },
    {
      icon: '📱',
      title: 'Mobile Health Applications',
      description: 'Patient-centric mobile solutions for better healthcare engagement.',
      features: ['Patient Portals', 'Telemedicine Apps', 'Health Tracking']
    },
    {
      icon: '🤖',
      title: 'AI & Analytics',
      description: 'Advanced analytics and AI-powered insights for healthcare optimization.',
      features: ['Predictive Analytics', 'Clinical Decision Support', 'Population Health']
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Secure and scalable cloud infrastructure for healthcare organizations.',
      features: ['Cloud Migration', 'Data Security', 'Disaster Recovery']
    },
    {
      icon: '🔒',
      title: 'Compliance & Security',
      description: 'HIPAA compliant solutions with enterprise-grade security measures.',
      features: ['HIPAA Compliance', 'Security Audits', 'Risk Assessment']
    },
    {
      icon: '🛠️',
      title: 'Consulting Services',
      description: 'Expert consulting for digital transformation in healthcare.',
      features: ['IT Strategy', 'Process Optimization', 'Implementation Support']
    }
  ];

  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1>Our Services</h1>
            <p>Comprehensive healthcare technology solutions designed to transform patient care and operational efficiency.</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section section-light">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button className="btn-secondary">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-white">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Healthcare Practice?</h2>
            <p>Contact us today to discuss how our solutions can benefit your organization.</p>
            <div className="cta-buttons">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Schedule a Demo</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;