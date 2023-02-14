import React, {useState} from "react";
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
  const [liked, setLiked] = useState(false)
  console.log(prop)

  const addToFavorites = (recipe) =>{
    setLiked(!liked) 
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ recipe: recipe })
  };
  const username = window.localStorage.getItem("user")
  fetch(`http://127.0.0.1:5000/account/${username}/favorite`, requestOptions)
      .then(response => response.json())
      .then(data =>console.log(data));
}

  return (
    <main style={{float: 'left', width:'25%', margin: "none" , padding: 'none', height: '600px'}}> 
    <Card sx={{ maxWidth: 345, height:575 }}>
      <CardHeader aria-label="recipe card"
        avatar={
          <Avatar sx={{ bgcolor: "#5d6578" }} aria-label="recipe">
            CF
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title = {prop.prop.label}
        //capitalized first letter in cuisine type
        subheader={prop.prop.cuisineType[0].charAt(0).toUpperCase() + prop.prop.cuisineType[0].slice(1)}
      />
      <CardMedia
        component="img"
        height="194"
        image={prop.prop.image}
        alt= {prop.prop.label}
        aria-label="image of recipe"
      />
      <CardContent aria-label="ingredients">
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
              <FavoriteIcon onClick={
                (e)=>addToFavorites(prop.prop)}
                htmlColor={liked? "red":"grey"}/>
            </IconButton>
            <IconButton aria-label="share">
            <a href={prop.prop.url} ><LinkIcon /></a>
            </IconButton>
      </CardActions>
    </Card>
    </main>
    
  );
};

export default Recipe;
