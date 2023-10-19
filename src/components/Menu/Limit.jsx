import { useContext } from 'react';
import { LimitContext } from '../../context/LimitContext';


function Limit() {

  const { limit, setLimit } = useContext(LimitContext);
  const handleChange = (event) => {
    const newValue = event.target.value;
    setLimit(parseInt(newValue, 10));
  };

  return (
    <div className="flex flex-col text-center items-center">
      <h1>{limit}</h1>
      <input
        type="range"
        min="1"
        max="50"
        value={limit}
        className="slider"
        id="mySlider"
        onChange={handleChange}
      />
    </div>
  );
}

export { Limit };
