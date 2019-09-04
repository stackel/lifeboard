import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, text, boolean,
} from '@storybook/addon-knobs';

import Title from './Title';

storiesOf('Base/List/Item/Components', module)
  .addDecorator(withKnobs)
  .add('Title', () => (
    <div className="mw6 pa4">
      <Title
        title={text('Text', 'Subtitle')}
        loading={boolean('Loading', false)}
        link={text('Link', null)}
      />
    </div>
  ));
