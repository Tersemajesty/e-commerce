import React from 'react';
import { IoStar } from "react-icons/io5";import './StarRating.css';
import "./starRating.css";

const StarRating = ({ rating, size = 16, showRating = true, className = "" }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className={`star-rating-container ${className}`}>
      <div className="star-rating-stars">
        {[...Array(5)].map((_, index) => {
          if (index < fullStars) {
            return (
              <Star
                key={index}
                size={size}
                className="star-filled"
              />
            );
          } else if (index === fullStars && hasHalfStar) {
            return (
              <div key={index} className="star-half-container">
                <Star size={size} className="star-empty" />
                <div className="star-half-overlay">
                  <Star size={size} className="star-filled" />
                </div>
              </div>
            );
          } else {
            return (
              <IoStar key={index} size={size} className="star-empty" />
            );
          }
        })}
      </div>
      {showRating && (
        <span className="star-rating-text">({rating})</span>
      )}
    </div>
  );
};

export default StarRating;
