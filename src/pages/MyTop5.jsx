import { createElement, useState } from "react"

import { ArtistsOrTracks } from "../components/ArtistsOrTracks"
import { Limit } from "../components/Limit";
import { TimeRange } from "../components/TimeRange";

import { Analytics } from './Analytics'

function MyTop5( {token} ){

    const [ isSubmit, setIsSubmit ] = useState(false)

    const [ type, setType ] = useState('artists')
    const [ limit, setLimit ] = useState( 5 )
    const [ offset, setOffset ] = useState( 0 )
    const [ timeRange, setTimeRange ] = useState( 'long_term' )    


    return(

        <>
            { !isSubmit ? (
                <>
                    <div className='container-center space-y-4'>

                        <Limit
                            limit={limit}
                            setLimit={setLimit}
                        />
                        <ArtistsOrTracks 
                        type={type} 
                        setType={setType}
                        />
                        <TimeRange
                            timeRange={timeRange}
                            setTimeRange={setTimeRange}
                        />
                        <button
                            className="button"
                            onClick={ () => setIsSubmit(true) }
                        >Go!</button>

                    </div>
                </>
            ) : (
                createElement( Analytics, { type, token, limit, offset, timeRange, setIsSubmit } )
            ) }

        </>
        )
}

export { MyTop5 }