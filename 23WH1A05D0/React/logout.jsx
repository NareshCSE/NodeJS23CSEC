import React from "react";
import "./Logout.css"; // Your CSS file
import logo from "./logo.webp"; // Make sure this image is in your `src` folder or import path

const Logout = () => {
  return (
    <div>
      <div className="sidebar">
        <img src={logo} className="logo" alt="Logo" />
        <h2>CSE BVRITH ECOMMERCE</h2>
        <a href="#">Home</a>
        <a href="#">Catalog</a>
        <a href="#">Cart</a>
        <a href="#">Login</a>
        <a href="#">Register</a>
        <a href="#">Logout</a>
      </div>

      <div className="content">
        <header>
          <img src={logo} className="logo" alt="Logo" />
          <h1>CSE BVRITH ECOMMERCE</h1>
        </header>

        <h2>Logout</h2>

        <div className="logout-container">
          <p className="logout-message">You have been successfully logged out!</p>
          <p>Thank you for visiting CSE BVRITH ECOMMERCE. See you next time!</p>

          <a href="/login" className="btn">Login Again</a>
          <a href="/" className="clear-btn">Back to Home</a>
        </div>
      </div>

      <footer>
        <p>&copy; 2023 CSE(5D0) BVRITH ECOMMERCE. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Logout;
