import { Artist } from '../Artist/Artist';
import { Card as BaseCard } from "../Card"

function Card( {song, token, ranking} ){

    return (
        <BaseCard
            photo={ 
                <Artist
                type = 'Photo'
                id = {song.album.artists[0].id}
                token = {token}
                ></Artist>
            }
            number={ranking}
            title={song.name}
            body={song.artists[0].name}
        />
    )
}

export { Card }
