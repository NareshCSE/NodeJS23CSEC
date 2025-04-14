// src/components/Cart.js
import React from 'react';

const Cart = () => {
    return (
        <div className="container">
            <h2>Cart</h2>
            <div className="cart-item">Book 1 - $10</div>
            <div className="cart-item">Book 2 - $15</div>
            <div className="cart-item">Book 3 - $20</div>
            <button type="button">Checkout</button>
        </div>
    );
};

export default Cart;
