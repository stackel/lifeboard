import React from 'react';
import moment from 'moment';

import FetchWithInterval from '../../base/list/FetchWithInterval';
import List from '../../base/list/List';

const LABEL = 'Upcoming Holidays';

export default function Holidays() {
  return (
    <FetchWithInterval
      url={`https://date.nager.at/api/v2/publicholidays/${moment().year()}/SE`}
      fetchInterval={1000 * 60 * 60 * 2}

    >
      {(response, error, loading) => {
        if (loading) {
          return (
            <List
              label={LABEL}
              limitTo={1}
              loading
            />
          );
        }

        if (error) {
          return null;
        }

        if (response) {
          const holidays = response.data.filter(holiday => moment(holiday.date) > moment());
          return (
            <List
              label={LABEL}
              noImages
              limitTo={7}
              items={holidays.map(holiday => ({
                title: holiday.localName,
                subtitle: moment(holiday.date).calendar(),
              }))}
            />
          );
        }

        return null;
      }}
    </FetchWithInterval>
  );
}
