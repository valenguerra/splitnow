import { createContext } from 'react';
import { DEFAULT_CONFIG } from './app/constants';
import { Home } from './components/Home';
import { useConfig } from './hooks/useConfig';

export const configContext = createContext(DEFAULT_CONFIG);

export const App = () => {
  const config = useConfig();

  return (
    <configContext.Provider value={config}>
      <Home />
    </configContext.Provider>
  );
};
