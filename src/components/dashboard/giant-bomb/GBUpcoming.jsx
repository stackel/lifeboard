import React from 'react';
import moment from 'moment';

import FetchWithInterval from '../../base/list/FetchWithInterval';
import List from '../../base/list/List';

const LABEL = 'Giant Bomb Upcoming';

export default function GBUpcoming() {
  return (
    <FetchWithInterval
      url="https://www.giantbomb.com/upcoming_json"
      fetchInterval={1000 * 60 * 5}
    >
      {(response, loading, error) => {
        if (loading || error) {
          return (
            <List
              label={LABEL}
              loading
              limitTo={1}
            />
          );
        }
        if (response !== null) {
          const upcomingVideos = response.data.upcoming;

          if (!upcomingVideos) {
            return null;
          }

          return (
            <div>
              <List
                label={LABEL}
                items={upcomingVideos.map(video => (
                  {
                    title: video.title,
                    subtitle: moment(video.date)
                      .add(9, 'hours')
                      .calendar(null, {
                        lastDay: '[Yesterday at] HH:mm',
                        sameDay: '[Today at] HH:mm',
                        nextDay: '[Tomorrow at] HH:mm',
                        lastWeek: '[last] dddd [at] HH:mm',
                        nextWeek: 'dddd [at] HH:mm',
                        sameElse: 'L',
                      }),
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
