import {NavLink} from "react-router-dom";
const NavBar=()=>{
    return(
        <div className="text-center min-h-20 text-white" style={{backgroundColor:"#203647"}}>
            <NavLink to="/">Home</NavLink>
        </div>
    )
}

export default NavBar;