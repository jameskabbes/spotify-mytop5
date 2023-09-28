import { Card } from './Card';

function TopTracks( {data, user, loading, token, offset} ) {

    return (
        <>
            { !loading? (
            data.items.map( (song, i) => (
                <Card 
                    key={i} 
                    song={song} 
                    token={token}
                    ranking={ i+1+offset }
                />
            ) )
            ) : null }
        </>
    )


}

export { TopTracks };