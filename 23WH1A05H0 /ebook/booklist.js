import React, { useEffect, useState } from "react";
import axios from "axios";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/books")
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
        </li>
      ))}
    </ul>
  );
}

export default BookList;
