import { Photo } from '../Album/Photo';
import { Card as BaseCard } from '../Card';

function Card({ track, token, ranking }) {
  return (
    <BaseCard
      photo={<Photo album={track.album} />}
      body={
        <>
          <h1>{ranking}</h1>
          <h2>{track.name}</h2>
          <h4>{track.artists[0].name}</h4>
          <h5>{track.album.name}</h5>
        </>
      }
    />
  );
}

export { Card };
