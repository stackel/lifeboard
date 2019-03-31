import React, { Component } from 'react';
import axios from 'axios';

import RecipeList from './RecipeList';

export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      errorMessage: null,
      loading: false,
      allIngredients: ['pasta, walnuts', 'beet,potatoes', 'noodles,peanut',
        'halloumi,spinach', 'banana, mango'],
      ingredients: 'pasta, walnuts',
    };
  }

  componentDidMount() {
    this.fetchRecipes();
  }

  fetchRecipes = () => {
    const { ingredients } = this.state;
    this.setState({ loading: true });
    axios.get(`https://api.edamam.com/search?q=${ingredients}&app_id=c4df6f2d&app_key=b334a4010e95d8da2b2e8f9c0146ccc6&excluded=garlic,onion`)
      .then((response) => {
        this.setState({
          recipes: response.data.hits.map(recipe => recipe.recipe),
          loading: false,
        });
      }, (error) => {
        this.setState({
          errorMessage: error.message,
          loading: false,
        });
      });
  }

  onIngredientClicked = (ingredient) => {
    this.setState({
      ingredients: ingredient,
    }, () => {
      this.fetchRecipes();
    });
  }

  render() {
    const {
      recipes, errorMessage, loading, allIngredients,
    } = this.state;
    if (loading) {
      return (<div className="w-100 bg-near-white h4" />);
    }

    if (errorMessage) {
      return <p>{errorMessage}</p>;
    }

    if (!recipes || !recipes.length) {
      return null;
    }


    return (
      <div className="w-100">
        <h2 className="sans-serif f4 mb2"> Recipes</h2>
        <div className="mb4">
          {
        allIngredients.map(ingredientPairing => (
          <button
            key={ingredientPairing}
            type="button"
            onClick={() => this.onIngredientClicked(ingredientPairing)}
            className="link dim pointer dib shadow-2 br2 ph3 pv2 mr2"
          >
            {ingredientPairing}
          </button>
        ))
      }
        </div>
        <RecipeList recipes={recipes} />
      </div>
    );
  }
}
