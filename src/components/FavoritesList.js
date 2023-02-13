import React from 'react'
import Favorite from './Favorite';
import {mockRecipes} from ".../mockRecipes";

function FavoritesList() {
  return (
    <>FavoritesList
    {mockRecipes.map(favorite => <Favorite key={favorite.id} {...favorite}/>)}
    </>
  )
}

export default FavoritesList