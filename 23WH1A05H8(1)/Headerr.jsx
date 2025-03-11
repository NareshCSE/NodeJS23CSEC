// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Headerr = () => {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}><Link to="/" style={linkStyle}>Home</Link></li>
          <li style={liStyle}><Link to="/register" style={linkStyle}>Register</Link></li>
          <li style={liStyle}><Link to="/login" style={linkStyle}>Login</Link></li>
          <li style={liStyle}><Link to="/cart" style={linkStyle}>Cart</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '10px 0',
  textAlign: 'center'
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const ulStyle = {
  listStyleType: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
};

const liStyle = {
  margin: '0 20px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '18px',
};

export default Headerr;
