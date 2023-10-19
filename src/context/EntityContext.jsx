import { useState, createContext } from 'react';

// Create a context
const EntityContext = createContext();

function EntityContextProvider({ children }) {
  const [entity, setEntity] = useState('artist');
  	
  return (
    <EntityContext.Provider value={{ entity, setEntity }}>
      {children}
    </EntityContext.Provider>
  );
}

export { EntityContext, EntityContextProvider };