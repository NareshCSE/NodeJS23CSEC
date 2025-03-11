// src/Pages/RegisterPage.jsx
import React, { useState } from 'react';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Registered:', { email, password });
    // Here, you can add logic to save the user data.
  };

  return (
    <div style={pageStyle}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <br />
        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

const pageStyle = {
  padding: '20px',
  textAlign: 'center',
};

export default RegisterPage;
