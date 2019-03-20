import React from 'react';
import { storiesOf } from '@storybook/react';

import GBLatestVideos from './GBLatestVideos';

storiesOf('Components/Giant Bomb', module)
  .add('GB Latest Videos', () => (
    <div className="mw6 pa4">
      <GBLatestVideos
        limit={5}
      />
    </div>
  ));
