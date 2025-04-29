
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import EmployeeList from './EmployeeList'; // Import the EmployeeList component

function App() {
    return (
        <div className="App">
            <EmployeeList />  {/* Render the EmployeeList component */}
        </div>
    );
}

export default App;
