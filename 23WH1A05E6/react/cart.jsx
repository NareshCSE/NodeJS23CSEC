import React from "react";
import "./Cart.css";
import logo from "./logo.webp"; // Make sure logo.webp is in the src folder or public

const Cart = () => {
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

        <h2>Your Cart</h2>

        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product 1</td>
              <td>$199.99</td>
              <td><input type="number" defaultValue="1" min="1" /></td>
              <td>$199.99</td>
              <td><a href="#" className="btn">Remove</a></td>
            </tr>
            <tr>
              <td>Product 2</td>
              <td>$149.99</td>
              <td><input type="number" defaultValue="1" min="1" /></td>
              <td>$149.99</td>
              <td><a href="#" className="btn">Remove</a></td>
            </tr>
            <tr>
              <td>Product 3</td>
              <td>$299.99</td>
              <td><input type="number" defaultValue="1" min="1" /></td>
              <td>$299.99</td>
              <td><a href="#" className="btn">Remove</a></td>
            </tr>
          </tbody>
        </table>

        <div className="cart-summary">
          <p><strong>Subtotal:</strong> $649.97</p>
          <a href="#" className="btn">Proceed to Checkout</a>
        </div>
      </div>

      <footer>
        <p>&copy; 2023 CSE(5D0) BVRITH ECOMMERCE. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Cart;
