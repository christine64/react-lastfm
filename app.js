const fetch = require('node-fetch');

async function showTrack(country) {
  const url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=4cb4defb67c94fe11a118b7502fc5693&format=json`;
  const response = await fetch(url);

  const track = await response.json();

  console.log(track.topartists.artist);
    // .then(response => response.json())
    // .then(track => {
    //    console.log(track);
    // });
}

showTrack("australia");