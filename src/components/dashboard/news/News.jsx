import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import ListWithFetch from '../../base/list/ListWithFetch';

/* eslint-disable react/prop-types */
export default function News({ filter, label, mocked }) {
  return (
    <ListWithFetch
      mocked={mocked}
      label={label}
      url="https://newsapi.org/v2/top-headlines"
      fetchInterval={1000 * 60 * 1}
      params={{
        [filter.type]: filter.value,
        apiKey: '8fcc0e50139642efab56a0fcd657cb23',
      }}
      transformResponse={response => response.data.articles}
      transformItem={item => ({
        imageUrl: item.urlToImage,
        title: item.title,
        subtitle: moment(item.publishedAt).fromNow(),
        url: item.url,
      })}
    />
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
