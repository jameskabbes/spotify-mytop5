function Photo( {data, loading } ){

    return (
        loading ? (
            <p>loading...</p>
        ) : (
            <img 
                className="card-image"
                src={data.images[0].url} alt={data.name} 
            />
        )
    )
}

export { Photo }