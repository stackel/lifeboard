import React from 'react';
import { storiesOf } from '@storybook/react';

import GameReleases from './GameReleases';

storiesOf('Components/Game Releases', module)
  .add('Game Releases', () => (
    <div className="mw6 pa4">
      <GameReleases />
    </div>
  ));
