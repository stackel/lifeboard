import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function GameRelease({ game }) {
  return (
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
  );
}

GameRelease.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.shape({
      screen_url: PropTypes.string,
    }),
    expected_release_day: PropTypes.number,
    expected_release_month: PropTypes.number,
    expected_release_year: PropTypes.number,
  }).isRequired,
};
