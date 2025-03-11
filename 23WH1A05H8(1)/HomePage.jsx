import React from 'react';

const HomePage = () => {
  return (
    <div style={pageContainerStyle}>
      <div style={contentStyle}>
        <h1>Welcome to the eBook Management System</h1>
        <p>Manage your eBooks efficiently!</p>
      </div>
    </div>
  );
};

// Container to ensure the page takes up the full height and is centered
const pageContainerStyle = {
  display: 'flex',
  justifyContent: 'center', // Centers horizontally
  alignItems: 'center', // Centers vertically
  height: '100vh', // Full viewport height
  margin: 0,
  padding: 0,
  backgroundColor: '#f4f4f4', // Background color of the page
};

// Content styling for text alignment and padding
const contentStyle = {
  textAlign: 'center',
  padding: '20px',
  backgroundColor: 'white', // Make content area stand out
  borderRadius: '8px', // Optional: rounded corners for the content box
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional: add shadow for depth
};

export default HomePage;
