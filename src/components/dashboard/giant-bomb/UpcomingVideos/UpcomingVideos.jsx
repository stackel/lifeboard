import React from 'react';
import moment from 'moment';

import ListWithFetch from '../../../base/list/ListWithFetch';

/* eslint-disable react/prop-types */
export default function GBUpcoming({ mocked }) {
  return (
    <ListWithFetch
      mocked={mocked}
      label="Giant Bomb Upcoming"
      url="https://www.giantbomb.com/upcoming_json"
      fetchInterval={1000 * 60 * 5}
      firstItemSubtitleOnImage
      transformResponse={response => (response.data.liveNow
        ? [response.data.liveNow, ...response.data.upcoming]
        : response.data.upcoming)}
      transformItem={item => (
        {
          title: item.title,
          subtitle: item.date ? moment(item.date)
            .add(9, 'hours')
            .calendar() : <><span className="live-pulse" />
              <span className="ml2">Live</span></>,
          imageUrl: `https://${item.image}`,
          url: 'https://www.giantbomb.com',
        }
      )}
    />
  );
}
