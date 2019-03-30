import React from 'react';
import PropTypes from 'prop-types';

export default function Recipe({ recipe }) {
  return (
    <a
      className="link"
      href={recipe.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="">
        <img className="w-100 br3 h5 of-c" src={recipe.image} alt={recipe.label} />
        <span className="db sans-serif f4 black">{recipe.label}</span>
        <span className="db sans-serif f5 dark-gray mt2">{recipe.source}</span>
      </div>
    </a>
  );
}

Recipe.propTypes = {
  recipe: PropTypes.shape({
    label: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
