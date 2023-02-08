import { Favorite } from '@mui/icons-material'
import React, { useEffect } from 'react'
import Navbar from './Navbar'

const Profile = (prop) =>  {
  useEffect (()=>{
    //fetch to get recipes user favorited...hard code user ro be frankie...favorites route/endpoint
  },[])
  return (

    <div>
       <Navbar/>
       <br></br>
       <br></br>
       <p>Welcome</p>
      <Favorite/>
     

    </div>
    
  )
}

export default Profile