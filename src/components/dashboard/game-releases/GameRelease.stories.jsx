import React from 'react';
import { storiesOf } from '@storybook/react';

import { gameReleaseList } from '../../../resources/data/mocked/game-releases';
import GameRelease from './GameRelease';

const game = gameReleaseList[0];

storiesOf('Components/Game Releases', module)
  .add('Game Release Item', () => (
    <div className="pa4">
      <GameRelease game={game} />
    </div>
  ));
