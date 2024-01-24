import {NavLink} from "react-router-dom";
const NavBar=()=>{
    return(
        <div className="text-center min-h-20 bg-[#203647] text-black">
            <NavLink to="/">Home</NavLink>
        </div>
    )
}

export default NavBar;