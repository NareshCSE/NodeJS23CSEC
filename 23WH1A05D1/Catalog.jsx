import React, { useState } from 'react';

const BookCard = ({ title, genre, addToCart }) => {
  return (
    <div className="col-md-4 book-card" data-genre={genre}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{genre}</p>
          <button className="btn btn-primary" onClick={() => addToCart(title)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const Catalog = ({ addToCart }) => {
  const [selectedGenre, setSelectedGenre] = useState('all');

  const books = [
    { title: 'The Great Gatsby', genre: 'fiction' },
    { title: 'A Brief History of Time', genre: 'science' },
    { title: 'Wings Of Fire', genre: 'non-fiction' },
    { title: 'Core Java', genre: 'technology' },
  ];

  const filterBooks = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div id="catalog" className="page">
      <h2>Book Catalog</h2>
      <div className="mb-4">
        <label htmlFor="genre" className="form-label">
          Select Genre
        </label>
        <select
          className="form-select"
          id="genre"
          value={selectedGenre}
          onChange={(e) => filterBooks(e.target.value)}
        >
          <option value="all">All Genres</option>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="science">Science</option>
          <option value="technology">Technology</option>
        </select>
      </div>
      <div className="row" id="bookList">
        {books
          .filter(
            (book) => selectedGenre === 'all' || book.genre === selectedGenre
          )
          .map((book, index) => (
            <BookCard key={index} title={book.title} genre={book.genre} addToCart={addToCart} />
          ))}
      </div>
    </div>
  );
};

export default Catalog;

