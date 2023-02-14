import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Recipe from './Recipe'

const Profile = (prop) =>  {
  const [favorites,setFavorites] = useState([])
  const username = window.localStorage.getItem("user")
  useEffect (()=>{
    fetch(`http://127.0.0.1:5000/account/${username}/favorites`)
      .then(response => response.json())
      .then(data => setFavorites(data));
  },[])
  console.log(username)

  return (
  <>
      <Navbar/>
      <br/><br/><br/><br/>
      <section className="profile-header-container">
      <h1 className='profile-header' aria-label="profile-header">Let's Eat {username}!</h1>
      </section>
      {
        favorites?.map((item, index)=>{
            return(
              <Recipe key={index} prop={item}/>
            )
        })
      }
  </>
  )
}

export default Profile