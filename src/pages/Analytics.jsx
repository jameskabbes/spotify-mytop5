import { Cards } from '../components/Cards';
import spotifyIcon from '../images/Spotify_Icon_RGB_Green.png';
import { useSpotifyData } from '../utils/useSpotifyData';
import { useContext, useEffect } from 'react';
import { TokenContext } from '../context/TokenContext';
import { EntityContext } from '../context/EntityContext';
import { LimitContext } from '../context/LimitContext';
import { TimeRangeContext } from '../context/TimeRangeContext';

function Analytics({ setIsSubmit }) {
  const { token } = useContext(TokenContext);
  const { entity } = useContext(EntityContext);
  const { limit } = useContext(LimitContext);
  const { timeRange } = useContext(TimeRangeContext);

  const [data, userData, loading] = useSpotifyData(
    token,
    entity,
    limit,
    timeRange
  );

  useEffect(() => {
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
            <Cards data={data} entity={entity}/>
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
