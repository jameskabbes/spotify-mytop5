import { useState } from "react";
import { ConnectToSpotify } from "./ConnectToSpotify";
import { Menu } from './Menu'

function Home(  ){

    const [ token, setToken ] = useState( null );

    return (
        token ? (
            <Menu token={token} />
            ) : (
            <div className="container-center space-y-2">
                <h1 className="text-center">My Top 5</h1>
                <ConnectToSpotify setToken={setToken} />
            </div>
        )
    )

};

export { Home }