import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, boolean, text,
} from '@storybook/addon-knobs';

import Image from './Image';

storiesOf('Base/List/Item/Components', module)
  .addDecorator(withKnobs)
  .add('Image', () => (
    <div className="mw6 pa4">
      <Image
        url="http://via.placeholder.com/640x360"
        alt="Image alt"
        show={boolean('Show', true)}
        loading={boolean('loading', false)}
        textOverlay={text('Text Overlay', null)}
      />
    </div>
  ));
