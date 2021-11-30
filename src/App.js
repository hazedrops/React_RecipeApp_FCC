import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Recipe from './components/Recipe';

import './App.css';

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
      <BrowserRouter>
        <Routes>
          <Route exact path="/"
             render={ routeProps => 
              (<Home {...routeProps} getRecipe={this.getRecipe} pieceOfState={this.state.recipes} />) 
            }/> 
          <Route path="/recipe" 
            render={ routeProps => 
              (<Recipe {...routeProps} getRecipe={this.getRecipe} pieceOfState={this.state.recipes} />) 
            }/>  
          {/* <Route path="/recipe" element={<Recipe />} />             */}
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
