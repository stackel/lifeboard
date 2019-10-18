import React from 'react';

import ListWithFetch from '../../base/list/ListWithFetch';

/* eslint-disable react/prop-types */
export default function Standings({ mocked }) {
  return (
    <ListWithFetch
      mocked={mocked}
      label="Allsvenskans tabell"
      url="https://allsvenskan-api.herokuapp.com/as"
      fetchInterval={1000 * 60 * 10}
      nItemsDisplay={7}
      noImages
      transformResponse={response => JSON.parse(response.data).result.item}
      transformItem={item => ({
        title: `${item.position}. ${item.team}`,
        subtitle: `${item.points} poäng - ${item.round} spelade`,
      })}
    />
  );
}
