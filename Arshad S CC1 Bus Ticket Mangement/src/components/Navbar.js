import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/booking">Book Ticket</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/ticket-management">Ticket Booking</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/fleet-management">Fleet Management</Link>
        <Link to="/passenger-database">Passenger Database</Link>
      </div>
    </nav>
  );
}

export default Navbar;
