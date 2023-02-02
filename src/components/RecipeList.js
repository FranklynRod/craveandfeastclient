import React from 'react'
import Recipe from './Recipe'

const RecipeList = (prop) => {
  console.log(prop)
  return (
    <div>
      {prop.recipes.length? 
        <Recipe prop={prop.recipes[0]}/>: 
        null}

      </div>
    

  )
}

export default RecipeList