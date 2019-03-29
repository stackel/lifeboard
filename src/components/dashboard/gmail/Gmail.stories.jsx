import React from 'react';
import { storiesOf } from '@storybook/react';

import Gmail from './Gmail';

storiesOf('Components/Gmail', module)
  .add('Gmail', () => (
    <div className="pa4">
      <Gmail />
    </div>
  ));
