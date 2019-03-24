import React from 'react';
import PropTypes from 'prop-types';

export default function PhilipsHueLight({ light, onClick }) {
  const { on } = light.state;
  const circleColor = on ? 'yellow' : 'light-gray';
  return (
    <div className="cf">
      <div className="fl w-70">
        <h3 className="sans-serif f4 mb1 mt0">
          {light.name}
        </h3>
        <span className="sans-serif dark-gray f5">
          {light.productname}
        </span>
      </div>
      <div className="fl w-30 v-mid mt2">
        <div>
          <button
            type="button"
            onClick={() => onClick(light.id, on)}
            className={
              `bg-${circleColor} b--${circleColor} h2 w2 br-100 pointer link grow dim`
            }
          />
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
