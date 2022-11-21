import { useRef } from 'react';
import { useState } from 'react';

import './Header.css';

const Header = ({ changeAdress }) => {
  const [newAdress, setNewAdress] = useState('');
  const inpEl = useRef();

  return (
    <header className="header">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          changeAdress(newAdress);
        }}
      >
        <input
          ref={inpEl}
          className="input"
          placeholder="Enter a city..."
          onChange={() => setNewAdress(inpEl.current.value.trim())}
        />
      </form>

      <strong className="name">OhMyWeather</strong>
    </header>
  );
};

export default Header;
