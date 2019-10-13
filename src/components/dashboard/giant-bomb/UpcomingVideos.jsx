import React from 'react';
import moment from 'moment';

import ListWithFetch from '../../base/list/ListWithFetch';

export default function GBUpcoming() {
  return (
    <ListWithFetch
      label="Giant Bomb Upcoming"
      url="https://www.giantbomb.com/upcoming_json"
      fetchInterval={1000 * 60 * 5}
      transformResponse={response => response.data.upcoming}
      transformItem={item => (
        {
          title: item.title,
          subtitle: moment(item.date)
            .add(9, 'hours')
            .calendar(),
          imageUrl: `https://${item.image}`,
          url: 'https://www.giantbomb.com',
        }
      )}
    />
  );
}
