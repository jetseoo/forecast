import React, { useContext } from 'react';
import { Card } from '../UI';
import { DataContext } from '../DataContextProvider';

import './week.css';

export const Week = () => {
  const data = useContext(DataContext);

  return (
    <Card className="week">
      <h3 className="week-heading">Week</h3>
      <ul className="week-list">
        {data.data.days.slice(0, 7).map((day) => {
          return (
            <li className="weekday" key={day.datetime.date}>
              <div className="weekday-wrapper">
                <span className={`weekday-icon ${day.icon}`}></span>
                <p>
                  <span className="weekday-weekday">{day.datetime.weekday}</span>
                  <span className="weekday-day">{day.datetime.day}</span>
                </p>
              </div>

              <div className="weekday-temprate">
                <p className="weekday-temp">
                  {day.temp}
                  <sup className="degree">&deg;</sup>
                </p>
                <p className="weekday-temps">
                  {day.tempmax}
                  <sup className="degree">&deg;</sup> - {day.tempmin}
                  <sup className="degree">&deg;</sup>
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
