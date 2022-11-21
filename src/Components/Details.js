import Card from './UI/Card';
import DetailsCard from './DetailsCard';

import './Details.css';

export const Details = ({ data }) => {
  return (
    <div className="secondary-left">
      <Card className="details">
        <DetailsCard
          data={data}
          heading="Details"
          detailOne={'humidity'}
          detailTwo={'pressure'}
          detailThree={'visibility'}
        />
      </Card>

      <Card className="details">
        <DetailsCard
          data={data}
          heading="Wind"
          detailOne={'windspeed'}
          detailTwo={'windgust'}
          detailThree={'winddir'}
        />
      </Card>

      <Card className="details">
        <DetailsCard
          data={data}
          heading={data.days[0].preciptype ? data.days[0].preciptype : 'No precipitation'}
          detailOne={'precip'}
          detailTwo={'precipprob'}
          detailThree={'precipcover'}
        />
      </Card>

      <Card className="details">
        <DetailsCard
          data={data}
          heading="Sun"
          detailOne={'uvindex'}
          detailTwo={'solarradiation'}
          detailThree={'solarenergy'}
        />
      </Card>
    </div>
  );
};

export default Details;
