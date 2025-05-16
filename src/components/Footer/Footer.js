import React from 'react';
import './Footer.css';
import logo from "../Footer/logo.png";
import { Instagram, Youtube as TikTok } from 'lucide-react'; // Assuming TikTok might use Youtube or a generic icon if not directly available, or user can specify. For now, using Youtube as a placeholder for TikTok.

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-logo-contact">
          <div className="footer-logo">
            <a href="https://glossauthority.com" target="_blank" rel="noopener noreferrer">
              <img src={logo} alt="Gloss Authority Logo" />
            </a>
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
            <a href="https://www.instagram.com/glossauthority" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram color="white" size={24} /></a>
            <a href="https://www.tiktok.com/@glossauthority" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><TikTok color="white" size={24} /></a> {/* Placeholder, confirm actual TikTok icon if available */}
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