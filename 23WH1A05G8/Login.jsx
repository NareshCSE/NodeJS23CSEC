import React from 'react';
//for submit button
import { useNavigate } from 'react-router';

import './styles.css';

const Login = () => {
  const navigate=useNavigate()
  const handlesubmit=()=>{
    navigate("/login")
  }

  return (
    <div className="Login">
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
        <label for="pwd">Password:</label>
        <input type="password" id="pwd" name="pwd"/>

        </div>
        <button type="submit" onClick={handlesubmit}>Login</button>
      </form>
    </div>
  );
};

export default Login;