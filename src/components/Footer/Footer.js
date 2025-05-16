import React from 'react';
import './Footer.css';
import logo from "../Footer/logo.png"

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-logo-contact">
          <div className="footer-logo">
            <img src={logo} alt="Gloss Authority Logo" />

          </div>
          <div className="footer-contact">
            <p>Gloss Authority</p>
            <p>glossauthority@gmail.com</p>
            <p>(845)-650-7624</p>
          </div>
        </div>
        <div className="footer-socials">
          <p>Socials</p>
          <div className="logos">
            {/* Replace with actual icons or images */}
            <a href="https://www.instagram.com/glossauthority" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><img src="/instagram-icon.png" alt="Instagram" /></a>
            <a href="https://www.snapchat.com/add/glossauthority" target="_blank" rel="noopener noreferrer" aria-label="Snapchat"><img src="/snapchat-icon.png" alt="Snapchat" /></a>
            <a href="https://www.tiktok.com/@glossauthority" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><img src="/tiktok-icon.png" alt="TikTok" /></a>
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