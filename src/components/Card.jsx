function Card( {photo, number, title, body} ){

    return (

        <div className="card">
        <div className="card-image-container">
            {photo}
        </div>
        <div className="card-body">
            <h1>{number}</h1>
            <h2>{title}</h2>
            <h3>{body}</h3>
        </div>
        </div>

    )
}

export { Card };