import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import ManageBuses from './components/ManageBuses';
import ManageUsers from './components/ManageUsers';
import BusSchedule from './components/BusSchedule';
import BookingHistory from './components/BookingHistory';
import UserProfile from './components/UserProfile';
import Payment from './components/Payment';
import Alerts from './components/Alerts';
import SeatSelection from './components/SeatSelection';
import FeedbackForm from './components/FeedbackForm';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import BookTicket from './components/BookTicket';
import TicketList from './components/TicketList';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/manage-buses" element={<ManageBuses />} />
          <Route path="/bus-schedule" element={<BusSchedule />} />
          <Route path="/booking-history" element={<BookingHistory />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/seat-selection" element={<SeatSelection />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book-ticket" element={<BookTicket />} />
          <Route path="/tickets" element={<TicketList />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/manage-buses" element={<ManageBuses />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
