import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/notFound.css"; // Assuming you have a CSS file for styles

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Page Not Found</h2>
        <p className="notfound-description">The page you're looking for doesn't exist.</p>
        <Link 
          to="/"
          className="notfound-link"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;