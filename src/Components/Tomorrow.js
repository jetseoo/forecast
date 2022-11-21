import Card from './UI/Card.js';

import './Tomorrow.css';
import '../icons.css';
import '../background.css';

const Tomorrow = ({ data }) => {
  const tomorrow = data.days[1];

  return (
    <Card className={`tomorrow ${tomorrow.icon}-bg`}>
      <h3 className="details-heading">Tomorrow</h3>

      <div className="temperature">
        <p className="temp">
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
