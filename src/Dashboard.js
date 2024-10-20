import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [farmData] = useState({
    temperature: 22,
    humidity: 50,
    ammonia: 10,
    healthStatus: 'green',
    devices: [
      { id: 1, name: 'Temperature Sensor', status: 'online', battery: '80%' },
      { id: 2, name: 'Humidity Sensor', status: 'offline', battery: 'N/A' },
    ],
    alerts: [],
    performanceMetrics: {
      eggProduction: 120,
      feedConversion: 1.5,
      mortalityRate: 5,
    },
  });

  return (
    <div className="dashboard">
      <h1>Livestockify Dashboard</h1>
      <div className="farm-overview">
        <h2>Farm Overview</h2>
        <div className="overview-card">
          <div>Status: <span className={`status ${farmData.healthStatus}`}>{farmData.healthStatus}</span></div>
          <div>Temperature: {farmData.temperature}°C</div>
          <div>Humidity: {farmData.humidity}%</div>
          <div>Ammonia Levels: {farmData.ammonia} ppm</div>
        </div>
      </div>
      <section className="device-management">
        <h2>Device Management</h2>
        <ul>
          {farmData.devices.map(device => (
            <li key={device.id} className="device-item">
              {device.name} - Status: <span className={`status ${device.status}`}>{device.status}</span>, Battery: {device.battery}
            </li>
          ))}
        </ul>
      </section>
      <section className="alerts">
        <h2>Alerts</h2>
        <ul>
          {farmData.alerts.length === 0 ? (
            <li>No current alerts.</li>
          ) : (
            farmData.alerts.map((alert, index) => <li key={index}>{alert}</li>)
          )}
        </ul>
      </section>
      <section className="performance-metrics">
        <h2>Performance Metrics</h2>
        <div>Egg Production: {farmData.performanceMetrics.eggProduction}</div>
        <div>Feed Conversion Ratio: {farmData.performanceMetrics.feedConversion}</div>
        <div>Mortality Rate: {farmData.performanceMetrics.mortalityRate}%</div>
      </section>
    </div>
  );
};

export default Dashboard;
