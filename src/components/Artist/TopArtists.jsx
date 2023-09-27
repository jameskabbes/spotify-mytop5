import { useState, useEffect } from 'react';
import { callApi } from "../../utils/Api";
import { Card } from './Card';

function TopArtists( {token, limit, offset, timeRange} ){

    console.log(token);

    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    const url = `https://api.spotify.com/v1/me/top/artists/?time_range=${timeRange}&limit=${limit}&offset=${offset}`

    useEffect( ()=> {
        async function callApiAsync(){
            setData( await callApi( url, token ) )
            setLoading( false );
            
        }
        callApiAsync();
    }, [] )

    return (
        <>
            <div className="flex flex-wrap -mx-4">
                { !loading? (
                data.items.map( (artist, i) => (
                    <Card 
                        key={i} 
                        artist={artist} 
                        ranking={ i+1+offset }
                    />
                ) )
                ) : null }

            </div>
        </>
    )

}

export { TopArtists }