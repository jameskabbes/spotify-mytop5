import { createElement } from "react"
import { Card } from './Card';
import { Panel } from './Panel';

function TopArtists( {data, userData, loading, token, offset, smallScreen} ){


    return (
        <>
            { !loading? (
                <>
                    {data.items.map( (artist, i) => (
                        createElement( smallScreen ? Panel : Card, { key:i, artist, ranking:i+1+offset } )
                    ) )}
                </>
            ) : null }
        </>
    )

}

export { TopArtists }