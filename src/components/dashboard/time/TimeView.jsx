import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function Time({ time }) {
  return (
    <span className="near-white sans-serif f-subheadline b">
      {time.format('HH:mm')}
      <span className="near-white f2 fw4 db">
        {time.format('MMMM Do')}
      </span>
    </span>
  );
}

Time.propTypes = {
  time: PropTypes.instanceOf(moment).isRequired,
};
