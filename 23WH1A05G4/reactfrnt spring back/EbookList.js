import React, { useEffect, useState } from 'react';

const EbookList = () => {
  const [ebooks, setEbooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/ebooks')
      .then((response) => response.json())
      .then((data) => setEbooks(data))
      .catch((error) => console.error('Error fetching ebooks:', error));
  }, []);

  return (
    <div>
      <h1>Ebook List</h1>
      <ul>
        {ebooks.map((ebook) => (
          <li key={ebook.id}>{ebook.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default EbookList;
