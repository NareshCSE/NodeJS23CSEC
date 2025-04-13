import React, { useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router';

const Login = () => {
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });


  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Simple validation
    if (!formData.email || !formData.password) {
      alert('Please fill out both fields!');
      return;
    }

    // Navigate to the next page (e.g., dashboard or result)
    navigate('/dashboard'); // Adjust the route as per your app
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit"  >Login</button>
      </form>
    </div>
  );
};

export default Login;
