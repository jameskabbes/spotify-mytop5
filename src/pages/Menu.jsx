import { createElement, useState } from 'react';

import { ArtistsOrTracks } from '../components/ArtistsOrTracks';
import { Limit } from '../components/Limit';
import { TimeRange } from '../components/TimeRange';

import { Analytics } from './Analytics';

function Menu({ token }) {
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
          </div>
        </>
      ) : (
        createElement(Analytics, {
          token,
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
