import React from "react";
import "./Catalog.css";
import logo from "./logo.webp";
import product1 from "./product1.jpg";
import product2 from "./product2.jpg";
import product3 from "./product3.jpg";
import product4 from "./product4.jpg";
import product5 from "./product5.jpg";
import product6 from "./product6.jpg";

const products = [
  { name: "Product 1", price: "$199.99", image: product1 },
  { name: "Product 2", price: "$149.99", image: product2 },
  { name: "Product 3", price: "$299.99", image: product3 },
  { name: "Product 4", price: "$249.99", image: product4 },
  { name: "Product 5", price: "$179.99", image: product5 },
  { name: "Product 6", price: "$129.99", image: product6 },
];

const Catalog = () => {
  return (
    <div>
      <div className="sidebar">
        <img src={logo} className="logo" alt="Logo" />
        <h2>CSE BVRITH ECOMMERCE</h2>
        <a href="#">Home</a>
        <a href="#">Catalog</a>
        <a href="#">Cart</a>
        <a href="#">Login</a>
        <a href="#">Register</a>
        <a href="#">Logout</a>
      </div>

      <div className="content">
        <header>
          <img src={logo} className="logo" alt="Logo" />
          <h1>CSE BVRITH ECOMMERCE</h1>
        </header>

        <h2>Catalog</h2>

        <div className="catalog-container">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.name} className="product-img" />
              <p className="product-name">{product.name}</p>
              <p className="product-price">{product.price}</p>
              <a href="#" className="btn">Add to Cart</a>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <p>&copy; 2023 CSE(5D0) BVRITH ECOMMERCE. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Catalog;
