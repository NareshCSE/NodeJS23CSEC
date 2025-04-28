// src/components/Register.jsx

import React from 'react';
import '../App.css'; // or '../styles.css' based on your file structure

function Register() {
  return (
    <div className="register-container">
      <h2>Registration Form</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <br />

        <label htmlFor="mobile">Mobile Number:</label>
        <input type="tel" id="mobile" name="mobile" required />
        <br />

        <label htmlFor="department">Department:</label>
        <select id="department" name="department" required>
          <option value="cse">CSE</option>
          <option value="it">IT</option>
          <option value="ece">ECE</option>
          <option value="eee">EEE</option>
        </select>
        <br />

        <label>Gender:</label>
        <br />
        <input type="radio" id="male" name="gender" value="male" />
        <label htmlFor="male">Male</label>

        <input type="radio" id="female" name="gender" value="female" />
        <label htmlFor="female">Female</label>

        <input type="radio" id="other" name="gender" value="other" />
        <label htmlFor="other">Other</label>
        <br />

        <div className="form-buttons">
          <input id="submit" name="submit" type="submit" value="Register" />
          <input id="clear" name="clear" type="reset" value="Clear" />
        </div>
      </form>
    </div>
  );
}

export default Register;
