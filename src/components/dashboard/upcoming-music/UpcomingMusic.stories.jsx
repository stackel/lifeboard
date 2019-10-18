import React from 'react';
import { storiesOf } from '@storybook/react';

import UpcomingMusic from './UpcomingMusic';
import { response } from './mocked';

storiesOf('Components/Upcoming Music', module)
  .add('Upcoming Music (Prod.)', () => (
    <div className="mw6 pa4">
      <UpcomingMusic />
    </div>
  ))
  .add('UpcomingMusic (Mocked.)', () => (
    <div className="mw6 pa4">
      <UpcomingMusic mocked={response} />
    </div>
  ));
