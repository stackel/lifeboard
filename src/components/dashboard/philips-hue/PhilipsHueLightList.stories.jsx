import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PhilipsHueLightList from './PhilipsHueLightList';
import { philipsHueLightList } from './mocked';

storiesOf('Components/Philips Hue', module)
  .add('Philips Hue Light List', () => (
    <div className="pa4">
      <PhilipsHueLightList
        onLightClicked={action('on-philips-hue-light-clicked')}
        lights={philipsHueLightList}
      />
    </div>
  ));
