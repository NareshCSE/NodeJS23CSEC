import React from 'react';
import './styles.css';  // Importing CSS file

const Login = () => {
  return (
    <div className="container">
      <h1>Login</h1>
      <form>
        <div className="row">
          <div className="col">
            <label htmlFor="email" className="form-label">Email:</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              placeholder="Enter your email" 
              name="email" 
              required 
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="password" className="form-label">Password:</label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              placeholder="Enter your password" 
              name="pswd" 
              required 
            />
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
