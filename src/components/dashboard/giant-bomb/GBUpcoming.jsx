import React from 'react';
import { Get } from 'react-axios';
import moment from 'moment';
import { CORS_ANYWHERE_URL } from '../../../resources/config/api';
import List from '../../base/list/List';

export default function GBUpcoming() {
  return (
    <Get
      url={`${CORS_ANYWHERE_URL}https://www.giantbomb.com/upcoming_json`}
    >
      {(error, response, isLoading) => {
        if (error) {
          return null;
        }
        if (isLoading) {
          return (<List label="Giant bomb upcoming" loading limitTo={1} />);
        }
        if (response !== null) {
          const upcomingVideos = response.data.upcoming;

          if (!upcomingVideos) {
            return null;
          }

          return (
            <div>
              <List
                label="Giant Bomb upcoming"
                items={upcomingVideos.map(video => (
                  {
                    title: video.title,
                    subtitle: moment(video.date).fromNow(),
                    imageUrl: `https://${video.image}`,
                    url: 'https://www.giantbomb.com',
                  }
                ))}
              />
            </div>
          );
        }
        return null;
      }}
    </Get>
  );
}
