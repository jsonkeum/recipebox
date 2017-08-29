var { ButtonToolbar, Accordion, Panel, } = ReactBootstrap;
import Edit from "./Edit.js";
import Delete from "./Delete.js";
import Ingredients from "./Ingredients.js";
import Directions from "./Directions.js";

const RecipeBox = (props) => {
    const recipes = props.recipes;
    const recipeCards = recipes.map((recipe) => 
      <Panel header={<i className="fa fa-sticky-note-o" aria-hidden="true"><span style={{fontFamily:'Quicksand',marginLeft:10,fontWeight:600}}> {recipe.name}</span></i>} eventKey={recipe.name} bsStyle="warning">
        <h3>{recipe.name}</h3>
        <h4>Ingredients</h4>
        <Ingredients ingredients={recipe.ingredients}/>
        <h4>Directions</h4>
        <Directions directions={recipe.directions}/>
        <ButtonToolbar style={{width:120,float:"right"}}>
          <Edit edit={props.edit} recipe={recipe} recipes={props.recipes}/>
          <Delete recipe={recipe} delete={props.delete}/>
        </ButtonToolbar>
      </Panel>                             
    );
    return (
      <Accordion>
        {recipeCards}
      </Accordion>
    );
}
export default RecipeBox;