import React from 'react';
import './Hero.css';
import image from "../Hero/image.png"
import icon from "../Hero/icon.png"

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Gloss Authority</h1>
        <p>Mobile Auto Detailing for New York, New Jersey & Connecticut</p>
        <div className="get-started-btn hero-get-started">
          <a href="https://calendly.com/glossauthority/detailing-appointment" target="_blank" rel="noopener noreferrer">Get Started</a>
        </div>
      </div>
      <div className="hero-scroll-icon">
        <img src={icon} alt="Scroll Icon" />
      </div>
    </section>
  );
};

export default Hero; 