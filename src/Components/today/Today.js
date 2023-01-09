import { useContext } from 'react';
import { DataContext } from '../DataContextProvider';
import { Card } from '../UI';
import { Tooltip } from '../UI';

import './Today.css';
import '../../css/icons.css';

export const Today = () => {
  const data = useContext(DataContext);
  const today = data.data.days[0];

  return (
    <Card className={`today main-info ${today.icon}-bg`}>
      <div className="left">
        <div className="place">
          <h1 className="city">{data.data.address}</h1>
          <h2 className="country">{data.data.resolvedAddress}</h2>
        </div>

        <div className="temperature">
          <p className="current">
            {today.temp}
            <sup className="degree">&deg;</sup>
            <span className={`icon ${today.icon}`}></span>
          </p>

          <p className="description">{today.description}</p>

          <div className="more-temps">
            <p>Feels like&nbsp;{today.feelslike}</p>
            <p>Min&nbsp;{today.tempmin}</p>
            <p>Max&nbsp;{today.tempmax}</p>
          </div>
        </div>
      </div>

      <div className="right">
        <p className="sunrise">{today.sunrise.slice(0, 5)}</p>
        <p className="sunset">{today.sunset.slice(0, 5)}</p>
      </div>

      <Tooltip buttonClass="mob-info-btn">
        <div>
          <div className="mob-more-temps">
            <p>
              <span className="mob-info-descr">Feels like</span>
              <span className="mob-info-temp">{today.feelslike}</span>
            </p>
            <p>
              <span className="mob-info-descr">Min</span>
              <span className="mob-info-temp">{today.tempmin}</span>
            </p>
            <p>
              <span className="mob-info-descr">Max</span>
              <span className="mob-info-temp">{today.tempmax}</span>
            </p>
          </div>

          <div className="mob-sun">
            <p className="sunrise">{today.sunrise.slice(0, 5)}</p>
            <p className="sunset">{today.sunset.slice(0, 5)}</p>
          </div>
        </div>
      </Tooltip>
    </Card>
  );
};
