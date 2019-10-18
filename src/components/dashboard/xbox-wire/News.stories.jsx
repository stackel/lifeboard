import React from 'react';
import { storiesOf } from '@storybook/react';

import News from './News';

storiesOf('Components/Xbox Wire', module)
  .add('Xbox News', () => (
    <div className="pa4 mw6">
      <News />
    </div>
  ));
