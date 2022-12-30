import { useContext } from 'react';
import { DataContext } from '../DataContextProvider';

import './Header.css';

export const Header = () => {
  const { data, setCity } = useContext(DataContext);

  const onCityChange = (e) => {
    e.preventDefault();
    setCity(e.target[0].value);
  };

  return (
    <header className="header">
      <form onSubmit={onCityChange}>
        <input defaultValue={data.address} className="city-input" />
      </form>

      <strong className="app-name">OhMyWeather</strong>
    </header>
  );
};
