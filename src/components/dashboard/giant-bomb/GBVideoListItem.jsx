import React from 'react';
import PropTypes from 'prop-types';

export default function GBVideoListItem({ name }) {
  return (
    <div>
      GBVideoListItem
      {name}
    </div>
  );
}

GBVideoListItem.propTypes = {
  name: PropTypes.string.isRequired,
};
