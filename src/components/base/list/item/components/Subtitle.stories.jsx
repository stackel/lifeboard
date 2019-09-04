import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, text, boolean,
} from '@storybook/addon-knobs';

import Subtitle from './Subtitle';

storiesOf('Base/List/Item/Components', module)
  .addDecorator(withKnobs)
  .add('Subtitle', () => (
    <div className="mw6 pa4">
      <Subtitle
        subtitle={text('Text', 'Title')}
        loading={boolean('Loading', false)}
      />
    </div>
  ));
