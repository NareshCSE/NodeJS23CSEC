import React from 'react';
import { Link } from 'react-router';
import './Header.css'; 
import Nav from '../Nav/Nav';
import reactLogo from '../../../assets/react.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
          <img src={reactLogo} alt="Logo" />
      </div>
      <Nav />
    </header>
  );
};

export default Header;