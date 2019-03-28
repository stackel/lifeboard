import React, { Component } from 'react';
import axios from 'axios';

import { API_URL, FETCH_INTERVAL } from '../../../resources/config/chromecast';
import ChromecastDevice from './ChromecastDevice';

export default class Chromecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: [],
      error: null,
      intervalId: null,
    };
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.fetchDevices();
    }, FETCH_INTERVAL);
    this.setState({
      intervalId,
    });
    this.fetchDevices();
  }

  componentWillUnmount() {
    const { intervalId } = this.state;
    if (intervalId) {
      clearInterval(intervalId);
    }
  }

  fetchDevices = () => {
    axios.get(`${API_URL}/device`).then((response) => {
      this.setState({ devices: response.data });
    }, (error) => {
      this.setState(error);
    });
  }

  onPlayClick = (id) => {
    axios.get(`${API_URL}/device/${id}/play`).then(() => {
      this.fetchDevices();
    }, (error) => {
      this.setState(error);
    });
  }

  onPauseClick = (id) => {
    axios.get(`${API_URL}/device/${id}/pause`).then(() => {
    }, (error) => {
      this.setState(error);
    });
  }

  onMuteClick = (id) => {
    axios.get(`${API_URL}/device/${id}/muted/true`).then(() => {
    }, (error) => {
      this.setState(error);
    });
  }

  onUnmuteClick = (id) => {
    axios.get(`${API_URL}/device/${id}/muted/false`).then(() => {
    }, (error) => {
      this.setState(error);
    });
  }

  isPlaying = () => {
    const { devices } = this.state;
    let playing = false;
    devices.forEach((device) => {
      if (device.status.status) {
        playing = true;
      }
    });
    return playing;
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

    if (!devices.length || !this.isPlaying()) {
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
