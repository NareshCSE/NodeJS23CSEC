import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState('');

  const baseUrl = 'http://localhost:9090/api/employees'; // spring Boot endpoint

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(baseUrl);
      setEmployees(response.data);
    } catch (err) {
      setError('Error fetching employee data.');
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Employee Details</h1>

      <button className="btn btn-primary mb-3" onClick={fetchEmployees}>
        Refresh Employee List
      </button>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Salary (₹)</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(emp => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.address}</td>
                <td>{emp.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
