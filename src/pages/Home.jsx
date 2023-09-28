import { useState } from "react";
import { ConnectToSpotify } from "./ConnectToSpotify";
import { MyTop5 } from './MyTop5'

function Home(  ){

    const [ token, setToken ] = useState( null );

    return (
        token ? (
            <MyTop5 token={token} />
            ) : (
            <ConnectToSpotify setToken={setToken} />
        )
    )

};

export { Home }