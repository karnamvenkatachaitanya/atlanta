import React, { useState } from 'react';
import './Partner.css';

const Partner = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    partnershipType: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // FormSubmit will handle the email sending
    e.target.submit();
  };

  return (
    <div className="partner">
      {/* Hero Section */}
      <section className="partner-hero">
        <div className="container">
          <div className="partner-hero-content">
            <h1>Partner With Us</h1>
            <p>Join forces with us to transform healthcare through innovative technology solutions and strategic partnerships.</p>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Why Partner With Us?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🚀</div>
              <h3>Innovation</h3>
              <p>Access cutting-edge healthcare technology and innovative solutions.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌍</div>
              <h3>Global Reach</h3>
              <p>Expand your market presence with our established healthcare network.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💼</div>
              <h3>Business Growth</h3>
              <p>Create new revenue streams and business opportunities.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>Work with industry experts and healthcare professionals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="section section-white">
        <div className="container">
          <div className="form-container">
            <div className="form-content">
              <h2>Start the Conversation</h2>
              <p>Fill out the form below and our partnership team will get in touch with you within 24 hours.</p>
              
              <form 
                action="https://formsubmit.co/23kb1a3037@nbkrist.org" 
                method="POST"
                onSubmit={handleSubmit}
                className="partner-form"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New Partnership Inquiry" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="http://yourdomain.com/thank-you" />
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company/Organization *</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="partnershipType">Type of Partnership *</label>
                  <select
                    id="partnershipType"
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select partnership type</option>
                    <option value="technology">Technology Partnership</option>
                    <option value="reseller">Reseller Partnership</option>
                    <option value="integration">Integration Partnership</option>
                    <option value="strategic">Strategic Alliance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tell us about your partnership interests *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your organization and how you'd like to partner with us..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary btn-large">
                  Submit Partnership Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Partnership Opportunities</h2>
          <div className="partnership-types">
            <div className="partnership-card">
              <h3>Technology Partners</h3>
              <p>Integrate your technology with our healthcare solutions and create comprehensive offerings.</p>
            </div>
            <div className="partnership-card">
              <h3>Reseller Partners</h3>
              <p>Resell our solutions to your customer base and earn attractive commissions.</p>
            </div>
            <div className="partnership-card">
              <h3>Integration Partners</h3>
              <p>Connect your systems with ours to deliver seamless healthcare experiences.</p>
            </div>
            <div className="partnership-card">
              <h3>Strategic Alliances</h3>
              <p>Collaborate on large-scale projects and joint business development initiatives.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;