import React, { Component } from 'react';
import './artist.css';

class Artist extends Component {
  render() {
    return (
      <div className="artist">
        <h1>Hello Artist Name</h1>
        <img src="#" alt="Artist" />
        <p>Track Name</p>
      </div>
    )
  }
}

export default Artist;