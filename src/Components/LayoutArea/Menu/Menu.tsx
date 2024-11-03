import { NavLink } from "react-router-dom";
import "./Menu.css";
import imgBack from "../../../Assets/Images/HeaderBackground.jpeg"


export function Menu(): JSX.Element {

    return (
        <div className="Menu">
            <NavLink className="NavLink" to="/home">Home</NavLink>
            <NavLink className="NavLink" to="/about">About this site</NavLink>
            <img src={imgBack}/>
        </div>
    );
}
