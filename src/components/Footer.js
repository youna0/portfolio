import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-name">Youna Chowdary</span>
              <span className="logo-bracket">/&gt;</span>
            </span>
            <p className="footer-tagline">Building things with code & creativity</p>
          </div>

          <div className="footer-contact">
            <h4>Get in Touch</h4>
            <a href="mailto:younachowdary@gmail.com" className="footer-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              younachowdary@gmail.com
            </a>
            <a href="tel:+917416552940" className="footer-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +91 7416552940
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Tanneru Youna Chowdary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
