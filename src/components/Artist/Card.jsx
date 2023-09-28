import { Photo } from "./Photo"
import { Card as BaseCard } from "../Card"

function Card( {artist, ranking} ){

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
            body={artist.popularity}
        />
    )
}

export { Card }
