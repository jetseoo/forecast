import { useEffect, useState } from 'react';
import { dayUsedProperties, getFetchUrl } from '../API';

const getResultData = (data) => {
  const resultData = {};

  if (data !== null) {
    resultData.address = data.address;
    resultData.resolvedAddress = data.resolvedAddress;

    resultData.days = data.days.map((day) => {
      const dayInfo = {};

      dayUsedProperties.forEach((prop) => {
        if (prop === 'temp' || prop === 'feelslike' || prop === 'tempmin' || prop === 'tempmax') {
          dayInfo[prop] = Math.round(day[prop]);
        } else {
          dayInfo[prop] = day[prop];
        }

        if (prop === 'datetime') {
          const date = new Date(day[prop]);

          dayInfo[prop] = {
            date: day[prop],
            weekday: date.toLocaleDateString('en-US', { weekday: 'short' }),
            day: date.toLocaleDateString('en-US', { day: '2-digit' }),
          };
        }
      });

      return dayInfo;
    });
  }
  return resultData;
};

export const useData = () => {
  const [data, updateData] = useState(null);
  const [city, setCity] = useState(data?.address || 'Batumi');

  useEffect(() => {
    const dataFetch = async () => {
      const response = await fetch(getFetchUrl(city));
      const newData = await response.json();

      updateData(getResultData(newData));
    };
    dataFetch();
  }, [city]);

  return [data, setCity];
};
