import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/reader/ebook1">Read Ebook 1</Link>
          </li>
          <li>
            <Link to="/reader/ebook2">Read Ebook 2</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
