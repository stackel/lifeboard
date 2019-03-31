import React from 'react';
import { storiesOf } from '@storybook/react';

import RecipeList from './RecipeList';
import { recipes } from '../../../resources/data/mocked/recipes';

storiesOf('Components/Recipes', module)
  .add('Recipe List', () => (
    <div className="ma4">
      <RecipeList recipes={recipes.map(recipe => recipe.recipe)} />
    </div>
  ));
