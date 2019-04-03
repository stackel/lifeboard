import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function Time({ time }) {
  return (
    <span className="sans-serif f1 b">
      {time.format('HH:mm')}
      <span className="f3 fw4 db">
        {time.format('MMMM Do')}
      </span>
    </span>
  );
}

Time.propTypes = {
  time: PropTypes.instanceOf(moment).isRequired,
};
