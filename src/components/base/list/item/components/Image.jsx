import React from 'react';
import PropTypes from 'prop-types';

export default function Image({
  url, alt, loading, show,
}) {
  if (!show) {
    return null;
  }
  if (loading) {
    return <div className="h5 bg-dark-gray br2" />;
  }
  return (
    <img
      className="h5 contain of-c w-100 br2"
      src={url}
      alt={alt}
    />
  );
}

Image.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  show: PropTypes.bool,
};

Image.defaultProps = {
  url: null,
  loading: false,
  show: true,
};
