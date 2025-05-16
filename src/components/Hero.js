import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Gloss Authority</h1>
        <p>Premier Auto Detailing for New York, New Jersey & Connecticut</p>
        <button className="get-started-btn hero-get-started">Get Started</button>
      </div>
      <div className="hero-scroll-icon">
        {/* Replace with an actual icon later */}
        <span>&#x2193;</span> 
      </div>
    </section>
  );
};

export default Hero; 