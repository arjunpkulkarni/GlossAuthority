import React from 'react';
import './Footer.css';
// Assuming you might have icons for socials, e.g., from react-icons
// import { FaInstagram, FaSnapchatGhost, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-logo-contact">
          <div className="footer-logo">
            <img src="/logo-placeholder.png" alt="Gloss Authority Logo" />
            <span>GLOSS AUTHORITY</span>
            <span className="logo-subtitle">AUTO DETAILING</span>
          </div>
          <div className="footer-contact">
            <p>Gloss Authority</p>
            <p>glossauthority@gmail.com</p>
            <p>(845)-650-7624</p>
          </div>
        </div>
        <div className="footer-socials">
          <p>Socials</p>
          <div className="social-icons">
            {/* Replace with actual icons or images */}
            <a href="#instagram" aria-label="Instagram"><img src="/instagram-icon.png" alt="Instagram"/></a>
            <a href="#snapchat" aria-label="Snapchat"><img src="/snapchat-icon.png" alt="Snapchat"/></a>
            <a href="#tiktok" aria-label="TikTok"><img src="/tiktok-icon.png" alt="TikTok"/></a>
            {/* Example with react-icons:
            <a href="#instagram" aria-label="Instagram"><FaInstagram /></a>
            <a href="#snapchat" aria-label="Snapchat"><FaSnapchatGhost /></a>
            <a href="#tiktok" aria-label="TikTok"><FaTiktok /></a> 
            */}
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; Gloss Authority 2025. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer; 