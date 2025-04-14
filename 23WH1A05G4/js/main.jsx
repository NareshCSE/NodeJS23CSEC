import React, { useState } from 'react';

const Home = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to API)
    console.log(formData);
  };

  return (
    <div>
      <header>
        <h1>E‑Book Management System</h1>
      </header>
      <nav>
        <ul>
          <li><a href="registration.html">Register</a></li>
          <li><a href="login.html">Login</a></li>
          <li><a href="catalog.html">Catalog</a></li>
          <li><a href="cart.html">Cart</a></li>
        </ul>
      </nav>
      <div className="container">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
      <footer>
        <p>&copy; 2025 E‑Book Management System</p>
      </footer>
    </div>
  );
};

export default Home;
