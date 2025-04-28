import React from 'react';
import '../App.css'; // or '../styles.css' depending on your file
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <>
      <header>
        <h1>BVRITH Ebooks</h1>
      </header>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/catalog">Catalog</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      <main>
        <h2>Cart</h2>

        <div className="cart-item">
          <p>Book 1 - $10</p>
        </div>

        <div className="cart-item">
          <p>Book 2 - $15</p>
        </div>

        <div className="cart-item">
          <p>Book 3 - $20</p>
        </div>

        <button type="submit">Checkout</button>
      </main>
    </>
  );
}

export default Cart;
