import { useState } from "react";
import { ConnectToSpotify } from "./ConnectToSpotify";
import { Menu } from './Menu'

function Home(  ){

    const [ token, setToken ] = useState( null );

    return (
        token ? (
            <Menu token={token} />
            ) : (
            <div className="container-center">
                <h1>My Top 5</h1>
                <ConnectToSpotify setToken={setToken} />
            </div>
        )
    )

};

export { Home }