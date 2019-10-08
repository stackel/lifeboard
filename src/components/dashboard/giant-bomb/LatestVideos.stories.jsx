import React from 'react';
import { storiesOf } from '@storybook/react';

import LatestVideos from './LatestVideos';

storiesOf('Components/Giant Bomb', module)
  .add('Latest Videos', () => (
    <div className="pa4 mw6">
      <LatestVideos />
    </div>
  ));
