import { useState,useEffect } from "react";

//The easiest way to lead all my review txts would be to put them in a database andd just call an api
//In the spirit of my old website I will not do that
const Review=()=>{
    const [reviews,setReviews]=useState([""]);
    useEffect(()=>{
        let allReviews=[];
        for(let i=1;i++;i<3){
            fetch(`/Reviews/test${i}.txt`).then(res=>res.text()).then(text=>allReviews.push(text));
        }
        setReviews(allReviews);
    },[])
    return(
        <div>
            <p>reviews</p>
        </div>
    )
}

export default Review;