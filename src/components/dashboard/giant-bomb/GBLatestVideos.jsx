import React from 'react';
import moment from 'moment';

import { API_URL, API_KEY } from '../../../resources/config/giant-bomb';
import FetchWithInterval from '../../base/list/FetchWithInterval';
import List from '../../base/list/List';

const LABEL = 'Lates Giant Bomb Videos';

export default function GBLatestVideos() {
  return (
    <FetchWithInterval
      url={`${API_URL}videos`}
      params={{
        field_list: 'name,id,image,publish_date,site_detail_url',
        api_key: API_KEY,
        format: 'json',
      }}
      fetchInterval={1000 * 60 * 10}
    >
      {(response, loading, error) => {
        if (error) {
          return null;
        }
        if (loading) {
          return (<List loading label={LABEL} />);
        }
        if (response !== null) {
          const videos = response.data.results;
          return (
            <List
              label={LABEL}
              items={videos.map(
                ({
                  /* eslint-disable camelcase */
                  name, publish_date, image, site_detail_url,
                }) => ({
                  title: name,
                  subtitle: moment(publish_date).fromNow(),
                  url: site_detail_url,
                  imageUrl: image.medium_url,
                }),
              )}
            />
          );
        }
        return null;
      }}
    </FetchWithInterval>
  );
}
