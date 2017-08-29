let { Modal, Button, FormControl, FormGroup, ControlLabel } = ReactBootstrap;
let styles = require("../style.js");

export default class Add extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal:false,
    }
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.createAndSendUp = this.createAndSendUp.bind(this);
  }
  close() {
    this.setState({ showModal: false });
  };
  open() {
    this.setState({ showModal: true });
  };
  createAndSendUp(){
    let name = document.getElementById("addTitle").value;
    let recipes = this.props.recipes;
    for(var i=0;i<recipes.length;i++){
      if(recipes[i].name == name){
        alert("Recipe already exists. Enter another name or edit the existing recipe.");
        return;
      }
    };
    let newRecipe = {
      name:name,
      key:"_qcfb_recipes_"+name,
      ingredients:document.getElementById("addIngredients").value,
      directions:document.getElementById("addDirections").value,
    };
    this.props.add(newRecipe);
    this.setState({ showModal: false });
  }
  render() {
    return (
      <div>
        <Button style={styles.btnStyle} onClick={this.open}>
          N E W
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <FormGroup controlId="addTitle">
                <ControlLabel>Recipe Name</ControlLabel>
                <FormControl type="text" placeholder="Enter a name for your new recipe." />
              </FormGroup>
              <FormGroup controlId="addIngredients">
                <ControlLabel>Ingredients</ControlLabel>
                <FormControl style={{height:100}} componentClass="textarea" placeholder="List ingredients for your recipe separated by a comma. E.g. Potatoes, ketchup, olive oil" />
              </FormGroup>
              <FormGroup controlId="addDirections">
                <ControlLabel>Directions</ControlLabel>
                <FormControl style={{height:150}} componentClass="textarea" placeholder="Enter step by step instructions for your new recipe separated by a '-' E.g. - Skin potatoes - heat up olive oil in skillet - bring water to a boil" />
              </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.createAndSendUp} style={{background:"#e60073", border:"none"}}>Add</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};