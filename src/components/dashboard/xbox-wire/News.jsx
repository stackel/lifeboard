import React from 'react';
import moment from 'moment';
import xmlParser from 'fast-xml-parser';

import ListWithFetch from '../../base/list/ListWithFetch';

export default function News() {
  return (
    <ListWithFetch
      label="Xbox News"
      url="https://news.xbox.com/en-us/feed/"
      fetchInterval={1000 * 60 * 15}
      transformResponse={response => xmlParser.parse(response.data,
        { ignoreAttributes: false }).rss.channel.item}
      transformItem={item => ({
        title: item.title,
        subtitle: moment(item.pubDate).calendar(),
        url: item.link,
        imageUrl: item['media:thumbnail']['@_url'],
      })}
    />
  );
}
