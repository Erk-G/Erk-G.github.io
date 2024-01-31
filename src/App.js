import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import Home from "./Home";
import Review from "./review";

function App() {
  return (
    <div >
      <HashRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Review/>}/>
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
