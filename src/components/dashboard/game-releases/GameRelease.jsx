import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { GAME_URL } from '../../../resources/config/giant-bomb';

export default function GameRelease({ game }) {
  return (
    <a
      href={`${GAME_URL}${game.guid}`}
      target="_blank"
      rel="noopener noreferrer"
      key={game.id}
      className="pr3 db link dim pointer"
    >
      <img className="br3" src={game.image.screen_url} alt="box art" />
      <span className="db sans-serif f5 b mt2 black">{game.name}</span>
      <span className="db sans-serif f6 darkGray mt2 black">
        {'Releasing '}
        {moment(
          [
            game.expected_release_year,
            game.expected_release_month - 1,
            game.expected_release_day,
          ],
        ).fromNow()}
      </span>

    </a>
  );
}

GameRelease.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number,
    guid: PropTypes.string,
    api_detail_url: PropTypes.string,
    image: PropTypes.shape({
      screen_url: PropTypes.string,
    }),
    expected_release_day: PropTypes.number,
    expected_release_month: PropTypes.number,
    expected_release_year: PropTypes.number,
  }).isRequired,
};
