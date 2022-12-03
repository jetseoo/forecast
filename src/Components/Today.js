import './Today.css';
import '../icons.css';

import { useContext } from 'react';
import { DataContext } from './DataContextProvider';

const Today = () => {
  const data = useContext(DataContext);
  const today = data.data.days[0];

  return (
    <div className="main-info">
      <div className="left">
        <div className="place">
          <h1 className="city">{data.data.address}</h1>
          <h2 className="country">{data.data.resolvedAddress}</h2>
        </div>

        <div className="temperature">
          <p className="current semi-bold">
            {Math.round(today.temp)}
            <sup className="degree">&deg;</sup>
            <span className={`icon ${today.icon}`}></span>
          </p>

          <p className="description">{today.description}</p>

          <p className="feels-like">Feels like {Math.round(today.feelslike)}</p>
          <p className="min-max">
            Min {Math.round(today.tempmin)} &nbsp;&nbsp; Max {Math.round(today.tempmax)}
          </p>
        </div>
      </div>

      <div className="right">
        <p className="sunrise">{today.sunrise.slice(0, 5)}</p>
        <p className="sunset">{today.sunset.slice(0, 5)}</p>
      </div>
    </div>
  );
};

export default Today;
