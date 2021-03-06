const fetch = require('node-fetch');

export async function showTrack(country) {
  const url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&limit=10&api_key=4cb4defb67c94fe11a118b7502fc5693&format=json`;
  const response = await fetch(url);
  const body = await response.json();
  
  if(response.status !== 200)
    throw Error(body.message);

  return body;
}

export async function showArtistTracks(artist) {
  const url = `http://ws.audioscrobbler.com//2.0/?method=artist.gettoptracks&artist=${artist}&limit=10&api_key=4cb4defb67c94fe11a118b7502fc5693&format=json`;
  const response = await fetch(url);
  const body = await response.json();
  
  if(response.status !== 200)
    throw Error(body.message);

  return body;
}
