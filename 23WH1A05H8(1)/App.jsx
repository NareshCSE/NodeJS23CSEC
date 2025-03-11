// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';

// Inline Styles for the App
const appStyles = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh', // Ensure full viewport height
};

const headerStyles = {
  width: '100%',
  padding: '20px',
  backgroundColor: '#333',
  color: 'white',
  textAlign: 'center',
};

const footerStyles = {
  width: '100%',
  padding: '20px',
  backgroundColor: '#333',
  color: 'white',
  textAlign: 'center',
  marginTop: 'auto', // Push the footer to the bottom of the page
};

const contentStyles = {
  flexGrow: 1,
  padding: '20px',
};

const navStyles = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginBottom: '20px',
};

const linkStyles = {
  textDecoration: 'none',
  color: 'white',
  fontSize: '18px',
};

// Header Component
const Header = () => {
  return (
    <header style={headerStyles}>
      <h1>My Ebook App</h1>
      <nav style={navStyles}>
        <Link to="/" style={linkStyles}>Home</Link>
        <Link to="/register" style={linkStyles}>Register</Link>
        <Link to="/login" style={linkStyles}>Login</Link>
      </nav>
    </header>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer style={footerStyles}>
      <p>&copy; 2025 Ebook Management System</p>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <div style={appStyles}>
        <Header />
        <div style={contentStyles}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
