// src/components/Layout.js
import React from 'react';
import { Link, Outlet, useOutletContext } from 'react-router-dom';
import './Layout.css';

const Layout = ({ addToCart, cartItems }) => {
  return (
    <div className="layout">
      <nav className="sidebar">
        <div className="logo">BVRITH Library</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
      <main className="content">
        {/* 👇 Pass context to nested routes */}
        <Outlet context={{ addToCart, cartItems }} />
      </main>
    </div>
  );
};

export default Layout;
