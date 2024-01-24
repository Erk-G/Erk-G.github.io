import {useNavigate} from "react-router-dom";
const NavBar=()=>{
    const navigate=useNavigate();
    const btnClass="text-center bg-black-700 hover:bg-black-650 text-white font-bold py-5 px-10 rounded"
    const navTo=(destination)=>{
        navigate(`/${destination}`);
    }
    return(
        <div className="grid grid-cols-4 gap-2 py-10" style={{backgroundColor:"#203647"}}>
            <button className={btnClass} onClick={()=>navTo("")}>Home</button>
        </div>
    )
}

export default NavBar;