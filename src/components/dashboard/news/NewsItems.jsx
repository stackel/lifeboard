import React from 'react';
import PropTypes from 'prop-types';

import NewsItem from './NewsItem';

export default function NewsItems({ newsItems }) {
  return (
    <div>
      {
      newsItems.map((newsItem, index) => (
        <NewsItem
          key={newsItem.title}
          newsItem={newsItem}
          showImage={index === 0}

        />
      ))
    }
    </div>
  );
}

NewsItems.propTypes = {
  newsItems: PropTypes.arrayOf(NewsItem.propTypes.newsItem).isRequired,
};
