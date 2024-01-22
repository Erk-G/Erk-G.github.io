import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <div >
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
