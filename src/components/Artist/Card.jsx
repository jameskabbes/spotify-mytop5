import { Photo } from "./Photo"
import { Card as BaseCard } from "../Card"

function Card( {artist, ranking} ){

    //body={'Popularity: ' + artist.popularity}

    return (
        <BaseCard
            photo={ 
                <Photo
                    data={artist}
                    loading={false}
                ></Photo>
            }
            body={
                <>
                    <h1>{ranking}</h1>
                    <h2>{artist.name}</h2>
                </>
            }
        />
    )
}

export { Card }
