import React from 'react';
import { Link } from 'react-router';  // For navigation between pages
import './Nav.css';  // Add appropriate styling for the navigation

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/signup">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/catalog">Catalog</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
