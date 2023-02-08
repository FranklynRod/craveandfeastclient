import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LinkIcon from '@mui/icons-material/Link';



const Recipe = (prop) => {
  console.log(prop)
  const addToFavorites = (recipe) =>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ recipe: recipe })
  };
  fetch(`http://127.0.0.1:5000/account/${prop.username}/favorite`, requestOptions)
      .then(response => response.json())
      .then(data =>console.log(data));
}

  return (
    <div style={{float: 'left', width:'25%', margin: "none" , padding: 'none', height: '600px'}}> 
    <Card sx={{ maxWidth: 345, height:575 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#B08401" }} aria-label="recipe">
            CF
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title = {prop.prop.label}
        //capitalized first letter in cuisine type
        subheader={prop.prop.cuisineType[0].charAt(0).toUpperCase() + prop.prop.cuisineType[0].slice(1)}
      />
      <CardMedia
        component="img"
        height="194"
        image={prop.prop.image}
        alt= {prop.prop.label}
      />
      <CardContent>
         {//5 ingredients appear on card
            prop.prop.ingredientLines.slice(0,5).map((line,index)=>{
              return(
                <Typography key={index}>
                  {line}

                </Typography>
              )
            })
          }
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
              <FavoriteIcon onClick={(e)=>addToFavorites(prop.prop)}/>
            
            </IconButton>
            <IconButton aria-label="share">
            <a href={prop.prop.url} ><LinkIcon /></a>
            </IconButton>
      </CardActions>
    </Card>
    </div>
    
  );
};

export default Recipe;
