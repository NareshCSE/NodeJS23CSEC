import React from 'react';

const Login = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Login</h1>
      <form>
        <label>Username</label>
        <input type="text" placeholder="Enter username" /><br />
        <label>Password</label>
        <input type="password" placeholder="Enter password" /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
