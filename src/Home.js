import React,{ useEffect,useState } from "react";
const Home=()=>{
    const clock=()=>{
        return new Date().toLocaleTimeString();
    }
    const [currTime,setTime]=useState(clock());
    useEffect(()=>{
        const Timer=setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },60*1000); return()=>{
            clearInterval(Timer);
        }
    },[]);
    return(
        <div className="text-center min-h-screen bg-[#12152E] text-white">
            <p>{currTime}</p>
        </div>
    )
}

export default Home;