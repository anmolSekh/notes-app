import React from 'react';
import {useState} from "react";
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
      <div className="NoteGrid">
        <div className="NoteItem">
          <div className="NoteHeader">
            <button>x</button>
          </div>
          <h2>Title</h2>
          <p>content</p>
        </div>
      </div>
    </div>
  );
};
  

export default App;
