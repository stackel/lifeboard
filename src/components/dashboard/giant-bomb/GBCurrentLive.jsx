import React from 'react';
import { Get } from 'react-axios';
import jsonpAdapter from 'axios-jsonp';
import axios from 'axios';

import { API_URL, API_KEY } from '../../../resources/config/giant-bomb';

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
          return (<div className="w5 bg-near-white h4 mt4" />);
        }
        if (response !== null) {
          const { video } = response.data;
          if (!video) {
            return null;
          }
          return (
            <div>
              <h2 className="sans-serif f4 mb2">
                {'Giant Bomb is live right now!'}
              </h2>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="link dim db pointer w5"
                href="https://giantbom.com/chat"
              >
                <img
                  className="w-100 db br2"
                  src={`https://${video.image}`}
                  alt={`Thumbnail for${video.title}`}
                />
                <div className="pr2 pv2">
                  <h3 className="db sans-serif f5 fw6 black mt2 mb2">
                    {video.title}
                  </h3>
                </div>
              </a>
            </div>
          );
        }
        return null;
      }}
    </Get>
  );
}
