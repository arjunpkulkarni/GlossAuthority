import React from 'react';
import './Booking.css';

const Booking = () => {
  return (
    <section className="booking-section">
      <div className="booking-content">
        {/* TODO: Add your Calendly embed code here */}
        <p>Please integrate your Calendly widget here.</p>
        {/* Example of how you might embed Calendly:
        <div className="calendly-inline-widget" data-url="YOUR_CALENDLY_LINK" style={{ minWidth: '320px', height: '630px' }}></div>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        */}
      </div>
    </section>
  );
};

export default Booking; 