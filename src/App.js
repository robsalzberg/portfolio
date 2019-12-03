import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This will be Rob Salzberg's Portfolio.
        </p>
        <a
          className="App-link"
          href="https://github.com/robsalzberg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rob Salzberg's GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
