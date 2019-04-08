import React from 'react';
import { storiesOf } from '@storybook/react';

import NewsWithFetch from './NewsWithFetch';

storiesOf('Components/News', module)
  .add('News With Fetch', () => (
    <div className="mw6 pa4">
      <NewsWithFetch
        label="Nyheter Sverige"
        filter={{ type: 'country', value: 'se' }}
      />
    </div>
  ));
