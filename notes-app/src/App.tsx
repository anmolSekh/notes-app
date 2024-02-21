import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className = "AppContainer">
      <form className = "NoteForm">
        <input placeholder = "Title" required/>
        <textarea placeholder = "Note" rows = {10} required/>
        <button type = "submit">Create Note</button>
      </form>
    </div>
  );
};

export default App;
