import React from 'react';
import { storiesOf } from '@storybook/react';

import Chromecast from './Chromecast';

storiesOf('Components/Chromecast', module)
  .add('Chromecast', () => (
    <div className="mw6 pa4">
      <Chromecast />
    </div>
  ));
