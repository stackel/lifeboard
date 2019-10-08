import React from 'react';
import { storiesOf } from '@storybook/react';

import News from './News';

storiesOf('Components/News', module)
  .add('News', () => (
    <div className="mw6 pa4">
      <News
        label="Nyheter Sverige"
        filter={{ type: 'sources', value: 'reuters' }}
      />
    </div>
  ));
