import React from "react";
import './App.css';

import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Hero from "./components/Hero";
import Socials from "./components/Socials";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
    
      <Navbar />   

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Socials />  
    </>
  );
}

export default App;
