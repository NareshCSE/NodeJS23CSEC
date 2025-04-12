import React from 'react';
import './Nav.css'; 

import { Link } from 'react-router';


const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        
        <li >
          <Link to='/about'>About</Link>
        </li>
        
        <li >
          <Link to='/services'>Services</Link>
        </li>
        
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
