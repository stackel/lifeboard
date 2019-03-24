import React from 'react';
import { storiesOf } from '@storybook/react';

import Gmail from './Gmail';

storiesOf('Components/Gmail', module)
  .add('Gmail', () => (
    <div className="mw6 pa4">
      <Gmail />
    </div>
  ));
