import React from "react";
import { RiCloseCircleFill } from 'react-icons/ri';



const Ingredient = ({prop, removeIngredient}) => {
  console.log(prop)
  return prop.length
    ? prop.map((ingredient, index) => <main key={index}>
      <div className='ingredient-item'>{ingredient}
    <section key={index} >
        <button className='remove-ingredient'><RiCloseCircleFill onClick={() =>removeIngredient(ingredient)}/></button>
      </section></div>
    </main>)
    : null;
  
};

export default Ingredient;
