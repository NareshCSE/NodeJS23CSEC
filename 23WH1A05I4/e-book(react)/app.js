import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Home from './Home';
import Catalog from './Catalog';  
import Cart from './Cart';        
import Login from './Login'; 
import Logout from './Logout'; 

const App = () => {
    return (
        <Router>
            <div className="container">
                <Sidebar />
                <div className="main-content">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
