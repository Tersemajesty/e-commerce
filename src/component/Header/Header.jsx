import React, { useState } from 'react'
import "./header.css"
import { IoMdCart } from "react-icons/io";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useCart } from "../Content/CartContext";
import { useAuth } from "../Content/AuthContext";


 const Header = () => {
  const { getTotalItems } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const totalItems = getTotalItems();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const isActive = (path) => location.pathname === path;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const handleUserClick = () => {
    if (isAuthenticated) {
      setShowUserDropdown(!showUserDropdown);
    } else {
      navigate('/account');
    }
  };

  const handleLogout = () => {
    logout();
    setShowUserDropdown(false);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Brand */}
          <Link to="/" className="brand">
            <div className="brand-icon"></div>
            <span className="brand-text">Terse's  <strong className='strong'>Elixir</strong></span>
          </Link>
          
          {/* Search Bar - Desktop */}
          <div className="search-container">
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="search-input"
              />
              < IoIosSearch className="search-icon" size={20} />
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/explore" 
              className={`nav-link ${isActive('/explore') ? 'active' : ''}`}
            >
              Explore
            </Link>
            <Link 
              to="/products" 
              className={`nav-link ${isActive('/products') ? 'active' : ''}`}
            >
              Products
            </Link>
            {isAuthenticated && user?.role === 'admin' && (
              <Link 
                to="/admin" 
                className={`nav-link ${isActive('/admin') ? 'active' : ''}`}
              >
                Admin
              </Link>
            )}
          </div>

          {/* Right Side Icons */}
          <div className="nav-actions">
            {/* User Account */}
            <div className="user-menu">
              <button
                onClick={handleUserClick}
                className="user-btn"
                // title={isAuthenticated ? 'Account' : 'Login'}
              >
                <FaUserAlt size={24} />
                {isAuthenticated && <ChevronDown size={16} />}
              </button>
              
              {isAuthenticated && showUserDropdown && (
                <div className="user-dropdown">
                  <div className="user-info">
                    <p>Welcome, {user.email}</p>
                  </div>
                  <button onClick={handleLogout} className="dropdown-item">
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Cart */}
            <Link to="/cart" className="cart-btn">
              <IoMdCart  size={24} />
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu-btn"
            >
              {isMenuOpen ? <IoClose  size={24} /> : <IoMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mobile-search">
              <div className="mobile-search-container">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="mobile-search-input"
                />
                <FaSearch  className="mobile-search-icon" size={20} />
              </div>
            </form>

            {/* Mobile Navigation Links */}
            <div className="mobile-nav-links">
              <Link 
                to="/" 
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/explore" 
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Explore
              </Link>
              <Link 
                to="/products" 
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
               <Link 
                to="/cart" 
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Cart
              </Link>
              {isAuthenticated && user?.role === 'admin' && (
                <Link 
                  to="/admin" 
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admin
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};


export default Header