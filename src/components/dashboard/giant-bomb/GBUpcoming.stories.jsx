import React from 'react';
import { storiesOf } from '@storybook/react';

import GBUpcoming from './GBUpcoming';

storiesOf('Components/Giant Bomb', module)
  .add('Upcoming', () => (
    <div className="pa4 mw6">
      <GBUpcoming />
    </div>
  ));
