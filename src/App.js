import { HashRouter, Routes, Route } from 'react-router-dom';
import React,{ useEffect,useRef }  from "react";
import Phaser, {Game} from "phaser";
import NavBar from "./NavBar";
import Home from "./Home";
import Review from "./review";
import MathPrac from './MathPrac';
import Games from "./Games";

function App() {
  const usePhaserGame=(config)=>{
    const phaserGameRef = useRef(null);
    useEffect(() => {
      if (phaserGameRef.current) {
        return;
      }
      phaserGameRef.current = new Game(config);
      return () => {
        phaserGameRef.current.destroy(true);
        phaserGameRef.current = null;
      };
    }, []);
    return phaserGameRef.current;
  }
  return (
    <div >
      <HashRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/reviews" element={<Review/>}/>
        <Route path="/math" element={<MathPrac/>}/>
        <Route path="/games" element={<Games usePhaserGame={usePhaserGame}/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
