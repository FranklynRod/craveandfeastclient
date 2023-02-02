import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LinkIcon from '@mui/icons-material/Link';

const Recipe = (prop) => {
  console.log(prop)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
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
        alt="image of recipe"
      />
      <CardContent>
         {
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
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
            <a href={prop.prop.url} ><LinkIcon /></a>
            </IconButton>
      </CardActions>
    </Card>
  );
};

export default Recipe;
