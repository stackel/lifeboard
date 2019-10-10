import React from 'react';
import moment from 'moment';
import xmlParser from 'fast-xml-parser';

import List from '../../base/list/List';
import FetchWithInterval from '../../base/list/FetchWithInterval';


const getFirstImageSource = (s) => {
  const tmp = document.createElement('div');
  tmp.innerHTML = s;
  return tmp.querySelector('img').getAttribute('src');
};

const LABEL = 'Recipes';
const URL = 'https://www.budgetbytes.com/feed/';
const FETCH_INTERVAL = 1000 * 60 * 60 * 2;
const N_ITEMS = 3;
const TRANSFORM_RESPONSE = response => xmlParser
  .parse(response.data).rss.channel.item;
const TRANSFORM_ITEM = item => ({
  title: item.title,
  subtitle: moment(item.pubDate).calendar(),
  url: item.link,
  imageUrl: getFirstImageSource(item['content:encoded']),
});

export default function Recipes() {
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
          const recipes = TRANSFORM_RESPONSE(response);

          return (
            <List
              label={LABEL}
              limitTo={N_ITEMS}
              items={recipes.map(recipe => TRANSFORM_ITEM(recipe))}
            />
          );
        }

        return null;
      }}
    </FetchWithInterval>
  );
}
