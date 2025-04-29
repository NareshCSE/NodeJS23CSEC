import axios from 'axios';

const API_URL = 'http://localhost:8081/api/employees'; // Replace with your Spring Boot API URL

// Fetch all employees
const getAllEmployees = () => {
    return axios.get(API_URL);
};

// Delete employee by ID
const deleteEmployee = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};
 
export default {
    getAllEmployees,
    deleteEmployee
};
