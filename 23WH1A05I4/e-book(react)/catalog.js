import React from 'react';
import './Catalog.css'; // Import the CSS file

function Catalog() {
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

                <h2>Catalog</h2>
                <div className="catalog-items">
                    {/* Mock Catalog Items */}
                    <div className="catalog-item">
                        <h4>Product 1</h4>
                        <p>Details about product 1.</p>
                        <button className="btn">Add to Cart</button>
                    </div>
                    <div className="catalog-item">
                        <h4>Product 2</h4>
                        <p>Details about product 2.</p>
                        <button className="btn">Add to Cart</button>
                    </div>
                    {/* Add more items here */}
                </div>
            </div>

            <footer>
                <p>&copy; 2023 CSE BVRITH ECOMMERCE. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Catalog;
