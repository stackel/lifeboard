import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function GBVideoListItem({
  name,
  imageUrl,
  publishedAt,
  videoUrl,
}) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="link dim db pointer"
      href={videoUrl}
    >
      <img
        className="w-100 db"
        src={imageUrl}
        alt={`Thumbnail for${{ name }}`}
      />
      <div className="ph3 pv2">
        <h3 className="db sans-serif f3 fw6 black mt3 mb2">
          {name}
        </h3>
        <span className="db mb2 dark-gray sans-serif f4">
          {moment(publishedAt).fromNow()}
        </span>
      </div>
    </a>
  );
}

GBVideoListItem.propTypes = {
  name: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

GBVideoListItem.defaultProps = {
  imageUrl: '',
};
