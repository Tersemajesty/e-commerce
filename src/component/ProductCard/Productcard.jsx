import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { useCart } from "../Content/CartContext";
import "./productcard.css";
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import StarRating from '../StarRating/StarRating';

const ProductCard = ({ product }) => {
  const { addToCart,toggleFavorite,isFavorite } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };
    const handleToggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product);
  };


  const getCategoryBadge = (category) => {
    const badges = {
      men: { text: 'Men', class: 'men' },
      women: { text: 'Women', class: 'women' },
      kids: { text: 'Kids', class: 'kids' },
      diffusers: { text: 'Diffuser', class: 'diffusers' },
      'body-sprays': { text: 'Body Spray', class: 'body-sprays' },
      'body-moisturizers': { text: 'Moisturizer', class: 'body-moisturizers' }
    };
    return badges[category] || { text: category, class: 'default' };
  };

  const categoryBadge = getCategoryBadge(product.category);

  
  return (
    <Link to={`/products/${product.id}`}  className="block">
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          className="product-images"
        />
       
         <div className="size-badge">
            <span className="size-text">{product.size}</span>
          </div>
       <button
            onClick={handleToggleFavorite}
            className={`favorite-button ${
              isFavorite(product.id) ? 'favorited' : 'not-favorited'
            }`}
          >
            <FaRegHeart size={16} fill={isFavorite(product.id) ? 'currentColor' : 'none'} />
          </button>
      </div>
      
      <div className="product-content">
        <div className="product-brand">
          <span className="brand-text">{product.brand}</span>
        </div>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          <StarRating rating={product.rating} size={16} showRating={false} />
        </div>
        <p className="product-description">{product.description}</p>
        
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button
            onClick={handleAddToCart}
            className="add-to-cart-btn"
          >
            <FaCartShopping size={18} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;