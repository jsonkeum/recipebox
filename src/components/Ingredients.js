const Ingredients =(props)=> {
  let ingredients = props.ingredients.split(", ");
  let ingredientList = ingredients.map((ingredient) =>                              
    ingredient.length > 0 ? <li style={{listStyleType:"none"}}><input type="checkbox" style={{marginRight:10}}/>{ingredient.trim()}</li> : null
  );
  return (
    <div className="container-fluid"><ul style={{marginLeft:-30}}>{ingredientList}</ul></div>
  )
}

export default Ingredients;