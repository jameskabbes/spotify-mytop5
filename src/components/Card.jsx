function Card( {photo, number, title, body} ){

    return (

            <div className="card">
                <div className="card-content">
                    <div className="card-image-container">
                        {photo}
                    </div>
                    <div className="card-body">
                        <h1>{number}</h1>
                        <h3>{title}</h3>
                        <h6>{body}</h6>
                    </div>
                </div>
            </div>

    )
}

export { Card };