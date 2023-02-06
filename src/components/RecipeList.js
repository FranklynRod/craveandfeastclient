import React from 'react'
import Recipe from './Recipe'

const RecipeList = (prop) => {
  console.log(prop)
  return (
    <div>
      {prop.recipes.length?
      prop.recipes.map((recipe,index)=>{
        return(
          <Recipe key={index} prop={recipe}/>
        )
      }): null}

      </div>

    

  )
}

export default RecipeList