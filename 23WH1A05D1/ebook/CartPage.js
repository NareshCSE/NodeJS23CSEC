// src/components/CartPage.js
import React from 'react';

const CartPage = ({ cartItems }) => {
  // Ensure cartItems is always an array, even if undefined
  const items = Array.isArray(cartItems) ? cartItems : [];

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty. Start shopping!</p>
      ) : (
        <div>
          <ul>
            {items.map((book, index) => (
              <li key={index}>
                <h3>{book.title}</h3>
                <p><strong>Author:</strong> {book.author}</p>
                <p><strong>Genre:</strong> {book.genre}</p>
                <p>{book.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CartPage;
