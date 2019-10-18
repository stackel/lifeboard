import React from 'react';
import moment from 'moment';
import xmlParser from 'fast-xml-parser';

import ListWithFetch from '../../base/list/ListWithFetch';

export default function Podcasts() {
  return (
    <ListWithFetch
      label="Podcasts"
      url="https://feed.rssunify.com/5da1b118c13c4/rss.xml"
      fetchInterval={1000 * 60 * 15}
      transformResponse={response => xmlParser.parse(response.data,
        { ignoreAttributes: false }).rss.channel.item}
      transformItem={item => ({
        title: item.title,
        subtitle: moment(item.pubDate).calendar(),
        url: item.link,
        imageUrl: item['itunes:image']['@_href'],
      })}
    />
  );
}
