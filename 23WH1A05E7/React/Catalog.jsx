import React, { useState } from 'react';
import './styles.css'; // Importing the CSS

const Catalog = () => {
  // State to store cart items
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (title, price) => {
    const newCartItem = { title, price };
    setCart([...cart, newCartItem]);
    console.log(cart); // This logs the cart to the console for testing
  };

  return (
    <div className="container">
      <h1 className="text-center text-primary">Catalog</h1>
      <div className="row">
        {/* Catalog Items */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Book Title 1</h5>
              <p className="card-text">Author: John Doe</p>
              <p className="card-text">Price: $10.99</p>
              <button
                className="btn btn-primary"
                onClick={() => addToCart('Book Title 1', 10.99)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Book Title 2</h5>
              <p className="card-text">Author: Jane Smith</p>
              <p className="card-text">Price: $12.99</p>
              <button
                className="btn btn-primary"
                onClick={() => addToCart('Book Title 2', 12.99)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* You can add more books/items in a similar fashion */}
      </div>
    </div>
  );
};

export default Catalog;
