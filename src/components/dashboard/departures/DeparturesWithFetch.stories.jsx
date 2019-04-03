import React from 'react';
import { storiesOf } from '@storybook/react';

import { STOPS } from '../../../resources/config/departures';
import DeparturesWithFetch from './DeparturesWithFetch';

const stop = STOPS[0];

storiesOf('Components/Departures', module)
  .add('Departures With Fetch', () => (
    <div className="mw6 pa4 ">
      <DeparturesWithFetch
        stop={stop}
      />
    </div>
  ));
