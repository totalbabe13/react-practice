import React from 'react';
import './App.css';
import BookCard from './Components/BookCard'

function App() {
  console.log(<BookCard />);
  return (
    <div className="App">
      <h1 className="layout-header">B O O K I T</h1>
      <div className="cards-container">
        <BookCard />
      </div>
    </div>
  );
}

export default App;
