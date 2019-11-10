import React from 'react';
import logo from './logo.svg';
import './App.css';
import Connect from "./Connect";
import ReactSoundcloud from 'react-soundcloud-embed';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ReactSoundcloud url="https://soundcloud.com/chill/shrines-spoken-bird-beautiful"/>
        <Connect />
      </header>
    </div>
  );
}

export default App;
