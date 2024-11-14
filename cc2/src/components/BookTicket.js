// src/components/BookTicket.js
import React, { useState } from 'react';
import './BookTicket.css';

const BookTicket = () => {
  const [name, setName] = useState('');
  const [seatNumber, setSeatNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Name validation
    if (name.trim() === '') {
      setError('Name is required.');
      return;
    }

    // Seat number validation (assuming seat numbers are numeric)
    const seatNumberRegex = /^[0-9]+$/;
    if (!seatNumberRegex.test(seatNumber)) {
      setError('Please enter a valid seat number.');
      return;
    }

    // Handle booking logic here
    console.log('Ticket booked for:', { name, seatNumber });
  };

  return (
    <div className="book-ticket">
      <h2>Book Ticket</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Seat Number"
          value={seatNumber}
          onChange={(e) => setSeatNumber(e.target.value)}
          required
        />
        <button type="submit">Book Ticket</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default BookTicket;
