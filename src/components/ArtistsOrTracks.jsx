function ArtistsOrTracks( { type, setType } ) {

    return (

    <div>
        <button 
            onClick={() => setType('artists')}
            className={ type === 'artists' ? 'button-primary' : 'button-secondary' }
            >Artists
        </button>
        <button 
            onClick={() => setType('tracks')}
            className={ type === 'tracks' ? 'button-primary' : 'button-secondary' }
            >Tracks
        </button>
    </div>

)


}

export { ArtistsOrTracks }