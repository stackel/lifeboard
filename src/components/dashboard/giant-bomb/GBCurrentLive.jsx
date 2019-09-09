import React from 'react';
import { Get } from 'react-axios';
import { CORS_ANYWHERE_URL } from '../../../resources/config/api';
import { API_URL, API_KEY } from '../../../resources/config/giant-bomb';
import List from '../../base/list/List';

export default function CurrentLive() {
  return (
    <Get
      url={`${CORS_ANYWHERE_URL}${API_URL}chats`}
      params={{
        api_key: API_KEY,
        format: 'json',
      }}
    >
      {(error, response, isLoading) => {
        if (error) {
          return null;
        }
        if (isLoading) {
          return (<List label="Giant bomb live" loading limitTo={1} />);
        }
        if (response !== null) {
          const videos = response.data.results;

          if (!videos) {
            return null;
          }

          return (
            <div>
              <List
                label="Giant Bomb live"
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
    </Get>
  );
}
