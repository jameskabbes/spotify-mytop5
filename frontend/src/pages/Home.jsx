import spotify_app_config from '../spotify_app_config.json'
import { Link } from "react-router-dom"

function Home(){

    const tokenPath = `${spotify_app_config.authEndpoint
        }?client_id=${spotify_app_config.clientId
        }&redirect_uri=${spotify_app_config.redirectUri
        }&scope=${spotify_app_config.scopes.join("%20")
        }&response_type=token&show_dialog=true`

    console.log(tokenPath)

    return (
        <>
            <Link
                to={tokenPath}
            >
                <button
                >Login to Spotify
                </button>
            </Link>
        </>
    )

}

export { Home }