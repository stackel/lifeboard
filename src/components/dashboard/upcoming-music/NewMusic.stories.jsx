import React from 'react';
import { storiesOf } from '@storybook/react';

import NewMusic from './NewMusic';

storiesOf('Components/New Music', module)
  .add('New Music (Prod.)', () => (
    <div className="mw6 pa4">
      <NewMusic />
    </div>
  ));
