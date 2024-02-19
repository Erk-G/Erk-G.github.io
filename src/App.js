import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import Home from "./Home";
import Review from "./review";
import MathPrac from './MathPrac';

function App() {
  return (
    <div >
      <HashRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/reviews" element={<Review/>}/>
        <Route path="/math" element={<MathPrac/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
