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
            number = {ranking}
            title = {artist.name}
        />
    )
}

export { Card }
