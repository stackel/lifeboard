import React from 'react';
import moment from 'moment';

import FetchWithInterval from '../../base/list/FetchWithInterval';
import List from '../../base/list/List';

const LABEL = 'Giant Bomb Upcoming';

export default function GBUpcoming() {
  return (
    <FetchWithInterval
      url="https://www.giantbomb.com/upcoming_json"
      corsAnywhere
      fetchInterval={1000 * 60 * 5}
    >
      {(error, response, loading) => {
        if (loading || error) {
          return (<List label={LABEL} loading limitTo={1} />);
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
    </FetchWithInterval>
  );
}
