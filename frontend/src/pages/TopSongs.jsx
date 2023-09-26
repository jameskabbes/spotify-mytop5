import { useState, useEffect } from 'react';
import { callApi } from "../utils/Api";
import { Song } from '../components/Song';

function TopSongs( {token} ) {

    console.log('Token: ' + token);

    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    const url = 'https://api.spotify.com/v1/me/top/tracks/?time_range=short_term&limit=10'
    const headers = {
        'Authorization': `Bearer ${token}`
    }

    useEffect( ()=> {
        async function callApiAsync(){
            setData( await callApi( url, headers ) )
            setLoading( false );
        }
        callApiAsync();
    }, [] )

    return (
        <>
            <p>
                Top songs!
            </p>
            { !loading? (
                data.items.map( (song, i) => (
                    <Song key={i} song={song} />
                ) )
            ) : null }
        </>
    )


}

export {TopSongs};