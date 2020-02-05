import React from 'react';
import moment from 'moment';

import ListWithFetch from '../../base/list/ListWithFetch';
import { API_KEY, API_URL } from '../giant-bomb/config';

const PLATFORM_IDS = [157, 154];

/* eslint-disable react/prop-types */
export default function GameReleases({ mocked }) {
  return (
    <ListWithFetch
      mocked={mocked}
      label="Game Releases"
      url={`${API_URL}games`}
      params={{
        api_key: API_KEY,
        format: 'json',
        filter: `original_release_date:
        ${moment().format('YYYY-MM-DD')}|
        ${moment()
          .add(7, 'day')
          .format('YYYY-MM-DD')}`,
      }}
      nItemsDisplay={3}
      nItemsTotal={12}
      fetchInterval={1000 * 60 * 10}
      transformResponse={response => response.data.results
        .filter(
          game => game.platforms
              && game.platforms.filter(platform => PLATFORM_IDS.includes(platform.id)),
        )
        .filter(
          game => game.expected_release_month !== null
              && game.expected_release_day !== null
              && game.expected_release_year !== null,
        )
        .map(game => ({
          ...game,
          date: moment([
            game.expected_release_year,
            game.expected_release_month - 1,
            game.expected_release_day,
          ]),
        }))
        .filter(game => game.date > moment().subtract(1, 'days'))
        .sort((a, b) => a.date - b.date)
      }
      transformItem={item => ({
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
      })}
    />
  );
}
