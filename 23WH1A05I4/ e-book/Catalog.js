import React from 'react';
import './Catalog.css'; // Importing the CSS for the Catalog Page

const books = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    image: 'https://example.com/great-gatsby.jpg',
    description: 'A novel set in the 1920s, exploring themes of wealth, love, and the American Dream.',
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    image: 'https://example.com/1984.jpg',
    description: 'A dystopian novel about totalitarianism and the dangers of a surveillance state.',
  },
  {
    id: 3,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    image: 'https://example.com/to-kill-a-mockingbird.jpg',
    description: 'A novel about racial injustice in the Deep South, told through the eyes of a young girl.',
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    image: 'https://example.com/pride-and-prejudice.jpg',
    description: 'A classic novel about manners, marriage, and societal expectations in 19th-century England.',
  },
  // Add more books as needed
];

function Catalog() {
  return (
    <div className="catalog-page">
      <h2 className="catalog-title">Book Catalog</h2>
      <div className="books-list">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.image} alt={book.title} className="book-image" />
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">by {book.author}</p>
              <p className="book-description">{book.description}</p>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
