import React from 'react';
import PropTypes from 'prop-types';

import Departure from './Departure';

export default function Departures({ departures, stop }) {
  if (!departures || !departures.length) {
    return null;
  }

  return (
    <div className="h5">
      <h2 className="sans-serif f4 mb3">
        {`Avgångar ${stop.label}`}
      </h2>

      {
      departures.map(departure => (
        <div
          key={departure.rtTime + departure.transportNumber}
          className="mb3 w-50 fl"
        >
          <Departure
            departure={departure}
          />
        </div>
      ))
    }
    </div>
  );
}

Departures.propTypes = {
  departures: PropTypes.arrayOf(Departure.propTypes.departure).isRequired,
  stop: PropTypes.shape({
    label: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};
