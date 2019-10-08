import React from 'react';
import moment from 'moment';

import FetchWithInterval from '../../base/list/FetchWithInterval';
import List from '../../base/list/List';

const LABEL = 'Giant Bomb Upcoming';
const URL = 'https://www.giantbomb.com/upcoming_json';
const FETCH_INTERVAL = 1000 * 60 * 5;
const TRANSFORM_ITEM = item => (
  {
    title: item.title,
    subtitle: moment(item.date)
      .add(9, 'hours')
      .calendar(null, {
        lastDay: '[Yesterday at] HH:mm',
        sameDay: '[Today at] HH:mm',
        nextDay: '[Tomorrow at] HH:mm',
        lastWeek: '[last] dddd [at] HH:mm',
        nextWeek: 'dddd [at] HH:mm',
        sameElse: 'L',
      }),
    imageUrl: `https://${item.image}`,
    url: 'https://www.giantbomb.com',
  }
);

export default function GBUpcoming() {
  return (
    <FetchWithInterval
      url={URL}
      fetchInterval={FETCH_INTERVAL}
    >
      {(response, loading, error) => {
        if (loading || error) {
          return (
            <List
              label={LABEL}
              loading
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
                items={upcomingVideos.map(video => TRANSFORM_ITEM(video))}
              />
            </div>
          );
        }
        return null;
      }}
    </FetchWithInterval>
  );
}
