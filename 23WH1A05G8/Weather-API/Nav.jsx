import React from 'react';
import { Link } from 'react-router';
import './Nav.css'; 

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Cart">Cart</Link>
        </li>
        <li>
        <Link to="/About">About</Link>
        </li>
        <li>
        <Link to="/Services">Services</Link>
        </li>
        <li>
        <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Register">Register</Link>
        </li>
        <li>
          <Link to="/Weather">Weather</Link>
        </li>
        <li>
          <Link to="/Data">Information</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;