import React from 'react';
import { Link } from 'react-router';

import './Nav.css'; 

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to='/welcome'>Welcome</Link>
        </li>
        <li>
        <Link to='/Registration'>Registration</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>        
        <li>
        <Link to='/catalog'>Catalog</Link>
        </li>
        <li>
        <Link to='/cart'>Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;