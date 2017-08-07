import React, { Component } from 'react';
import './artist-tracks.css';
import './server.js';
import { showArtistTracks } from './server.js';

class ArtistTracks extends Component {
  constructor(props) {
    super(props);

    this.name = this.props.match.params.name;
    
    this.state = {
      artistTracks: []
    }
  }
  componentDidMount() {
    showArtistTracks(this.name)
      .then(artist => {
        console.log(artist);
        this.setState({
          artistTracks: artist.toptracks.track
        });
      });
  }
  render() {
    const artistTracks = this.state.artistTracks;
    return (
      <div className="artist-tracks">
        <h1>{this.name}</h1>
        <ul>
          {artistTracks.map(track => {
            return (
              <li>{track.name}</li> 
            )
          })}
        </ul>
      </div>
    )
  }
}

export default ArtistTracks;