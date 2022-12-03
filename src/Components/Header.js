import { useContext } from 'react';
import { DataContext } from './DataContextProvider';
import './Header.css';

const Header = () => {
  const { data, cityChangeHandler } = useContext(DataContext);

  return (
    <header className="header">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          cityChangeHandler(e.target[0].value);
        }}
      >
        <input defaultValue={data.address} className="city-input" />
      </form>

      <strong className="app-name">OhMyWeather</strong>
    </header>
  );
};

export default Header;
