import React from 'react';
import './Home.css'; // Make sure this CSS file exists

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Bus Ticket Management System</h1>
      <p>Your one-stop solution for booking and managing bus tickets efficiently. Explore our features below:</p>
      <div className="feature">
        <h2>Online Booking</h2>
        <p>Book tickets easily through our user-friendly interface. Select routes, departure times, and seat preferences.</p>
      </div>
      <div className="feature">
        <h2>Real-Time Availability</h2>
        <p>Get updated seat availability and manage bookings with real-time information.</p>
      </div>
      <div className="feature">
        <h2>Manage Tickets</h2>
        <p>Handle cancellations, refunds, and e-tickets with ease.</p>
      </div>
    </div>
  );
};

export default Home;
