import React from 'react';
import moment from 'moment';

import { API_URL, API_KEY } from './config';
import FetchWithInterval from '../../base/list/FetchWithInterval';
import List from '../../base/list/List';

const LABEL = 'Latest Giant Bomb Videos';
const FETCH_INTERVAL = 1000 * 60 * 10;
const TRANSFORM_ITEM = item => ({
  title: item.name,
  subtitle: moment(item.publish_date)
    .add(9, 'hours').fromNow(),
  url: item.site_detail_url,
  imageUrl: item.image.medium_url,
});

export default function GBLatestVideos() {
  return (
    <FetchWithInterval
      url={`${API_URL}videos`}
      params={{
        field_list: 'name,id,image,publish_date,site_detail_url',
        api_key: API_KEY,
        format: 'json',
      }}
      fetchInterval={FETCH_INTERVAL}
    >
      {(response, loading, error) => {
        if (error) {
          return null;
        }

        if (loading) {
          return (
            <List
              loading
              label={LABEL}
            />
          );
        }

        if (response !== null) {
          const videos = response.data.results;

          if (!videos) {
            return null;
          }

          return (
            <List
              label={LABEL}
              items={videos.map(video => TRANSFORM_ITEM(video))}
            />
          );
        }
        return null;
      }}
    </FetchWithInterval>
  );
}
