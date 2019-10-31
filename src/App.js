import React from 'react';
import Samurai from './assets/samuraiAvatar.jpg'
import './App.css';

function App() {


        // Example api request
        // create a new XMLHttpRequest
        let xhr = new XMLHttpRequest();

        // get a callback when the server responds
        xhr.addEventListener('load', () => {
            // update the state of the component with the result here
            console.log(xhr.responseText)
        });

        // open the request with the verb and the url
        xhr.open('GET', 'https://dog.ceo/api/breeds/list/all');
        // send the request
        xhr.send();


  return (
    <div className="App">
      <header className="App-header">
        <img src={Samurai} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
