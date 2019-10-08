import React from 'react';

import List from '../../base/list/List';
import FetchWithInterval from '../../base/list/FetchWithInterval';

const LABEL = 'Recipes';
const URL = `http://www.recipepuppy.com/api/?p=
${Math.floor(Math.random() * 100)}`;
const FETCH_INTERVAL = 1000 * 60 * 30;
const N_ITEMS = 7;
const TRANSFORM_ITEM = item => ({
  title: item.title,
  subtitle: item.ingredients,
  url: item.href,
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
          const recipes = response.data.results;

          return (
            <List
              label={LABEL}
              noImages
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
