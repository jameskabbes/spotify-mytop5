function Card({ photo, body }) {
  return (
    <div className="card">
      <div className="card-image-container">{photo}</div>
      <div className="card-body">{body}</div>
    </div>
  );
}

export { Card };
