import React from 'react';
import { storiesOf } from '@storybook/react';

import PhilipsHue from './PhilipsHue';

storiesOf('Components/Philips Hue', module)
  .add('Philips Hue', () => (
    <div className="mw6 pa4">
      <PhilipsHue />
    </div>
  ));
