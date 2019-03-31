import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';

import Recipe from './Recipe';

export default function RecipeList({ recipes }) {
  return (
    <Carousel
      dragging
      slidesToShow={5}
      swiping
      heightMode="max"
      renderBottomCenterControls={() => null}
      renderCenterLeftControls={() => (
        null
      )}
      renderCenterRightControls={() => (
        null
      )}
    >
      {
      recipes.map(recipe => (
        <div
          key={recipe.uri}
          className="mr3"
        >
          <Recipe recipe={recipe} />
        </div>
      ))
      }
    </Carousel>
  );
}

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(Recipe.propTypes.recipe).isRequired,
};
