import React from 'react';
import { storiesOf } from '@storybook/react';

import Recipe from './Recipe';
import { recipes } from '../../../resources/data/mocked/recipes';

const { recipe } = recipes[0];

storiesOf('Components/Recipes', module)
  .add('Recipe', () => (
    <div className="ma4 w5">
      <Recipe recipe={recipe} />
    </div>
  ));
