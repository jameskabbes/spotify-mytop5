import { useContext, useEffect } from 'react';
import config from '../config.json';
import spotifyIcon from '../images/Spotify_Icon_RGB_White.png';
import { TokenContext } from '../context/TokenContext';

function ConnectToSpotify() {
  const tokenPath = `${config.authEndpoint}?client_id=${
    config.clientId[config.mode]
  }&redirect_uri=${config.redirectUri[config.mode]}&scope=${config.scopes.join(
    '%20'
  )}&response_type=token&show_dialog=true`;

  const { setToken } = useContext(TokenContext);
  const handleLoginClick = () => {
    window.open(tokenPath, '_self');
  };

  useEffect(() => {
    const handleHashChange = () => {
      //#access_token={TOKEN}&token_type=Bearer&expires_in=3600
      setToken(window.location.hash.slice(1).split('&')[0].split('=')[1]);

      //remove the hash from the url
      window.history.replaceState({}, document.title, window.location.pathname);
    };

    // Attach the event listener for hash change
    window.addEventListener('hashchange', handleHashChange);

    handleHashChange();

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <button className="button" onClick={handleLoginClick}>
      <div className="flex items-center">
        <img
          src={spotifyIcon}
          className="h-auto max-h-6 mr-2"
          alt="Spotify Logo"
        />
        <p className="m-0">Connect Your Account</p>
      </div>
    </button>
  );
}

export { ConnectToSpotify };
