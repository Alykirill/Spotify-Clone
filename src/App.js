import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import { useDataLayerValue } from './components/Context/DataLayer';
import Login from './components/Login/Login';
import Player from './components/Player/Player';
import { getTokenFromUrl } from './api/spotify';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromUrl();
    window.location.hash = '';
    let _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.getPlaylist('6vNiLNdyFlOVjsRHu2yIKk').then((response) =>
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      );

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: 'SET_TOP_ARTISTS',
          top_artists: response,
        })
      );

      dispatch({
        type: 'SET_SPOTIFY',
        spotify: spotify,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists,
        });
      });
    }
  }, [token, dispatch]);

  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  );
}

export default App;
