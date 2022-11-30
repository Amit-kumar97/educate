import React from 'react';
// import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Note from './Note';

const App = ()=> {
    return (
      <div className="app">
      { <Note /> }
      </div>
    ); 
}

export default App;
