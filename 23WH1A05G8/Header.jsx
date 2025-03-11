import React from 'react';
import { Link } from 'react-router';
import './Header.css'; 
import Nav from '../Nav/Nav';
import reactLogo from '../../../assets/logo3.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={reactLogo} alt="Logo" />
        </Link>
      </div>
      <div className = "website-name">
      <h1>ᏰᎧᎧᏦᏇᎧᏒᎷ</h1>
      </div>
      <Nav />
    </header>
  );
};

export default Header;