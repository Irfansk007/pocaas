import React from "react";
import { Link } from "react-router-dom";
import './Button1.css';

const Button1 = (props) =>{
    
    const Classes = 'button31' 
    return(<div>
    <Link to={`${props.url}`}>
        <button className={Classes}>{props.buttonname}</button></Link>
    </div>);

}
export default Button1;