import mathGen from "./helper/mathGen";
import { useState } from "react";

const MathPrac=()=>{
    const [mathProblem,setMathProblem]=useState(["",0]);
    const subjects=["Negative Addition"];
    const btnClass="bg-gray-700 hover:bg-gray-600 text-white font-bold h-min w-full py-2 rounded";
    const createButton=(subject,idx)=>{
        const newMathProblem=mathGen(subject);
        console.log(newMathProblem);
        return(
        <button id={idx} onClick={()=>setMathProblem([newMathProblem[0],newMathProblem[1]])} className={btnClass}>{subject}</button>
        )
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(e.target.answer.value===`${mathProblem[1]}`){
            alert("Correct!");
        }
        else{
            alert(`Incorrect. Answer is ${mathProblem[1]}`);
        }

    }
    console.log(mathProblem);
    return(
        <div className="flex min-h-screen bg-[#12152E] text-white">
            <div className="w-1/5 text-center flex flex-col gap-y-4 bg-[#203647]">
                {subjects.map((subject,idx)=>createButton(subject,idx))}
            </div>
            <div className="w-4/5">
                <form onSubmit={handleSubmit}>
                    <h1>Question: {mathProblem[0]}</h1>
                    
                    <p>Answer:</p>
                    <input id="answer" name="answer" autoComplete="off" className="bg-grey-900 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"/>

                <button className="bg-[#203647]">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default MathPrac;