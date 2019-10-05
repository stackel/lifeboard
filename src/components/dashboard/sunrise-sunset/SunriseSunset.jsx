import React from 'react';
import PropTypes from 'prop-types';

import { getSunrise, getSunset } from 'sunrise-sunset-js';
import moment from 'moment';

export default function SunriseSunset({ lat, lng }) {
  const sunrise = getSunrise(lat, lng);
  const sunset = getSunset(lat, lng);
  return (
    <div className="tc">
      <span className="light-silver sans-serif f3 db mt2 mb1">
      Sunrise
      </span>
      <span className="white sans-serif f2 db b">
        {moment(sunrise).format('HH:mm')}
      </span>
      <span className="light-silver sans-serif f3 db mt2 mb1">
      Sunset
      </span>
      <span className="white sans-serif f2 db b">
        {moment(sunset).format('HH:mm')}
      </span>
    </div>
  );
}
SunriseSunset.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};
