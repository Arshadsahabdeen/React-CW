import React, { useRef, useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);


const AnalyticsPage = () => {
  const chartRef = useRef(null); // Use `useRef` to reference the chart

  useEffect(() => {
    // Add the null check before accessing the reference
    if (chartRef.current) {
      // Perform any operations on the chart
      console.log('Chart is ready:', chartRef.current);
    }
  }, []);
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Ticket Sales',
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.8)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Revenue',
        data: [5000, 4000, 6000, 7000, 8000],
        fill: false,
        backgroundColor: 'rgba(255,99,132,0.6)',
        borderColor: 'rgba(255,99,132,1)',
      },
    ],
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
    }}>
      <h2>Analytics Dashboard</h2>
      
      <div style={{ width: '70%', marginBottom: '30px' }}>
        <h3>Ticket Sales (Monthly)</h3>
        <Bar data={barData} options={{ maintainAspectRatio: false }} />
      </div>

      <div style={{ width: '70%', marginBottom: '30px' }}>
        <h3>Revenue Over Time</h3>
        <Line data={lineData} options={{ maintainAspectRatio: false }} />
      </div>

      <div style={{ width: '70%' }}>
        <h3>Summary</h3>
        <table style={{ width: '100%', border: '1px solid #ccc', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px', border: '1px solid #ccc' }}>Metric</th>
              <th style={{ padding: '10px', border: '1px solid #ccc' }}>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>Total Tickets Sold</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>500</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>Total Revenue</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>$25,000</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>Average Tickets per Month</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>100</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnalyticsPage;
