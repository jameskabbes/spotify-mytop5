import { useContext } from 'react';
import { TokenContext } from '../context/TokenContext';
import { ConnectToSpotify } from './ConnectToSpotify';

import { Menu } from './Menu';

function Home() {
  const { token, setToken } = useContext(TokenContext);
  return token ? (
    <Menu />
  ) : (
    <div className="container-center space-y-2">
      <h1 className="text-center">My Top 5</h1>
      <ConnectToSpotify />
      <button
        className="button"
        onClick={() => {
          setToken('demo');
        }}
      >
        Use Demo Data
      </button>
    </div>
  );
}

export { Home };
