import React, { Component } from 'react';
import './artist.css';
import showTrack from './server.js';

console.log(showTrack.tracks);

class Artist extends Component {
  render() {
    return (
      <div className="artist">
      //wanting to pass props from showTracks.tracks
	    <ul>
          showTrack.tracks.all().map(track => (
            <li key={track.artist}>
              <h1>{track.artist}</h1>
              <img src="{track.artist}" alt="Artist Page" />
            </li>
          ))
        </ul>
      </div>
    )
  }
}

export default Artist;