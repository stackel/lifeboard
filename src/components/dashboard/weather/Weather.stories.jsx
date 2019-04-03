import React from 'react';
import { storiesOf } from '@storybook/react';

import Weather from './Weather';

storiesOf('Components/Weather', module)
  .add('Weather', () => (
    <div className="pa4 w5">
      <Weather />
    </div>
  ));
