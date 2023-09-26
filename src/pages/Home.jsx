import spotify_app_config from '../spotify_app_config.json'
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react';
import { TopSongs } from './TopSongs';

function Home(){

    const [ token, setToken ] = useState(null)
    const navigate = useNavigate();

    const tokenPath = `${spotify_app_config.authEndpoint
        }?client_id=${spotify_app_config.clientId
        }&redirect_uri=${spotify_app_config.redirectUri
        }&scope=${spotify_app_config.scopes.join("%20")
        }&response_type=token&show_dialog=true`

    const handleLoginClick = () => {
        window.open(tokenPath, "_self");
    };

    

    useEffect(() => {
        const handleHashChange = () => {
            //#access_token={TOKEN}&token_type=Bearer&expires_in=3600
            setToken(window.location.hash.slice( 1 ).split('&')[0].split('=')[1])
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
        <>
            { !token ? (
                <div>
                    <button onClick={handleLoginClick}>Login to Spotify</button>
                </div>
            ) : (
                <TopSongs token={token} />
            ) }
        </>
    )

}

export { Home }