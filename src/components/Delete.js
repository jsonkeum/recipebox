let Button = ReactBootstrap.Button;

export default class Delete extends React.Component {
  constructor(props){
    super(props);
    this.deleteConfirm = this.deleteConfirm.bind(this);
  }
  deleteConfirm(){
    var yes = confirm("Are you sure you want to delete your " + this.props.recipe.name + " recipe?");
	if(yes){
      this.props.delete(this.props.recipe.key);
    }
  }
  render() {
    return (
      <Button
          bsStyle="primary"
          bsSize="medium"
          onClick={this.deleteConfirm}
          style={{background:"#e60073", border:"none"}}
        >
          Delete
        </Button>
    );
  }
}
