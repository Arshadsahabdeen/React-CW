import React, { useState } from 'react';
import './BookingPage.css'; // Make sure to create this CSS file

const BookingPage = () => {
  const [route, setRoute] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [seats, setSeats] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle booking logic here
    alert(`Booking confirmed!\nRoute: ${route}\nDate: ${departureDate}\nSeats: ${seats}`);
  };

  return (
    <div className="booking-container">
      <h1>Book Your Ticket</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="route">Select Route:</label>
          <input
            type="text"
            id="route"
            value={route}
            onChange={(e) => setRoute(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="departure-date">Departure Date:</label>
          <input
            type="date"
            id="departure-date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="seats">Number of Seats:</label>
          <input
            type="number"
            id="seats"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
            min="1"
            required
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingPage;
    