// Header.jsx
import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > 10) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }

        // Hide header on scroll down, show on scroll up
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlHeader);

    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`
        header 
        ${isScrolled ? 'header--scrolled' : ''} 
        ${!isVisible ? 'header--hidden' : ''}
        ${isMenuOpen ? 'menu-is-open' : ''}
      `}>
        <div className="container">
          <div className="logo">
            <a href="/" aria-label="Company Logo - Home">
              <img src="/images/logo.png" alt="Company Logo" />
            </a>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            {/* This container holds all the mobile menu elements */}
            <div className="mobile-menu-content">
              <div className="mobile-menu-header">
                <div className="mobile-logo">
                  <img src="\images\logo.png" alt="Company Logo" />
                </div>
                <button 
                  className="menu-close"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <span>&times;</span>
                </button>
              </div>
              
              <ul className="nav-links" id="main-nav">
                <li><a href="/" onClick={closeMenu}><span>🏠</span>Home</a></li>
                <li><a href="/about" onClick={closeMenu}><span>👥</span>About</a></li>
                <li><a href="/services" onClick={closeMenu}><span>⚙️</span>Services</a></li>
                <li><a href="/insights" onClick={closeMenu}><span>💡</span>Insights</a></li>
                <li><a href="/careers" onClick={closeMenu}><span>💼</span>Careers</a></li>
              </ul>
              
              <div className="mobile-cta-section">
                <a href="#get-started" className="cta-button-mobile" onClick={closeMenu}>
                  Partner With Us
                </a>
                <p className="cta-subtitle">Let's build something amazing together</p>
              </div>
            </div>
          </nav>

          <div className="header-cta">
            <a href="#get-started" className="cta-button">Partner With Us</a>
          </div>

          <button 
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="main-nav"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Overlay: Closes the menu when clicked */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Header;
