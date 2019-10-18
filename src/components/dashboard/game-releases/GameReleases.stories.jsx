import React from 'react';
import { storiesOf } from '@storybook/react';
import { response } from './mocked';

import GameReleases from './GameReleases';

storiesOf('Components/Game Releases', module)
  .add('Game Releases (Prod.)', () => (
    <div className="pa4 mw6">
      <GameReleases />
    </div>
  ))
  .add('Game Releases (Mocked)', () => (
    <div className="pa4 mw6">
      <GameReleases mocked={response} />
    </div>
  ));
