import React from 'react';
import { storiesOf } from '@storybook/react';

import Podcasts from './Podcasts';

storiesOf('Components/Podcasts', module)
  .add('Podcasts', () => (
    <div className="pa4 mw6">
      <Podcasts />
    </div>
  ));
