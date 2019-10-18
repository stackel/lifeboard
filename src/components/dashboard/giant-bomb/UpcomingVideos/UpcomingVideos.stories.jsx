import React from 'react';
import { storiesOf } from '@storybook/react';

import { mockedNoLive, mockedWithLive } from './mocked';
import UpcomingVideos from './UpcomingVideos';

storiesOf('Components/Giant Bomb/Upcoming Videos', module)
  .add('Upcoming Videos (Prod.)', () => (
    <div className="pa4 mw6">
      <UpcomingVideos />
    </div>
  ))
  .add('Upcoming Videos (Mocked no live show)', () => (
    <div className="pa4 mw6">
      <UpcomingVideos mocked={mockedNoLive} />
    </div>
  ))
  .add('Upcoming Videos (Mocked with live show)', () => (
    <div className="pa4 mw6">
      <UpcomingVideos mocked={mockedWithLive} />
    </div>
  ));
