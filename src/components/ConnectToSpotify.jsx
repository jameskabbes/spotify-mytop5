import config from '../config.json'

function ConnectToSpotify(){

    const tokenPath = `${config.authEndpoint
    }?client_id=${config.clientId[ config.mode ]
    }&redirect_uri=${config.redirectUri[ config.mode ]
    }&scope=${config.scopes.join("%20")
    }&response_type=token&show_dialog=true`

    const handleLoginClick = () => {
        window.open(tokenPath, "_self");
    };

    return (
        <div className='flex flex-col h-screen items-center justify-center'>
            <h1>My Top 10</h1>
            <button 
                onClick={handleLoginClick}>
                Connect to Spotify
            </button>
        </div>
    )
}

export { ConnectToSpotify };