// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
      padding: '15px',
      position: 'fixed',
      bottom: 0,
      width: '100%'
    }}>
      &copy; {new Date().getFullYear()} eBook Platform. All rights reserved.
    </footer>
  );
};

export default Footer;
