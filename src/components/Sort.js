let Button = ReactBootstrap.Button;
let styles = require("../style.js");

const Sort = (props) => {
    return (
        <Button style={styles.btnStyle} onClick={props.onClick}>SORT</Button>
    );
}

export default Sort;