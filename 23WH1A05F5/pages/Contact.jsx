import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router';
const Contact = () => {
  const navigate =useNavigate()
  const handleSubmit=()=>{
    navigate('/result')
  }
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us.</p>
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
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" onClick={handleSubmit}>Submit</button> 
      </form>
    </div>
  );
};

export default Contact;