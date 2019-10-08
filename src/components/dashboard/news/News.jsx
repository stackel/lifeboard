import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import List from '../../base/list/List';
import FetchWithInterval from '../../base/list/FetchWithInterval';

const FETCH_INTERVAL = 1000 * 60 * 1;
const URL = 'https://newsapi.org/v2/top-headlines';
const API_KEY = '8fcc0e50139642efab56a0fcd657cb23';
const TRANSFORM_ITEM = item => ({
  imageUrl: item.urlToImage,
  title: item.title,
  subtitle: moment(item.publishedAt).fromNow(),
  url: item.url,
});

export default function News({ filter, label }) {
  return (
    <FetchWithInterval
      url={URL}
      fetchInterval={FETCH_INTERVAL}
      params={{
        [filter.type]: filter.value,
        apiKey: API_KEY,
      }}
    >
      {(response, error, loading) => {
        if (loading) {
          return (
            <List
              label={label}
              loading
            />
          );
        }

        if (error) {
          return null;
        }

        if (response) {
          const { articles } = response.data;

          return (
            <List
              label={label}
              items={articles.map(article => TRANSFORM_ITEM(article))}
            />
          );
        }

        return null;
      }}
    </FetchWithInterval>
  );
}

News.propTypes = {
  filter: PropTypes.shape({
    type: PropTypes.string,
    value: PropTypes.string,
  }),
  label: PropTypes.string,
};

News.defaultProps = {
  label: '',
  filter: {
    type: 'country',
    value: 'se',
  },
};
