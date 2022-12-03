import { useEffect, useState } from 'react';
import { dayUsedProprerties, getFetchUrl } from '../API';

export const useData = () => {
  const [data, updateData] = useState(null);

  useEffect(() => {
    const dataFetch = async () => {
      const response = await fetch(getFetchUrl(data?.address));
      const newData = await response.json();

      updateData(newData);
    };
    dataFetch();
  }, [data?.address]);

  const resultData = {};

  if (data !== null) {
    resultData.address = data.address;
    resultData.resolvedAddress = data.resolvedAddress;

    resultData.days = data.days.map((day) => {
      const dayInfo = {};

      dayUsedProprerties.forEach((prop) => {
        dayInfo[prop] = day[prop];
      });
      return dayInfo;
    });
  }

  return [resultData, updateData];
};
