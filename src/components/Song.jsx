import { Artist } from './Artist/Artist';

function Song( {song, token} ){

    return (
        <>
            <h1>{song.name}</h1>
            <h2>{song.artists[0].name}</h2>
            <Artist
                type = 'Photo'
                id = {song.album.artists[0].id}
                token = {token}
            ></Artist>
        </>
    )
}

export { Song }
