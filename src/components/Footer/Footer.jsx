import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo">
              <img src="/images/logo.png" alt="Company Logo" />
              <span>YourCompany</span>
            </div>
            <p>Transforming healthcare through innovative solutions and cutting-edge technology.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/insights">Insights</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Healthcare IT</a></li>
              <li><a href="#">Medical Software</a></li>
              <li><a href="#">Consulting</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@yourcompany.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Healthcare St, Medical City</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 YourCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;