import React from 'react';

const Alerts = () => {
    const alerts = [
        { id: 1, message: 'Bus A is delayed by 30 minutes.' },
        { id: 2, message: 'Bus B has been rescheduled to 12:00 PM.' }
    ];

    return (
        <div>
            <h2>Alerts</h2>
            <ul>
                {alerts.map(alert => (
                    <li key={alert.id}>{alert.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default Alerts;
