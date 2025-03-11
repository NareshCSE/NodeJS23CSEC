// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2025 eBook Management System. All Rights Reserved.</p>
      <div>
        <a href="#" style={footerLinkStyle}>Privacy Policy</a> | 
        <a href="#" style={footerLinkStyle}>Terms of Service</a>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: 'white',
  textAlign: 'center',
  padding: '10px 0',
  marginTop: '20px',
};

const footerLinkStyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 10px',
};

export default Footer;
