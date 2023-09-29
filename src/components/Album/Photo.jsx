function Photo( {album} ){

    return (
        <>
            <img 
                className="card-image"
                src={album.images[0].url} alt={album.name} 
            />
        </>
    )
}

export { Photo }