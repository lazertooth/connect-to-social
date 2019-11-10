import React from 'react';
import logo from './logo.svg';
import './App.css';
import Connect from "./Connect";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Connect />
      </header>
    </div>
  );
}

export default App;
