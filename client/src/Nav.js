import Manage from "./Manage";
import Create from "./Create";
import View from "./View";
import { NavLink } from "react-router-dom"

function Nav() {
    return(
        <>
        <div className="top"></div>
        <div className="navbar">
            <NavLink exact to="/">View</NavLink>
            <NavLink to="/create">Create</NavLink>
            <NavLink to="/manage">Manage</NavLink>
        </div>
        </>
)}

export default Nav;
