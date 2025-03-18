// src/components/Header.js
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <img
        src="https://yt3.googleusercontent.com/-bck6ygSd3FrVos-5H8MXJhYXjeDTFzv6SeUzjziaXOBMWGHjcj6dZa7wIWRWwVgS6DEZG2X=s900-c-k-c0x00ffffff-no-rjn"
        alt="BVRIT-LOGO"
      />
      <h1>Welcome to My E-Book Store</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/catalog">Catalog</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
