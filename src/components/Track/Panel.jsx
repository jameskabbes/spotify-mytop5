import { Photo } from "../Album/Photo"
import { Panel as BasePanel } from "../Panel"

function Panel( {track, ranking} ){

    return (
        <BasePanel
            photo={ 
                <Photo
                    album={track.album}
                ></Photo>
            }
            body={
                <>
                    <h3 className="m-0">{ranking}</h3>
                    <div className="flex flex-col">
                        <h4 className="m-0 font-semibold text-right">{track.name}</h4>
                        <h6 className="m-0 text-right">{track.artists[0].name}</h6>
                    </div>
                </>
            }
        />
    )
}

export { Panel }