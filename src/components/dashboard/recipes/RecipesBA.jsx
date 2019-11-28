import React from 'react';
import moment from 'moment';
import xmlParser from 'fast-xml-parser';

import ListWithFetch from '../../base/list/ListWithFetch';

/* const getFirstImageSource = (s) => {
  const tmp = document.createElement('div');
  tmp.innerHTML = s;
  return tmp.querySelector('img').getAttribute('src');
}; */

export default function Recipes() {
  return (
    <ListWithFetch
      label="New Recipes"
      url="https://www.bonappetit.com/feed/latest-recipes/rss"
      fetchInterval={1000 * 60 * 15}
      transformResponse={response => xmlParser
        .parse(response.data, { ignoreAttributes: false }).rss.channel.item
        .filter(item => moment(item.pubDate) > moment().subtract(24, 'hour'))}
      transformItem={item => ({
        title: item.title,
        subtitle: moment(item.pubDate).calendar(),
        url: item.link,
        imageUrl: item['media:thumbnail']['@_url'],
      })}
    />
  );
}
