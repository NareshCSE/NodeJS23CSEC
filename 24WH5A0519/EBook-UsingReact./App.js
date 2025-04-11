import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EbookReader from './components/EbookReader';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<h1>Welcome to the Ebook App!</h1>} />
          <Route path="/reader/:ebookId" element={<EbookReader />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
