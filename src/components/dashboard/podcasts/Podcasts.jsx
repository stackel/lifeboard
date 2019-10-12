import React from 'react';
import moment from 'moment';
import xmlParser from 'fast-xml-parser';

import List from '../../base/list/List';
import FetchWithInterval from '../../base/list/FetchWithInterval';

const LABEL = 'Podcasts';
const URL = 'https://feed.rssunify.com/5da1b118c13c4/rss.xml';
const FETCH_INTERVAL = 1000 * 60 * 15;
const N_ITEMS = 3;
const TRANSFORM_RESPONSE = response => xmlParser
  .parse(response.data, { ignoreAttributes: false }).rss.channel.item;
const TRANSFORM_ITEM = item => ({
  title: item.title,
  subtitle: moment(item.pubDate).calendar(null, {
    lastDay: '[Yesterday]',
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    lastWeek: '[last] dddd',
    nextWeek: 'dddd',
    sameElse: 'L',
  }),
  url: item.link,
  imageUrl: item['itunes:image']['@_href'],
});

export default function Podcasts() {
  return (
    <FetchWithInterval
      url={URL}
      fetchInterval={FETCH_INTERVAL}
    >
      {(response, error, loading) => {
        if (loading) {
          return (
            <List
              label={LABEL}
              loading
            />
          );
        }

        if (error) {
          return null;
        }

        if (response) {
          const items = TRANSFORM_RESPONSE(response);
          return (
            <List
              label={LABEL}
              limitTo={N_ITEMS}
              items={items.map(item => TRANSFORM_ITEM(item)).slice(0, 10)}
            />
          );
        }

        return null;
      }}
    </FetchWithInterval>
  );
}
