import React from 'react';
import { Link } from 'react-router-dom';
import { products } from "../data/products";
import ProductCard from "../ProductCard/Productcard";
import './Home.css';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Discover Your Perfect Scent
          </h1>
          <p className="hero-subtitle">
            Luxury perfumes crafted with the finest ingredients from around the world
          </p>
          <Link to="/products" className="hero-cta">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="section-header">
          <h2 className="section-title">Featured Fragrances</h2>
          <p className="section-subtitle">Discover our most popular and beloved scents</p>
        </div>

        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="view-all-container">
          <Link to="/products" className="view-all-btn">
            View All Products
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">The Art of Fragrance</h2>
            <p className="about-paragraph">
              At Aroma Luxe, we believe that fragrance is more than just a scent – it's an expression of your personality, 
              a memory in the making, and a luxury that transforms the ordinary into the extraordinary.
            </p>
            <p className="about-paragraph">
              Each of our perfumes is carefully crafted using premium ingredients sourced from the world's finest fragrance houses, 
              ensuring that every bottle delivers an unforgettable olfactory experience.
            </p>
          </div>
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&h=400&fit=crop" 
              alt="Perfume bottles" 
              className="about-img"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
