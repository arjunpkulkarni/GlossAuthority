import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Book an<br/>Appointment today!</h2>
        <a
          href="https://calendly.com/arjunpkulkarni/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="get-started-btn cta-get-started"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default CallToAction; 