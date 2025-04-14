// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';  // This will be the sidebar
import Home from './components/Home';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
import Register from './components/Register';
import Login from './components/Login';
import Weather from './components/Weather';
import './components/styles.css';

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <div className="main-container">
                    {/* Sidebar (Navbar as sidebar) */}
                    <Navbar />

                    {/* Main content area */}
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/catalog" element={<Catalog />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/Weather" element={<Weather />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;
