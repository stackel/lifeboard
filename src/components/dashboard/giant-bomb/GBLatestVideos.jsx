import React from 'react';
import PropTypes from 'prop-types';
import { Get } from 'react-axios';
import jsonpAdapter from 'axios-jsonp';
import axios from 'axios';
import Carousel from 'nuka-carousel';

import { GB_API_URL } from '../../../resources/config/api';
import { GB_API_KEY } from '../../../resources/config/keys';
import GBVideoListItem from './GBVideoListItem';

export default function GBLatestVideos({ limit }) {
  const axiosInstance = axios.create({
    adapter: jsonpAdapter,
    callbackParamName: 'json_callback',
  });

  return (
    <Get
      instance={axiosInstance}
      url={`${GB_API_URL}videos`}
      adapter={jsonpAdapter}
      params={{
        limit,
        field_list: 'name,id,image,publish_date,site_detail_url',
        api_key: GB_API_KEY,
        format: 'jsonp',
      }}
    >
      {(error, response, isLoading) => {
        if (error) {
          return (
            <div>
              {error.message}
            </div>
          );
        }
        if (isLoading) {
          return (<div>Loading...</div>);
        }
        if (response !== null) {
          return (
            <div>
              <h2 className="sans-serif f4 mb2"> Latest Giant Bomb Videos</h2>
              <Carousel
                dragging
                slidesToShow={5}
                swiping
                renderBottomCenterControls={() => null}
              >
                {
                response.data.results.map(
                  video => (
                    <div key={video.id} className="pr3">
                      <GBVideoListItem
                        name={video.name}
                        publishedAt={video.publish_date}
                        imageUrl={video.image.medium_url}
                        videoUrl={video.site_detail_url}
                      />
                    </div>
                  ),
                )
              }
              </Carousel>
            </div>
          );
        }
        return (<div>Loading...</div>);
      }}
    </Get>
  );
}

GBLatestVideos.propTypes = {
  limit: PropTypes.number,

};

GBLatestVideos.defaultProps = {
  limit: 5,
};
