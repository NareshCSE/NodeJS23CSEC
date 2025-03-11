export default function Catalog() {
    return (
      <div className="container">
        <h2>Catalog</h2>
        <div className="grid">
          {["E‑Book Title 1", "E‑Book Title 2", "E‑Book Title 3", "E‑Book Title 4"].map((title, index) => (
            <div key={index} className="book">
              <h3>{title}</h3>
              <p>Author {index + 1}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  


