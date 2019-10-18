import React, { Component } from 'react';
import axios from 'axios';

import { API_URL, API_KEY, FETCH_INTERVAL } from './config';
import WeatherView from './WeatherView';

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      weather: null,
      intervalId: null,
    };
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.fetchWeather();
    }, FETCH_INTERVAL);
    this.setState({
      intervalId,
    });
    this.fetchWeather();
  }

  componentWillUnmount() {
    const { intervalId } = this.state;
    if (intervalId) {
      clearInterval(intervalId);
    }
  }

  fetchWeather = () => {
    axios.get(`${API_URL}weather`, {
      params: {
        appid: API_KEY,
        q: 'Nacka,se',
        units: 'metric',
      },
    }).then((response) => {
      const weather = response.data;
      this.setState({
        loading: false,
        weather: {
          temperature: weather.main.temp,
          description: weather.weather[0].description,
        },
      });
    });
  }

  render() {
    const { loading, weather } = this.state;

    if (loading) {
      return <div className="bg-near-white w5 h1" />;
    }

    if (!weather) {
      return null;
    }

    return (<WeatherView weather={weather} />);
  }
}
