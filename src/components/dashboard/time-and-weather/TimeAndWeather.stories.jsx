import React from 'react';
import { storiesOf } from '@storybook/react';

import TimeAndWeather from './TimeAndWeather';

storiesOf('Components/Time And Weather', module)
  .add('Time and Weather', () => (
    <div className=" pa4">
      <TimeAndWeather />
    </div>
  ));
