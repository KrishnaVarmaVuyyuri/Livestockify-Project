import React from 'react';
import './Poster.css';

const FestivalPoster = () => {
  return (
    <div className="poster">
      <h1>🎉 Celebrate the Harvest Season! 🎉</h1>
      <p>Join us in honoring the spirit of farming and the joys of a bountiful harvest.</p>
      <p>Together, let’s cultivate a future of innovation and success!</p>
      <a href="https://www.livestockify.com" className="cta-button">Learn More</a>
      <div className="social-media">
        <p>Follow us: <span className="hashtags">#Livestockify #HarvestSeason #SmartFarming</span></p>
      </div>
    </div>
  );
};

export default FestivalPoster;
