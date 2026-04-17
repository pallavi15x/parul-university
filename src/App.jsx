import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { 
  Shield, 
  Globe, 
  Mail, 
  Phone, 
  Menu, 
  ArrowRight, 
  LayoutDashboard, 
  Info, 
  CalendarDays 
} from 'lucide-react';

// Import our pages
import Home from './pages/Home';
import Events from './pages/Events';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-pu-dark text-white selection:bg-pu-gold selection:text-black">
        
        {/* --- 1. TOP HELPLINE BAR --- */}
        <div className="fixed top-0 w-full z-[60] bg-pu-gold text-black py-1.5 px-8 hidden md:flex justify-between items-center border-b border-black/10">
          <p className="text-[9px] font-black uppercase tracking-[0.2em]">
            Official Admission Helpline: +91 2668 260312 | admissions@paruluniversity.ac.in
          </p>
          <div className="flex gap-4 items-center">
            <span className="text-[9px] font-bold uppercase">NIRF Ranked Top 50</span>
            <div className="h-3 w-px bg-black/20"></div>
            <span className="text-[9px] font-bold uppercase tracking-tighter italic underline cursor-pointer">Download Brochure</span>
          </div>
        </div>

        {/* --- 2. MAIN NAVIGATION --- */}
        <nav className="fixed top-0 md:top-7 w-full z-50 border-b border-white/5 backdrop-blur-xl bg-pu-dark/60 px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-pu-gold p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
                <Shield size={22} className="text-black" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black tracking-tighter text-xl uppercase italic">PU <span className="text-pu-gold">NEXUS</span></span>
                <span className="text-[7px] font-bold tracking-[0.4em] text-gray-500 uppercase">Innovation Hub</span>
              </div>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
              <Link to="/" className="hover:text-pu-gold transition flex items-center gap-2">
                <LayoutDashboard size={14} /> Home
              </Link>
              <Link to="/events" className="hover:text-pu-gold transition flex items-center gap-2">
                <CalendarDays size={14} /> Events
              </Link>
              <Link to="/about" className="hover:text-pu-gold transition flex items-center gap-2 text-white">
                <Info size={14} /> About PU
              </Link>
            </div>

            {/* CTA Button */}
            <button className="bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-black uppercase hover:bg-pu-gold transition shadow-lg shadow-white/5">
              Student Portal
            </button>
          </div>
        </nav>

        {/* --- 3. PAGE CONTENT --- */}
        <main className="min-h-screen pt-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* --- 4. GLOBAL FOOTER --- */}
        <footer className="bg-pu-gray border-t border-white/5 py-20 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Shield size={24} className="text-pu-gold" />
                <span className="font-black tracking-tighter text-2xl uppercase italic">PARUL UNIVERSITY</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-8">
                Recognized as India's best private university, offering a holistic learning 
                environment with a global perspective and industry-integrated education.
              </p>
              <div className="flex gap-4">
                <div className="p-3 bg-white/5 rounded-full hover:bg-pu-gold hover:text-black transition cursor-pointer"><Mail size={18}/></div>
                <div className="p-3 bg-white/5 rounded-full hover:bg-pu-gold hover:text-black transition cursor-pointer"><Phone size={18}/></div>
                <div className="p-3 bg-white/5 rounded-full hover:bg-pu-gold hover:text-black transition cursor-pointer"><Globe size={18}/></div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-black uppercase text-[10px] tracking-[0.3em] mb-8">Campus Links</h4>
              <ul className="flex flex-col gap-4 text-gray-500 text-xs font-bold uppercase">
                <li><Link to="/" className="hover:text-pu-gold transition">Administration</Link></li>
                <li><Link to="/events" className="hover:text-pu-gold transition">Technical Fests</Link></li>
                <li><Link to="/about" className="hover:text-pu-gold transition">Research Cell</Link></li>
                <li><a href="#" className="hover:text-pu-gold transition">Placement Cell</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black uppercase text-[10px] tracking-[0.3em] mb-8">Contact Central</h4>
              <p className="text-gray-500 text-xs leading-loose italic">
                P.O. Limda, Ta. Waghodia,<br/>
                Dist. Vadodara - 391760,<br/>
                Gujarat, India.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">
              © 2026 Parul University • Designed for PU Nexus Innovation
            </p>
            <div className="flex gap-8 text-[9px] font-black uppercase text-gray-600">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
            </div>
          </div>
        </footer>

      </div>
    </Router>
  );
}