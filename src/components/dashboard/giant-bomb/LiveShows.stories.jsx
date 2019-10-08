import React from 'react';
import { storiesOf } from '@storybook/react';

import LiveShows from './LiveShows';

storiesOf('Components/Giant Bomb', module)
  .add('Live Shows', () => (
    <div className="pa4 mw6">
      <LiveShows />
    </div>
  ));
