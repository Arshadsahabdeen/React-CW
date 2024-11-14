import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import BookingPage from './components/BookingPage'; // Import BookingPage component
import TicketManagement from './components/TicketManagement';
import Feedback from './components/Feedback';
import Analytics from './components/Analytics';
import FleetManagement from './components/FleetManagement';
import PassengerDatabase from './components/PassengerDatabase';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/ticket-management" element={<TicketManagement />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/fleet-management" element={<FleetManagement />} />
        <Route path="/passenger-database" element={<PassengerDatabase />} />
      </Routes>
    </Router>
  );
}

export default App;
