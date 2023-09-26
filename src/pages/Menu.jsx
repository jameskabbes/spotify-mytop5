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

    const [ type, setType ] = useState('tracks')
    const [ limit, setLimit ] = useState( 5 )
    const [ offset, setOffset ] = useState( 0 )
    const [ timeRange, setTimeRange ] = useState( 'long_term' )    

    return(

        <>
            { !isSubmit ? (
                <>
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
                        onClick={ () => setIsSubmit(true) }
                    >Generate</button>
                </>
            ) : (
                createElement( types[type], { token, limit, offset, timeRange },  )
            ) }

        </>
        )
}

export { Menu }