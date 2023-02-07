import React, { useState } from 'react'
import IngredientList from './IngredientList'
import RecipeList from './RecipeList'

const Home = ({prop}) => {
  const [recipes, setRecipes] = useState([])
  return (
    <div>
      <IngredientList setRecipes={setRecipes}/>
      <RecipeList recipes={recipes} username={prop}/>
    </div>
  
  )
}

export default Home
