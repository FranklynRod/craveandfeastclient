import React from "react";
import { RiCloseCircleFill } from 'react-icons/ri';


const Ingredient = ({prop, removeIngredient}) => {
  console.log(prop)
  return prop.length
    ? prop.map((ingredient, index) => <main key={index}>{ingredient}
     <section key={index} >
        <RiCloseCircleFill onClick={() =>removeIngredient(ingredient)}/>
      </section>
    </main>)
    : null;
  
};

export default Ingredient;
