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
    axios.get(`${CAST_WEB_API_URL}/device`).then((response) => {
      this.setState({ devices: response.data });
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
              <ChromecastDevice device={device} />
            </div>
          ))
        }
      </div>
    );
  }
}
