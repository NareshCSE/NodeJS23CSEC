// src/components/Login.jsx

import React from 'react';
import '../App.css'; // or '../styles.css' depending on your filename

function Login() {
  return (
    <div className="login-container">
      <h2>Login Form</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <br />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <br />

        <div className="form-buttons">
          <input id="submit" name="submit" type="submit" value="Login" />
          <input id="clear" name="clear" type="reset" value="Clear" />
        </div>
      </form>
    </div>
  );
}

export default Login;
