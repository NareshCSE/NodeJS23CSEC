// src/components/EmployeeForm.js
import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    employeeName: '',
    employeeSalary: '',
    employeeAddress: ''
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8090/api/employees', employee);
      alert('Employee registered successfully');
      setEmployee({ employeeName: '', employeeSalary: '', employeeAddress: '' });
    } catch (error) {
      console.error(error);
      alert('Failed to register employee');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Employee Registration</h2>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Employee Name</label>
          <input
            type="text"
            className="form-control"
            name="employeeName"
            value={employee.employeeName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Employee Salary</label>
          <input
            type="number"
            className="form-control"
            name="employeeSalary"
            value={employee.employeeSalary}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Employee Address</label>
          <input
            type="text"
            className="form-control"
            name="employeeAddress"
            value={employee.employeeAddress}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;

