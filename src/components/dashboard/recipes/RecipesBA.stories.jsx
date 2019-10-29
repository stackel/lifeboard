import React from 'react';
import { storiesOf } from '@storybook/react';

import Recipes from './RecipesBA';

storiesOf('Components/Recipes', module)
  .add('Recipes (Bon Appetit)', () => (
    <div className="pa4 mw6">
      <Recipes />
    </div>
  ));
