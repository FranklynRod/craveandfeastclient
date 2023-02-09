import { Favorite } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Recipe from './Recipe'

const Profile = (prop) =>  {
  const [favorites,setFavorites] = useState([])
  console.log(prop)
  useEffect (()=>{
    fetch(`http://127.0.0.1:5000/account/Frankie/favorites`)
      .then(response => response.json())
      .then(data => setFavorites(data));
    //fetch to get recipes user favorited...hard code user ro be frankie...favorites route/endpoint
  },[])
  console.log(favorites)
  return (
  <div>
      <Navbar/>
      <br/><br/><br/><br/>
      <p>Welcome</p>
      {
        favorites?.map((item, index)=>{
            return(
              <Recipe key={index} prop={item}/>
            )
        })
      }
      
    
  </div>
  )
}

export default Profile