import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';

const AppLayout = () => {
  return (
    <>
      <Header />
      <main style={containerStyle}>
        <Outlet />
      </main>
      <footer style={footerStyle}>
        <Footer />
      </footer>
    </>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '80vh', // Adjust the height of the content area
  width: '100%', // Make it span the full width of the screen
  backgroundColor: '#f5f5f5',
  fontFamily: "'Roboto', sans-serif", // Use Roboto font-family
  padding: '20px',
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px 0',
};

export default AppLayout;
