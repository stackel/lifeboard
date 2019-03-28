import React from 'react';
import { storiesOf } from '@storybook/react';

import GBLatestVideos from './GBLatestVideos';

storiesOf('Components/Giant Bomb', module)
  .add('GB Latest Videos', () => (
    <div className="pa4">
      <GBLatestVideos />
    </div>
  ));
