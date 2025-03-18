import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from './components/Projects/Projects';
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className=" min-h-screen text-white">
        <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home/>} />

          <Route path="/projects" element={<Projects/>} />
          <Route path="/about" element={<Skills />} />
        </Routes>
       
      </div>
    </Router>
     
  );
}

export default App;