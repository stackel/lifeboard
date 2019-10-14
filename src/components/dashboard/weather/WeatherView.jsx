import React from 'react';
import PropTypes from 'prop-types';

export default function Weather({ weather }) {
  return (
    <div className="tc">
      <span className="near-white sans-serif f1 b db">
        {Math.round(weather.temperature)}
        &deg;
      </span>
      <span className="near-white sans-serif f3 db">
        {weather.description}
      </span>
    </div>
  );
}

Weather.propTypes = {
  weather: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
