import React from 'react';
import PropTypes from 'prop-types';
import { Get } from 'react-axios';
import Carousel from 'nuka-carousel';
import jsonpAdapter from 'axios-jsonp';
import axios from 'axios';

import { API_KEY, API_URL } from '../../../resources/config/giant-bomb';
import GameRelease from './GameRelease';

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
        filter: 'expected_release_year:2019,expected_release_month:4',
        sort: 'expected_release_month:asc',
      }}
    >
      {(error, response, isLoading) => {
        if (error) {
          return null;
        }

        if (isLoading || forceLoading) {
          return (<div className="w-100 bg-near-white h4" />);
        }

        if (response !== null) {
          const games = response.data.results
            .filter(game => game.expected_release_month !== null
              && game.expected_release_day !== null)
            .sort((a, b) => a.expected_release_day - b.expected_release_day);

          return (
            <div>
              <h2 className="sans-serif f4 mb2"> Game releases in april</h2>
              <Carousel
                dragging
                slidesToShow={5}
                swiping
                heightMode="max"
                renderBottomCenterControls={() => null}
                renderCenterLeftControls={() => (
                  null
                )}
                renderCenterRightControls={() => (
                  null
                )}
              >
                {
                games.map(game => (
                  <GameRelease key={game.id} game={game} />
                ))
              }
              </Carousel>
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
