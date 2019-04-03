import React from 'react';
import { storiesOf } from '@storybook/react';

import Time from './Time';

storiesOf('Components/Time', module)
  .add('Time', () => (
    <div className=" pa4 mw5">
      <Time />
    </div>
  ));
