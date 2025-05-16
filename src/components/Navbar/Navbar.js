import React from 'react';
import './Navbar.css';
import logo from "../Navbar/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Gloss Authority Logo" />        
      </div>
      <div className="navbar-center">        
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>
      </div>
      <button className="get-started-btn navbar-get-started">Get started</button>
    </nav>
  );
};

export default Navbar; 