import React from 'react';
import { storiesOf } from '@storybook/react';

import GBVideoListItem from './GBVideoListItem';

storiesOf('Components/Giant Bomb', module)
  .add('GB Video List Item', () => (
    <GBVideoListItem name="test" />
  ));
