import React from 'react';
import PropTypes from 'prop-types';

export default function PhilipsHueLight({ light, onClick }) {
  const { on } = light.state;
  const circleColor = on ? 'yellow' : 'moon-gray';
  return (
    <div className="w-100">
      <div>
        <div className="tc">
          <button
            type="button"
            onClick={() => onClick(light.id, on)}
            className={
              `bg-${circleColor} b--${circleColor} h2 w2 br-100 pointer link grow dim`
            }
          />
        </div>
        <div className="tc">
          <span className="near-white sans-serif f5 fw5 mb1 mt0 truncate">
            {light.name}
          </span>
        </div>
      </div>
    </div>
  );
}

PhilipsHueLight.propTypes = {
  onClick: PropTypes.func.isRequired,
  light: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    productname: PropTypes.string,
    state: PropTypes.shape({
      on: PropTypes.bool,
    }),
  }).isRequired,
};
