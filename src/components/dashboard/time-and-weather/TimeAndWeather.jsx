import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Get } from 'react-axios';

import { OPEN_WEATHER_MAP_API_URL, CORS_ANYWHERE_URL } from '../../../resources/config/api';
import { OPEN_WEATHER_MAP_API_KEY } from '../../../resources/config/keys';

export default class TimeAndWeather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: moment(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: moment(),
      });
    });
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        <h1 className="sans-serif tc f2">
          {time.format('MMMM Do YYYY, HH:mm:ss')}
        </h1>
        <Get
          url={`${CORS_ANYWHERE_URL}${OPEN_WEATHER_MAP_API_URL}weather`}
          params={{
            appid: OPEN_WEATHER_MAP_API_KEY,
            q: 'Nacka,se',
            units: 'metric',
          }}
        >
          {(error, response, isLoading) => {
            if (error) {
              return (
                <div>
                  {error.message}
                </div>
              );
            }
            if (isLoading) {
              return (<div>Loading...</div>);
            }
            if (response !== null) {
              const weatherData = response.data;
              return (
                <div className="tc">
                  <span className="sans-serif tc f4">
                    {`Outside it's ${Math.round(weatherData.main.temp)}
                   degrees and ${weatherData.weather[0].description}`}
                  </span>
                </div>
              );
            }
            return (<div>Loading...</div>);
          }}
        </Get>
      </div>
    );
  }
}

TimeAndWeather.propTypes = {
};
