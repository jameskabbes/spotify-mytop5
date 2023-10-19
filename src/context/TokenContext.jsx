import { useState, createContext } from 'react';

// Create a context
const TokenContext = createContext();

function TokenContextProvider({ children }) {
  const [token, setToken] = useState(null);
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
}

export { TokenContext, TokenContextProvider };
