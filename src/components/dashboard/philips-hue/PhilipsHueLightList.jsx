import React from 'react';
import PropTypes from 'prop-types';

import PhilipsHueLight from './PhilipsHueLight';

export default function PhilipsHueLightList({ lights, onLightClicked }) {
  return (
    <div>
      {
        lights.map(light => (
          <div
            key={light.id}
            className="dib pb3"
          >
            <PhilipsHueLight
              light={light}
              onClick={onLightClicked}
            />
          </div>
        ))
      }
    </div>
  );
}

PhilipsHueLightList.propTypes = {
  lights: PropTypes.arrayOf(PhilipsHueLight.propTypes.light),
  onLightClicked: PropTypes.func.isRequired,
};

PhilipsHueLightList.defaultProps = {
  lights: [],
};
