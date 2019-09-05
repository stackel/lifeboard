import React from 'react';
import PropTypes from 'prop-types';
import { Get } from 'react-axios';
import jsonpAdapter from 'axios-jsonp';
import axios from 'axios';

import { API_URL, API_KEY } from '../../../resources/config/giant-bomb';
import List from '../../base/list/List';

export default function GBLatestVideos({ limit }) {
  const axiosInstance = axios.create({
    adapter: jsonpAdapter,
    callbackParamName: 'json_callback',
  });

  return (
    <Get
      instance={axiosInstance}
      url={`${API_URL}videos`}
      adapter={jsonpAdapter}
      params={{
        limit,
        field_list: 'name,id,image,publish_date,site_detail_url',
        api_key: API_KEY,
        format: 'jsonp',
      }}
    >
      {(error, response, isLoading) => {
        if (error) {
          return null;
        }
        if (isLoading) {
          return (<List loading label="Latest GB Videos" />);
        }
        if (response !== null) {
          const videos = response.data.results;
          return (
            <List
              label="Latest GB Videos"
              items={videos.map(
                ({
                  /* eslint-disable camelcase */
                  name, publish_date, image, site_detail_url,
                }) => ({
                  title: name,
                  subtitle: publish_date,
                  url: site_detail_url,
                  imageUrl: image.medium_url,
                }),
              )}
            />
          );
        }
        return null;
      }}
    </Get>
  );
}

GBLatestVideos.propTypes = {
  limit: PropTypes.number,
};

GBLatestVideos.defaultProps = {
  limit: 10,
};
