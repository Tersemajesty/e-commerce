import React from 'react'
import { useCart } from '../component/Content/CartContext';
import ProductCard from "../ProductCard/Productcard";
import { FaRegHeart } from "react-icons/fa";
import "../styles/favorite.css"; // Assuming you have a CSS file for styles
import { Link } from 'react-router-dom';


 const Favorite = () => {
    const { favoriteItems } = useCart();

  if (favoriteItems.length === 0) {
    return (
      <div className="favorites-container">
        <div className="favorites-empty">
          <FaRegHeart size={64} className="favorites-empty-icon" />
          <h1 className="favorites-empty-title">No Favorites Yet</h1>
          <p className="favorites-empty-description">
            Start exploring our products and add your favorites here
          </p>
          <Link to="/products" className="favorites-explore-btn">
            Explore Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-content">
      <div className="favorites-wrapper">
        <div className="favorites-header">
          <h1 className="favorites-title">
            <Heart className="favorites-title-icon" />
            My Favorites
          </h1>
          <p className="favorites-count">
            You have {favoriteItems.length} favorite product{favoriteItems.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="favorites-grid">
          {favoriteItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};



export default Favorite