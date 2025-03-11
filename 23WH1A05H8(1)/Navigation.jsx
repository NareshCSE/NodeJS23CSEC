// src/components/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '10px 0',
    marginBottom: '20px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '10px 20px',
    margin: '0 10px',
    transition: 'color 0.3s',
  };

  // Style for hover effect
  const linkHover = {
    color: 'yellow',
  };

  return (
    <header style={navStyle}>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
          <li style={{ margin: '0 10px' }}>
            <Link
              to="/"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style.color = linkHover.color)}
              onMouseOut={(e) => (e.target.style.color = 'white')}
            >
              <HomePage></HomePage>
            </Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link
              to="/register"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style.color = linkHover.color)}
              onMouseOut={(e) => (e.target.style.color = 'white')}
            >
              RegisterPage
            </Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link
              to="/login"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style.color = linkHover.color)}
              onMouseOut={(e) => (e.target.style.color = 'white')}
            >
              LoginPage
            </Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
