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
        <h2 className="near-white sans-serif f4 mt2 mb2"> Light Control </h2>
        <div className="" />
        <div className="tc pt3 pb3">
          <button
            type="button"
            onClick={() => onAllLightsClicked(allLightsOn)}
            className={`${allLightsButtonClasses} h2 w2 v-mid br-100 pointer link grow dim`}
          />
          <div>
            <span className="db near-white sans-serif f6 fw5 pt2 truncate">
              All lights
            </span>
          </div>
        </div>
        {
      lights.map(light => (
        <div
          key={light.id}
          className="dib w-100 fl mb3"
        >
          <PhilipsHueLight
            light={light}
            onClick={onLightClicked}
          />
        </div>
      ))
    }
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
