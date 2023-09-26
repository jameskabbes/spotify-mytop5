import { useState, useEffect } from 'react';
import { callApi } from "../../utils/Api";
import { Card } from './Card';

function TopTracks( {token, limit, offset, timeRange} ) {

    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    const url = `https://api.spotify.com/v1/me/top/tracks/?time_range=${timeRange}&limit=${limit}&offset=${offset}`

    useEffect( ()=> {
        async function callApiAsync(){
            setData( await callApi( url, token ) )
            setLoading( false );
        }
        callApiAsync();
    }, [] )

    return (
        <>
            <div className="container mx-auto mt-8">
                <div className="flex flex-wrap -mx-4">
                    { !loading? (
                    data.items.map( (song, i) => (
                        <Card 
                            key={i} 
                            song={song} 
                            token={token}
                        />
                    ) )
                    ) : null }

                </div>
            </div>
        </>
    )


}

export { TopTracks };