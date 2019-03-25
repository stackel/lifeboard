import React from 'react';
import { storiesOf } from '@storybook/react';

import { chromecastDevice } from '../../../resources/data/mocked';
import ChromecastDevice from './ChromecastDevice';

storiesOf('Components/Chromecast', module)
  .add('Chromecast Device', () => (
    <div className="mw6 pa4">
      <ChromecastDevice device={chromecastDevice} />
    </div>
  ));
