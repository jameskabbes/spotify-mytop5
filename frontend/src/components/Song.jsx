function Song( {song} ){

    return (
        <>
            <h1>{song.name}</h1>
            <h2>{song.artists[0].name}</h2>

        </>

    )

}

export { Song }
