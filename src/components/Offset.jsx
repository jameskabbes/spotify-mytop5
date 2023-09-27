function Offset( {offset, setOffset} ) {

    const handleChange = (event) => {
        const newValue = event.target.value;
        setOffset(parseInt(newValue, 10));
      };

    return (
        <div className="flex flex-col items-center justify-center">
            <h2>{offset}</h2>
            <input 
                type="range" 
                min="0" 
                max="100" 
                value={offset}
                className="slider" 
                id="mySlider"
                onChange={handleChange}
            />
        </div>
    )
}

export { Offset }