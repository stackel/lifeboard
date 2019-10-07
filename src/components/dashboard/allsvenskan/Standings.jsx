import React from 'react';

import FetchWithInterval from '../../base/list/FetchWithInterval';
import List from '../../base/list/List';

const LABEL = 'Allsvenskans tabell';
export default function Standings() {
  return (
    <FetchWithInterval
      url="https://allsvenskan-api.herokuapp.com/as"
      fetchInterval={1000 * 60 * 10}
    >
      {(response, loading, error) => {
        if (loading) {
          return <p> loading </p>;
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
              limitTo={7}
              items={data.result.item.map(item => ({
                title: `${item.position}. ${item.team}`,
                subtitle: `${item.points} poäng - ${item.round} spelade`,
              }))}
            />
          );
        }


        return null;
      }}
    </FetchWithInterval>
  );
}
