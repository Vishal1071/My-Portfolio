import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Portfolio</h3>
            <p>Building amazing web experiences with modern technologies.</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Connect</h3>
            <div className="social-links">
              <a href="https://github.com/Vishal1071" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://instagram.com/Veeshal_45" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/vishal-sonagara-0b2427365" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Vishal Sonagara. All rights reserved. Built with React.js ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
