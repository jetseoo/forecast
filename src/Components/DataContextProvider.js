import { createContext } from 'react';
import { useData } from '../hooks/useData';

export const DataContext = createContext(null);

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useData();

  const cityChangeHandler = (city) => {
    const newData = { ...data };
    newData.address = city;

    setData(newData);
  };

  return (
    <DataContext.Provider value={{ data, cityChangeHandler }}>{children}</DataContext.Provider>
  );
};
