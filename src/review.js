import { useState,useEffect } from "react";

//The easiest way to lead all my review txts would be to put them in a database andd just call an api
//In the spirit of my old website I will not do that
//Current plan, load all txts to "reviews". Have an array of buttons which will change "currentReview" to the buttons chosen review
const Review=()=>{
    const [Reviews,setReviews]=useState([["",""]]);
    const [currentReview,setCurrentReview]=useState([""]);
    const btnClass="bg-gray-700 hover:bg-gray-600 text-white font-bold h-min w-full py-2 rounded"
    useEffect(()=>{
        let allReviews=[];
        for(let i=1;i<3;i++){
            fetch(`/Reviews/test${i}.txt`).then(res=>res.text()).then(text=>{
                allReviews.push([text.match(/.+?(?=-)/),text.match(/\n.+?$/gm)]);
                setReviews(allReviews);
            });
        }
    },[]);
    
    const createButton=(text,idx)=>{
        return(
            <button id={idx} onClick={()=>setCurrentReview(text[1])} className={btnClass}>{text[0]} </button>
        )
    }
    console.log(Reviews);
    return(
        <div className="flex min-h-screen bg-[#12152E] text-white">
            <div className="w-1/5 text-center flex flex-col gap-y-4 bg-[#203647]">
                {Reviews.map((text,idx)=>createButton(text,idx))}
            </div>
            <div className="w-4/5">
                {currentReview}
            </div>
        </div>
    )
}

export default Review;