import React from 'react';
import { storiesOf } from '@storybook/react';

import UpcomingBeer from './UpcomingBeer';

storiesOf('Components/Systembolaget', module)
  .add('Upcoming Beer', () => (
    <div className="pa4 mw6">
      <UpcomingBeer />
    </div>
  ));
