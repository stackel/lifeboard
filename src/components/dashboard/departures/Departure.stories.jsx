import React from 'react';
import { storiesOf } from '@storybook/react';

import { departures } from '../../../resources/data/mocked/departures';
import Departure from './Departure';

const departure = departures.Departure[0];

storiesOf('Components/Departures', module)
  .add('Departure', () => (
    <div className="pa4">
      <Departure departure={departure} />
    </div>
  ));
