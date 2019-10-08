import React from 'react';
import { storiesOf } from '@storybook/react';

import GameReleases from './GameReleases';

storiesOf('Components/Giant Bomb', module)
  .add('Game Releases', () => (
    <div className="pa4 mw6">
      <GameReleases />
    </div>
  ));
