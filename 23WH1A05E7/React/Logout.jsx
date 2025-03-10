import React from 'react';
import { Link } from 'react-router'; // For navigation using react-router

import './styles.css'; // Importing CSS for styling

const Logout = () => {
  return (
    <div className="container">
      <h1>Logout</h1>
      <p>You have been logged out successfully!</p>
      <Link to="/login" className="btn btn-primary">
        Login Again
      </Link>
    </div>
  );
};

export default Logout;
