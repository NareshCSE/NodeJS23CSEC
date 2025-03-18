import React from 'react';
import './Home.css'; // Import the CSS file

function Home() {
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

                <h2>Welcome to CSE BVRITH ECOMMERCE</h2>
                <p>Browse our catalog and shop your favorite products!</p>

                <div>
                    <a href="/catalog" className="btn">Browse Catalog</a>
                    <a href="/cart" className="btn">View Cart</a>
                </div>
            </div>

            <footer>
                <p>&copy; 2023 CSE BVRITH ECOMMERCE. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
