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
      ingredients: 'chicken',
    };
  }

  componentDidMount() {
    this.fetchRecipes();
  }

  fetchRecipes = () => {
    const { ingredients } = this.state;
    this.setState({ loading: true });
    axios.get(`http://www.recipepuppy.com/api/?i=${ingredients}&p=${Math.floor(Math.random() * 100)}`)
      .then((response) => {
        this.setState({
          recipes: response.data.results,
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
      return (<List loading label="Recipes" limitTo={5} />);
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
          noImages
          limitTo={5}
          label="Recipes"
          items={recipes.map(recipe => ({
            title: recipe.title,
            subtitle: recipe.ingredients,
            url: recipe.href,
          }))}
        />
      </div>
    );
  }
}
