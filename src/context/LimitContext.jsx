import { useState, createContext } from 'react';

// Create a context
const LimitContext = createContext();

function LimitContextProvider({ children }) {
  const [limit, setLimit] = useState(5);

  return (
    <LimitContext.Provider value={{ limit, setLimit }}>
      {children}
    </LimitContext.Provider>
  );
}

export { LimitContext, LimitContextProvider };
