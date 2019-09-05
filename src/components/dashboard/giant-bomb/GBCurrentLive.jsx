import React from 'react';
import { Get } from 'react-axios';
import jsonpAdapter from 'axios-jsonp';
import axios from 'axios';

import { API_URL, API_KEY } from '../../../resources/config/giant-bomb';
import List from '../../base/list/List';

export default function CurrentLive() {
  const axiosInstance = axios.create({
    adapter: jsonpAdapter,
    callbackParamName: 'callback',
  });

  return (
    <Get
      instance={axiosInstance}
      url={`${API_URL}video/current-live`}
      adapter={jsonpAdapter}
      params={{
        format: 'jsonp',
        api_key: API_KEY,
      }}
    >
      {(error, response, isLoading) => {
        if (error) {
          return null;
        }
        if (isLoading) {
          return (<List loading limitTo={1} />);
        }
        if (response !== null) {
          const { video } = response.data;
          if (!video) {
            return null;
          }
          return (
            <div>
              <List items={[{
                title: 'Giant Bomb is Live!',
                subtitle: video.title,
                imageUrl: `https://${video.image}`,
                url: 'https://www.giantbomb.com/chat',
              }]}
              />
            </div>
          );
        }
        return null;
      }}
    </Get>
  );
}
