import React from 'react';
import PropTypes from 'prop-types';
import { Get } from 'react-axios';
import jsonpAdapter from 'axios-jsonp';
import axios from 'axios';
import moment from 'moment';

import List from '../../base/list/List';

import { API_KEY, API_URL } from '../../../resources/config/giant-bomb';

export default function GameReleases({ forceLoading }) {
  const axiosInstance = axios.create({
    adapter: jsonpAdapter,
    callbackParamName: 'json_callback',
  });
  return (
    <Get
      instance={axiosInstance}
      url={`${API_URL}games`}
      adapter={jsonpAdapter}
      params={{
        api_key: API_KEY,
        format: 'jsonp',
        filter: `expected_release_year:${moment().year()},expected_release_month:${moment().month() + 1}`,
        sort: 'expected_release_month:asc',
      }}
    >
      {(error, response, isLoading) => {
        if (error) {
          return null;
        }

        if (isLoading || forceLoading) {
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
              && game.expected_release_day > moment().day() + 1)
            .sort((a, b) => a.expected_release_day - b.expected_release_day);

          return (
            <div>
              {
                <List
                  label="Game releases"
                  items={games.map(game => ({
                    title: game.name,
                    imageUrl: game.image.medium_url,
                    url: game.api_detail_url,
                    subtitle: moment(
                      [
                        game.expected_release_year,
                        game.expected_release_month - 1,
                        game.expected_release_day,
                      ],
                    ).fromNow(),
                  }))}
                />
              }
            </div>
          );
        }
        return null;
      }
    }
    </Get>
  );
}

GameReleases.propTypes = {
  forceLoading: PropTypes.bool,
};

GameReleases.defaultProps = {
  forceLoading: false,
};
