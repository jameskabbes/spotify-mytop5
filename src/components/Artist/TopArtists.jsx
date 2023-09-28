import { Card } from './Card';

function TopArtists( {data, userData, loading, token, offset} ){


    return (
        <>
            { !loading? (
                <>
                    {data.items.map( (artist, i) => (
                        <Card 
                            key={i} 
                            artist={artist} 
                            ranking={ i+1+offset }
                        />
                    ) )}
                </>
            ) : null }
        </>
    )

}

export { TopArtists }