import React, { Component } from 'react';
//add react router to send data from tracks into ArtistTrack page
// import { BrowserRouter } from 'react-router-dom';
import './server.js';
import Artist from './Artist.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <Artist></Artist>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
