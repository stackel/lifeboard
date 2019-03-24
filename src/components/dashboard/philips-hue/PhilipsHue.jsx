import React, { Component } from 'react';
import axios from 'axios';

import { PHILIPS_HUE_API_URL } from '../../../resources/config/api';
import PhilipsHueLight from './PhilipsHueLight';

export default class PhilipsHue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lights: [],
    };
  }

  componentDidMount() {
    this.fetchLights();
  }

  fetchLights = () => {
    axios.get(`${PHILIPS_HUE_API_URL}lights`).then((response) => {
      if (response !== null) {
        const { data } = response;
        const lights = [];

        Object.keys(data).forEach(
          key => lights.push({
            ...data[key], id: key,
          }),
        );

        this.setState({ lights });
      }
    });
  }

  onLightClicked = (id, prevState) => {
    axios.put(`${PHILIPS_HUE_API_URL}lights/${id}/state`,
      { on: !prevState }).then(() => {
      this.fetchLights();
    });
  }

  render() {
    const { lights } = this.state;
    return (
      <div>
        <h2 className="sans-serif f3"> Lights</h2>
        {
        lights.map(light => (
          <div
            key={light.id}
            className="mb4"
          >
            <PhilipsHueLight
              light={light}
              onClick={this.onLightClicked}
            />
          </div>
        ))
      }
      </div>
    );
  }
}

PhilipsHue.propTypes = {
};
