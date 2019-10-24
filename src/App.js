import React from 'react';
import UncleSam from './assets/unclesam.png'
//import Background from './assets/background.png'
import './App.css';

function App() {


        // create a new XMLHttpRequest
        let xhr = new XMLHttpRequest();

        // get a callback when the server responds
        xhr.addEventListener('load', () => {
            // update the state of the component with the result here
            console.log(xhr.responseText)
        })
        // open the request with the verb and the url
        xhr.open('GET', 'https://dog.ceo/api/breeds/list/all');
        // send the request
        xhr.send();


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
