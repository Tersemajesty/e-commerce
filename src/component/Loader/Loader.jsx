import React from 'react';
import './Loader.css';

const Loader = ({ size = 'medium' }) => {
  const sizeClasses = {
    small: 'spinner-small',
    medium: 'spinner-medium',
    large: 'spinner-large'
  };

  return (
    <div className="loader-container">
      <div className={`spinner-wrapper ${sizeClasses[size]}`}>
        <img 
          src="/images/my logo1.jpg" 
          alt="Loading..."
          className="spinner-logo"
        />
        <div className="spinner-ring"></div>
      </div>
      {/* {text && <p className="spinner-text">{text}</p>} */}
    </div>
  );
};

export default Loader;
