import { useEffect,useState } from "react";
const Home=()=>{
    const clock=()=>{
        return new Date().toLocaleTimeString();
    }
    const [currTime,setTime]=useEffect(clock());
    useEffect(()=>{
        const Timer=setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },60*1000); return()=>{
            clearInterval(Timer);
        }
    },[]);
    return(
        <div>
            <p>{currTime}</p>
        </div>
    )
}

export default Home;