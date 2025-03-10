import React, { useState } from 'react';
import './styles.css';  // Optional: If you want to use external CSS

const Cart = () => {
  const [bookName, setBookName] = useState('');
  const [quantity, setQuantity] = useState('1');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here, e.g., redirect or update cart state
    alert(`Book: ${bookName}, Quantity: ${quantity}`);
  };

  return (
    <div className="cart">
      <h2><center><b>Shopping Cart</b></center></h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bname">Book Name</label>
          <input
            type="text"
            id="bname"
            name="bname"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="qty">Quantity</label>
          <select
            name="qty"
            id="qty"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="form-group">
          <button type="submit">Click To Proceed</button>
        </div>
      </form>
    </div>
  );
};

export default Cart;
