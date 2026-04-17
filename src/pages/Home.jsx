import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Users, Shield, Bell, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-pu-dark">
      {/* 1. LIVE NEWS TICKER */}
      <div className="bg-pu-gold text-black py-2 overflow-hidden whitespace-nowrap border-y border-black/10">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-10 font-black uppercase text-[10px] tracking-widest"
        >
          <span>• Admissions Open for 2026-27</span>
          <span>• Projections '26 Registrations Live</span>
          <span>• NAAC A++ Accredited University</span>
          <span>• Ranked Top 50 in India</span>
          <span>• New Research Grant of 5Cr Awarded</span>
        </motion.div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="px-6 py-24 text-center relative">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          className="text-7xl md:text-9xl font-black tracking-tighter mb-6"
        >
          PARUL <span className="text-pu-gold">UNIVERSITY</span>
        </motion.h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Transforming dreams into reality through world-class education and innovation.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/events" className="bg-pu-gold text-black px-8 py-4 rounded-xl font-bold uppercase text-xs flex items-center gap-2">
            Campus Life <ArrowRight size={16}/>
          </Link>
          <button className="border border-white/10 px-8 py-4 rounded-xl font-bold uppercase text-xs">Apply Now</button>
        </div>
      </section>

      {/* 3. CAMPUS STATS */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
        <StatCard val="45K+" label="Students" />
        <StatCard val="35+" label="Institutes" />
        <StatCard val="2500+" label="Placements" />
        <StatCard val="75+" label="Nations" />
      </section>
    </div>
  );
}

function StatCard({ val, label }) {
  return (
    <div className="bg-pu-gray p-6 rounded-2xl border border-white/5 text-center">
      <h3 className="text-3xl font-black text-pu-gold tracking-tighter">{val}</h3>
      <p className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">{label}</p>
    </div>
  );
}