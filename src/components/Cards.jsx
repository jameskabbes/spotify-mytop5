import { createElement } from 'react';

// Artist
import { Card as ArtistCard } from '../components/Artist/Card';
import { Panel as ArtistPanel } from '../components/Artist/Panel';

// Track
import { Card as TrackCard } from '../components/Track/Card';
import { Panel as TrackPanel } from '../components/Track/Panel';

import { useIsMobile } from '../utils/useIsMobile';

const entities = {
  artist: {
    card: ArtistCard,
    panel: ArtistPanel,
  },
  track: {
    card: TrackCard,
    panel: TrackPanel,
  },
};

function Cards({ data, entity }) {
  const isMobile = useIsMobile();

  return (
    <div className="cards">
      {data.items.map((item, i) => {
        const props = {
          key: i,
          ranking: i + 1,
        };
        props[entity] = item; // Assuming type is defined somewhere
        return createElement(
          entities[entity][isMobile ? 'card' : 'panel'],
          props
        ); // Return the created element
      })}
    </div>
  );
}

export { Cards };
