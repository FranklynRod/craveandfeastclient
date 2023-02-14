import './AddIngredient.css'
import React, {useState} from 'react'

const AddIngredient = (prop) => {
  const [input, setInput] = useState('')

  const handleSubmit = e =>{
    e.preventDefault();
    prop.onSubmit(input)
    setInput('');
  };
  
  return (

    <div id='ingredient-container'>
      <form class='add-ingredient-form' id='form'>
      <input 
      id='ingredient'
      className="ingredient-input"
      type='text'
      placeholder="Add Ingredient" 
      value={input} 
      name='text'
      onChange={e => setInput(e.target.value)}
      />
      
      <button className="ingredient-btn" onClick={handleSubmit}>Add Ingredient</button>
      
      </form>
    </div>
    
)}

export default AddIngredient
