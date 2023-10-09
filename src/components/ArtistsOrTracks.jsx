function ArtistsOrTracks({ type, setType }) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center">
        {type === 'artist' ? 'Artists' : 'Tracks'}
      </h1>
      <div className="text-center">
        <button
          onClick={() => setType('artist')}
          className={
            type === 'artist' ? 'menu-item-selected' : 'menu-item-deselected'
          }
        >
          Artists
        </button>
        <button
          onClick={() => setType('track')}
          className={
            type === 'track' ? 'menu-item-selected' : 'menu-item-deselected'
          }
        >
          Tracks
        </button>
      </div>
    </div>
  );
}

export { ArtistsOrTracks };
