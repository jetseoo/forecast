import { NAMES_MAPS, convertWindDir } from '../../API';
import PropTypes from 'prop-types';

import { useContext } from 'react';
import { DataContext } from '../DataContextProvider';

import './DetailsCard.css';

export const DetailsCard = ({ heading, blockId }) => {
  const data = useContext(DataContext);
  const today = data.data.days[0];

  return (
    <div className="details-content">
      <h3 className="details-heading">{heading}</h3>

      {NAMES_MAPS.map((obj, idx) => {
        if (idx !== blockId - 1) return '';
        // NAMES_MAPS array contains objects with weather details data.
        // blockId specifies which object is going to be taken from this array
        // otherwise each details block would contain all the properties and be the same

        return Object.entries(obj).map(([prop, name]) => {
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

DetailsCard.propTypes = {
  heading: PropTypes.string,
  blockId: PropTypes.number,
};
