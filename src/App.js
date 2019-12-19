import React from 'react';
import './App.css';
import BookCard  from './Components/BookCard';
import AddButton from './Components/addButton';

function App() {
  return (
    <div className="App">
      <h1 className="layout-header">B O O K I T</h1>
      <AddButton />
      <div className="cards-container">
        <BookCard />
      </div>
    </div>
  );
}

export default App;
