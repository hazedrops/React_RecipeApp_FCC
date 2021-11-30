import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';

// https://www.themealdb.com/api/json/v1/1/search.php?s=egg

class App extends Component {
  state = {
    recipes: []
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value
    e.preventDefault();

    const api_call = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`);

    const data = await api_call.json();
    this.setState({ recipes: data.meals });
    
    console.log(this.state.recipes);

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
