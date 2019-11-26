import React from 'react';
import PropTypes from 'prop-types';

import List from './List';
import FetchWithInterval from './FetchWithInterval';

export default function ListWithFetch({
  url, label, params, fetchInterval, nItemsDisplay,
  noImages, nItemsTotal, transformResponse, transformItem, mocked,
  firstItemSubtitleOnImage,
}) {
  if (mocked) {
    return (
      <List
        label={label}
        noImages={noImages}
        limitTo={nItemsDisplay}
        firstItemSubtitleOnImage={firstItemSubtitleOnImage}
        items={transformResponse(mocked)
          .map(mockedItem => transformItem(mockedItem))
          .slice(0, nItemsTotal)}
      />
    );
  }
  return (
    <FetchWithInterval
      url={url}
      params={params}
      fetchInterval={fetchInterval}
    >
      {(response, loading, error) => {
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
          if (typeof response.data === 'string'
          && response.data.includes('<!DOCTYPE HTML')) {
            return null;
          }
          const items = transformResponse(response);
          if (!items || !items.length) {
            return null;
          }
          return (
            <List
              label={label}
              noImages={noImages}
              limitTo={nItemsDisplay}
              firstItemSubtitleOnImage={firstItemSubtitleOnImage}
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
  firstItemSubtitleOnImage: PropTypes.bool,
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
  firstItemSubtitleOnImage: false,
};
