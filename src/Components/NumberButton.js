import colors from "../Helpers/constants";

const NumberButton = (props) => {
    return ( 
        <button 
            className = "number"
            style = {{backgroundColor: colors[props.status]}}
            onClick = {() => props.onClick(props.numberbtn, props.status)}
        >
            {props.numberbtn}
        </button>
     );
}
 
export default NumberButton;