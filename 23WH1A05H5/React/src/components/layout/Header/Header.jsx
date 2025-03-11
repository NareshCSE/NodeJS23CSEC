import React from 'react';
import { Link } from 'react-router';
import './Header.css'; 
import Nav from '../Nav/Nav';
import reactLogo from '../../../assets/image.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
          <img src={reactLogo} alt="Logo" />
      </div>
      <h1>E-Book Management System</h1>
      <Nav />
    </header>
  );
};

export default Header;