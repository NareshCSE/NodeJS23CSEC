import React from "react";
const Sidebar=({showPage})  =>{
return(
    <div className="sidebar">
    <h3 className="mb-4">E-Library</h3>
    <div className="nav flex-column">
    <a className="nav-link" href="#" onClick={() => showPage('welcome')}>Home</a>
    <a className="nav-link" href="#" onClick={() => showPage('register')}>Register</a>
    <a className="nav-link" href="#" onClick={() => showPage('login')}>login</a>
    <a className="nav-link" href="#" onClick={() => showPage('catalog')}>catalog</a>
    <a className="nav-link" href="#" onClick={() => showPage('cart')}>Cart</a>
    </div>
</div>
);
};

export default Sidebar