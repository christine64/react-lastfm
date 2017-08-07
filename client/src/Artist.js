import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './artist.css';
import { showTrack } from './server.js';

console.log(showTrack.tracks);

class Artist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
      tracks: []
    };
  }

  componentDidMount() {
    showTrack("australia")
      .then(track => {
        const tracks = track.topartists.artist;
        console.log('componentDidMount track', tracks);
        this.setState({
          tracks: tracks
        });
      });
  }

  onChange(e) {
    console.log(e.target.value);
    this.setState({keyword: e.target.value});
  }

  search() {
    showTrack(this.state.keyword)
      .then(track => {
        const tracks = track.topartists.artist;
        console.log('componentDidMount track', tracks);
        this.setState({
          tracks: tracks
        });
      });
  }

  render() {
    const tracks = this.state.tracks;

    return (
      <div className="artist">
        <input type="text" onChange={e => this.onChange(e)} />
        <button type="submit" onClick={() => this.search()}>Search</button>
        <ul>
        {tracks.map(track => {
          const name = track.name;
          const link = "/artist/" + name;
          return (
            <li key={track.name}>
              <Link to={link}>
                <h1>{track.name}</h1>
                <img src={track.image[4]['#text']} alt="Artist Page" />
              </Link>
            </li>
          );
          })}
        </ul>
      </div>
    )
  }
}

export default Artist;
