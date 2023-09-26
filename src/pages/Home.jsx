import { useState, useEffect } from 'react';
import { ConnectToSpotify } from '../components/ConnectToSpotify';
import { Menu } from './Menu';

function Home(){

    const [ token, setToken ] = useState(null)

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
                <ConnectToSpotify></ConnectToSpotify>                
            ) : (
                <Menu
                    token={token}
                ></Menu>
            ) }
        </>
    )

}

export { Home }
