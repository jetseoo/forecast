import './DetailsCard.css';
import { NAMES_MAPS, convertWindDir } from '../API';

import { useContext } from 'react';
import { DataContext } from './DataContextProvider';

const DetailsCard = ({ heading, blockId }) => {
  const data = useContext(DataContext);
  const today = data.data.days[0];

  return (
    <div className="details-content">
      <h3 className="details-heading semi-bold">{heading}</h3>

      {NAMES_MAPS.map((obj, idx) => {
        if (idx !== +blockId - 1) return '';

        const pairs = Object.entries(obj);

        return pairs.map((pair) => {
          const [prop, name] = pair;
          const value = name === 'direction' ? convertWindDir(today[prop]) : today[prop];

          return (
            <div className="line" key={name}>
              <p>{name}</p>
              <p>{value}</p>
            </div>
          );
        });
      })}
    </div>
  );
};

export default DetailsCard;
