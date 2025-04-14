// src/components/BooksPage.js
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import './BooksPage.css';

const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Classic',
    description: 'A story about the American dream and 1920s high society.',
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Self-help',
    description: 'A practical guide to building better habits every day.',
  },
  {
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    genre: 'Computer Science',
    description: 'Comprehensive guide to algorithms and data structures.',
  },
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    genre: 'Software Engineering',
    description: 'A guide to writing clean, maintainable code.',
  },
  {
    title: 'Artificial Intelligence: A Modern Approach',
    author: 'Stuart Russell, Peter Norvig',
    genre: 'AI / ML',
    description: 'Most-used AI textbook across universities.',
  },
  {
    title: 'Operating System Concepts',
    author: 'Abraham Silberschatz',
    genre: 'Computer Science',
    description: 'Detailed study of OS design, concepts, and processes.',
  },
];

const BooksPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useOutletContext(); // Access the addToCart function

  const handleBuy = (book) => {
    addToCart(book); // Add book to cart
    alert(`You bought "${book.title}"`); // Show popup message
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="books-page">
      <h2>Explore Books</h2>
      <input
        type="text"
        placeholder="Search by title, genre, or author..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="book-list">
        {filteredBooks.map((book, index) => (
          <div key={index} className="book-card">
            <h3>{book.title}</h3>
            <p><strong>Genre:</strong> {book.genre}</p>
            <p><strong>Author:</strong> {book.author}</p>
            <p className="desc">{book.description}</p>
            <button className="buy-btn" onClick={() => handleBuy(book)}>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
