import React from 'react';
import './App.css';
import Nav from './nav';

function App() {
  return (
      <div className="Container">
      <div className="Nav">
          <Nav />
      </div>
      <div className="App">
        <header className="App-header">
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
          <div id='title'>
            <span>
              ROB SALZBERG
            </span>
            <br></br>
            <span>
              WEB DEVELOPER
            </span>
          </div>
        </header>
      </div>
      
    </div>

  );
}

export default App;
