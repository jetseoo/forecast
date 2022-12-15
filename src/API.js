export const getFetchUrl = (location = 'Batumi') => {
  return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=events&key=ALXSB6AVTSV9VTPZ6XRTWBH5E&contentType=json`;
};

export const NAMES_MAPS = [
  { humidity: 'humidity', pressure: 'pressure', visibility: 'visibility' },
  { windspeed: 'speed', windgust: 'gust', winddir: 'direction' },
  { precip: 'precipitation', precipprob: 'chance', precipcover: 'cover' },
  { uvindex: 'UV-index', solarradiation: 'radiation', solarenergy: 'solar energy' },
];

export const convertWindDir = (deg) => {
  switch (true) {
    case deg <= 22.5:
      return 'N';
    case deg <= 67.5:
      return 'NE';
    case deg <= 112.5:
      return 'E';
    case deg <= 157.5:
      return 'SE';
    case deg <= 202.5:
      return 'S';
    case deg <= 247.5:
      return 'SW';
    case deg <= 292.5:
      return 'W';
    case deg <= 337.5:
      return 'NW';
    case deg <= 360:
      return 'N';

    default:
      return 'N/A';
  }
};

export const dayUsedProperties = [
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
