import React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment';

import TimeView from './TimeView';

storiesOf('Components/Time', module)
  .add('Time View', () => (
    <div className=" pa4 mw5">
      <TimeView time={moment()} />
    </div>
  ));
