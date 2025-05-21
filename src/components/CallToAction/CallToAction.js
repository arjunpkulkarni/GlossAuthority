import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Book an<br/>Appointment Today!</h2>
        <a
          href="https://calendly.com/glossauthority/detailing-appointment"
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