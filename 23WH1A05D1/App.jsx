import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Welcome from './Welcome';
import Register from './Register';
import Login from './Login';
import Catalog from './Catalog';
import Cart from './Cart';

function App() {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [cartItems, setCartItems] = useState([]);

  const showPage = (page) => {
    setCurrentPage(page);
  };

  const addToCart = (bookName) => {
    setCartItems([...cartItems, bookName]);
    alert('Book added to cart!');
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar showPage={showPage} />
        <div className="col-md-9 content">
          {currentPage === 'welcome' && <Welcome />}
          {currentPage === 'register' && <Register />}
          {currentPage === 'login' && <Login />}
          {currentPage === 'catalog' && <Catalog addToCart={addToCart} />}
          {currentPage === 'cart' && <Cart cartItems={cartItems} />}
        </div>
      </div>
    </div>
  );
}

export default App;
