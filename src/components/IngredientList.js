import React,{useState} from 'react'
import AddIngredient from './AddIngredient'
import Ingredient from './Ingredient';


const IngredientList = () =>  {
  const [ingredients, setIngredients] = useState([]);

  const addNewIngredient = ingredient =>{
  
    setIngredients([ingredient,...ingredients])
  }
  return (
    <div>
      <AddIngredient onSubmit={addNewIngredient}/>
      <Ingredient prop={ingredients}/>
      <button>Search</button>
    </div>
  )
}

export default IngredientList