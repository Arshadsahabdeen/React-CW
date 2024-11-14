import React, { useState } from 'react';

const TicketBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    tickets: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Successful!\nName: ${formData.name}\nDestination: ${formData.destination}\nTickets: ${formData.tickets}`);
    setFormData({ name: '', email: '', destination: '', tickets: 1 });
  };

  return (
    <div style={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
    }}>
      <div style={{
        maxWidth: '400px', 
        width: '100%',
        textAlign: 'center', 
        padding: '20px', 
        border: '1px solid #ccc', 
        borderRadius: '10px',
      }}>
        <h2>Ticket Booking</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px', margin: '5px 0' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px', margin: '5px 0' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="text"
              name="destination"
              placeholder="Destination"
              value={formData.destination}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px', margin: '5px 0' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="number"
              name="tickets"
              placeholder="Tickets"
              value={formData.tickets}
              onChange={handleChange}
              min="1"
              required
              style={{ width: '100%', padding: '10px', margin: '5px 0' }}
            />
          </div>
          <button type="submit" style={{
            width: '100%', 
            padding: '10px', 
            backgroundColor: '#4CAF50', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '5px',
          }}>
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default TicketBooking;
