import React from 'react';
import { storiesOf } from '@storybook/react';

import { newsItems } from '../../../resources/data/mocked/news';
import NewsItems from './NewsItems';

storiesOf('Components/News', module)
  .add('News Item List', () => (
    <div className="mw6 pa4">
      <NewsItems newsItems={newsItems} />
    </div>
  ));
