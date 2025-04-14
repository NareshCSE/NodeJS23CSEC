// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';
import Layout from './components/Layout';
import BooksPage from './components/BooksPage';
import CartPage from './components/CartPage';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems((prev) => [...prev, book]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout addToCart={addToCart} cartItems={cartItems} />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="books" element={<BooksPage />} />
          {/* Make sure cartItems is passed correctly here */}
          <Route path="cart" element={<CartPage cartItems={cartItems} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
