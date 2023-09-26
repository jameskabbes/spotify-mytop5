import { createElement, useState } from "react"

import { TopTracks } from "../components/Track/TopTracks"
import { TopArtists } from "../components/Artist/TopArtists"

import { ArtistsOrTracks } from "../components/ArtistsOrTracks"
import { Limit } from "../components/Limit";
import { Offset } from "../components/Offset";
import { TimeRange } from "../components/TimeRange";

const types = {
    'tracks': TopTracks,
    'artists': TopArtists
}


function Menu( {token} ){

    const [ isSubmit, setIsSubmit ] = useState(false)

    const [ type, setType ] = useState('artists')
    const [ limit, setLimit ] = useState( 5 )
    const [ offset, setOffset ] = useState( 0 )
    const [ timeRange, setTimeRange ] = useState( 'long_term' )    

    return(

        <>
            { !isSubmit ? (
                <>
                    <div className="flex flex-col items-center">
                        <ArtistsOrTracks 
                        type={type} 
                        setType={setType}
                        />
                        <Limit
                            limit={limit}
                            setLimit={setLimit}
                        />
                        <Offset
                            offset={offset}
                            setOffset={setOffset}
                        />
                        <TimeRange
                            timeRange={timeRange}
                            setTimeRange={setTimeRange}
                        />
                        <button
                            className='bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-6 rounded-full' 
                            onClick={ () => setIsSubmit(true) }
                        >Generate</button>

                    </div>
                </>
            ) : (
                createElement( types[type], { token, limit, offset, timeRange, setIsSubmit },  )
            ) }

        </>
        )
}

export { Menu }