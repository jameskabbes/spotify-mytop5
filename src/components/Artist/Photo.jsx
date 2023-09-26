function Photo( {data, loading} ){

    return (
        loading ? (
            <p>loading...</p>
        ) : (
            <img src={data.images[0].url} alt={data.name} />
        )
    )


}

export { Photo }