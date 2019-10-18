import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, boolean,
} from '@storybook/addon-knobs';

import Item from './Item';

storiesOf('Base/List/Item', module)
  .addDecorator(withKnobs)
  .add('Item', () => (
    <div className="mw6 pa4">
      <Item
        item={{
          title: 'Title',
          subtitle: 'Subtitle',
          imageUrl: 'http://via.placeholder.com/640x360',
          url: 'www.google.com',
        }}
        showImage={boolean('Show Image', true)}
        loading={boolean('loading', false)}
        subtitleOverImage={boolean('Subtitle Over Image', false)}
      />
    </div>
  ));
