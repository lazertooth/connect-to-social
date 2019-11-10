import React from 'react';
import logo from './logo.svg';
import './App.css';
import Connect from "./Connect";
import ReactPlayer from 'react-player'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactPlayer url='https://soundcloud.com/soundslikeshrines/sets/recent-production'/>
        <Connect />
      </header>
    </div>
  );
}

export default App;
