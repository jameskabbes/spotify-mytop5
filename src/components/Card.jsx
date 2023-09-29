function Card( {photo, body} ){

    return (

            <div className="card">
                <div className="card-image-container">
                    {photo}
                </div>
                { body }
            </div>

    )
}

export { Card };