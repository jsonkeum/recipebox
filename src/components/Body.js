var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var defaultRecipes = require("../recipes.js");
let styles = require("../style.js");
import RecipeBox from "./RecipeBox.js";
import Add from "./Add.js";
import Sort from "./Sort.js";

export default class Body extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      recipes:[], 
    };
    this.sort = this.sort.bind(this);
    this.add = this.add.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
  }
  componentDidMount() {
    if(typeof(Storage) !== undefined){
      if(localStorage._quanchifootball_recipes){
       const saved = JSON.parse(localStorage._quanchifootball_recipes);
       this.setState({recipes:saved});
      } else {
        this.setState({recipes:defaultRecipes});
      }
    } else {
      this.setState({recipes:defaultRecipes});
    }
  }
  componentDidUpdate(prepProps, prevState){
    let recipes = this.state.recipes
    if(recipes !== prevState.recipes){
      localStorage._quanchifootball_recipes = JSON.stringify(recipes);
    }
  }
  add(recipe) {
    let recipes = this.state.recipes.slice();
    recipes.push(recipe);
    this.setState({recipes:recipes})
  }
  edit(recipe){
    let recipes = this.state.recipes.slice();
    for(let i = 0;i<recipes.length; i++){
      if(recipes[i].key == recipe.key){
        recipes[i] = recipe;
      }
    }
    this.setState({recipes:recipes});
  }
  sort() {
    let recipes = this.state.recipes.slice();
    recipes.sort(function(a, b){
      if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      return 0;
    });
    this.setState({recipes:recipes});
  }
  
  delete(key) {
    let recipes = this.state.recipes.slice();
    for(let i = 0; i < recipes.length; i++){
      if(recipes[i].key == key){
        recipes.splice(i,1);
      }
    }
    this.setState({recipes:recipes});
  }
  
  render() {
    return (
      <div className="container">
        <div className="row" style={{marginBottom:10}}>
            <div className="col-xs-12 col-sm-6 col-sm-offset-6 col-md-5 col-md-offset-7 col-lg-4 col-lg-offset-7">
                <h1 style={styles.titleStyle}>Recipe Box</h1>
            </div>
            <ButtonToolbar className="col-xs-12 col-sm-12 col-md-12" style={{marginLeft:0}}>
                <Add add={this.add} recipes={this.state.recipes}/>
                <Sort onClick={this.sort} />
            </ButtonToolbar>
        </div>
        <RecipeBox edit={this.edit} delete={this.delete} recipes={this.state.recipes}/>
      </div>
    )
  }
}