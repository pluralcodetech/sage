import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/molecules/Navbar";
import Home from "./components/pages/Home";
import MiniMBA from "./components/pages/MiniMBA";
import Courses from "./components/pages/Courses";
import EachCourse from "./components/pages/EachCourse";


function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="minimba" element={<MiniMBA />} />
        <Route path="courses" element={<Courses />} />
        <Route path="eachcourse" element={<EachCourse />} />
        <Route path="*" element={<h1 className="p-5">Page not found!</h1>}/>
      </Routes> 
    </div>
  );
}

export default App;
