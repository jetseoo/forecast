import Card from '../UI/Card';
import DetailsCard from './DetailsCard';

import './Details.css';

export const Details = () => {
  return (
    <div className="secondary-left">
      <Card className="details">
        <DetailsCard heading="Details" blockId={1} />
      </Card>

      <Card className="details">
        <DetailsCard heading="Wind" blockId={2} />
      </Card>

      <Card className="details">
        <DetailsCard heading="Precipitation" blockId={3} />
      </Card>

      <Card className="details">
        <DetailsCard heading="Sun" blockId={4} />
      </Card>
    </div>
  );
};

export default Details;
