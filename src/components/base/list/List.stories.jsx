import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, boolean,
} from '@storybook/addon-knobs';

import { response } from '../../dashboard/news/mocked';
import List from './List';

const newsItems = response.data.articles;

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
        firstItemSubtitleOnImage={boolean('Set first item subtitle as image overlay', false)}
      />
    </div>
  ));
