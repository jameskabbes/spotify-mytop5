import { useState, createContext } from 'react';

// Create a context
const TimeRangeContext = createContext();

function TimeRangeContextProvider({ children }) {
  const [timeRange, setTimeRange] = useState( 'long_term' );
  	
  return (
    <TimeRangeContext.Provider value={{ timeRange, setTimeRange }}>
      {children}
    </TimeRangeContext.Provider>
  );
}

export { TimeRangeContext, TimeRangeContextProvider };