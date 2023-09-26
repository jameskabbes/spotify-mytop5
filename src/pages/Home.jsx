import config from '../config.json'
import { useState, useEffect } from 'react';
import { TopSongs } from './TopSongs';

function Home(){

    const [ token, setToken ] = useState(null)
    const tokenPath = `${config.authEndpoint
        }?client_id=${config.clientId[ config.mode ]
        }&redirect_uri=${config.redirectUri[ config.mode ]
        }&scope=${config.scopes.join("%20")
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
                <div className='flex h-screen items-center justify-center'>
                    <button 
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={handleLoginClick}>
                        Connect to Spotify
                    </button>
                </div>
            ) : (
                <TopSongs token={token} />
            ) }
        </>
    )

}

export { Home }
