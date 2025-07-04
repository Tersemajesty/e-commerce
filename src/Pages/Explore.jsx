import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/explore.css"; // Assuming you have a CSS file for styles

const Explore = () => {
  return (
    <div className="explore-container">
      <div className="explore-content">
        <div className="explore-header">
          <h1 className="explore-title">Explore Our World</h1>
          <p className="explore-subtitle">Discover the art of fragrance and find your signature scent</p>
        </div>

        <div className="categories-grid">
          <div className="category-card">
            <img 
              src="/images/24K PERFUME_ _ SCENTS BANK🌼.jpeg" 
              alt="Men's Fragrances" 
              className="category-image"
            />
            <div className="category-content">
              <h3 className="category-title">Men's Collection</h3>
              <p className="category-description">Bold and sophisticated scents for the modern man</p>
              <Link 
                to="/products?category=men"
                className="category-link men"
              >
                Explore Men's
              </Link>
            </div>
          </div>

          <div className="category-card">
            <img 
              src="/images/Mousuf Golden EDP Perfume By Ard Al Zaafaran 100 ML Rich Oud Fragrance _ eBay.jpeg" 
              alt="Women's Fragrances" 
              className="category-image"
            />
            <div className="category-content">
              <h3 className="category-title">Women's Collection</h3>
              <p className="category-description">Elegant and enchanting fragrances for every occasion</p>
              <Link 
                to="/products?category=women"
                className="category-link women"
              >
                Explore Women's
              </Link>
            </div>
          </div>

          <div className="category-card">
            <img 
              src="https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=300&fit=crop" 
              alt="Kids Fragrances" 
              className="category-image"
            />
            <div className="category-content">
              <h3 className="category-title">Kids Collection</h3>
              <p className="category-description">Gentle and playful scents designed for children</p>
              <Link 
                to="/products?category=kids"
                className="category-link kids"
              >
                Explore Kids
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
