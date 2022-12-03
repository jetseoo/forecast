import './Tomorrow.css';
import '../icons.css';
import '../background.css';

import Card from './UI/Card.js';
import { useContext } from 'react';
import { DataContext } from './DataContextProvider';

const Tomorrow = () => {
  const data = useContext(DataContext);
  const tomorrow = data.data.days[1];

  return (
    <Card className={`tomorrow ${tomorrow.icon}-bg`}>
      <h3 className="details-heading">Tomorrow</h3>

      <div className="temperature">
        <p className="temp semi-bold">
          {Math.round(tomorrow.temp)}
          <sup>&deg;</sup>
          <span className={`icon ${tomorrow.icon}`}></span>
        </p>

        <p className="min-max">
          Min {Math.round(tomorrow.tempmin)} &nbsp;&nbsp;&nbsp; Max {Math.round(tomorrow.tempmax)}
        </p>
      </div>
    </Card>
  );
};

export default Tomorrow;
