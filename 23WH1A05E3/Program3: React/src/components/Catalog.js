// src/components/Catalog.js
import React from 'react';

const Catalog = () => {
    return (
        <div className="container">
            <h2>Catalog</h2>
            <div className="grid-container">
                <div className="grid-item">
                    <img src="https://www.madrasshoppe.com/207789-large_default/engineering-drawing-jntu-hyderabad-venugopal-k.jpg" alt="Book 1" />
                </div>
                <div className="grid-item">
                    <img src="https://m.media-amazon.com/images/I/61f3wR5F5AL._SL1024_.jpg" alt="Book 2" />
                </div>
                <div className="grid-item">
                    <img src="https://rukminim1.flixcart.com/image/832/832/k6jnfrk0/regionalbooks/y/g/y/digital-electronics-b-tech-ii-year-ii-sem-eee-r18-jntu-hyderabad-original-imafzzavrz8p8phb.jpeg?q=70" alt="Book 3" />
                </div>
                <div className="grid-item">
                    <img src="https://www.bookganga.com/eBooks/Content/images/books/664542b56fd644bb90926e9f40532f75.jpg" alt="Book 4" />
                </div>
            </div>
        </div>
    );
};

export default Catalog;
