import { TokenContextProvider } from './TokenContext';
import { EntityContextProvider } from './EntityContext';
import { LimitContextProvider } from './LimitContext';
import { TimeRangeContextProvider } from './TimeRangeContext';

function AppContextProvider({ children }) {
  return (
    <TokenContextProvider>
      <EntityContextProvider>
        <LimitContextProvider>
          <TimeRangeContextProvider>{children}</TimeRangeContextProvider>
        </LimitContextProvider>
      </EntityContextProvider>
    </TokenContextProvider>
  );
}

export { AppContextProvider };
