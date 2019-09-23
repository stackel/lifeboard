import React from 'react';
import moment from 'moment';

import List from '../../base/list/List';
import FetchWithInterval from '../../base/list/FetchWithInterval';

import { API_KEY, API_URL } from '../../../resources/config/giant-bomb';

export default function GameReleases() {
  return (
    <FetchWithInterval
      url={`${API_URL}games`}
      corsAnywhere
      params={{
        api_key: API_KEY,
        format: 'json',
        filter: `expected_release_year:${moment().year()},expected_release_month:${moment().month() + 1}`,
        sort: 'expected_release_month:asc',
      }}
      fetchInterval={1000 * 60 * 10}
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
          const games = response.data.results
            .filter(game => game.expected_release_month !== null
              && game.expected_release_day !== null
              && game.expected_release_day !== null)
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
            .filter(game => game.date > moment()
            && game.date < moment().add(7, 'days'))
            .sort((a, b) => a.date - b.date);

          return (
            <div>
              {
                <List
                  label="Game releases"
                  items={games.map(game => ({
                    title: game.name,
                    imageUrl: game.image.medium_url,
                    url: game.site_detail_url,
                    subtitle: game.date.fromNow(),
                  }))}
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
