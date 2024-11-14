import React, { useState } from 'react';
import './Feedback.css'; // Make sure this CSS file exists

const Feedback = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle feedback submission logic here
    alert('Feedback submitted successfully!');
  };

  return (
    <div className="feedback-container">
      <h1>Feedback</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="feedback">Your Feedback:</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;
