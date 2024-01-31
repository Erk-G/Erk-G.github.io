import { useState,useEffect } from "react";

//The easiest way to lead all my review txts would be to put them in a database andd just call an api
//In the spirit of my old website I will not do that
//Current plan, load all txts to "reviews". Have an array of buttons which will change "currentReview" to the buttons chosen review
const Review=()=>{
    const [Reviews,setReviews]=useState([""]);
    const [reviewButton,setReviewButtons]=useState([]);
    const [currentReview,setCurrentReview]=useState([""]);
    useEffect(()=>{
        let allReviews=[];
        let reviewButtons=[];
        for(let i=1;i<3;i++){
            fetch(`/Reviews/test${i}.txt`).then(res=>res.text()).then(text=>{
                allReviews.push(text);
                setReviews(allReviews);
                reviewButtons.push(<button onClick={()=>setCurrentReview(Reviews[0])}>file {i}</button>);
                setReviewButtons(reviewButtons);;
            });
        }
    },[]);
    console.log(reviewButton);
    return(
        <div className="text-center min-h-screen bg-[#12152E] text-white">
            <div>
                {reviewButton}
            </div>
            <div>
                {currentReview}
            </div>
        </div>
    )
}

export default Review;