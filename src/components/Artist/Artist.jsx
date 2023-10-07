import { Photo } from './Photo';
import { callApi } from '../../utils/Api';
import { useState, useEffect } from 'react';

const types = {
  Photo: Photo,
};

function Artist({ type, id, token }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const component = types[type];

  useEffect(() => {
    async function callApiAsync() {
      setData(await callApi(`https://api.spotify.com/v1/artists/${id}`, token));
      setLoading(false);
    }
    callApiAsync();
  }, []);

  return component({ data, loading });
}

export { Artist };
