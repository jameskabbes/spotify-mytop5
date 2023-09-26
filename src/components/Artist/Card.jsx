import { Photo } from "./Photo"

function Card( {artist, ranking} ){

    return (
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
                <Photo
                    data={artist}
                    loading={false}
                ></Photo>
                <h3 className="text-xl font-semibold mb-2">{ranking}. {artist.name}</h3>
                <p className="text-gray-700 mb-4">{artist.genres.join(' - ')}</p>
                <p className="text-gray-700 mb-4">{artist.popularity}</p>
            </div>
        </div>

        )

}

export { Card }
