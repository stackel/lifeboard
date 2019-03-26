import React from 'react';
import { Get } from 'react-axios';
import jsonpAdapter from 'axios-jsonp';
import axios from 'axios';
import moment from 'moment';
import Carousel from 'nuka-carousel';

import { GB_API_URL } from '../../../resources/config/api';
import { GB_API_KEY } from '../../../resources/config/keys';

export default function GameReleases() {
  const axiosInstance = axios.create({
    adapter: jsonpAdapter,
    callbackParamName: 'json_callback',
  });

  return (
    <Get
      instance={axiosInstance}
      url={`${GB_API_URL}games`}
      adapter={jsonpAdapter}
      params={{
        api_key: GB_API_KEY,
        format: 'jsonp',
        filter: 'expected_release_year:2019,expected_release_month:4',
        sort: 'expected_release_month:asc',
      }}
    >
      {(error, response, isLoading) => {
        if (error) {
          return (
            <div>
              {error.message}
            </div>
          );
        }
        if (isLoading) {
          return (<div>Loading...</div>);
        }
        if (response !== null) {
          const games = response.data.results
            .filter(game => game.expected_release_month
               !== null && game.expected_release_day !== null)
            .sort((a, b) => a.expected_release_day - b.expected_release_day);
          return (
            <div>
              <h2 className="sans-serif f4 mb2"> Game releases in april</h2>
              <Carousel
                dragging
                slidesToShow={5}
                swiping
                renderBottomCenterControls={() => null}
              >
                {
                games.map(game => (
                  <div key={game.id} className="pr3">
                    <img className="br3" src={game.image.screen_url} alt="box art" />
                    <span className="db sans-serif f5 b mt2">{game.name}</span>
                    <span className="db sans-serif f6 darkGray mt2">
                      {'Releasing '}
                      {moment(
                        [
                          game.expected_release_year,
                          game.expected_release_month - 1,
                          game.expected_release_day,
                        ],
                      ).fromNow()}
                    </span>

                  </div>
                ))
              }
              </Carousel>
            </div>
          );
        }
        return (<div>Loading...</div>);
      }
    }
    </Get>
  );
}
