import React from 'react';

const BookCard = ({ book, addToCart }) => {
  return (
    <div className="col-md-4 book-card">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{book.name}</h5>
          <p className="card-text">{book.genre}</p>
          <button className="btn btn-primary" onClick={() => addToCart(book.name)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
