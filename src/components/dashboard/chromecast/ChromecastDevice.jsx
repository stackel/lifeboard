import React from 'react';
import PropTypes from 'prop-types';

export default function ChromecastDevice({ device }) {
  if (!device.status.status) {
    return null;
  }
  return (
    <div>
      <img src={device.status.image} alt="album art" />
      <span className="sans-serif f4 db b mb1 mt2">{device.status.title}</span>
      <span className="sans-serif f5 db">{device.status.subtitle}</span>
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
