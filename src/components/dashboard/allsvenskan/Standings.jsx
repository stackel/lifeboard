import React from 'react';

import FetchWithInterval from '../../base/list/FetchWithInterval';
import List from '../../base/list/List';

const LABEL = 'Allsvenskans tabell';
const URL = 'https://allsvenskan-api.herokuapp.com/as';
const FETCH_INTERVAL = 1000 * 60 * 10;
const N_ITEMS = 7;
const TRANSFORM_ITEM = item => ({
  title: `${item.position}. ${item.team}`,
  subtitle: `${item.points} poäng - ${item.round} spelade`,
});

export default function Standings() {
  return (
    <FetchWithInterval
      url={URL}
      fetchInterval={FETCH_INTERVAL}
    >
      {(response, loading, error) => {
        if (loading) {
          return (
            <List
              label={LABEL}
              noImages
              limitTo={N_ITEMS}
              loading
            />
          );
        }

        if (error) {
          return null;
        }

        if (response != null) {
          const data = JSON.parse(response.data);
          return (
            <List
              label={LABEL}
              noImages
              limitTo={N_ITEMS}
              items={
                data.result.item.map(item => TRANSFORM_ITEM(item))}
            />
          );
        }

        return null;
      }}
    </FetchWithInterval>
  );
}
