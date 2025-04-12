import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { getAllBooks } from "./books";
import BookDetails from "./BookDetails";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks().then(setBooks);
  }, []);

  return (
    <Router>
      <div className="app">
        <h1>📖 My eBook Library</h1>
        <Routes>
          <Route
            path="/"
            element={
              <div className="book-list">
                {books.map((book) => (
                  <div key={book.id} className="book-card">
                    <img src={book.cover} alt={book.title} />
                    <h2>{book.title}</h2>
                    <h4>by {book.author}</h4>
                    <p>{book.description}</p>
                    <Link to={`/book/${book.id}`}>
                      <button>Read</button>
                    </Link>
                  </div>
                ))}
              </div>
            }
          />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
