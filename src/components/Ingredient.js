import React from "react";
// import { AddIngredient } from "./AddIngredient"

const Ingredient = ({prop}) => {

  return prop.length
    ? prop.map((ingredient, index) => <div key={index}>{ingredient}</div>)
    : null;
};

export default Ingredient;
