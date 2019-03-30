import React, { Component } from 'react';
import axios from 'axios';

import { API_URL, FETCH_INTERVAL } from '../../../resources/config/philips-hue';
import PhilipsHueLightList from './PhilipsHueLightList';

export default class PhilipsHue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lights: [],
      intervalId: null,
    };
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.fetchLights();
    }, FETCH_INTERVAL);
    this.setState({
      intervalId,
    });
    this.fetchLights();
  }

  componentWillUnmount() {
    const { intervalId } = this.state;
    clearInterval(intervalId);
  }

  fetchLights = () => {
    axios.get(`${API_URL}lights`).then((response) => {
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
    axios.put(`${API_URL}lights/${id}/state`,
      { on: !prevState }).then(() => {
      this.fetchLights();
    });
  }

  render() {
    const { lights } = this.state;
    if (!lights || !lights.length) {
      return null;
    }
    return (
      <div>
        <h2 className="sans-serif f4 mb3"> Lights</h2>
        <PhilipsHueLightList
          lights={lights}
          onLightClicked={this.onLightClicked}
        />
      </div>
    );
  }
}
