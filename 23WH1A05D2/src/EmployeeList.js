import React, { useState, useEffect } from 'react';
import EmployeeService from './EmployeeService';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        // Fetch all employees on component mount
        EmployeeService.getAllEmployees()
            .then(response => {
                setEmployees(response.data); // Set employee data
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    const handleDelete = (id) => {
        // Delete employee
        EmployeeService.deleteEmployee(id)
            .then(() => {
                // Update the list of employees by removing the deleted one
                setEmployees(employees.filter(emp => emp.empId !== id));
            })
            .catch(error => {
                console.error('Error deleting employee', error);
            });
    };

    return (
        <div className="container mt-5">
            <h2>Employee List</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.empId}>
                            <td>{emp.empId}</td>
                            <td>{emp.empName}</td>
                            <td>{emp.empSalary}</td>
                            <td>{emp.empAddress}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(emp.empId)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
