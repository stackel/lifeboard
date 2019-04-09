import React from 'react';
import PropTypes from 'prop-types';

import PhilipsHueLight from './PhilipsHueLight';

export default function PhilipsHueLightList({
  lights, onLightClicked,
  onAllLightsClicked,
}) {
  const allLightsOn = lights.filter(light => light.state.on).length === lights.length;
  const allLightsButtonClasses = allLightsOn ? 'bg-yellow b--yellow'
    : 'bg-light-gray b--light-gray';
  return (
    <div>
      <div className="cf">
        <h2 className="sans-serif f4 mv2"> Light control </h2>
        <div className="w-80 fl">
          {
        lights.map(light => (
          <div
            key={light.id}
            className="dib w-33 fl mb3"
          >
            <PhilipsHueLight
              light={light}
              onClick={onLightClicked}
            />
          </div>
        ))
      }
        </div>
        <div className="w-20 fl tc pt3">
          <button
            type="button"
            onClick={() => onAllLightsClicked(allLightsOn)}
            className={`${allLightsButtonClasses} h3 w3 v-mid br-100 pointer link grow dim`}
          />
          <div>
            <span className="sans-serif f4 truncate">
              All lights
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}

PhilipsHueLightList.propTypes = {
  lights: PropTypes.arrayOf(PhilipsHueLight.propTypes.light),
  onLightClicked: PropTypes.func.isRequired,
  onAllLightsClicked: PropTypes.func.isRequired,
};

PhilipsHueLightList.defaultProps = {
  lights: [],
};
