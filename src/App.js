import React from 'react';
import Dashboard from './Dashboard';
import FestivalPoster from './FestivalPoster';
import './App.css'; // Optional for overall styling

const App = () => {
  return (
    <div className="app">
      <Dashboard />
      <FestivalPoster />
    </div>
  );
};

export default App;
