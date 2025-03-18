import React, { useState } from 'react';
import './Cart.css'; // Import the CSS file

function Cart() {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Product 1', quantity: 1, price: 100 },
        { id: 2, name: 'Product 2', quantity: 2, price: 150 }
    ]);

    const totalAmount = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

    return (
        <div className="container">
            <div className="sidebar">
                <img src="th.jpeg" className="logo" alt="Logo" />
                <h2>CSE BVRITH ECOMMERCE</h2>
                <a href="/">Home</a>
                <a href="/catalog">Catalog</a>
                <a href="/cart">Cart</a>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
                <a href="/logout">Logout</a>
            </div>

            <div className="main-content">
                <header>
                    <img src="th.jpeg" className="logo" alt="Logo" />
                    <h1>CSE BVRITH ECOMMERCE</h1>
                </header>

                <h2>Your Cart</h2>
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <p>{item.name} - Quantity: {item.quantity} - Price: {item.price}</p>
                        </div>
                    ))}
                </div>

                <div className="total">
                    <h3>Total Amount: ₹{totalAmount}</h3>
                    <button className="btn">Checkout</button>
                </div>
            </div>

            <footer>
                <p>&copy; 2023 CSE BVRITH ECOMMERCE. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Cart;
