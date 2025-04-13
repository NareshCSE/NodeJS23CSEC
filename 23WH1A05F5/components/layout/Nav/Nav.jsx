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
        <Link to='/contact'>Contact</Link>
        </li>
        <li>
        <Link to='/registration'>Registration</Link>
        </li>
        <li>
        <Link to='/Login'>Login</Link>
        </li>
        <li>
        <Link to='/Cart'>Cart</Link>
        </li>

      </ul>
    </nav>
  );
};

export default Nav;