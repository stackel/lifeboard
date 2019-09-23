import React from 'react';

import { API_URL, API_KEY } from '../../../resources/config/giant-bomb';
import FetchWithInterval from '../../base/list/FetchWithInterval';
import List from '../../base/list/List';

const LABEL = ' Giant Bomb Live';

export default function CurrentLive() {
  return (
    <FetchWithInterval
      url={`${API_URL}chats`}
      corsAnywhere
      params={{
        api_key: API_KEY,
        format: 'json',
      }}
    >
      {(response, loading, error) => {
        if (error) {
          return null;
        }
        if (loading) {
          return (<List label={LABEL} loading limitTo={1} />);
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
                items={videos.map(video => (
                  video.channel_name === 'giantbomb8' && video.history
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
                    }
                )).reverse()}
              />
            </div>
          );
        }
        return null;
      }}
    </FetchWithInterval>
  );
}
