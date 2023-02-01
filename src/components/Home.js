import React, { useState } from 'react'
import IngredientList from './IngredientList'
import RecipeList from './RecipeList'

const Home = () => {
  const [recipes, setRecipes] = useState([])
  return (
    <div>
      <IngredientList setRecipes={setRecipes}/>
      <RecipeList recipes={recipes}/>
    </div>
  
  )
}

export default Home
