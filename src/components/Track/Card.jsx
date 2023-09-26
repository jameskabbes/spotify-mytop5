import { Artist } from '../Artist/Artist';

function Card( {song, token, ranking} ){

    return (
        <>

        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
                <Artist
                    type = 'Photo'
                    id = {song.album.artists[0].id}
                    token = {token}
                ></Artist>
                <h3 className="text-xl font-semibold mb-2">{ranking}. {song.name}</h3>
                <p className="text-gray-700 mb-4">{song.artists[0].name}</p>
            </div>
        </div>

        </>
    )

}

export { Card }
