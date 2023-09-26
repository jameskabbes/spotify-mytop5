function Photo( {data, loading } ){

    return (
        loading ? (
            <p>loading...</p>
        ) : (
            <img src={data.images[0].url} alt={data.name} className="w-full h-32 object-contain mb-4"/>
        )
    )
}

export { Photo }