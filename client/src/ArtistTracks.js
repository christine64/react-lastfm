import React, { Component } from 'react';
import './artist-tracks.css';
import './server.js';
//adding react router from artist on app page to track page

class ArtistTracks extends Component {
  render() {
    return (
      <div className="artist-tracks">
        <ul>
          Artist.all().map(p => (
            <li key={p.artist}>
              <h1>{p.artist}</h1>
              <img src="{p.artist.image}" alt="Artist Page" />
            </li>
          ))
        </ul>
      </div>
    )
  }
}

export default ArtistTracks;