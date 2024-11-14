import React from 'react';
import './Payment.css';

const Payment = () => {
    const handlePayment = () => {
        alert('Payment Successful');
    };

    return (
        <div>
            <h2>Make a Payment</h2>
            <button onClick={handlePayment}>Pay Now</button>
        </div>
    );
};

export default Payment;
