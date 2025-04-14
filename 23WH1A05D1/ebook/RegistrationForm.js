import React, { useState } from 'react';
import './RegistrationForm.css';
import axios from 'axios';

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    email: '',
    password: '',
    phone: '',
    department: '',
    section: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // Replace with axios POST if needed
    // await axios.post("http://localhost:8080/api/register", formData);
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      <div className="form-group">
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Roll Number</label>
        <input type="text" name="rollNumber" value={formData.rollNumber} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Email ID</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Department</label>
        <select name="department" value={formData.department} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
          <option value="MECH">MECH</option>
        </select>
      </div>

      <div className="form-group">
        <label>Section</label>
        <select name="section" value={formData.section} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
      </div>

      <div className="form-group gender-group">
        <label>Gender</label>
        <div className="gender-options">
          <label><input type="radio" name="gender" value="Male" onChange={handleChange} required /> Male</label>
          <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
          <label><input type="radio" name="gender" value="Other" onChange={handleChange} /> Other</label>
        </div>
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
