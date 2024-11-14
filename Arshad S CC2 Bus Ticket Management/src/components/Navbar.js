import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/login">Login</Link>
        </li>
        <li className="navbar-item">
          <Link to="/register">Register</Link>
        </li>
        <li className="navbar-item">
          <Link to="/book-ticket">Book Ticket</Link>
        </li>
        <li className="navbar-item">
          <Link to="/tickets">Tickets</Link>
        </li>
        <li className="navbar-item">
          <Link to="/seat-selection">Seat Selection</Link> {/* Add Seat Selection link */}
        </li>
        <li className="navbar-item">
          <Link to="/admin">Admin</Link>
        </li>
        <li className="navbar-item">
          <Link to="/manage-buses">Manage Buses</Link>
        </li>
        <li className="navbar-item">
          <Link to="/payment">Payment</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
