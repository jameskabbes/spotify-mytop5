function Photo({ artist, loading }) {
  return loading ? (
    <p>loading...</p>
  ) : (
    <img className="card-image" src={artist.images[0].url} alt={artist.name} />
  );
}

export { Photo };
