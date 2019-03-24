import React from 'react';
import { storiesOf } from '@storybook/react';

import PhilipsHueLight from './PhilipsHueLight';
import { philipsHueLight } from '../../../resources/data/mocked';

storiesOf('Components/Philips Hue', module)
  .add('Philips Hue Light', () => (
    <div className="mw6 pa4">
      <PhilipsHueLight light={philipsHueLight} />
    </div>
  ));
