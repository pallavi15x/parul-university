import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

// 1. IMPORT THE PAGES
import Home from './pages/Home';
import Events from './pages/Events';
import About from './pages/About'; // Make sure this line is here!

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-pu-dark text-white">
        
        {/* --- NAVBAR --- */}
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 backdrop-blur-xl bg-pu-dark/60 px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <Shield size={20} className="text-pu-gold" />
              <span className="font-black tracking-tighter text-xl uppercase italic">PU NEXUS</span>
            </Link>
            
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-400">
              <Link to="/" className="hover:text-pu-gold transition">Home</Link>
              <Link to="/events" className="hover:text-pu-gold transition">Events</Link>
              {/* 2. ADD THE LINK HERE */}
              <Link to="/about" className="hover:text-pu-gold transition text-white">About PU</Link>
            </div>
            <button className="bg-white/10 px-4 py-2 rounded-full text-[10px] font-bold uppercase">Portal</button>
          </div>
        </nav>

        {/* --- ROUTES --- */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          {/* 3. DEFINE THE ROUTE HERE */}
          <Route path="/about" element={<About />} />
        </Routes>

      </div>
    </Router>
  );
}