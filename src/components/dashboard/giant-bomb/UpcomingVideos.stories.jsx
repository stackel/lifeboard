import React from 'react';
import { storiesOf } from '@storybook/react';

import UpcomingVideos from './UpcomingVideos';

storiesOf('Components/Giant Bomb', module)
  .add('Upcoming Videos', () => (
    <div className="pa4 mw6">
      <UpcomingVideos />
    </div>
  ));
