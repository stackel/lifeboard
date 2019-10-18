import React from 'react';
import { storiesOf } from '@storybook/react';

import WeatherView from './WeatherView';
import { weather } from './mocked';

storiesOf('Components/Weather', module)
  .add('Weather View', () => (
    <div className="pa4 w5">
      <WeatherView weather={
        {
          temperature: weather.main.temp,
          description: weather.weather[0].description,
        }}
      />
    </div>
  ));
