import React from 'react';
import './Home.css'; 

function Home() {
  return (
    <div className="home-page">
      <h2 className="home-title">Welcome to the E-Book Store</h2>
      
      {/* Library Image */}
      <div className="image-container">
        <img 
          src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D"  
          alt="Library"
          className="library-image"
        />
      </div>

      {/* Optional Welcome Message */}
      <p className="home-description">
        Discover a wide variety of books available for you. From fiction to non-fiction, explore thousands of titles in various genres. Enjoy reading!
      </p>
    </div>
  );
}

export default Home;
