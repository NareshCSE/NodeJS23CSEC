// src/components/Login.js
import React from 'react';

const Login = () => {
    return (
        <div className="container">
            <form>
                <h3>Login</h3>
                <input type="text" placeholder="Enter your username" required />
                <input type="password" placeholder="Enter your password" required />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="/register">Register here</a></p>
        </div>
    );
};

export default Login;
