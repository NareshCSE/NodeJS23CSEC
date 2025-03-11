import React from 'react';
import { Link } from 'react-router';
import './Nav.css'; 

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to='/'>Home</Link>
          </li>
        <li>
          <Link to='/about'>About</Link>
          </li>
        <li>
          <Link to='/services'>Services</Link>
          </li>
        <li>
          <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/result'>Result</Link>
          </li>
      </ul>
    </nav>
  );
};

export default Nav;
