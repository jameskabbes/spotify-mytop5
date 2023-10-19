import { useContext } from 'react';
import { EntityContext } from '../../context/EntityContext';

function Entity() {
  const { entity, setEntity } = useContext(EntityContext);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center">
        {entity === 'artist' ? 'Artists' : 'Tracks'}
      </h1>
      <div className="text-center">
        <button
          onClick={() => setEntity('artist')}
          className={
            entity === 'artist' ? 'menu-item-selected' : 'menu-item-deselected'
          }
        >
          Artists
        </button>
        <button
          onClick={() => setEntity('track')}
          className={
            entity === 'track' ? 'menu-item-selected' : 'menu-item-deselected'
          }
        >
          Tracks
        </button>
      </div>
    </div>
  );
}

export { Entity };
