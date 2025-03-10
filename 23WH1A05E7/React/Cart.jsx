import React, { useState } from 'react';
import './styles.css';  // Importing CSS file

const Cart = () => {
  // State to store cart items
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (title, price) => {
    const newCartItem = { title, price };
    setCart([...cart, newCartItem]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <div className="container">
      <h1>Cart</h1>
      <table id="cartTable">
        <thead>
          <tr>
            <th>Book Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <button 
                  className="remove-btn" 
                  onClick={() => removeFromCart(index)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="checkout-btn">Checkout</button>

      {/* Sample button to add an item (for demonstration) */}
      <button onClick={() => addToCart('Book Title Example', '$19.99')}>Add to Cart</button>
    </div>
  );
};

export default Cart;
