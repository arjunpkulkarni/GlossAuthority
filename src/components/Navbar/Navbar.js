import React, { useState } from 'react';
import './Navbar.css';
import logo from "../Navbar/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSmoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobileMenuOpen) { // Close mobile menu after clicking a link
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Gloss Authority Logo" />        
      </div>
      <div className="hamburger-icon" onClick={toggleMobileMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`navbar-center ${isMobileMenuOpen ? 'open' : ''}`}>        
        <ul className="navbar-links">
          <li><a href="#home" onClick={handleSmoothScroll}>Home</a></li>
          <li><a href="#about" onClick={handleSmoothScroll}>About</a></li>
          <li><a href="#schedule" onClick={handleSmoothScroll}>Schedule</a></li>
          <li><a href="#pricing" onClick={handleSmoothScroll}>Pricing</a></li>
        </ul>
      </div>
      <a href="#pricing" className={`get-started-btn navbar-get-started ${isMobileMenuOpen ? 'open' : ''}`} onClick={handleSmoothScroll}>Get started</a>
    </nav>
  );
};

export default Navbar; 