import Card from '../UI/Card.js';
import { useContext } from 'react';
import { DataContext } from '../DataContextProvider';

import './Tomorrow.css';
import '../../css/icons.css';
import '../../css/background.css';

const Tomorrow = () => {
  const data = useContext(DataContext);
  const tomorrow = data.data.days[1];

  return (
    <Card className={`tomorrow ${tomorrow.icon}-bg`}>
      <h3 className="details-heading">Tomorrow</h3>

      <div className="temperature">
        <p className="temp">
          {tomorrow.temp}
          <sup>&deg;</sup>
          <span className={`icon ${tomorrow.icon}`}></span>
        </p>

        <p className="min-max">
          Min {tomorrow.tempmin} &nbsp;&nbsp;&nbsp; Max {tomorrow.tempmax}
        </p>
      </div>
    </Card>
  );
};

export default Tomorrow;
