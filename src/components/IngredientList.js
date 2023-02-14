import React, { useState, useEffect } from "react";
import AddIngredient from "./AddIngredient";
import Ingredient from "./Ingredient";
import './IngredientList.css'

const IngredientList = (prop) => {
  const [ingredients, setIngredients] = useState([]);
  // useEffect(()=>{
  //   fetch(`http://127.0.0.1:5000/api/recipes/v2?q=[flour, plantain]`)
  //     .then((resp) => resp.json())
  //     .then(function (data) {
  //       prop.setRecipes(data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // },[])
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
    <main className="container">
      <h1 className="ingredient-header">Add Your Craving, then Feast</h1>
      <section className="ingredient-form">
      <AddIngredient id="add-ingredient"onSubmit={addNewIngredient} />
      <Ingredient prop={ingredients} removeIngredient={removeIngredient} />
      </section>
      <section className="btn-wrapper">
      <button className="ingredient-btn" onClick={getRecipes}>Search</button>
      <button className="ingredient-btn" onClick={() => setIngredients([])}>Clear</button>
      </section>
      <h2 className="tantalize-header">Tantalize Your Tastebuds Here </h2>
    </main>
  );
};

export default IngredientList;
