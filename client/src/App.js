import React, { Component } from 'react';
//add react router to send data from tracks into ArtistTrack page
import { BrowserRouter, Route } from 'react-router-dom';
import './server.js';
import Artist from './Artist.js';
import ArtistTracks from './ArtistTracks.js';
import './App.css';

class Home extends Component {
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

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home}></Route>
          <Route path="/artist/:name" component={ArtistTracks}></Route>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
