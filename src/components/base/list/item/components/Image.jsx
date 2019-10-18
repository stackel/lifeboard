import React from 'react';
import PropTypes from 'prop-types';

export default function Image({
  url, alt, loading, show, textOverlay,
}) {
  if (!show) {
    return null;
  }

  if (loading) {
    return <div className="h-12-rem bg-dark-gray br2" />;
  }

  const img = (
    <img
      className="h-12-rem contain of-c w-100 br2"
      src={url}
      alt={alt}
    />
  );

  if (textOverlay) {
    return (
      <div className="relative">
        {img}
        <span className="darken-bottom db w-100 absolute bottom-0 left-0 pv2 sans-serif white f3 b">
          {textOverlay}
        </span>
      </div>
    );
  }

  return img;
}

Image.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  show: PropTypes.bool,
  textOverlay: PropTypes.string,
};

Image.defaultProps = {
  url: null,
  loading: false,
  show: true,
  textOverlay: null,
};
