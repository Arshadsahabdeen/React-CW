import React, { useState } from 'react';
import './SeatSelection.css';
const SeatSelection = () => {
    const [selectedSeat, setSelectedSeat] = useState(null);

    const seats = Array.from({ length: 10 }, (_, i) => i + 1);

    const handleSeatSelect = (seat) => {
        setSelectedSeat(seat);
    };

    return (
        <div>
            <h2>Select a Seat</h2>
            <ul>
                {seats.map(seat => (
                    <li key={seat} 
                        onClick={() => handleSeatSelect(seat)}
                        style={{ cursor: 'pointer', color: selectedSeat === seat ? 'green' : 'black' }}
                    >
                        Seat {seat}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SeatSelection;
