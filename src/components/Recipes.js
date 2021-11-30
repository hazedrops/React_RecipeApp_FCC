import React from 'react'

const Recipes = props => {
  return (
    <div className="container">
      <div className="row">
        { props.recipes.map((recipe) => {
          return (
            <div className="col-md-4" key={recipe.idMeal} style={{ marginBottom:"2rem" }}>
              <div className="recipes__box">
                <img className="recipe__box-img" src={recipe.strMealThumb} alt={recipe.strMeal} />
                <div className="recipe__text">
                  <h5 className="recipes__title">
                    {recipe.strMeal.length < 25 ? 
                      `${recipe.strMeal}` :
                      `${recipe.strMeal.substring(0, 22)}...`
                    }
                  </h5>
                  <p className="recipes__subtitle">
                    Origin: <span>{ recipe.strArea }</span>
                  </p>
                </div>
                <button className="recipe_buttons">View Recipe</button>
              </div>
            </div>
          );
        }) }
      </div>

      
    </div>
  )
}

export default Recipes;

{/* <div key={recipe.idMeal}>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <p>{recipe.strMeal}</p>
            </div> */}
