import React from 'react';
import PropTypes from 'prop-types';

export default function ChromecastDevice({ device }) {
  if (!device.status.status) {
    return null;
  }
  return (
    <div className="dib">
      <img className="v-mid w5" src={device.status.image} alt="album art" />
      <div className="dib pl4">
        <span className="sans-serif f4 b mb1 mt2 db">{device.status.title}</span>
        <span className="sans-serif f5 dark-gray fw4">{device.status.subtitle}</span>
      </div>
    </div>
  );
}

ChromecastDevice.propTypes = {
  device: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      image: PropTypes.string,
      status: PropTypes.string,
    }),
  }).isRequired,
};
