import React from 'react';
import './registration.css';

const Registration = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-3">REGISTRATION FORM</h1>
      <form className="bg-light rounded shadow">
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="FirstName" className="form-label">First Name:</label>
            <input type="text" className="form-control" id="FirstName" placeholder="Enter First Name" name="FirstName" required />
          </div>
          <div className="col-md-6">
            <label htmlFor="LastName" className="form-label">Last Name:</label>
            <input type="text" className="form-control" id="LastName" placeholder="Enter Last Name" name="LastName" />
          </div>
        </div>
        
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" name="email" required />
          </div>
          <div className="col-md-6">
            <label htmlFor="password" className="form-label">Password:</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" name="pswd" required />
          </div>
        </div>
        
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="mobilenumber" className="form-label">Mobile Number:</label>
            <input type="tel" className="form-control" id="mobilenumber" placeholder="123-456-7890" name="mobilenumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
          </div>
          <div className="col-md-6">
            <label htmlFor="dob" className="form-label">Date of Birth:</label>
            <input type="date" className="form-control" id="dob" name="dob" required />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="Languages" className="form-label">Languages Known:</label>
          <div className="d-flex gap-3">
            {['Java', 'C++', 'Python', 'C'].map((lang, index) => (
              <div key={index} className="form-check">
                <input className="form-check-input" type="checkbox" id={`check${index}`} value={lang} />
                <label className="form-check-label">{lang}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Gender:</label>
          <div className="d-flex gap-3">
            {['Male', 'Female'].map((gender, index) => (
              <div key={index} className="form-check">
                <input type="radio" className="form-check-input" name="gender" value={gender} />
                <label className="form-check-label">{gender}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="department" className="form-label">Department:</label>
          <input className="form-control" list="departments" id="department" placeholder="Enter your department" />
          <datalist id="departments">
            {['CSE', 'IT', 'EEE', 'ECE'].map((dept, index) => (
              <option key={index} value={dept} />
            ))}
          </datalist>
        </div>

        <div className="mb-3">
          <label htmlFor="Address" className="form-label">Address:</label>
          <textarea className="form-control" rows="3" id="Address" placeholder="Enter your Address"></textarea>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
