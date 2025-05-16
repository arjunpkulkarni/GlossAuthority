import React from 'react';
import './Booking.css';

const Calendar = () => {
  // Basic calendar structure for September (example)
  // In a real app, this would be more dynamic (e.g., using a library)
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const firstDayOfMonth = new Date(2023, 8, 1).getDay(); // 0 (Sun) - 6 (Sat), September 2023 starts on a Friday (5)
  const emptyCells = Array(firstDayOfMonth).fill(null);
  const calendarCells = [...emptyCells, ...days];

  return (
    <div className="calendar">
      <div className="calendar-header">
        <div>SUN</div><div>MON</div><div>TUE</div><div>WED</div><div>THU</div><div>FRI</div><div>SAT</div>
      </div>
      <div className="calendar-grid">
        {calendarCells.map((day, index) => (
          <div key={index} className={`calendar-day ${day ? '' : 'empty'}`}>
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

const BookingForm = () => {
  return (
    <div className="booking-form">
      <h4>Book Your Appointment</h4>
      <form>
        <div className="form-group">
          <label htmlFor="date">1. Select a date</label>
          <input type="text" id="date" placeholder="Select date" />
        </div>
        <div className="form-group">
          <label htmlFor="time">2. Choose a time slot</label>
          <input type="text" id="time" placeholder="Please select a date first" disabled />
        </div>
        <button type="submit" className="continue-btn">Continue</button>
      </form>
    </div>
  );
};

const Booking = () => {
  return (
    <section className="booking-section">
      <div className="booking-content">
        <div className="calendar-container">
            <h3>SEPTEMBER</h3>
            <Calendar />
        </div>
        <BookingForm />
      </div>
    </section>
  );
};

export default Booking; 