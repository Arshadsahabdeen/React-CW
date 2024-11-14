// src/components/Login.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Password validation (at least 6 characters)
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    // If validation passes, open the modal
    setIsModalOpen(true);
    console.log('Logged in:', { email, password });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>

      {/* Modal for successful login message */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Login Successful"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Login Successful</h2>
        <p>Welcome back!</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

// Set up styles for the modal
Modal.setAppElement('#root'); // Replace '#root' with the root element of your app

export default Login;
