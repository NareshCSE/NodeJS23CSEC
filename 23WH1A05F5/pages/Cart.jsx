import React, { useState } from 'react';
import './styles.css';

const Cart = () => {
  // Initial cart items and total
  const [cart, setCart] = useState([]);
  
  // Sample products to add to cart
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Calculate the total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      
      {/* Product List */}
      <h2>Available Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <span>{product.name} - ${product.price}</span>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      
      {/* Cart Items */}
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <span>{item.name} - ${item.price}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
      
      {/* Cart Summary */}
      <div className="cart-summary">
        <p>Total Items: {cart.length}</p>
        <p>Total Price: ${calculateTotal()}</p>
      </div>
    </div>
  );
};

export default Cart;
