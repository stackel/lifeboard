import React from 'react';
import { storiesOf } from '@storybook/react';

import { giantBombVideos } from '../../../resources/data/mocked/giant-bomb';
import GBVideoListItem from './GBLatestVideosList';

storiesOf('Components/Giant Bomb', module)
  .add('GB Video List', () => (
    <div className="pa4">
      <GBVideoListItem
        videos={giantBombVideos}
      />
    </div>
  ));
