import React from "react";
import "./styles.css";

export const Catalog = () => {
    const books = [
      { title: "To Kill a Mockingbird", author: "Harper Lee", price: "280/-" },
      { title: "And Then There Were None", author: "Agatha Christie", price: "320/-" },
      { title: "The Hidden Hindu", author: "Akshat Gupta", price:"200/- "},
    ];
    return (
      <div className="catalog-container">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Price:</strong> {book.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    );
  };

export default Catalog;