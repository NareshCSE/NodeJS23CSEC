import React from 'react';

const Sidebar = ({ onPageChange }) => {
  return (
    <div style={{
      width: '200px',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: '#444',
      color: 'white',
      paddingTop: '20px'
    }}>
      <a href="#" onClick={() => onPageChange('login')} style={linkStyle}>Login</a>
      <a href="#" onClick={() => onPageChange('register')} style={linkStyle}>Register</a>
      <a href="#" onClick={() => onPageChange('catalog')} style={linkStyle}>Catalog</a>
      <a href="#" onClick={() => onPageChange('cart')} style={linkStyle}>Cart</a>
      <a href="#" onClick={() => onPageChange('home')} style={linkStyle}>Logout</a>
    </div>
  );
};

const linkStyle = {
  display: 'block',
  color: 'white',
  padding: '10px 15px',
  textDecoration: 'none',
  fontSize: '18px'
};

export default Sidebar;
