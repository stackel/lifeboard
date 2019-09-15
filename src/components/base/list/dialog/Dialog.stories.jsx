import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, boolean,
} from '@storybook/addon-knobs';

import { newsItems } from '../../../../resources/data/mocked/news';
import Dialog from './Dialog';

storiesOf('Base/List/Dialog', module)
  .addDecorator(withKnobs)
  .add('Dialog', () => (
    <div className="mw6 pa4">
      <Dialog
        list={{
          items: newsItems.map(newsItem => ({
            imageUrl: newsItem.urlToImage,
            title: newsItem.title,
            subtitle: newsItem.content,
            url: newsItem.url,
          })),
          loading: boolean('loading', false),
          label: 'News Items',
          limitTo: 10,
        }}
        open={boolean('Open', true)}
      />
    </div>
  ));
