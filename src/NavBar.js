import {useNavigate} from "react-router-dom";
const NavBar=()=>{
    const navigate=useNavigate();
    const btnClass="text-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-1 rounded"
    const navTo=(destination)=>{
        navigate(`${destination}`);
    }
    return(
        <div className="grid grid-cols-4 gap-2 bg-[#203647]">
            <button className={btnClass} onClick={()=>navTo("/")}>Home</button>
            <button className={btnClass} onClick={()=>navTo("/reviews")}>Reviews</button>
            <button className={btnClass} onClick={()=>navTo("/math")}>Math Problems</button>
            <button className={btnClass} onClick={()=>navTo("/games")}>Games</button>
        </div>
    )
}

export default NavBar;