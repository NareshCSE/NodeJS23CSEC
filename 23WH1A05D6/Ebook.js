import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
import Footer from './components/Footer';


function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'login': return <Login />;
      case 'register': return <Register />;
      case 'catalog': return <Catalog />;
      case 'cart': return <Cart />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Header />
      <Sidebar onPageChange={setPage} />
      <div style={{ marginLeft: '220px', padding: '20px', paddingBottom: '60px' }}>
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
  
 
}

export default App;
