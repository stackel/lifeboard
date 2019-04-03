import React from 'react';
import PropTypes from 'prop-types';

export default function Departure({ departure }) {
  if (!departure) {
    return null;
  }
  return (
    <div>
      <span className="db sans-serif f5 b">
        {departure.transportNumber}
      </span>
      <span className="db sans-serif f4">
        {departure.time.slice(0, 5)}
      </span>
    </div>
  );
}

Departure.propTypes = {
  departure: PropTypes.shape({
    name: PropTypes.string,
    rtTime: PropTypes.string,
    transportNumber: PropTypes.string,
  }).isRequired,
};
