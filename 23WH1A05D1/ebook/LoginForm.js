// src/components/LoginForm.js
import React, { useState } from 'react';
import './LoginForm.css'; 

const LoginForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted', formData);
    // axios.post('/api/login', formData).then(...)
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>Roll Number:
          <input type="text" name="rollNumber" value={formData.rollNumber} onChange={handleChange} required />
        </label>
        <label>Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
