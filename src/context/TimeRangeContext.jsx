import { useState, createContext } from 'react';

// Create a context
const TimeRangeContext = createContext();

function TimeRangeContextProvider({ children }) {
  const [limit, setTimeRange] = useState( 'all_time' );
  	
  return (
    <TimeRangeContext.Provider value={{ limit, setTimeRange }}>
      {children}
    </TimeRangeContext.Provider>
  );
}

export { TimeRangeContext, TimeRangeContextProvider };