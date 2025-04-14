// src/components/Register.js
import React from 'react';

const Register = () => {
    return (
        <div className="container">
            <form>
                <h3>Register</h3>
                <input type="text" placeholder="Enter your username" required />
                <input type="email" placeholder="Enter your email" required />
                <input type="password" placeholder="Enter your password" required />
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
    );
};

export default Register;
