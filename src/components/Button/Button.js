import React from "react";
import "./Button.css";


function Button(props) {
    return <span onClick={props.onClick ? props.onClick : null} className="btn">{props.children}</span>;
}
export const ButtonExtra = (props) => {
    return <button onClick={props.onClick} className="btn-seconds">{props.children}</button>
}

export default Button;