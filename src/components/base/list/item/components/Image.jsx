import React from 'react';
import PropTypes from 'prop-types';

export default function Image({
  url, alt, loading, show,
}) {
  if (!show) {
    return null;
  }
  if (loading) {
    return <div className="h5 bg-near-white" />;
  }
  return (
    <img
      className="h5 contain of-c"
      src={url}
      alt={alt}
    />
  );
}

Image.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  show: PropTypes.bool,
};

Image.defaultProps = {
  loading: false,
  show: true,
};
