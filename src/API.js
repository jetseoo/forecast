export const getFetchUrl = (location) => {
  if (!location) location = 'Batumi';
  return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=events&key=ALXSB6AVTSV9VTPZ6XRTWBH5E&contentType=json`;
};

export const NAMES_MAPS = [
  { humidity: 'humidity', pressure: 'pressure', visibility: 'visibility' },
  { windspeed: 'speed', windgust: 'gust', winddir: 'direction' },
  { precip: 'precipitation', precipprob: 'chance', precipcover: 'cover' },
  { uvindex: 'UV-index', solarradiation: 'radiation', solarenergy: 'solar energy' },
];

export const convertWindDir = (deg) => {
  if (deg > 0 && deg <= 22.5) {
    return 'N';
  } else if (deg > 22.5 && deg <= 67.5) {
    return 'NE';
  } else if (deg > 67.5 && deg <= 112.5) {
    return 'E';
  } else if (deg > 112.5 && deg <= 157.5) {
    return 'SE';
  } else if (deg > 157.5 && deg <= 202.5) {
    return 'S';
  } else if (deg > 202.5 && deg <= 247.5) {
    return 'SW';
  } else if (deg > 247.5 && deg <= 292.5) {
    return 'W';
  } else if (deg > 292.5 && deg <= 337.5) {
    return 'NW';
  } else if (deg > 337.5 && deg <= 360) {
    return 'N';
  } else {
    return 'N/A';
  }
};

export const dayUsedProprerties = [
  'temp',
  'icon',
  'feelslike',
  'tempmin',
  'tempmax',
  'sunrise',
  'sunset',
  'humidity',
  'pressure',
  'visibility',
  'windspeed',
  'windgust',
  'winddir',
  'precip',
  'precipprob',
  'precipcover',
  'uvindex',
  'solarradiation',
  'solarenergy',
];
