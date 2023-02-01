import React from 'react'
import Recipe from './Recipe'

const RecipeList = (prop) => {
  console.log(prop)
  return (
    <div>
      {prop.recipes.length? prop.recipes[0].label: null}
      <Recipe/>
      </div>
    

  )
}

export default RecipeList