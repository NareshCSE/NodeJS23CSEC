import React from 'react';

const books = [
  { name: 'Python Basics', price: 12 },
  { name: 'Java for Beginners', price: 15 },
  { name: 'Data Structures', price: 18 },
  { name: 'Machine Learning', price: 20 },
  { name: 'Web Development', price: 14 },
  { name: 'AI & Deep Learning', price: 25 },
];

const Catalog = () => {
  const addToCart = (book) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(book);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${book.name} added to cart!`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Catalog</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {books.map((book, index) => (
          <div key={index} style={{
            border: '1px solid #ccc',
            padding: '15px',
            borderRadius: '8px',
            width: '180px'
          }}>
            <h4>{book.name}</h4>
            <p>${book.price}</p>
            <button onClick={() => addToCart(book)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
