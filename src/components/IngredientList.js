import React,{useState} from 'react'
import AddIngredient from './AddIngredient'
import Ingredient from './Ingredient';


const IngredientList = (prop) =>  {
  const [ingredients, setIngredients] = useState([]);
  const addNewIngredient = ingredient =>{
  
    setIngredients([ingredient,...ingredients])
  }

  const getRecipes = () => {
    fetch(`http://127.0.0.1:5000/api/recipes/v2?q=${ingredients}`)
      .then(resp => resp.json())
      .then(function(data) {
        prop.setRecipes(data)
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  return (
    <div>
      <AddIngredient onSubmit={addNewIngredient}/>
      <Ingredient prop={ingredients}/>
      <button onClick={getRecipes}>Search</button>
    </div>
  )
}

export default IngredientList