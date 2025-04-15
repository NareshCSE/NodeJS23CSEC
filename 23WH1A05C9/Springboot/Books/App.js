import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');

  const baseUrl = 'http://localhost:8090/books/getAllBooks'; // Update this with your backend URL

  // Fetch all books
  const getAllBooks = async () => {
    try {
      const response = await axios.get(baseUrl); // Fetch books from API
      setBooks(response.data); // Assuming the response is an array of books
    } catch (err) {
      setError('Error fetching books.');
    }
  };

  // Fetch books when the component mounts
  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <div className="container">
      <h1>Book Details</h1>
      <button onClick={getAllBooks}>Refresh Book List</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        <h2>Books:</h2>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <strong>{book.title}</strong> by {book.author} - ₹{book.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
