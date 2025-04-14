import React from 'react';
//for submit button
import { useNavigate } from 'react-router';

import './styles.css';

const Contact = () => {
  const navigate=useNavigate()
  const handlesubmit=()=>{
    navigate("/result")
  }

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us.</p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" ></textarea>
        </div>
        <button type="submit" onClick={handlesubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
