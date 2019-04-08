import React from 'react';
import { storiesOf } from '@storybook/react';

import { newsItems } from '../../../resources/data/mocked/news';
import NewsItem from './NewsItem';

const newsItem = newsItems[1];

storiesOf('Components/News', module)
  .add('News Item (No Image)', () => (
    <div className="mw6 pa4">
      <NewsItem newsItem={newsItem} showImage={false} />
    </div>
  ));
