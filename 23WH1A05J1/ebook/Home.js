// src/components/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // or '../styles.css' depending on what you use

function Home() {
  return (
    <>
      <header>
        <h1>BVRITH Ebooks</h1>
      </header>

      <nav>
        <ul>
          <li><Link to="/catalog">Catalog</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      <main>
        <h2>Welcome to BVRITH Ebooks!</h2>
        <div className="main-content">
          <p>
            Discover a world of knowledge at your fingertips. Our e-book collection offers a wide range
            of titles, from classic literature to modern bestsellers, and everything in between.
            Whether you're a student, a researcher, or simply a book lover, we have something for everyone.
            Browse our catalog, create your own library, and enjoy reading on the go!
          </p>
        </div>
      </main>
    </>
  );
}

export default Home;
