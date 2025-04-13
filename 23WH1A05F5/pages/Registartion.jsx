import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router';

const Registration = () => {
    const navigate =useNavigate()
    const handleSubmit=()=>{
      navigate('/result2')
    }
  
  return (
    <div className="registration">
    <h1>Registration</h1>
    <form>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" required></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
            type="password"
            id="password"
            name="password"
            required
          />
      </div>
      <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
          />
        </div>


      <button type="submit" onClick={handleSubmit}>Submit</button> 
    </form>
  </div>
  );
};

export default Registration;
