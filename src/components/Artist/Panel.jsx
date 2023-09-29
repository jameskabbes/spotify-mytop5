import { Photo } from "./Photo"
import { Panel as BasePanel } from "../Panel"

function Panel( {artist, ranking} ){

    return (
        <BasePanel
            photo={ 
                <Photo
                    artist={artist}
                    loading={false}
                ></Photo>
            }
            body={
                <>
                    <h2 className="m-0">{ranking}</h2>
                    <h4 className="m-0 text-right">{artist.name}</h4>
                </>
            }
        />
    )
}

export { Panel }