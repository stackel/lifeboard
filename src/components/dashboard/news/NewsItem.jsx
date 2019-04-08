import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function NewsItem({
  showImage,
  newsItem:
  {
    title, url, urlToImage, publishedAt,
  },
}) {
  return (
    <a className="link dim" href={url}>
      <div>
        {
          showImage
          && <img className="h4 w-100 of-c" src={urlToImage} alt="news item" />
        }
        <span className="db sans-serif f4 mt3 black">
          {title}
        </span>
        <span className="db dark-gray mt3 f5 sans-serif">
          {moment(publishedAt).fromNow()}
        </span>
      </div>
    </a>
  );
}

NewsItem.propTypes = {
  newsItem: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    urlToImage: PropTypes.string,
    publishedAt: PropTypes.string,
  }).isRequired,
  showImage: PropTypes.bool,
};

NewsItem.defaultProps = {
  showImage: true,
};
