import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './server.js';
import Artist from './Artist.js';
import ArtistTracks from './ArtistTracks.js';
import Header from './Header.js';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Artist></Artist>
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
