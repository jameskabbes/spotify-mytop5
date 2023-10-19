import { useState, useEffect } from 'react';
import { generateDemoData } from './generateDemoData';

function useSpotifyData({ token, type, limit, offset, timeRange }) {
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (token === 'demo') {
        setData({ items: generateDemoData(type, limit) });
        setUserData({ display_name: 'demo' });
      } else {
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
        }
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return [data, userData, loading];
}

export { useSpotifyData };
