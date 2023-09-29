import { createElement } from "react"
import { Card } from './Card';
import { Panel } from './Panel';

function TopTracks( {data, user, loading, token, offset, smallScreen} ) {

    return (
        <>
            { !loading? (
            data.items.map( (track, i) => (
                createElement( smallScreen ? Panel : Card, { key:i, track, ranking:i+1+offset } )
            ) )
            ) : null }
        </>
    )


}

export { TopTracks };