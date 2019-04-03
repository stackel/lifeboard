import React from 'react';
import { storiesOf } from '@storybook/react';

import { departures } from '../../../resources/data/mocked/departures';
import { STOPS } from '../../../resources/config/departures';
import Departures from './Departures';

const stop = STOPS[0];

storiesOf('Components/Departures', module)
  .add('Departures', () => (
    <div className="mw6 pa4 ">
      <Departures
        departures={departures.Departure}
        stop={stop}
      />
    </div>
  ));
