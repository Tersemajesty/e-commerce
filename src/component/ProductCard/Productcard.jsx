import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { useCart } from "../Content/CartContext";
import "./productcard.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
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
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          // alt={product.name}
          className="product-image"
        />
        <div className={`category-badge ${categoryBadge.class}`}>
          {categoryBadge.text}
        </div>
        <div className="size-badge">
          <span className="size-text">{product.size}</span>
        </div>
      </div>
      
      <div className="product-content">
        <div className="product-brand">
          <span className="brand-text">{product.brand}</span>
        </div>
        <h3 className="product-name">{product.name}</h3>
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
  );
};

export default ProductCard;