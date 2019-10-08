import React from 'react';
import moment from 'moment';

import FetchWithInterval from '../../base/list/FetchWithInterval';
import List from '../../base/list/List';

const LABEL = 'Upcoming Holidays';
const N_ITEMS = 7;
const FETCH_INTERVAL = 1000 * 60 * 60 * 2;
const URL = `https://date.nager.at/api/v2/publicholidays/${moment().year()}/SE`;
const TRANSFORM_DATA = data => data.filter(
  holiday => moment(holiday.date) > moment(),
);
const TRANSFORM_ITEM = item => ({
  title: item.localName,
  subtitle: moment(item.date).calendar(),
});

export default function Holidays() {
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
          const holidays = TRANSFORM_DATA(response.data);

          return (
            <List
              label={LABEL}
              noImages
              limitTo={N_ITEMS}
              items={holidays.map(holiday => TRANSFORM_ITEM(holiday))}
            />
          );
        }

        return null;
      }}
    </FetchWithInterval>
  );
}
