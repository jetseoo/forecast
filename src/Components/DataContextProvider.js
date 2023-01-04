import { createContext } from 'react';
import { useData } from '../hooks/useData';

export const DataContext = createContext(null);

export const DataContextProvider = ({ children }) => {
  const [data, setCity] = useData();

  return <DataContext.Provider value={{ data, setCity }}>{children}</DataContext.Provider>;
};
