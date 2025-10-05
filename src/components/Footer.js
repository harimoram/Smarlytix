import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
    {/* Centered horizontal line */}
      <div className="section-line-footer"></div>
      <div className="footer-container">
        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4 className="footer-title">Social Media</h4>
          <ul className="footer-links">
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="footer-section newsletter">
          <h4 className="footer-title">Newsletter Signup</h4>
          <p className="newsletter-text">
            Stay ahead with the latest data insights.
          </p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="newsletter-btn">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Smarlytix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
