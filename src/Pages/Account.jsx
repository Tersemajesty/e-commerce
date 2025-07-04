import React from 'react'
import "../styles/account.css"
import { useAuth } from "../component/Content/AuthContext";
import { useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { GoLock } from "react-icons/go";


 const Account = () => {
 const { login, logout, isAuthenticated, user } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });



  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      const success = login(formData.email, formData.password);
      if (!success) {
        alert('Invalid credentials. Use admin@aromaluxe.com / admin123 for admin access');
      }
    } else {
      console.log('Registration attempt:', formData);
      alert('Registration successful! You can now login.');
      setIsLogin(true);
    }
  };

  const handleLogout = () => {
    logout();
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  if (isAuthenticated) {
    return (
      <div className="account-container">
        <div className="account-content">
          <div className="account-card">
            <div className="account-header">
              <div className="user-avatar">
                <FaUserAlt size={32} />
              </div>
              <h2>Welcome Back!</h2>
              <p>You are logged in as {user.email}</p>
            </div>
            
            <div className="account-actions">
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="account-container">
      <div className="account-content">
        <div className="account-card">
          <div className="account-header">
            <div className="user-avatar">
              <FaUserAlt size={32} />
            </div>
            <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
            <p>{isLogin ? 'Sign in to your account' : 'Join our fragrance community'}</p>
          </div>

          <form onSubmit={handleSubmit} className="account-form">
            {!isLogin && (
              <div className="form-group">
                <FaUserAlt className="form-icon" size={20} />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  required={!isLogin}
                />
              </div>
            )}

            <div className="form-group">
              <IoMailOpen className="form-icon" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <GoLock  className="form-icon" size={20} />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="form-input"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle"
              >
                {showPassword ? <FaEye  size={20} /> : <FaEye  size={20} />}
              </button>
            </div>

            {!isLogin && (
              <div className="form-group">
                <GoLock className="form-icon" size={20} />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="form-input"
                  required={!isLogin}
                />
              </div>
            )}

            <button type="submit" className="submit-btn">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="account-toggle">
            <p>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="toggle-btn"
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>

          {isLogin && (
            <div className="forgot-password">
              <button className="forgot-btn">
                Forgot your password?
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account