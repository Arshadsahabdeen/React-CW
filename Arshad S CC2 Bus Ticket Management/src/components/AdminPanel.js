import React from 'react';
import './AdminPanel.css';
const AdminPanel = () => {
    return (
        <div>
            <h2>Admin Dashboard</h2>
            <ul>
                <li><a href="/manage-buses">Manage Buses</a></li>
                <li><a href="/manage-users">Manage Users</a></li>
                <li><a href="/view-reports">View Reports</a></li>
            </ul>
        </div>
    );
};

export default AdminPanel;
    