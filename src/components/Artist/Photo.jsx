function Photo( {data, loading } ){

    return (
        loading ? (
            <p>loading...</p>
        ) : (
            <img src={data.images[0].url} alt={data.name} className="w-full mb-4"/>
        )
    )
}

export { Photo }