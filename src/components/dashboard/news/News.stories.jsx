import React from 'react';
import { storiesOf } from '@storybook/react';

import News from './News';
import { response } from './mocked';

storiesOf('Components/News', module)
  .add('News (Prod.)', () => (
    <div className="mw6 pa4">
      <News
        label="Nyheter Världen"
        filter={{ type: 'sources', value: 'reuters' }}
      />
    </div>
  ))
  .add('News (Mocked)', () => (
    <div className="mw6 pa4">
      <News
        mocked={response}
        label="Nyheter Världen"
        filter={{ type: 'sources', value: 'reuters' }}
      />
    </div>
  ));
