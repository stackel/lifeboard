import React from 'react';
import { storiesOf } from '@storybook/react';

import LatestVideos from './LatestVideos';
import { response } from './mocked';

storiesOf('Components/Giant Bomb/Latest Videos', module)
  .add('Latest Videos (Prod.)', () => (
    <div className="pa4 mw6">
      <LatestVideos />
    </div>
  ))
  .add('Latest Videos (Mocked)', () => (
    <div className="pa4 mw6">
      <LatestVideos mocked={response} />
    </div>
  ));
