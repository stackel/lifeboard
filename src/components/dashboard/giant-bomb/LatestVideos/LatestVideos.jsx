import React from 'react';
import moment from 'moment';

import { API_URL, API_KEY } from '../config';
import ListWithFetch from '../../../base/list/ListWithFetch';

/* eslint-disable react/prop-types */
export default function GBLatestVideos({ mocked }) {
  return (
    <ListWithFetch
      mocked={mocked}
      label="Latest Giant Bomb Videos"
      url={`${API_URL}videos`}
      params={{
        field_list: 'name,id,image,publish_date,site_detail_url',
        api_key: API_KEY,
        format: 'json',
      }}
      fetchInterval={1000 * 60 * 10}
      transformResponse={response => response.data.results}
      transformItem={item => ({
        title: item.name,
        subtitle: moment(item.publish_date)
          .add(9, 'hours').fromNow(),
        url: item.site_detail_url,
        imageUrl: item.image.medium_url,
      })}
    />
  );
}
