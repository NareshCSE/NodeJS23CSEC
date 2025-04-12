// src/pages/Catalog.js
import React from 'react';

const Catalog = () => {
  const books = [
    { id: 1, title: "Atomic Habits", author: "James Clear" },
    { id: 2, title: "The Alchemist", author: "Paulo Coelho" },
    { id: 3, title: "1984", author: "George Orwell" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">Catalog</h2>
      <ul className="mt-4 space-y-2">
        {books.map(book => (
          <li key={book.id} className="border p-2 rounded">
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
