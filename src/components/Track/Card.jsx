import { Artist } from '../Artist/Artist';

function Card( {song, token, ranking} ){

    return (
        <>
            <div className="card">
                    <Artist
                        type = 'Photo'
                        id = {song.album.artists[0].id}
                        token = {token}
                    ></Artist>
                    <h3 className="text-xl font-semibold mb-2">{ranking}. {song.name}</h3>
                    <p className="text-gray-700 mb-4">{song.artists[0].name}</p>
            </div>
        </>
    )

}

export { Card }
