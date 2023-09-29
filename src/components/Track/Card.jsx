import { Photo } from '../Album/Photo';
import { Card as BaseCard } from "../Card"

function Card( {song, token, ranking} ){

    return (
        <BaseCard
            photo= {<Photo
                album={song.album}
            />}
            body={
                <div className='card-body'>
                    <h1>{ranking}</h1>
                    <h2>{song.name}</h2>
                    <h4>{song.artists[0].name}</h4>
                    <h5>{song.album.name}</h5>
                </div>                
            }
        />
    )
}

export { Card }
