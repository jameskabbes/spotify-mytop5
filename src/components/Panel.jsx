function Panel( {photo, body} ){

    return (

        <div className="panel">
            <div className="panel-image-container">
                {photo}
            </div>
            
            <div className="panel-body">
                {body}
            </div>
        </div>


    )
}

export { Panel };