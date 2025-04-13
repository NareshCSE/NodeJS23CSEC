import React, { useEffect, useState } from "react";
import { getBookById } from "./books";
import { useParams } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getBookById(id)
      .then(setBook)
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!book) return <p>Loading book...</p>;

  return (
    <div className="book-card">
      <img src={book.cover} alt={book.title} />
      <h2>{book.title}</h2>
      <h4>by {book.author}</h4>
      <p>{book.description}</p>
      <hr />
      <p><strong>Full Content:</strong></p>
      <p>{book.content}</p>
    </div>
  );
}

export default BookDetails
