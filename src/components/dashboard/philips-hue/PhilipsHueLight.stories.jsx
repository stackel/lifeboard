import React from 'react';
import { storiesOf } from '@storybook/react';

import PhilipsHueLight from './PhilipsHueLight';
import { philipsHueLightList } from './mocked';

const light = philipsHueLightList[0];

storiesOf('Components/Philips Hue', module)
  .add('Philips Hue Light', () => (
    <div className="mw6 pa4">
      <PhilipsHueLight light={light} />
    </div>
  ));
