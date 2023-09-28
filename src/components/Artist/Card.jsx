import { Photo } from "./Photo"

function Card( {artist, ranking} ){

    return (
        <div className="card">
            <Photo
                data={artist}
                loading={false}
            ></Photo>
            <h3 className="text-xl font-semibold mb-2">{ranking}. {artist.name}</h3>
            <p className="text-gray-700 mb-4">{artist.genres.join(' - ')}</p>
            <p className="text-gray-700 mb-4">{artist.popularity}</p>
        </div>

        )

}

export { Card }
