import React from 'react';
import PropTypes from 'prop-types';

import List from './List';
import FetchWithInterval from './FetchWithInterval';

export default function ListWithFetch({
  url, label, params, fetchInterval, nItemsDisplay,
  noImages, nItemsTotal, transformResponse, transformItem,
}) {
  return (
    <FetchWithInterval
      url={url}
      params={params}
      fetchInterval={fetchInterval}
    >
      {(response, error, loading) => {
        if (loading) {
          return (
            <List
              label={label}
              noImages={noImages}
              loading
            />
          );
        }

        if (error) {
          return null;
        }

        if (response) {
          const items = transformResponse(response);
          if (!items) {
            return null;
          }
          return (
            <List
              label={label}
              noImages={noImages}
              limitTo={nItemsDisplay}
              items={items
                .map(item => transformItem(item))
                .slice(0, nItemsTotal)}
            />
          );
        }

        return null;
      }}
    </FetchWithInterval>
  );
}

ListWithFetch.propTypes = {
  url: PropTypes.string.isRequired,
  params: PropTypes.string,
  label: PropTypes.string,
  fetchInterval: PropTypes.number,
  nItemsDisplay: PropTypes.number,
  nItemsTotal: PropTypes.number,
  noImages: PropTypes.bool,
  transformResponse: PropTypes.func,
  transformItem: PropTypes.func,
};

ListWithFetch.defaultProps = {
  label: undefined,
  params: {},
  fetchInterval: 1000 * 60 * 10,
  nItemsDisplay: 3,
  nItemsTotal: 20,
  noImages: false,
  transformResponse: response => response,
  transformItem: item => item,
};
