import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember Me:', rememberMe);
    };

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

                <h2>Login</h2>

                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="remember">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                />
                                Remember Me
                            </label>
                        </div>

                        <button type="submit" className="btn">Login</button>
                        <button type="reset" className="clear-btn">Clear</button>
                    </form>
                </div>
            </div>

            <footer>
                <p>&copy; 2023 CSE BVRITH ECOMMERCE. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Login;
