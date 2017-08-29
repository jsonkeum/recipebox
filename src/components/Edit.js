let { Modal, Button, FormControl, FormGroup, ControlLabel } = ReactBootstrap;

export default class Edit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal:false,
    }
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.editAndSendUp = this.editAndSendUp.bind(this);
  }
  close() {
    this.setState({ showModal: false });
  };
  open() {
    this.setState({ showModal: true });
  };
  editAndSendUp(){
    let name = document.getElementById("editTitle").value;
    let key = this.props.recipe.key;
    let recipes = this.props.recipes;
    for(var i=0;i<recipes.length;i++){
      if(recipes[i].name == name && recipes[i].key != key){
        alert("Recipe name already exists. Enter another name.");
        return;
      }
    };
    let newRecipe = {
      name:name,
      key:key,
      ingredients:document.getElementById("editIngredients").value,
      directions:document.getElementById("editDirections").value,
    };
    this.props.edit(newRecipe);
    this.setState({ showModal: false });
  }
  
  render() {
    return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="medium"
          onClick={this.open}
          style={{background:"#e60073", border:"none"}}
        >
          Edit
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Edit this Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <FormGroup controlId="editTitle">
                <ControlLabel>Recipe Name</ControlLabel>
                <FormControl type="text" defaultValue={this.props.recipe.name}/>
              </FormGroup>
              <FormGroup controlId="editIngredients">
                <ControlLabel>Ingredients</ControlLabel>
                <FormControl style={{height:100}} defaultValue={this.props.recipe.ingredients} componentClass="textarea"/>
              </FormGroup>
              <FormGroup controlId="editDirections">
                <ControlLabel>Directions</ControlLabel>
                <FormControl style={{height:150}} defaultValue={this.props.recipe.directions} componentClass="textarea"/>
              </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.editAndSendUp} bsStyle="primary" style={{background:"#e60073", border:"none"}}>Save</Button>
            <Button onClick={this.close}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}