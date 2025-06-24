import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="text-container">
      <h3 className="welcome-text">Welcome to ,</h3>

      <div className="letter-line">
        {/* <img src="/book1.jpg" alt="book" className="letter-icon" /> */}
        {'BOOK'.split('').map((char, i) => (
          <span key={i} className="image-letter">{char}</span>
        ))}
      </div>
        
      <div className="letter-line">
        {'NEST...'.split('').map((char, i) => (
          <span key={i} className="image-letter">{char}</span>
        ))}
        {/* <img src="/nest.jpg" alt="nest" className="letter-icon" /> */}
      </div>

      <p className="caption">Where silence speaks and stories live ...</p>
      <button className="explore-button">EXPLORE NOW</button>
    </div>
  );
};

export default LandingPage;
