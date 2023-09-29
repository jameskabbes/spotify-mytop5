function ArtistsOrTracks( { type, setType } ) {

    return (

    <div className="flex flex-col items-center" >
        <h1 
            className="text-center"
            >{ type === 'artists' ? 'Artists' : 'Tracks' }
        </h1>
        <div className="text-center" >
            <button 
                onClick={() => setType('artists')}
                className={ type === 'artists' ? 'menu-item-selected' : 'menu-item-deselected' }
                >Artists
            </button>
            <button 
                onClick={() => setType('tracks')}
                className={ type === 'tracks' ? 'menu-item-selected' : 'menu-item-deselected' }
                >Tracks
            </button>
        </div>
    </div>

)


}

export { ArtistsOrTracks }