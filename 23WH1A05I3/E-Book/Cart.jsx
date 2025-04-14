import React, { useState } from 'react';
import './Cart.css';

function CartPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Classic',
      price: 10.99,
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      genre: 'Dystopian',
      price: 8.99,
    },
    {
      id: 3,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Fiction',
      price: 12.99,
    },
    // Add more books as needed
  ]);

  // Function to remove a book from the cart
  const removeFromCart = (id) => {
    setCart(cart.filter(book => book.id !== id));
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, book) => total + book.price, 0);

  return (
    <div className="cart-container">
      <h1>Cart Page</h1>

      {/* Book List */}
      <div className="cart-books">
        {cart.length > 0 ? (
          cart.map((book) => (
            <div key={book.id} className="cart-item">
              <div className="book-details">
                <h2>{book.title}</h2>
                <p>Author: {book.author}</p>
                <p>Genre: {book.genre}</p>
                <p>Price: ${book.price}</p>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(book.id)}>
                Remove from Cart
              </button>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      {/* Total Price */}
      <div className="total-price">
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default CartPage;
