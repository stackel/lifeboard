import React from 'react';
import moment from 'moment';

import List from '../../base/list/List';
import FetchWithInterval from '../../base/list/FetchWithInterval';
import { API_KEY, API_URL } from './config';

const FETCH_INTERVAL = 1000 * 60 * 10;
const TRANSFORM_DATA = data => data
  .filter(game => game.expected_release_month !== null
              && game.expected_release_day !== null
              && game.expected_release_year !== null)
  .map(game => ({
    ...game,
    date: moment(
      [
        game.expected_release_year,
        game.expected_release_month - 1,
        game.expected_release_day,
      ],
    ),
  }))
  .filter(game => game.date > moment().subtract(1, 'days'))
  .sort((a, b) => a.date - b.date);

const TRANSFORM_ITEM = item => ({
  title: item.name,
  imageUrl: item.image.medium_url,
  url: item.site_detail_url,
  subtitle: item.date.calendar(null, {
    lastDay: '[Yesterday]',
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    lastWeek: '[last] dddd',
    nextWeek: 'dddd',
    sameElse: 'L',
  }),
});

export default function GameReleases() {
  return (
    <FetchWithInterval
      url={`${API_URL}games`}
      params={{
        api_key: API_KEY,
        format: 'json',
        filter: `original_release_date:
        ${moment().format('YYYY-MM-DD')}|
        ${moment().add(1, 'month').format('YYYY-MM-DD')}`,
      }}
      fetchInterval={FETCH_INTERVAL}
    >
      {(response, loading, error) => {
        if (error) {
          return null;
        }

        if (loading) {
          return (
            <List
              loading
              label="Game releases"
            />
          );
        }

        if (response !== null) {
          const games = TRANSFORM_DATA(response.data.results);

          if (!games) {
            return null;
          }

          return (
            <div>
              {
                <List
                  label="Game releases"
                  items={games.map(game => TRANSFORM_ITEM(game))}
                />
              }
            </div>
          );
        }
        return null;
      }
    }
    </FetchWithInterval>
  );
}
