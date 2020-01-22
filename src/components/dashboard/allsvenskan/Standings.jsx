import React from 'react';
import moment from 'moment';

import ListWithFetch from '../../base/list/ListWithFetch';

/* eslint-disable react/prop-types */
export default function Standings({ mocked }) {
  const currentMonth = moment().month();
  const isSeason = currentMonth >= 3 && currentMonth <= 10;
  if (!isSeason) {
    return null;
  }
  return (
    <ListWithFetch
      mocked={mocked}
      label="Allsvenskans tabell"
      url="https://secret-thicket-04067.herokuapp.com/as"
      fetchInterval={1000 * 60 * 10}
      nItemsDisplay={7}
      noImages
      transformResponse={response => response.data.result.item}
      transformItem={item => ({
        title: `${item.position}. ${item.team}`,
        subtitle: `${item.points} poäng - ${item.round} spelade`,
      })}
    />
  );
}
