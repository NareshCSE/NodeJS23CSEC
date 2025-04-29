import React, { useState } from "react";
import axios from "axios";

function EmployeeSearch() {
  const [employeeId, setEmployeeId] = useState("");
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8090/api/employee/${employeeId}`);
      setEmployee(response.data);
      setError("");
    } catch (err) {
      setEmployee(null);
      setError("Employee not found or server error.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4" style={{ backgroundColor: "#f8f9fa", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <h3 className="text-center mb-4">Employee Details Finder</h3>

        <div className="row mb-3">
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Employee ID"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              style={{ borderRadius: "5px" }}
            />
          </div>
          <div className="col-md-4 text-md-start mt-2 mt-md-0">
            <button onClick={handleSearch} className="btn btn-primary w-100" style={{ backgroundColor: "#007bff", borderColor: "#007bff", borderRadius: "5px" }}>
              Search
            </button>
          </div>
        </div>

        {error && <div className="alert alert-danger" style={{ borderRadius: "5px", fontSize: "1.1rem" }}>{error}</div>}

        {employee && (
          <div className="card bg-light p-3 mt-4" style={{ borderLeft: "5px solid #007bff", backgroundColor: "#f0f4f8" }}>
            <h5 style={{ color: "#007bff" }}>Employee Details</h5>
            <p><strong>ID:</strong> {employee.id}</p>
            <p><strong>Name:</strong> {employee.name}</p>
            <p><strong>Salary:</strong> {employee.salary}</p>
            <p><strong>Address:</strong> {employee.address}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmployeeSearch;
