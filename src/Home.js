import React,{ useEffect,useState } from "react";
const Home=()=>{
    const clock=()=>{
        let date=new Date();
        return date.toLocaleTimeString().replace(/(^[^:]+:[^:]+).*([A-Z][A-Z])$/,"$1$2")
    }
    const [currTime,setTime]=useState(clock());
    useEffect(()=>{
        const Timer=setInterval(()=>{
            let date=new Date();
            setTime(date.toLocaleTimeString().replace(/(^[^:]+:[^:]+).*([A-Z][A-Z])$/,"$1$2"));
        },60*1000); return()=>{
            clearInterval(Timer);
        }
    },[]);
    return(
        <div className="grid grid-rows-1 min-h-screen bg-[#12152E]">
            <div className="flex flex-row">
                <div className="basis-1/3 text-white">
                    <h1>About Me:</h1>
                    <p>Hobbiest Programmer who really likes games</p>
                </div>
                <div className="basis-2/3 gap-y-4 font-orbitron text-green-400">
                    <h1 className="text-2xl">Currently Playing:</h1>
                    <div className="flex">
                        <div className="w-1/2">
                            <h2>Dragon's Dogma 2</h2>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Dragon%27s_Dogma_2_cover_art.jpg/220px-Dragon%27s_Dogma_2_cover_art.jpg" alt="Dragons Dogma Box Art from Wikipedia"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center font-orbitron bg-[#12152E] text-red-400 text-4xl">
                <p>{currTime}</p>
            </div>
        </div>
    )
}

export default Home;