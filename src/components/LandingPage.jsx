import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="content">
        <p className="welcome-text">Welcome to</p>
        <h1 className="image-text">BOOK NEST</h1>
        <p className="caption-text">Where silence speaks and stories live</p>
        <button className="explore-button">Explore Now</button>
      </div>
    </div>
  );
};

export default LandingPage;
