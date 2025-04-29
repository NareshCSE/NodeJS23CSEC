// filepath: /c:/Users/admin/Desktop/react site/employee/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import AllDetails from './pages/AllDetails';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1 }}>
          <Routes>
            {/* Route for the root path */}
            <Route path="/" element={<Navigate to="/employees" />} />
            {/* Route for Employees page */}
            <Route path="/employees" element={<AllDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
