// import Router from 'react-router';
const fetch = require('node-fetch');

//using BrowserRouter to send data to React

async function showTrack(country) {
  const url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=4cb4defb67c94fe11a118b7502fc5693&format=json`;
  const response = await fetch(url);
  const body = await response.json();
  
  if(response.status !== 200)
    throw Error(body.message);

  return body;
}

export default showTrack("australia")
  //building promsise chain
  .then(track => {
    const tracks = track.topartists.artist;
    console.log(tracks);
  })
  .catch(err => {
    console.error(`Error: ${err.message}`);
  });
