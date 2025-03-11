import React from "react";
import "./styles.css";

export const Login = () => (
    <div className="form-container">
      <h2>Login</h2>
      <form>
        <div>
            <label>Username:</label>
            <input type="text" required />
        </div>
        <div>
            <label>Password:</label>
            <input type="password" required />
        </div>
        <div>
            <button type="submit">Login</button>
        </div>
        
      </form>
    </div>
  );

export default Login;