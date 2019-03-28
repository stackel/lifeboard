import React from 'react';
import { storiesOf } from '@storybook/react';

import Recipes from './Recipes';

storiesOf('Components/Recipes', module)
  .add('Recipes', () => (
    <div className="pa4">
      <Recipes />
    </div>
  ));
