import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Recipe from './Recipe'

const Profile = (prop) =>  {
  const [favorites,setFavorites] = useState([])
  console.log(prop)
  useEffect (()=>{
    fetch(`http://127.0.0.1:5000/account/${prop.username}/favorites`)
      .then(response => response.json())
      .then(data => setFavorites(data));
  },[])
  console.log(favorites)
  return (
  <div>
      <Navbar/>
      <br/><br/><br/><br/>
      <p>Welcome USER</p>
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