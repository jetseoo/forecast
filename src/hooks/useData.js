import { useEffect, useState } from 'react';
import { dayUsedProperties, getFetchUrl } from '../API';

const getResultData = (data) => {
  const resultData = {};

  if (data !== null) {
    resultData.address = data.address;
    resultData.resolvedAddress = data.resolvedAddress;

    // days[0] & days[1] - only today and tomorrow data needed
    resultData.days = [data.days[0], data.days[1]].map((day) => {
      const dayInfo = {};

      dayUsedProperties.forEach((prop) => {
        if (prop === 'temp' || prop === 'feelslike' || prop === 'tempmin' || prop === 'tempmax') {
          dayInfo[prop] = Math.round(day[prop]);
        } else {
          dayInfo[prop] = day[prop];
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
