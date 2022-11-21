import './DetailsCard.css';

const DetailsCard = (props) => {
  const today = props.data.days[0];

  const getCorrectName = (incomeData) => {
    switch (incomeData) {
      case 'windspeed':
        return 'speed';

      case 'windgust':
        return 'gust';

      case 'winddir':
        return 'direction';

      case 'precip':
        return 'precipitation';

      case 'precipprob':
        return 'chance';

      case 'precipcover':
        return 'cover';

      case 'uvindex':
        return 'UV-index';

      case 'solarradiation':
        return 'radiation';

      case 'solarenergy':
        return 'solar energy';

      default:
        return incomeData;
    }
  };

  const convertWindDir = (deg) => {
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

  return (
    <div className="details-content">
      <h3 className="details-heading">{props.heading}</h3>

      <div className="line">
        <p>{getCorrectName(props.detailOne)}</p>
        <p>{today[props.detailOne]}</p>
      </div>

      <div className="line">
        <p>{getCorrectName(props.detailTwo)}</p>
        <p>{today[props.detailTwo]}</p>
      </div>

      <div className="line">
        <p>{getCorrectName(props.detailThree)}</p>
        <p>
          {props.detailThree === 'winddir'
            ? convertWindDir(today[props.detailThree])
            : today[props.detailThree]}
        </p>
      </div>
    </div>
  );
};

export default DetailsCard;
