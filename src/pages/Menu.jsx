import { useContext, createElement, useState } from 'react';
import { TokenContext } from '../context/TokenContext';

import { Entity } from '../components/Menu/Entity';
import { Limit } from '../components/Menu/Limit';
import { TimeRange } from '../components/Menu/TimeRange';

import { Analytics } from './Analytics';

function Menu() {
  const { setToken } = useContext(TokenContext);
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <>
      {!isSubmit ? (
        <>
          <div className="container-center space-y-4">
            <h2>My Top</h2>

            <Limit />
            <Entity />
            <TimeRange />
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
          setIsSubmit,
        })
      )}
    </>
  );
}

export { Menu };
