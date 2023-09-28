import { createElement, useState, useEffect } from "react"
import { callApi } from "../utils/Api";

import { TopTracks } from "../components/Track/TopTracks"
import { TopArtists } from "../components/Artist/TopArtists"

const types = {
    'tracks': TopTracks,
    'artists': TopArtists
}

function Analytics( {type, token, limit, offset, timeRange, setIsSubmit} ){
    
    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    const url = `https://api.spotify.com/v1/me/top/${type}/?time_range=${timeRange}&limit=${limit}&offset=${offset}`

    useEffect( ()=> {
        async function callApiAsync(){
            setData( await callApi( url, token ) )
            setLoading( false );
            
        }
        callApiAsync();
    }, [] )

    if (loading){
        return null
    }

    return (

        <>
            <div className='flex flex-col items-center mt-8'>
                <div className="flex flex-wrap -mx-4">
                { createElement( types[type], { data, token, loading, offset } ) }
                </div>
                <button
                    className='button my-4'
                    onClick={ () => setIsSubmit(false)}
                >Try it again!</button>
            </div>
        </>
    )

}

export { Analytics };

