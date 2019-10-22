import React from 'react';
import UncleSam from './assets/unclesam.png'
//import Background from './assets/background.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={UncleSam} className="App-logo" alt="logo" />
        <p>
          Together we can make the usspaceforce a reality.
        </p>
      </header>
    </div>
  );
}

export default App;
