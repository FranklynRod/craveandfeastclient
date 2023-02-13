import React, { useState } from 'react'
import IngredientList from './IngredientList'
import RecipeList from './RecipeList'
import Navbar from './Navbar'
import './Home.css'



const Home = ({prop}) => {
  const [recipes, setRecipes] = useState([])
  return (
    <main className='container'>
      <Navbar/>
      <IngredientList setRecipes={setRecipes}/>
      <RecipeList recipes={recipes} username={prop}/>
    </main>
  
  )
}

export default Home
