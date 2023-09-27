import { createElement } from 'react';

import { TopTracks } from "../components/Track/TopTracks"
import { TopArtists } from "../components/Artist/TopArtists"

const types = {
    'tracks': TopTracks,
    'artists': TopArtists
}

function Analytics( {type, token, limit, offset, timeRange, setIsSubmit} ){
    
    return (

        <>
            <div className='flex flex-col items-center'>
                { createElement( types[type], { token, limit, offset, timeRange } ) }
                <button
                    className='button my-4'
                    onClick={ () => setIsSubmit(false)}
                >Try it again!</button>
            </div>
        </>
    )

}

export { Analytics };

