import { useState } from "react";
import "./App.css";

const App = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleAddBook = () => {
    if (title.trim() !== "" && author.trim() !== "") {
      const newBook = { id: Date.now(), title, author };
      setBooks([...books, newBook]);
      setTitle("");
      setAuthor("");
    }
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="container">
      <h1>E-Book Management System</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>

      <div className="book-list">
        <h2>Book List</h2>
        {books.length === 0 ? (
          <p>No books available.</p>
        ) : (
          <ul>
            {books.map((book) => (
              <li key={book.id}>
                <strong>{book.title}</strong> by {book.author}
                <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
