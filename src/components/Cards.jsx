import { createElement } from 'react';

// Artist
import { Card as ArtistCard } from '../components/Artist/Card';
import { Panel as ArtistPanel } from '../components/Artist/Panel';

// Track
import { Card as TrackCard } from '../components/Track/Card';
import { Panel as TrackPanel } from '../components/Track/Panel';

import { useIsMobile } from '../utils/useIsMobile';

const types = {
	artist: {
	  card: ArtistCard,
	  panel: ArtistPanel,
	},
	track: {
	  card: TrackCard,
	  panel: TrackPanel,
	}
  };

function Cards({ data, type, offset }) {

  const isMobile = useIsMobile();

  return (
	<div className="cards">
	{data.items.map((item, i) => {
	  const props = {
		key: i,
		ranking: i + 1 + offset
	  };
	  props[type] = item; // Assuming type is defined somewhere
	  return createElement(types[type][isMobile ? 'card' : 'panel'], props); // Return the created element
	})}
  </div>
  )

}
  
export { Cards };
  