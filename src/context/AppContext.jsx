import { TokenContextProvider } from './TokenContext';
import { EntityContextProvider } from './EntityContext';

function AppContextProvider({ children }) {
  return (
	<TokenContextProvider>
		<EntityContextProvider>
			{children}
		</EntityContextProvider>
	</TokenContextProvider>
  );
}

export { AppContextProvider };
