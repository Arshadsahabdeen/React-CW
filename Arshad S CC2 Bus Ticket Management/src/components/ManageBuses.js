import React, { useState } from 'react';
import './ManageBuses.css';

const ManageBuses = () => {
    const [buses, setBuses] = useState([]);

    const addBus = (bus) => {
        setBuses([...buses, bus]);
    };

    return (
        <div>
            <h2>Manage Buses</h2>
            <button onClick={() => addBus({ id: buses.length + 1, name: 'New Bus' })}>
                Add Bus
            </button>
            <ul>
                {buses.map((bus) => (
                    <li key={bus.id}>{bus.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ManageBuses;
