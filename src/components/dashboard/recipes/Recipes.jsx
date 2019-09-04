import React, { Component } from 'react';
import axios from 'axios';

import List from '../../base/list/List';

export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      errorMessage: null,
      loading: false,
      /* allIngredients: ['pasta, walnuts', 'beet,potatoes', 'noodles,peanut',
        'halloumi,spinach', 'banana, mango'], */
      ingredients: 'pasta',
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
      recipes, errorMessage, loading,
    } = this.state;
    if (loading) {
      return (<List loading label="Recipes" />);
    }

    if (errorMessage) {
      return null;
    }

    if (!recipes || !recipes.length) {
      return null;
    }

    return (
      <div className="w-100">
        <List
          label="Recipes"
          items={recipes.map(recipe => ({
            title: recipe.label,
            subtitle: recipe.source,
            imageUrl: recipe.image,
            url: recipe.url,
          }))}
        />
      </div>
    );
  }
}
