import mathGen from "./helper/mathGen";
import { useState } from "react";

const MathPrac=()=>{
    const [mathProblem,setMathProblem]=useState("");
    const [mathAnswer, setMathAnswer] = useState(0);
    const subjects=["Negative Addition"];
    const btnClass="bg-gray-700 hover:bg-gray-600 text-white font-bold h-min w-full py-2 rounded"
    const createButton=(subject,idx)=>{
        const newMathProblem=mathGen(subject);
        setMathAnswer(newMathProblem[1])
        return(
        <button id={idx} onClick={()=>setMathProblem(newMathProblem[0])} className={btnClass}>{subject}</button>
        )
    }
    return(
        <div className="flex min-h-screen bg-[#12152E] text-white">
            <div className="w-1/5 text-center flex flex-col gap-y-4 bg-[#203647]">
                {subjects.map((subject,idx)=>createButton(subject,idx))}
            </div>
            <div className="w-4/5">
                {mathProblem}
                {mathAnswer}
            </div>
        </div>
    )
}

export default MathPrac;