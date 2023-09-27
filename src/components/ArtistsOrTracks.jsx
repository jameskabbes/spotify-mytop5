function ArtistsOrTracks( { type, setType } ) {

    return (

    <div className="py-6" >
        <h1 
            className="text-center"
            >{ type === 'artists' ? 'Artists' : 'Tracks' }
        </h1>
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

)


}

export { ArtistsOrTracks }