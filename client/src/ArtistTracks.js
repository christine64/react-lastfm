import React, { Component } from 'react';
import './artist-tracks.css';
import './server.js';
import { showArtistTracks } from './server.js';
import Header from './Header.js';

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
      <div className="artist-tracks-container">
        <Header></Header>
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
      </div>
    )
  }
}

export default ArtistTracks;