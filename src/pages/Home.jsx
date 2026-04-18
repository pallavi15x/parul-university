import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Laptop, Activity, Building2, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-pu-dark pb-20 selection:bg-pu-gold selection:text-black">
      
      {/* 1. NEWS TICKER */}
      <div className="bg-pu-gold text-black py-2 overflow-hidden whitespace-nowrap border-y border-black/10 mt-16 md:mt-24">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-12 font-black uppercase text-[10px] tracking-widest"
        >
          <span>• Admissions Open 2026-27</span>
          <span>• NAAC A++ Accredited</span>
          <span>• 2500+ Placements Secured</span>
          <span>• Ranked Top 50 Universities in India</span>
        </motion.div>
      </div>

      {/* 2. HERO SECTION WITH MAXIMUM CLARITY */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://assets.collegedunia.com/public/college_data/images/appImage/1599193361PuCampus.jpg" 
            alt="Parul University Gate"
            className="w-full h-full object-cover object-center"
          />
          {/* Transparency stays clear until 98% depth to show the gate floor */}
          <div className="absolute inset-0 bg-gradient-to-b from-pu-dark/30 via-transparent via-[98%] to-pu-dark" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="backdrop-blur-md bg-pu-gold/20 border border-pu-gold/30 text-pu-gold px-6 py-2 rounded-full font-black uppercase text-[10px] tracking-[0.3em] mb-8 inline-block shadow-xl">
              Vadodara, Gujarat
            </span>
            
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-6 uppercase leading-none [text-shadow:_0_4px_12px_rgba(0,0,0,0.6)]">
              THE HEART OF <br /> <span className="text-pu-gold italic [text-shadow:none]">LEARNING</span>
            </h1>
            
            <p className="text-white max-w-2xl mx-auto mb-10 text-lg md:text-xl font-bold [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]">
              Step through the gates of India's most vibrant campus.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-pu-gold text-black px-12 py-5 rounded-2xl font-black uppercase text-xs hover:shadow-2xl transition-all">
                Apply Now 2026
              </button>
              <Link to="/about" className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-12 py-5 rounded-2xl font-black uppercase text-xs hover:bg-white/20 transition-all">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Change -mt-16 to mt-10 to clear the gate floor */}
<section className="max-w-7xl mx-auto px-6 mt-10 relative z-20 grid grid-cols-2 md:grid-cols-4 gap-4">
  <StatItem val="45k+" label="Students" />
  <StatItem val="NAAC A++" label="Grade" />
  <StatItem val="150+" label="Acres" />
  <StatItem val="75+" label="Nations" />
</section>

      {/* 4. DEPARTMENTS GRID */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black tracking-tighter uppercase mb-12 italic text-white">Academic <span className="text-pu-gold">Faculties</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DeptCard icon={<Laptop />} name="Engineering" />
          <DeptCard icon={<Activity />} name="Medical" />
          <DeptCard icon={<Building2 />} name="Architecture" />
          <DeptCard icon={<Briefcase />} name="Management" />
          <DeptCard icon={<GraduationCap />} name="Applied Sciences" />
          <div className="bg-pu-gold p-8 rounded-[2.5rem] flex items-center justify-between group cursor-pointer shadow-lg hover:bg-pu-gold/90 transition-all">
            <span className="text-black font-black text-xl">450+ COURSES</span>
            <ArrowRight className="text-black group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </section>
    </div>
  );
}

function StatItem({ val, label }) {
  return (
    <div className="bg-pu-gray/90 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-center shadow-2xl">
      <h3 className="text-3xl font-black text-pu-gold mb-1">{val}</h3>
      <p className="text-[9px] font-black uppercase text-gray-400 tracking-widest">{label}</p>
    </div>
  );
}

function DeptCard({ icon, name }) {
  return (
    <div className="bg-pu-gray/40 p-10 rounded-[2.5rem] border border-white/5 hover:border-pu-gold/30 transition-all group">
      <div className="text-pu-gold mb-6 group-hover:scale-110 transition-transform">{React.cloneElement(icon, { size: 32 })}</div>
      <h3 className="text-xl font-bold uppercase italic text-white">{name}</h3>
    </div>
  );
}