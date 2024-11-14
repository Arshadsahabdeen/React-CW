import React from 'react';

const BookingHistory = () => {
    const bookings = [
        { id: 1, route: 'City A - City B', date: '2024-10-20' },
        { id: 2, route: 'City C - City D', date: '2024-10-21' }
    ];

    return (
        <div>
            <h2>Booking History</h2>
            <ul>
                {bookings.map(booking => (
                    <li key={booking.id}>{booking.route} on {booking.date}</li>
                ))}
            </ul>
        </div>
    );
};

export default BookingHistory;
