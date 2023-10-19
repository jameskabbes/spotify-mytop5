import { TokenContextProvider } from './TokenContext';

function AppContextProvider({ children }) {
  return <TokenContextProvider>{children}</TokenContextProvider>;
}

export { AppContextProvider };
