import { useContext, createElement, useState } from 'react';
import { TokenContext } from '../context/TokenContext';

import { ArtistsOrTracks } from '../components/ArtistsOrTracks';
import { Limit } from '../components/Limit';
import { TimeRange } from '../components/TimeRange';

import { Analytics } from './Analytics';

function Menu() {
  const { token, setToken } = useContext(TokenContext);

  const [isSubmit, setIsSubmit] = useState(false);

  const [type, setType] = useState('artist');
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);
  const [timeRange, setTimeRange] = useState('long_term');

  return (
    <>
      {!isSubmit ? (
        <>
          <div className="container-center space-y-4">
            <h2>My Top</h2>

            <Limit limit={limit} setLimit={setLimit} />
            <ArtistsOrTracks type={type} setType={setType} />
            <TimeRange timeRange={timeRange} setTimeRange={setTimeRange} />
            <button className="button" onClick={() => setIsSubmit(true)}>
              Go!
            </button>
            <button className="button" onClick={() => setToken(null)}>
              Sign Out
            </button>
          </div>
        </>
      ) : (
        createElement(Analytics, {
          type,
          limit,
          offset,
          timeRange,
          setIsSubmit,
        })
      )}
    </>
  );
}

export { Menu };
