import React from 'react';
import Form from './Form';
import Recipes from './Recipes';

const Home = (props) => {
  return (
    <div className="Home">
      <header className="App-header">
        <h1 className="App-title">Recipe Search</h1>
      </header>
      <Form getRecipe={props.getRecipe} />
      <Recipes recipes={props.recipes} />
    </div>
  )
}

export default Home;
