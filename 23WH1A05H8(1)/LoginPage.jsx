// src/Pages/LoginPage.jsx
import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('User Logged In:', { email, password });
    // Add your login logic here
  };

  return (
    <div style={pageStyles.container}>
      <div style={pageStyles.formContainer}>
        <h1>Login</h1>
        <form onSubmit={handleLogin} style={pageStyles.form}>
          <label style={pageStyles.label}>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            style={pageStyles.input} 
          />
          
          <label style={pageStyles.label}>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            style={pageStyles.input} 
          />
          
          <button type="submit" style={pageStyles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

const pageStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 120px)', // Full height minus header and footer space
    padding: '20px',
    marginTop: '80px', // Margin to avoid overlap with fixed header
  },
  formContainer: {
    width: '100%',
    maxWidth: '400px', // Restrict form width
    backgroundColor: '#f9f9f9',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '8px',
    fontSize: '16px',
    color: '#333',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#555',
  },
};

export default LoginPage;
