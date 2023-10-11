import { useState, useEffect } from 'react';
import { callApi } from '../utils/Api';
import { Cards } from '../components/Cards';
import demo_data from '../demo.json';
import spotifyIcon from '../images/Spotify_Icon_RGB_Green.png';

function Analytics({ type, token, limit, offset, timeRange, setIsSubmit }) {
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchApiData = async () => {
    const url1 = `https://api.spotify.com/v1/me/top/${type}s/?time_range=${timeRange}&limit=${limit}&offset=${offset}`;
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
    setUserData({ display_name: 'demo' });
    setData({ items: demo_data[type].slice(0, limit) });
    setLoading(false);
  };

  useEffect(() => {
    if (token === 'demo') {
      fetchDemoData();
    } else {
      fetchApiData();
    }
    document.title = `My Top ${limit}`;
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
            <Cards data={data} type={type} offset={offset} />
            <button className="button p-8" onClick={() => setIsSubmit(false)}>
              Try it again!
            </button>
          </>
        ) : null}
      </div>
    </>
  );
}

export { Analytics };
