import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../component/data/products";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { FaArrowLeft } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { useCart } from "../component/Content/CartContext";
import StarRating from  "../component/StarRating/StarRating";
// import { toast } from 'sonner';
import "../styles/Productdetailpage.css"; // Assuming you have a CSS file for styles

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleFavorite, isFavorite } = useCart();

  const product = products.find((p) => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState(
    Array.isArray(product.sizes) && product.sizes.length > 0
      ? product.sizes[0]
      : ""
  );
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="not-found-container">
        <div className="not-found-content">
          <h1 className="not-found-title">Product Not Found</h1>
          <button
            onClick={() => navigate("/products")}
            className="not-found-btn"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    const productWithOptions = {
      ...product,
      selectedSize,
      quantity,
    };

    for (let i = 0; i < quantity; i++) {
      addToCart(productWithOptions);
    }

    toast.success(`Added ${quantity} ${product.name} to cart!`);
  };

  const handleToggleFavorite = () => {
    toggleFavorite(product);
    const message = isFavorite(product.id)
      ? `Removed ${product.name} from favorites`
      : `Added ${product.name} to favorites`;
    toast.success(message);
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail-wrapper">
        <button onClick={() => navigate(-1)} className="back-button">
          <FaArrowLeft size={20} />
          Back
        </button>

        <div className="product-detail-grid">
          {/* Product Image */}
          <div className="product-image-section">
            <div className="product-main-image">
              <img src={product.image} alt={product.name} />
              <button
                onClick={handleToggleFavorite}
                className={`favorite-button ${
                  isFavorite(product.id) ? "favorited" : "not-favorited"
                }`}
              >
                <FaRegHeart
                  size={24}
                  fill={isFavorite(product.id) ? "currentColor" : "none"}
                />
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info-section">
            <div>
              <p className="product-brand">{product.brand}</p>
              <h1 className="product-title">{product.name}</h1>
              <div className="product-rating">
                <StarRating rating={product.rating} size={20} />
              </div>
              <p className="product-description">{product.description}</p>
            </div>

            <div className="product-price-section">
              <span className="product-price">${product.price}</span>
              <div
                className={`stock-badge ${
                  product.inStock ? "in-stock" : "out-of-stock"
                }`}
              >
                {product.inStock
                  ? `In Stock (${product.stockQuantity})`
                  : "Out of Stock"}
              </div>
            </div>

            {/* Size Selection */}
            <div className="size-section">
              <h3>Size</h3>
              {Array.isArray(product.sizes) && product.sizes.length > 0 ? (
                product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`size-option ${
                      selectedSize === size ? "selected" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))
              ) : (
                <p className="no-sizes">No sizes available</p>
              )}
            </div>

            {/* Quantity Selection */}
            <div className="quantity-section">
              <h3>Quantity</h3>
              <div className="quantity-controls">
                <div className="quantity-selector">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="quantity-btn"
                  >
                    <FiMinus size={16} />
                  </button>
                  <span className="quantity-display">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="quantity-btn"
                  >
                    <FaPlus size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`add-to-cart-btn ${
                product.inStock ? "available" : "unavailable"
              }`}
            >
              <LuShoppingCart size={20} />
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </button>

            {/* Ingredients */}
            {Array.isArray(product.ingredients) &&
            product.ingredients.length > 0 ? (
              product.ingredients.map((ingredient, index) => (
                <span key={index} className="ingredient-tag">
                  {ingredient}
                </span>
              ))
            ) : (
              <p className="no-ingredients">No ingredients listed</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
