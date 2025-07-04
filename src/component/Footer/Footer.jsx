import React, { useState } from 'react'
import "./footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
 const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-title">Aroma Luxe</h3>
            <p className="footer-description">
              Discover the finest fragrances from around the world. Premium quality perfumes, 
              body sprays, and moisturizers for every occasion.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <IoIosMail size={16} />
                <span>tersemajesty@gmail.com</span>
              </div>
              <div className="contact-item">
                <FaPhone size={16} />
                <span>+234 8036310366</span>
              </div>
              <div className="contact-item">
                <FiMapPin size={16} />
                <span>123 Fragrance St, New York, NY</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="section-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/explore">Explore</a></li>
              <li><a href="/account">Account</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h4 className="section-title">Categories</h4>
            <ul className="footer-links">
              <li><a href="/products?category=men">Men's Fragrances</a></li>
              <li><a href="/products?category=women">Women's Fragrances</a></li>
              <li><a href="/products?category=bodyspray">Body Sprays</a></li>
              <li><a href="/products?category=bodymoist">Body Moisturizers</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h4 className="section-title">Newsletter</h4>
            <p className="newsletter-text">
              Subscribe to get updates on new arrivals and exclusive offers
            </p>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
            <div className="social-links">
              <a href="#" className="social-link">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="social-link">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="social-link">
                <FaXTwitter  size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Terse's Elixir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
