import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Campus from './pages/Campus'; // 1. Import your new Map page

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/campus" element={<Campus />} /> {/* 2. Add the Route */}
      </Routes>
    </Router>
  );
}

export default App;