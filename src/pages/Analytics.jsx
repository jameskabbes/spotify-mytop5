import { createElement, useState, useEffect } from 'react';
import { callApi } from '../utils/Api';

import { TopTracks } from '../components/Track/TopTracks';
import { TopArtists } from '../components/Artist/TopArtists';

import demo_data from '../demo.json'

import spotifyIcon from '../images/Spotify_Icon_RGB_Green.png';

const types = {
  tracks: TopTracks,
  artists: TopArtists,
};

function Analytics({ type, token, limit, offset, timeRange, setIsSubmit }) {
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [smallScreen, setSmallScreen] = useState(window.innerWidth < 640);

  const fetchApiData = async () => {
    const url1 = `https://api.spotify.com/v1/me/top/${type}/?time_range=${timeRange}&limit=${limit}&offset=${offset}`;
    const url2 = `https://api.spotify.com/v1/me`;

    try {
      const [dataResponse, userDataResponse] = await Promise.all([
        callApi(url1, token),
        callApi(url2, token),
      ]);

      setData(dataResponse);
      setUserData(userDataResponse);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchDemoData = () => {
    setUserData( { 'display_name': 'demo' } );
    setData({ 'items': demo_data[ type ].slice( 0, limit)  });
    setLoading(false);
  };

  useEffect(() => {

    if (token === 'demo') {
      fetchDemoData();
    } else {
      fetchApiData();
    }

    const handleResize = () => {
      setSmallScreen(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run only once when component mounts

  return (
    <>
      <div className="flex flex-col items-center px-1 py-8 space-y-4">
        {!loading ? (
          <>
            <div className="flex items-center space-x-2">
              <img
                src={spotifyIcon}
                className="h-auto max-h-10"
                alt="Spotify Logo"
              />
              <h2 className="m-0">{userData.display_name}</h2>
            </div>
            <h3>My Top {limit}</h3>
          </>
        ) : null}
        <div className="cards">
          {createElement(types[type], {
            data,
            userData,
            token,
            loading,
            offset,
            smallScreen,
          })}
        </div>
        <button className="button p-8" onClick={() => setIsSubmit(false)}>
          Try it again!
        </button>
      </div>
    </>
  );
}

export { Analytics };
