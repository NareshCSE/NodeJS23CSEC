import React, { useState } from "react";
import "./Login.css";
import logo from "./logo.webp";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., call an API)
    console.log("Login submitted", formData);
  };

  const handleReset = () => {
    setFormData({
      email: "",
      password: "",
      remember: false,
    });
  };

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

        <h2>Login</h2>

        <div className="form-container">
          <form onSubmit={handleSubmit} onReset={handleReset}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="remember">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
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
        <p>&copy; 2023 CSE(5D0) BVRITH ECOMMERCE. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
