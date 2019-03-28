import React, { Component } from 'react';
import axios from 'axios';

import { CAST_WEB_API_URL } from '../../../resources/config/api';
import ChromecastDevice from './ChromecastDevice';

export default class Chromecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: [],
      error: null,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.fetchDevices();
    }, 1000);
    this.fetchDevices();
  }

  fetchDevices = () => {
    axios.get(`${CAST_WEB_API_URL}/device`).then((response) => {
      this.setState({ devices: response.data });
    }, (error) => {
      this.setState(error);
    });
  }

  onPlayClick = (id) => {
    axios.get(`${CAST_WEB_API_URL}/device/${id}/play`).then(() => {
      this.fetchDevices();
    }, (error) => {
      this.setState(error);
    });
  }

  onPauseClick = (id) => {
    axios.get(`${CAST_WEB_API_URL}/device/${id}/pause`).then(() => {
    }, (error) => {
      this.setState(error);
    });
  }

  onMuteClick = (id) => {
    axios.get(`${CAST_WEB_API_URL}/device/${id}/muted/true`).then(() => {
    }, (error) => {
      this.setState(error);
    });
  }

  onUnmuteClick = (id) => {
    axios.get(`${CAST_WEB_API_URL}/device/${id}/muted/false`).then(() => {
    }, (error) => {
      this.setState(error);
    });
  }

  render() {
    const { devices, error } = this.state;
    if (error) {
      return (
        <pre>
          {JSON.stringify(error, null, 4)}
        </pre>
      );
    }
    if (!devices.length) {
      return null;
    }
    return (
      <div>
        <h2 className="sans-serif f4 mb2"> Playing:</h2>
        {
          devices.map(device => (
            <div className="" key={device.id}>
              <ChromecastDevice
                onPlayClicked={this.onPlayClick}
                onPauseClicked={this.onPauseClick}
                onMuteClicked={this.onMuteClick}
                onUnmuteClicked={this.onUnmuteClick}
                device={device}
              />
            </div>
          ))
        }
      </div>
    );
  }
}
