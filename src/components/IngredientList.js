import React, { useState } from "react";
import AddIngredient from "./AddIngredient";
import Ingredient from "./Ingredient";

const IngredientList = (prop) => {
  const [ingredients, setIngredients] = useState([]);
  const addNewIngredient = (ingredient) => {
    if (!ingredients.includes(ingredient) && ingredient !== "") {
      setIngredients([ingredient, ...ingredients]);
    }
  };

  const removeIngredient = (ingredient_ToRemove) => {
    const removeArr = [...ingredients].filter(
      (ingredient) => ingredient !== ingredient_ToRemove
    );

    setIngredients(removeArr);
  };

  const getRecipes = () => {
    fetch(`http://127.0.0.1:5000/api/recipes/v2?q=${ingredients}`)
      .then((resp) => resp.json())
      .then(function (data) {
        prop.setRecipes(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <AddIngredient onSubmit={addNewIngredient} />
      <Ingredient prop={ingredients} removeIngredient={removeIngredient} />
      <button onClick={getRecipes}>Search</button>
      <button onClick={() => setIngredients([])}>Clear</button>
    </div>
  );
};

export default IngredientList;
