import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TicketList.css';
function TicketList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('http://localhost:5000/tickets');
        setTickets(response.data);
      } catch (error) {
        console.error(error);
        alert('An error occurred while fetching tickets');
      }
    };
  
    fetchTickets();
  }, []);
  

  return (
    <div>
      <h2>Your Tickets</h2>
      <ul>
        {tickets.map((ticket, index) => (
          <li key={index}>
            {ticket.source} to {ticket.destination} on {ticket.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TicketList;
