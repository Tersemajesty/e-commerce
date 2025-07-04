import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../component/Content/CartContext';
import "../styles/cart.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegCreditCard } from "react-icons/fa6";
const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    country: 'United States',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully! This is a demo - no actual payment was processed.');
    clearCart();
    setShowCheckout(false);
  };

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-content">
          <h1>Your Cart is Empty</h1>
          <p>Discover our beautiful fragrances</p>
          <Link to="/products" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-content">
        <h1 className="cart-title">Shopping Cart</h1>
        
        <div className="cart-layout">
          {/* Cart Items */}
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="item-image" />
                
                <div className="item-details">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-brand">{item.brand} - {item.size}</p>
                  <p className="item-price">${item.price}</p>
                </div>
                
                <div className="quantity-controls">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="quantity-btn"
                  >
                    <CiCircleMinus size={16} />
                  </button>
                  
                  <span className="quantity">{item.quantity}</span>
                  
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="quantity-btn"
                  >
                    <CiCirclePlus size={16} />
                  </button>
                </div>
                
                <div className="item-total">
                  <p className="total-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                  >
                    <FaRegTrashAlt size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout Section */}
          <div className="checkout-section">
            <div className="order-summary">
              <h2>Order Summary</h2>
              <div className="summary-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="summary-item">
                    <span>{item.name} × {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="total-section">
                <div className="total">
                  <span>Total: ${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>
            </div>

            {!showCheckout ? (
              <div className="cart-actions">
                <Link to="/products" className="continue-shopping">
                  Continue Shopping
                </Link>
                <button 
                  onClick={() => setShowCheckout(true)}
                  className="checkout-btn"
                >
                  Proceed to Checkout
                </button>
              </div>
            ) : (
              <div className="checkout-form">
                <h2>Payment Details</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                  
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                  
                  <input
                    type="text"
                    name="address"
                    placeholder="Street Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                  
                  <div className="form-row">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                    <input
                      type="text"
                      name="zipCode"
                      placeholder="ZIP Code"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="payment-section">
                    <h3>
                      <CiCircleMinus size={20} />
                      Payment Information
                    </h3>
                    
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card Number"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                    
                    <div className="form-row">
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                      <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                    
                    <input
                      type="text"
                      name="cardName"
                      placeholder="Cardholder Name"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-actions">
                    <button
                      type="button"
                      onClick={() => setShowCheckout(false)}
                      className="back-btn"
                    >
                      Back to Cart
                    </button>
                    <button type="submit" className="place-order-btn">
                      Complete Order - ${getTotalPrice().toFixed(2)}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;