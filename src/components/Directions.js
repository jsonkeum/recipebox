const Directions =(props)=> {
  let directions = props.directions.split("- ");
  let directionList = directions.map((direction) =>
    direction.length > 0 ? <li>{direction.trim()}</li> : null
  );
  return (
    <div className="container-fluid"><ol style={{marginLeft:-20}}>{directionList}</ol></div>
  )
}
export default Directions;