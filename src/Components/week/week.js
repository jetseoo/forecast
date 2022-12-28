import React, { useContext } from 'react';
import Card from '../UI/Card';
import { DataContext } from '../DataContextProvider';

import './week.css';

const Week = () => {
  const data = useContext(DataContext);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);

    return {
      weekday: date.toLocaleDateString('en-US', { weekday: 'short' }),
      day: date.toLocaleDateString('en-US', { day: '2-digit' }),
    };
  };

  return (
    <Card className="week">
      <h3 className="week-heading">Week</h3>
      <ul className="week-list">
        {data.data.days.slice(1, 8).map((day) => {
          return (
            <li className="weekday" key={day.datetime}>
              <div className="weekday-wrapper">
                <span className={`weekday-icon ${day.icon}`}></span>
                <p>
                  <span className="weekday-weekday">{formatDate(day.datetime).weekday}</span>
                  <span className="weekday-day">{formatDate(day.datetime).day}</span>
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

export default Week;
