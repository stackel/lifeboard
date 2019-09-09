import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, boolean,
} from '@storybook/addon-knobs';

import { newsItems } from '../../../resources/data/mocked/news';
import List from './List';

storiesOf('Base/List', module)
  .addDecorator(withKnobs)
  .add('List', () => (
    <div className="mw6 pa4">
      <List
        items={newsItems.map(newsItem => ({
          imageUrl: newsItem.urlToImage,
          title: newsItem.title,
          subtitle: newsItem.content,
          url: newsItem.url,
        }))}
        loading={boolean('loading', false)}
      />
    </div>
  ));