import React from 'react';

import { API_URL, API_KEY } from './config';
import ListWithFetch from '../../base/list/ListWithFetch';

export default function LiveShows() {
  return (
    <ListWithFetch
      label="Giant Bomb Live"
      url={`${API_URL}chats`}
      params={{
        api_key: API_KEY,
        format: 'json',
      }}
      fetchInterval={1000 * 60 * 2}
      transformResponse={response => response.data.results}
      transformItem={video => (video.channel_name === 'giantbomb8'
      && video.history
        ? {
          title: video.title,
          subtitle: video.history[0].name,
          imageUrl: video.history[0].image.medium_url,
          url: 'https://www.giantbomb.com/infinite/',
        }
        : {
          title: video.title,
          subtitle: video.deck,
          imageUrl: video.image.medium_url,
          url: video.site_detail_url,
        })}

    />
  );
}
