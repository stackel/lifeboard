import React from 'react';
import { storiesOf } from '@storybook/react';

import UpcomingMusic from './UpcomingMusic';

storiesOf('Components/Upcoming Music', module)
  .add('UpcomingMusic', () => (
    <div className=" pa4">
      <UpcomingMusic />
    </div>
  ));
