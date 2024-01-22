import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import Home from "./Home";

function App() {
  return (
    <div >
      <HashRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
