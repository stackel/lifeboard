import React from 'react';

import FetchWithInterval from '../../base/list/FetchWithInterval';
import List from '../../base/list/List';
import { API_URL, API_KEY } from './config';

const LABEL = ' Giant Bomb Live';
const FETCH_INTERVAL = 1000 * 60 * 2;
const TRANSFORM_ITEM = video => (video.channel_name === 'giantbomb8'
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
  });

export default function LiveShows() {
  return (
    <FetchWithInterval
      url={`${API_URL}chats`}
      params={{
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
              label={LABEL}
              loading
            />
          );
        }
        if (response !== null) {
          const videos = response.data.results;

          if (!videos) {
            return null;
          }

          return (
            <div>
              <List
                label={LABEL}
                items={videos.map(
                  video => TRANSFORM_ITEM(video),
                ).reverse()}
              />
            </div>
          );
        }
        return null;
      }}
    </FetchWithInterval>
  );
}
