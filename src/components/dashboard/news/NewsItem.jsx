import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function NewsItem({
  newsItem:
  {
    title, url, urlToImage, publishedAt,
  },
}) {
  return (
    <a className="link dim" href={url}>
      <div>
        <img src={urlToImage} alt="news item" />
        <span className="db sans-serif f4 mt3 black">{title}</span>
        <span className="db dark-gray mt3 f5 sans-serif">{moment(publishedAt).fromNow()}</span>
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
};
