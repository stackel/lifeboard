import React from 'react';
import { storiesOf } from '@storybook/react';

import GBCurrentLive from './GBCurrentLive';

storiesOf('Components/Giant Bomb', module)
  .add('GB Current Live', () => (
    <div className="pa4 mw6">
      <GBCurrentLive />
    </div>
  ));
