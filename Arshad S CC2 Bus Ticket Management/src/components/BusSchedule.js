import React from 'react';

const BusSchedule = () => {
    const schedules = [
        { id: 1, route: 'City A - City B', time: '10:00 AM' },
        { id: 2, route: 'City C - City D', time: '02:00 PM' }
    ];

    return (
        <div>
            <h2>Bus Schedule</h2>
            <ul>
                {schedules.map(schedule => (
                    <li key={schedule.id}>{schedule.route} at {schedule.time}</li>
                ))}
            </ul>
        </div>
    );
};

export default BusSchedule;
